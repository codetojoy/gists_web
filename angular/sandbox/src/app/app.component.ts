import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  state: string = 'foo';

  isState(s: string): boolean {
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
