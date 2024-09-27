import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PastorService } from '../pastor.service';

declare var bootstrap: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  username: string = '';
  password: string = '';
  pastors: string[] = ['Christudas Pastor', 'Jashuva Pastor'];

  // Variables for the second modal (YouTube URL, Pastor's name, and description)
  youtubeUrl: string = '';
  pastorName: string = '';
  description: string = '';

  constructor(private router: Router, private elementRef: ElementRef, private pastorService: PastorService) {}

  login() {
    if (this.username === 'meet' && this.password === 'add') {
      // Close the login modal
      const loginModalElement = this.elementRef.nativeElement.querySelector('#loginModal');
      const loginModalInstance = bootstrap.Modal.getInstance(loginModalElement);
      if (loginModalInstance) {
        loginModalInstance.hide();
      }

      // Delay before showing the second modal
      setTimeout(() => {
        const secondModalElement = this.elementRef.nativeElement.querySelector('#detailsModal');
        const secondModal = new bootstrap.Modal(secondModalElement);
        secondModal.show();
      }, 500);
    } else {
      alert('Invalid credentials');
    }
  }

  // Function to handle second modal submission
  submitDetails() {
    if (this.youtubeUrl && this.pastorName && this.description) {
      // Call service to save the URL, pastor name, and description
      this.pastorService.addUrl(this.pastorName, this.youtubeUrl, this.description);

      // Clear inputs
      this.youtubeUrl = '';
      this.pastorName = '';
      this.description = '';

      // Close the second modal
      const detailsModalElement = this.elementRef.nativeElement.querySelector('#detailsModal');
      const detailsModalInstance = bootstrap.Modal.getInstance(detailsModalElement);
      if (detailsModalInstance) {
        detailsModalInstance.hide();
      }
    } else {
      alert('Please fill in all fields');
    }
  }
}
