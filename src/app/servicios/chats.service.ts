import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
//import { message } from "../models/message";
import { firestore } from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
export interface chat {
  description : string
  name : string
  id: string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;

  constructor(private db : AngularFirestore,    private firestore: AngularFirestore) {
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.currentUser = user;
    //     this.userProfile = firebase.firestore().doc(`/users/${user.uid}`);
    //   }
    // });
   }

  
  
  
    getUserProfile(): firebase.firestore.DocumentReference {
      return this.userProfile;
    }
  
  //   updateName(firstName: string, lastName: string): Promise<any> {
  //     return this.userProfile.update({ firstName, lastName });
  //   }
  
  //   updateperfil(perfil: string): Promise<any> {
  //     return this.userProfile.update({ perfil });
  //   }
  
  //   updateDOB(birthDate: string): Promise<any> {
  //     return this.userProfile.update({ birthDate });
  //   }

  // getChatRooms(){
    
  //   return this.db.collection('chatsRooms').snapshotChanges().pipe(map(rooms => {
  //     return rooms.map(a =>{
  //       const data = a.payload.doc.data() as chat;
  //       data.id = a.payload.doc.id;
  //       return data;
  //     })
  //   }))
  // }

  // getChatRoom( chat_id : string){
  //   return this.db.collection('chatsRooms').doc(chat_id).valueChanges()
  // }


  // sendMsgToFirebase( message : message, chat_id : string){

  //   this.db.collection('chatsRooms').doc(chat_id).update({
  //     messages : firestore.FieldValue.arrayUnion(message),
  //   })
  // }

  // read_Students() {
  //   return this.firestore.collection('resultados').snapshotChanges();
  // }
  // create_NewStudent(record) {
  //   return this.firestore.collection('resultados').add(record);
  // }
  // update_Student(recordID,record){
  //   this.firestore.doc('resultados/'+ recordID).update(record);
  // }



}
