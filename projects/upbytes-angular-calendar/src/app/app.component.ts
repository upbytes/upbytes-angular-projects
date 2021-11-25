
import { Component, OnInit, ViewChild } from '@angular/core';
// import { AngularMaterialCalendarComponent } from 'angular-material-calendar';
import { Store } from '@ngrx/store';
import { BehaviorSubject, debounceTime, map, Observable, Subject } from 'rxjs';
import { CalendarDataSource } from './data/calendar-data-source';
// import { AngularMaterialCalendarComponent } from 'angular-material-calendar';
import { Event } from './model/calendar-event';
import { UpbytesAngularAppView } from './model/upbytes-angular-view';
import { CalendarDemoDataService } from './service/calendar-demo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // @ViewChild(AngularMaterialCalendarComponent) calendar?: AngularMaterialCalendarComponent<Event>;
  data = new BehaviorSubject<Event>({});
  title = 'angular-material-calendar-demo';
  events?: Subject<Event[]> = new Subject<Event[]>();
  display: Event[] = [];
  dataSource = new CalendarDataSource(this.display);
  _view$?: Observable<UpbytesAngularAppView>;
  _view?: UpbytesAngularAppView;
  //events?: Event[] = [];

  constructor(
    private calendarDemoDataService: CalendarDemoDataService,
    private store: Store<{ _view: UpbytesAngularAppView }>) {
    this._view$ = store.select('_view');
    this._view$!.subscribe((v) => this._view = v);
    this.calendarDemoDataService.getEventsData().pipe(
      map((d: any) => {
        this.display = d.data;
        this.dataSource.setData(this.display);
        return this.display;
      })
    ).subscribe(s => this.events?.next(s));

    // this.data.subscribe(d => {

    //   if (d!) {
    //     this.events!.push(d);
    //     // this.calendar!.dataSource = this.events;
    //     }

    // });
  }

  ngOnInit(): void {
    const updated = this.data!.pipe(debounceTime(0));

    updated.subscribe(s => {
      this.display = s! && s.start! ? [...this.display, s] : this.display;
      //this.events?.next(this.display)
      this.dataSource.setData(this.display);
    });
  }

}
