import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { Message } from 'src/app/models/message';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public subcription: Subscription;

  constructor(
    public afs: AngularFirestore
  ) { }

  public getUserFirebase(username): Observable<any> {
    return this.afs.collection("users").doc(username).get();
  }

  public getUserFirebaseUpdate(username): Observable<any> {
    return this.afs.collection("users").doc(username).valueChanges();
  }

  public sendToDoctor(chat: Chat, message: Message, type:String) {
    this.subcription = this.afs.collection("chats", ref => ref.where("members", '==', chat.$members)).snapshotChanges().subscribe(data => {
      console.log(data);
      console.log("A")
      if (data.length > 0) {
        this.sendMessage(data[0].payload.doc.id, message);
        this.setUnRead(data[0].payload.doc.id,type);
      }
      else {
        this.createChat(chat, message);
       
      }
    });
  }

  public createChat(chat: Chat, message) {
    this.subcription.unsubscribe();
    this.afs.collection("chats").add(JSON.parse(JSON.stringify(chat))).then(data=>{
      this.sendMessage(data.id,message);
      console.log("B")
    });
  }

  public sendMessage(id,message) {
    this.subcription.unsubscribe();
    this.afs.collection("chats/"+id+"/"+id).add(JSON.parse(JSON.stringify(message))).then(data=>{
      console.log("C")
    });

  }

  public getAllChatsByUsername(username){
    return this.afs.collection("chats", ref=>ref.where('members','array-contains',username));
  }
  public getDetailChatsByUsername(id){
    return this.afs.collection("chats/"+id+"/"+id, ref=>ref.orderBy("create_at","asc"));
  }

  public setIsTyping(id,status, type){
    if(type=="ROLE_PATIENT"){
      this.afs.collection("chats").doc(id).update({"member1.is_typing":status})
    }
    if(type=="ROLE_DOCTOR"){
      this.afs.collection("chats").doc(id).update({"member2.is_typing":status})
    }
    
  }

  public setRead(id,type){
    if(type=="ROLE_PATIENT"){
      this.afs.collection("chats").doc(id).update({"member1.is_read":true})
    }
    if(type=="ROLE_DOCTOR"){
      this.afs.collection("chats").doc(id).update({"member2.is_read":true})
    }
  }

  public setUnRead(id,type){
    if(type=="ROLE_PATIENT"){
      this.afs.collection("chats").doc(id).update({"member2.is_read":false})
    }
    if(type=="ROLE_DOCTOR"){
      this.afs.collection("chats").doc(id).update({"member1.is_read":false})
    }
  }

  public getNewMessage(type,username){
    if(type=="ROLE_PATIENT"){
      return this.afs.collection("chats", ref=>ref.where('members','array-contains',username).
      where('member1.is_read','==',false))
    }
    if(type=="ROLE_DOCTOR"){
      return this.afs.collection("chats", ref=>ref.where('members','array-contains',username).
      where('member2.is_read','==',false))
    }
  }

  public setOnline(username){
    this.afs.collection("users").doc(username).update({"status":true});
  }
  public setOffline(username){
    this.afs.collection("users").doc(username).update({"status":false});
  }
}
