import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { GuideDocument } from '../model/guide-documents';


@Injectable({
    providedIn: 'root'
})
export class DocumentViewerService {

    constructor(private _httpClient: HttpClient) { }

    getGuideData(pageTitle: string) {
        const href = 'assets/documents/documents.json';
        return this._httpClient.get<GuideDocument[]>(href).pipe(
            map((res: GuideDocument[]) => res.filter((d) => d.title === pageTitle)[0]),
            switchMap((res) => {
                return this._httpClient.get(res.documentUrl!, {
                    responseType: 'text'
                });
            }));
    }

}
