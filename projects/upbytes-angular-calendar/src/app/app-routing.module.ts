import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarDemo } from './calendar-demo/calendar-demo.component';
import { CalendarGuide } from './calendar-guide/calendar-guide.component';

const routes: Routes = [
  { path: 'guide', component: CalendarGuide },
  { path: 'demo', component: CalendarDemo },
  {path: '', redirectTo: '/guide', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
