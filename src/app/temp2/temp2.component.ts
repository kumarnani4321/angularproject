import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrl: './temp2.component.css'
})
export class Temp2Component {
  constructor(private router: Router) {}
  UserId!:string;
  navigateToVideos()
  {
    this.UserId='b';
    this.router.navigate(['child',this.UserId]);
  }
}

