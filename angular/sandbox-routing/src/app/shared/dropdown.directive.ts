import {
  Directive,
  OnInit,
  HostListener,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
}
