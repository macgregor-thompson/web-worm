import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'worm-example-five',
  templateUrl: './example-five.component.html',
  styleUrls: ['./example-five.component.scss']
})
export class ExampleFiveComponent implements OnInit {
  showOutput = false;

  constructor() { }

  ngOnInit(): void {
  }

  runCode(): void {
    this.showOutput = true;

    function displayData() {
      console.log('Stop procrastinating!');
    }

    function blockForOneSec() {
      let num = 0;
      for (let i = 0; i < 1000000000; i++) {
        num = i;
      }
      console.log('num:', num);
    }

    blockForOneSec();

    setTimeout(displayData, 1000);

    console.log('Hey y\'all!');
  }
}
