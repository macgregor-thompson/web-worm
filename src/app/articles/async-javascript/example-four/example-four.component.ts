import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'worm-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.scss']
})
export class ExampleFourComponent implements OnInit {
  showOutput = false;

  constructor() { }

  ngOnInit(): void {
  }

  runCode(): void {
    this.showOutput = true;

    function displayData() {
      console.log('Stop procrastinating!');
    }

    setTimeout(displayData, 1000);

    console.log('Hey y\'all!');
  }
}
