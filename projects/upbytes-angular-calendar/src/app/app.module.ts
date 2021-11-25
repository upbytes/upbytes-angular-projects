import { NgModule, CUSTOM_ELEMENTS_SCHEMA, InjectionToken, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { AngularMaterialCalendarModule } from '@upbytes.in/angular-material-calendar';
import { FontAwesomeModule, FaIconLibrary, FaConfig} from '@fortawesome/angular-fontawesome';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarDemoHeader } from './header/calendar-demo-header.component';
import { MaterialModule } from './material-module/material.module';
import { CalendarDemoSideNav } from './sidenav/calendar-demo-sidenav.component';
import { CalendarDemoEvents } from './calendar-demo-events/calendar-demo-events.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpbytesAngularAppView } from './model/upbytes-angular-view';
import { UpbytesAngularViewReducerService } from './reducer/upbytes-angular-view-reducer.service';

export const UPBYTES_ANGULR_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<UpbytesAngularAppView>>
  ('Registered APP Reducers', {
    factory: () => {
      const viewReducer = inject(UpbytesAngularViewReducerService).getReducer();
      const reducers: ActionReducerMap<any> = {
        _view: viewReducer
      };
      return reducers;
    }
  });

@NgModule({
  declarations: [
    AppComponent,
    CalendarDemoHeader,
    CalendarDemoSideNav,
    CalendarDemoEvents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(UPBYTES_ANGULR_REDUCER_TOKEN),
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AngularMaterialCalendarModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary, faconfig: FaConfig) {
    library.addIcons( faStackOverflow, faGithub, faMedium);
    faconfig.defaultPrefix = 'fab';

  }
}
