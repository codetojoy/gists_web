import { Component, Input, OnInit } from '@angular/core';
import { Config } from './shared/config.model';
import { Util } from './util/Util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Input() footerInfo: string;
  config: Config = new Config();

  // internal page state
  state: string = 'foo';

  ngOnInit(): void {
    let util: Util = new Util();
    this.footerInfo = util.tracer('footer ... copyright 2021 etc');
  }

  onConfigChanged(config: Config): void {
    this.config = config;
  }

  private isState(s: string): boolean {
    return this.state === s;
  }

  isStateFoo(): boolean {
    return this.isState('foo');
  }
  isStateBar(): boolean {
    return this.isState('bar');
  }
  isStateAdmin(): boolean {
    return this.isState('admin');
  }

  onSelect(event: string) {
    console.log(`TRACER app onSelect: ${event}`);
    this.state = event;
  }
}
