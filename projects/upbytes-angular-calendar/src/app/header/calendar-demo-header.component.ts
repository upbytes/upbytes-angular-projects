import { Component, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { THEMES } from '../data/calendar-theme-data';
import { CalendarTheme } from '../model/calendar-theme';
import { MatIconRegistry } from '@angular/material/icon';
import { UpbytesAngularAppView } from '../model/upbytes-angular-view';
import { Observable } from 'rxjs';
@Component({
    selector: 'calendar-demo-header',
    templateUrl: './calendar-demo-header.component.html',
    styleUrls: ['./calendar-demo-header.component.scss']
})
export class CalendarDemoHeader {
    themes: CalendarTheme[] = THEMES;
    _view$?: Observable<UpbytesAngularAppView>;
    _view?: UpbytesAngularAppView;
    constructor(
        private _renderer: Renderer2,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private store: Store<{ _view: UpbytesAngularAppView }>) {
        this.matIconRegistry.addSvgIcon(
            `upbytes-calendar-icon`,
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/upbytes-calendar-icon.svg')
        );
    }

    changeTheme(option: CalendarTheme) {
        this.clearTheme();
        option.isChecked = !option.isChecked;
        this._renderer.addClass(document.body, option.class!);
    }

    clearTheme() {
        this.themes.map(o => o.isChecked = false);
        this.themes.forEach(o => this._renderer.removeClass(document.body, o.class!));
    }

}