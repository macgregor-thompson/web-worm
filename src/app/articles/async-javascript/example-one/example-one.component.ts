import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'worm-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent implements OnInit {

  showOutput = false;

  constructor() { }

  ngOnInit(): void {

  }

  runCode(): void {
    this.showOutput = true;
    function printHello() {
      console.log('Hello!');
    }

    setTimeout(printHello, 1000);
    console.log('Hey y\'all!');
  }

}
