import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'for';
  arr:any=[];
  isDark=false;
  constructor()
  {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{this.arr=json});
            
  }
  change()
  {
    if(this.isDark)
      {
        this.isDark=false;
      }
      else
      {
        this.isDark=true;
      }
  }

}
