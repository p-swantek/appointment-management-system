import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';


FullCalendarModule.registerPlugins([
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FullCalendarModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
