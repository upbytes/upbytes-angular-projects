import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DocumentViewerService } from '../services/document-viewer.service';


@Component({
  selector: 'upbytes-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss']
})
export class ExampleViwerComponent {
  constructor(
    private _domSanitizer: DomSanitizer,
    private documentViewerService: DocumentViewerService) {
      // this.documentViewerService.getGuideData().subscribe((doc) => {
      //   this.docHtml = this._domSanitizer.bypassSecurityTrustHtml(doc);
      // });
  }
}
