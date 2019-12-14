import { Component, OnInit, Input, HostListener, OnDestroy } from '@angular/core';
import { UserServicesService } from './../../services/user-services/user-services.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from './../../services/firebase-services/firebase.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit, OnDestroy {

  @Input() ROLE;
  @Input() data;

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    this.firebaseService.setOffline(this.username);
  }
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    this.firebaseService.setOffline(this.username);
  }
  private messagesURL: string = "";

  private profileURL: string = "";

  private newNotificationCollection: AngularFirestoreCollection<any[]>;
  private newNotification: Observable<any[]>;

  private allNotificationCollection: AngularFirestoreCollection<any[]>;
  private allNotification: Observable<any[]>;

  private number_new_notification;
  private total_new_notification: any;
  private total_notification: any;

  private total_new_messages: any;
  private ROLE2;
  private username;
  private nameAndAvatar;

  constructor(
    private userServicesService: UserServicesService,
    private afs: AngularFirestore,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('token')).username;
    this.username = JSON.parse(localStorage.getItem('token')).username;
    this.firebaseService.getUserFirebaseUpdate(this.username).subscribe(data => {
      console.log(data);
      this.nameAndAvatar = data;
    })
    this.firebaseService.setOnline(this.username);
    this.ROLE2 = JSON.parse(localStorage.getItem('token')).role[0].authority;
    switch (this.ROLE) {
      case "DOCTOR":
        this.messagesURL = "/doctor/messages"
        this.profileURL = "/doctor/profile"
        break;
      case "PATIENT":
        this.messagesURL = "/patient/messages"
        this.profileURL = "/patient/profile"
        break;
      default:
        break;
    }
    // console.log(this.data.avatar+this.data.username);
    this.getNewNotificationData(this.username);
    this.newNotification.subscribe(data => {
      console.log(data);
      this.total_new_notification = data;
      this.number_new_notification = data.length;
    })
    this.getAllNotification(this.username);
    this.allNotification.subscribe(data => {
      this.total_notification = data
      console.log(data);
    })
    this.getNewMessage();
  }

  ngOnDestroy() {
    this.firebaseService.setOffline(this.username);
  }
  public logout() {
    //this.firebaseService.setOffline(this.username);
    this.userServicesService.logout();
  }

  public getNewNotificationData(username) {

    this.newNotificationCollection = this.afs.collection('notifications/' + username + "/" + username, ref => ref.where('is_read', '==', false));
    this.newNotification = this.newNotificationCollection.snapshotChanges();
  }

  public getAllNotification(username) {
    this.allNotificationCollection = this.afs.collection('notifications/' + username + "/" + username, ref => ref.orderBy("create_at", "desc"));
    this.allNotification = this.allNotificationCollection.snapshotChanges();
  }

  public setAllAsRead() {
    this.total_new_notification.forEach(element => {
      this.setRead(element, this.username);
    });
  }

  public setRead(notif, username) {
    return this.afs.collection('notifications/' + username + "/" + username)
      .doc(notif.payload.doc.id).update({ is_read: true });
  }

  public getNewMessage() {
    this.firebaseService.getNewMessage(this.ROLE2, this.data.username).valueChanges().subscribe(data => {
      console.log(data.length);
      this.total_new_messages = data.length;
    })
  }

  public moveToDetail(notif) {
    if(notif.payload.doc.data().id_appointment==-1){
      this.setRead(notif, this.username)
    }
    else if (this.ROLE2 == "ROLE_PATIENT") {
      this.router.navigateByUrl("/patient/appointments/detail/" + notif.payload.doc.data().id_appointment)
      this.setRead(notif, this.username)
    } else if (this.ROLE2 == "ROLE_DOCTOR") {
      this.router.navigateByUrl("/doctor/appointments/detail/" + notif.payload.doc.data().id_appointment)
      this.setRead(notif, this.username)
    }
  }
}
