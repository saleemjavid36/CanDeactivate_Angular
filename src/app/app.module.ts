import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CanDeactivateGuard } from './services/can-deactivate-guard';

import { HomeComponent } from './pages/home/home.component';
import { ComposeComponent } from './pages/compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
