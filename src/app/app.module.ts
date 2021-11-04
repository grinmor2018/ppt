import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Approutes } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PlayComponent } from './components/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes, { relativeLinkResolution: 'legacy' } ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
