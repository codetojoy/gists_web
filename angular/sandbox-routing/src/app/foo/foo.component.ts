import { NodeWithI18n } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Util } from '../util/Util';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
})
export class FooComponent implements OnInit {
  @ViewChild('logArea', { static: false }) logAreaRef: ElementRef;

  util: Util = new Util();

  constructor() {}

  ngOnInit(): void {}

  writeLog(): void {
    console.log(this.util.tracer('FC.writeLog'));
    // we shouldn't be writing to a native element like this
    this.logAreaRef.nativeElement.innerHTML = this.util.tracer('view child');
  }
}
