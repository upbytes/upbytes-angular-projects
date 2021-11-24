import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { GuideDocument } from '../model/guide-documents';


@Injectable({
    providedIn: 'root'
})
export class DocumentViewerService {

    constructor(private _httpClient: HttpClient) { }

    getGuideData() {
        const href = 'assets/documents/documents.json';
        return this._httpClient.get<GuideDocument>(href).pipe(
            switchMap((res) => {
                return this._httpClient.get(res.documentUrl!, {
                    responseType: 'text'
                });
            }));
    }

}
