import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events: any = [];

  calendarOptions: CalendarOptions = {};

  constructor(private httpClient: HttpClient) { }


  onDateSelect(arg: any) {
    alert('Date clicked: ' + arg.dateStr)
  }

  ngOnInit(){
      setTimeout(() => {
          return this.httpClient.get('http://localhost/test/events.php')
          .subscribe((res: any) => {
            console.log(res.start.toLocaleString());
              this.Events.push(res);
              console.log(this.Events);
          });
      }, 0);

      setTimeout(() => {
          this.calendarOptions = {
          initialView: 'dayGridMonth',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },
          dateClick: this.onDateSelect.bind(this),
          events: this.Events
          };
      }, 500);
  }

}
