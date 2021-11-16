import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { Event } from '../model/calendar-event';
export class CalendarDataSource extends DataSource<Event> {

    private _dataStream = new ReplaySubject<Event[]>();

    constructor(initialData: Event[]) {
        super();
        this.setData(initialData);
    }

    /* eslint-disable @typescript-eslint/no-unused-vars */
    connect(collectionViewer: CollectionViewer): Observable<readonly Event[]> {
        return this._dataStream;;
    }

    /* eslint-disable @typescript-eslint/no-unused-vars */
    disconnect(collectionViewer: CollectionViewer): void {
    }

    setData(data: Event[]) {
        this._dataStream.next(data);
    }

}
