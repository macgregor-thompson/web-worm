import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'worm-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.scss']
})
export class ExampleThreeComponent implements OnInit {
  showOutput = false;
  showImage = false;
  imgSrc = 'assets/img/js-execution.png';

  constructor() { }

  ngOnInit(): void {
  }

  runCode(): void {
    this.showOutput = true;
    function printHello() {
      console.log('Hello!');
    }

    function blockForOneSec() {
      let num = 0;
      for (let i = 0; i < 1000000000; i++) {
        num = i;
      }
      console.log('num:', num);
    }

    setTimeout(printHello, 0);
    blockForOneSec();
    console.log('Hey y\'all!');

  }

}
