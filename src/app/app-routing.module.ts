import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Temp1Component } from './temp1/temp1.component';
import { Temp2Component } from './temp2/temp2.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
  { path: 'child/:UserId', component: ChildComponent },
  {path:'temp1',component:Temp1Component},
  {path:'temp2',component:Temp2Component},
  //{path:'login',component:LoginComponent},
  //{path:'**',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
