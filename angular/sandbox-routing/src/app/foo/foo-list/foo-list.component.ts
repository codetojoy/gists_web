import { Component, OnInit, Input } from '@angular/core';

import { Foo } from '../../shared/foo.model';

@Component({
  selector: 'app-foo-list',
  templateUrl: './foo-list.component.html',
  styleUrls: ['./foo-list.component.css'],
})
export class FooListComponent implements OnInit {
  @Input() foos: Foo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.foos.push(new Foo('beethoven', 'desc abc', 4140));
    this.foos.push(new Foo('chopin', 'desc def', 5150));
    this.foos.push(new Foo('mozart', 'desc ijk', 6160));
  }
}
