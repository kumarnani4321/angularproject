import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  istheme=true;
  change()
  {
    if(this.istheme)
      {
        this.istheme=false;
        document.body.style.backgroundColor = "#66ff99";
      }
      else
      {
        this.istheme=true;
        document.body.style.backgroundColor = "white";
      }
    }
}