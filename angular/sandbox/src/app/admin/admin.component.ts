import { Component, Input, OnInit } from '@angular/core';

import { Config } from '../shared/config.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @Input() config: Config;

  constructor() {}

  ngOnInit(): void {
    this.config = new Config();
    this.config.keyA = 'n/a';
    this.config.valueA = 'n/a';
    this.config.maxFoos = 0;
  }
}
