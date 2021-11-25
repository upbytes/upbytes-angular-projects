import { Injectable } from '@angular/core';
import { createReducer, on, ActionReducer } from '@ngrx/store';
import { demo, guide } from '../actions/app-view.action';
import { UpbytesAngularAppView } from '../model/upbytes-angular-view';

@Injectable({
    providedIn: 'root'
})
export class UpbytesAngularViewReducerService {

    constructor(
    ) { }

    public getReducer(): ActionReducer<UpbytesAngularAppView> {
        return createReducer(
            { view: 'guide' },
            on(demo, () => ({
                view: 'demo'
            })),
            on(guide, () => ({
                view: 'guide'
            }))
        );
    }
}
