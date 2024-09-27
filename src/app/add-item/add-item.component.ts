import { Component } from '@angular/core';
import { FirestoreService } from '../pastor.service';  // Adjust the path if needed

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  newItem: any = {};  // Object to hold the new item data

  constructor(private firestoreService: FirestoreService) {}

  // Method to add item
  addItem() {
    this.firestoreService.addItem(this.newItem)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        this.newItem = {};  // Reset the form after successful submission
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
}
