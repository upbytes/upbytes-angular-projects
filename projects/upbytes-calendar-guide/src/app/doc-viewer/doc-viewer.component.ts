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
    color: #4a97e8;
    font-family: 'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback';font-weight:normal;
    font-size: 14px;
    line-height: 19px;
    overflow: auto;
    padding: 0;
    background: none;
    margin-bottom: 36px;
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
  .mobile-grid-container {
    display: grid;
    grid-template-areas:
    'day-header week-header month-header'
    'day week month'
    'day week month'
    'day week month'
    'day week month'
    'day week month'
    'day week month';
    
    grid-gap: 1px;
    background-color: #2196F3;
    padding: 2px;
    max-width: 100%;
  }
  .grid-container {
    display: grid;
    grid-template-areas:
    'month-header month-header'
    'month month'
    'month month'
    'month month'
    'month month'
    'month month'
    'month month'
    'day-header day-header'
    'day day'
    'day day'
    'day day'
    'day day'
    'day day'
    'day day'
    'week-header week-header'
    'week week'
    'week week'
    'week week'
    'week week'
    'week week'
    'week week';
    
    grid-gap: 1px;
    background-color: #2196F3;
    padding: 2px;
    max-width: 100%;
  }

  .calendar-images-day {
    grid-area: day;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 50px;
  }

  .calendar-images-week {
    grid-area: week;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 50px;
  }

  .calendar-images-month {
    grid-area: month;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 50px;
  }
  .calendar-images-day-header {
    grid-area: day-header;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 15px;
  }

  .calendar-images-week-header{
    grid-area: week-header;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 15px;
  }

  .calendar-images-month-header {
    grid-area: month-header;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 15px;
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
