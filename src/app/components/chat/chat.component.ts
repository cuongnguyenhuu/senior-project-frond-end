import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, OnDestroy, AfterContentInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase-services/firebase.service';
import { Observable, Subscription } from 'rxjs';
import { ListMessages } from 'src/app/models/listMessages';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';
import { async } from '@angular/core/testing';
import { ImageServicesService } from 'src/app/services/image-servives/image-services.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('scrollMe', null) private myScrollContainer: ElementRef;

  private ROLE;
  private currentMember;
  private listChats: ListMessages[] = [];
  private chatBox: any;
  private indexSelectedChat: number;
  private text_message = '';
  private isLoadingList:boolean = true;
  private isLoadingMessages:boolean;
  private message;
  private link_image='';
  private allChatsSubscription: Subscription = new Subscription();
  constructor(
    private firebaseService: FirebaseService,
    private imageServices: ImageServicesService
  ) { }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnInit() {
    this.ROLE = JSON.parse(localStorage.getItem('token')).role[0].authority;
    this.currentMember = JSON.parse(localStorage.getItem('token')).username;
    this.allChatsSubscription = this.firebaseService.getAllChatsByUsername(this.currentMember).snapshotChanges().subscribe(data => {
      var temp: ListMessages[] = [];
      if (data != null) {
        data.forEach(async (chat) => {

          // console.log(chat.payload.doc.data())
          // if((chat.payload.doc.data() as any).s!=null)
          // (chat.payload.doc.data() as any).s.get().then(res=>{
          //   console.log(res.data())
          // })
          if (this.ROLE == "ROLE_PATIENT") {
            console.log((chat.payload.doc.data() as any))
            await this.firebaseService.getUserFirebase((chat.payload.doc.data() as any).member2.username).toPromise().then(data => {
              console.log(data.data());
              if (data != null)
                temp[temp.length] =
                  new ListMessages(chat.payload.doc.id, data.data().username, data.data().avatar,
                    data.data().name, "", (chat.payload.doc.data() as any).member1.is_read,
                    (chat.payload.doc.data() as any).member2.is_typing,data.data().status);
            })

          }
          if (this.ROLE == "ROLE_DOCTOR") {
            await this.firebaseService.getUserFirebase((chat.payload.doc.data() as any).member1.username).toPromise().then(data => {
              console.log(data.data());
              if (data != null)
                temp[temp.length] =
                  new ListMessages(chat.payload.doc.id, data.data().username, data.data().avatar,
                    data.data().name, "", (chat.payload.doc.data() as any).member2.is_read,
                    (chat.payload.doc.data() as any).member1.is_typing,data.data().status);
            })

          }
          console.log(chat.payload.doc.data())
          if (temp.length == data.length) {
            this.isLoadingList = false;
            this.listChats = [...temp];
            if (this.listChats.length > 0 && this.indexSelectedChat == null){
              this.pickChat(0)
              this.updateStatusUser();
            }
            
          }
        })
        if(data.length == 0){
          this.isLoadingList = false;
          this.listChats = [];
          this.message = "No message!"
        }
        console.log("AAA" + temp.length)
      }
      // if(this.listChats.length>0)
      // this.pickChat(this.listChats[0])

    })
  }

  public updateStatusUser(){
    this.listChats.forEach(element => {
      this.firebaseService.getUserFirebaseUpdate(element.$username).subscribe(data=>{
        console.log(data);
        element.$isOnline = data.status
      })
    });
  }
  ngOnDestroy() {
    this.allChatsSubscription.unsubscribe();
  }
  public pickChat(index) {
    this.isLoadingMessages = true;
    this.indexSelectedChat = index;
    this.firebaseService.setRead(this.listChats[this.indexSelectedChat].$id, this.ROLE);
    console.log("may lan");
    this.firebaseService.getDetailChatsByUsername(this.listChats[this.indexSelectedChat].$id).valueChanges().subscribe(data => {
      console.log(data);
      this.isLoadingMessages=false;
      this.chatBox = data;
    })
  }

  uploadImage(file){
    this.imageServices.uploadImage(file).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.link_image = data.image;
      }
    }, error => {
      console.log(error);
    })
  }

  removeImage(){
    this.link_image = '';
  }

  public sendMessage() {
    var chat;
    if (this.ROLE == 'ROLE_PATIENT')
      chat = new Chat(this.currentMember, this.listChats[this.indexSelectedChat].$username)
    else
      chat = new Chat(this.listChats[this.indexSelectedChat].$username, this.currentMember)
    var message = new Message(this.currentMember, this.link_image, this.text_message);
    this.firebaseService.sendToDoctor(chat, message, this.ROLE);
    // this.firebaseService.setUnRead(this.listChats[this.indexSelectedChat].$id, this.ROLE);
    this.text_message = '';
    this.link_image='';
  }

  public onFocusOut() {
    this.firebaseService.setIsTyping(this.listChats[this.indexSelectedChat].$id, false, this.ROLE);
  }
  public onFocus() {
    this.firebaseService.setIsTyping(this.listChats[this.indexSelectedChat].$id, true, this.ROLE);
    //this.allChatsSubscription.unsubscribe();
  }
}
