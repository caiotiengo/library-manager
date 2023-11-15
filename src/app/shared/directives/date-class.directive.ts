import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateClass]',
})
export class DateClassDirective implements OnInit {
  @Input() set appDateClass(value: string) {
    this.updateClass(value);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateClass(this.appDateClass);
  }

  private updateClass(value: string) {
    const date = new Date().toISOString().split('T')[0]; 
    const isSelectedDate = value === date;
    if (isSelectedDate) {
      this.renderer.addClass(this.el.nativeElement, 'selected-date');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'selected-date');
    }
  }
}
