import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from '../../_core/services/highlight.service';

@Component({
  selector: 'worm-async-javascript',
  templateUrl: './async-javascript.component.html',
  styleUrls: ['./async-javascript.component.scss']
})
export class AsyncJavascriptComponent implements OnInit, AfterViewChecked {

  highlighted = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }





}
