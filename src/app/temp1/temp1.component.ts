import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrl: './temp1.component.css'
})
export class Temp1Component {
  constructor(private router: Router) {}
  UserId!:string;
  navigateToVideos()
  {
    this.UserId='a';
    this.router.navigate(['child',this.UserId]);
  }
}
