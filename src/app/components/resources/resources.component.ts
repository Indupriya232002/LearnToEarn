import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

  isPopupVisible: boolean = false;
  popupId: string = '';

  // Method to open the popup and set the content based on the ID
  openPopup(id: string) {
    this.popupId = id;
    this.isPopupVisible = true;
  }

  // Method to close the popup
  closePopup() {
    this.isPopupVisible = false;
  }
}
