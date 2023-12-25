import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore = inject(Firestore);
 
  addDocument(collection_name:string, document:any) {
    const  collectionRef = collection(this.firestore, collection_name);
    return of(addDoc(collectionRef, document));
  }

  getDocuments(collection_name:string) {
    const  collectionRef = collection(this.firestore, collection_name);
    return collectionData(collectionRef, { idField: 'id' }) as Observable<any[]>;
  }

  getDocument(collection_name:string,id: string) {
    return from(getDoc(doc(this.firestore, collection_name, id))).pipe(
      map((snapshot) => snapshot.data() as any)
    );
  }

  updateDocument(collection_name:string,document: any, id: string) {
    const docRef = doc(this.firestore, collection_name, id);
    updateDoc(docRef, { ...document });
  }

  deleteDocument(collection_name:string,id: string) {
    const docRef = doc(this.firestore, collection_name, id);
    deleteDoc(docRef);
  }

}
