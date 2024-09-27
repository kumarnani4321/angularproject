import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';
import { Temp1Component } from './temp1/temp1.component';
import { Temp2Component } from './temp2/temp2.component';
import { ChildComponent } from './child/child.component';
import { ButtonsComponent } from './buttons/buttons.component';
//import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './footer/footer.component'; // Import your firebase config

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Temp1Component,
    Temp2Component,
    ButtonsComponent,
    ChildComponent,
    FooterComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    //MatDialogModule,
  ],
  providers: [ provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),],
  bootstrap: [AppComponent]
})
export class AppModule { }
