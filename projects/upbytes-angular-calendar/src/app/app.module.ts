import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
