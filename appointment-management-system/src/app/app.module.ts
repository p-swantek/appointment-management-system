import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.prod';


FullCalendarModule.registerPlugins([
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    NgxsModule.forRoot([], {developmentMode: !environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
