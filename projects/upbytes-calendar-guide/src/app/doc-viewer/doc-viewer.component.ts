import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DocumentViewerService } from '../services/document-viewer.service';


@Component({
  selector: 'upbytes-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styles: [`
  .doc-viewer-container {
    margin: 50px;
  }
  .doc-code-container {
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,.2);
    background-color: #282a36;
    color: #4a97e8;
    font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';font-weight:normal;
    font-size: 14px;
    line-height: 19px;
  }
  .doc-hljs-keyword {
    color: #e37b40;
  }

  .doc-hljs-string {
    color: #f0be37;
  }

  .doc-hljs-variable-name {
    color: #ffb86c;
    font-style: italic;
  }
  
  .doc-hljs-class-name {
    color: #00ffff;
  }
  .doc-hljs-fn-name {
    color:#46b29d;
  }

  .doc-hljs-import-class {
    color:#46b29d;
    font-style: italic;
  }

  .doc-hljs-fn-paranthesis {
    color:#ffffff;
  }
  
  `],
  encapsulation: ViewEncapsulation.None,
})
export class DocViwerComponent implements OnChanges {
  @Input() pageTitle?: string;
  title = 'upbytes-calendar-guide';
  docHtml: SafeHtml | undefined;
  constructor(
    private _domSanitizer: DomSanitizer,
    private documentViewerService: DocumentViewerService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.pageTitle) {
      this.documentViewerService.getGuideData(this.pageTitle).subscribe((doc) => {
        this.docHtml = this._domSanitizer.bypassSecurityTrustHtml(doc);
      });  
    }
    
  }
}
