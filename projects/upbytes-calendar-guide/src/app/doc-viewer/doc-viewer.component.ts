import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DocumentViewerService } from '../services/document-viewer.service';


@Component({
  selector: 'upbytes-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViwerComponent {
  title = 'upbytes-calendar-guide';
  docHtml: SafeHtml | undefined;
  constructor(
    private _domSanitizer: DomSanitizer,
    private documentViewerService: DocumentViewerService) {
      this.documentViewerService.getGuideData().subscribe((doc) => {
        this.docHtml = this._domSanitizer.bypassSecurityTrustHtml(doc);
      });
  }
}
