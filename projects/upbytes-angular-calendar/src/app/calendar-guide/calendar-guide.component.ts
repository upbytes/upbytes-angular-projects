import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpbytesAngularAppView } from '../model/upbytes-angular-view';
import { guide, demo } from '../actions/app-view.action'
@Component({
    selector: 'calendar-guide',
    templateUrl: './calendar-guide.component.html',
    styleUrls: ['./calendar-guide.component.scss']
})
export class CalendarGuide implements OnInit {
    _view?: UpbytesAngularAppView;
    pageTitle?: string = "install"
    constructor(
        private store: Store<{ _view: UpbytesAngularAppView }>) {
    }

    ngOnInit(): void {
        this.store.dispatch(guide());
    }
}