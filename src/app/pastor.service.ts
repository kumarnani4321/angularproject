import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

interface PastorEntry {
  url: string;
  description: string;
  pastorName: string; // To distinguish between pastors
}

@Injectable({
  providedIn: 'root'
})
export class PastorService {
  private entriesCollection: any;

  constructor(private firestore: Firestore) {
    this.entriesCollection = collection(this.firestore, 'pastors');
  }

  // Add URL and description to the appropriate pastor's array in Firestore
  async addUrl(pastorName: string, url: string, description: string) {
    const entry: PastorEntry = { url, description, pastorName };

    try {
      await addDoc(this.entriesCollection, entry);
      console.log('Document written with ID: ', entry);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }

  // Method to retrieve all entries for all pastors
  getEntries(): Observable<PastorEntry[]> {
    return from(getDocs(this.entriesCollection)).pipe(
      map(snapshot => snapshot.docs.map(doc => doc.data() as PastorEntry))
    );
  }
}
