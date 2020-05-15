import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PtHomeComponent } from './home/ptHome.component';
import { PtAboutComponent } from './about/ptAbout.component';
import { PtCatComponent } from './cat/ptCat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PtHomeComponent },
      { path: 'ptAbout', component: PtAboutComponent },
      { path: 'ptCat', component: PtCatComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PtHomeComponent,
    PtAboutComponent,
    PtCatComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }