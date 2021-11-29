import { Component, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpbytesAngularAppView } from '../model/upbytes-angular-view';
import { guide, demo } from '../actions/app-view.action'
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'calendar-guide',
    templateUrl: './calendar-guide.component.html',
    styleUrls: ['./calendar-guide.component.scss']
})
export class CalendarGuide implements OnInit {
    _view?: UpbytesAngularAppView;
    pageTitle?: string = "install"
    constructor(
        private route: ActivatedRoute,
        private store: Store<{ _view: UpbytesAngularAppView }>) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.pageTitle = params['title'];
          });
        this.store.dispatch(guide());
    }
}