import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'worm-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {
  showOutput = false;

  constructor() { }

  ngOnInit(): void {
  }

  runCode(): void {
    this.showOutput = true;
    function printHello() {
      console.log('Hello!');
    }

    setTimeout(printHello, 0);
    console.log('Hey y\'all!');
  }

}
