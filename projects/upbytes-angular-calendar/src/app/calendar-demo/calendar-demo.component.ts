import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpbytesAngularAppView } from '../model/upbytes-angular-view';
import { demo } from '../actions/app-view.action'
@Component({
    selector: 'calendar-demo',
    templateUrl: './calendar-demo.component.html',
    styleUrls: ['./calendar-demo.component.scss']
})
export class CalendarDemo implements OnInit {
    _view?: UpbytesAngularAppView;
    pageTitle?: string = "install";
    @Input() dataSource?: [];
    constructor(
        private store: Store<{ _view: UpbytesAngularAppView }>) {
    }

    ngOnInit(): void {
        this.store.dispatch(demo());
    }

}