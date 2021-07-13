import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MalbiconComponent } from './components/malbicon/malbicon.component';
import { IconsComponent } from './pages/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    MalbiconComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
