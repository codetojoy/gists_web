import {
  Component,
  Input,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Config } from '../shared/config.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  @Input() config: Config;
  @Output() configChanged: EventEmitter<Config> = new EventEmitter<Config>();

  constructor() {}

  ngOnInit(): void {
    this.config = new Config();
    this.config.keyA = 'n/a';
    this.config.valueA = 'n/a';
    this.config.maxFoos = 0;
  }

  valueChanged(event: any): void {
    // console.log(`TRACER AC.ngOnChanges v: ${event.target.value}`);
    // console.log(`TRACER AC.ngOnChanges c.maxFoos: ${this.config.maxFoos}`);
    this.configChanged.emit(this.config);
  }
}
