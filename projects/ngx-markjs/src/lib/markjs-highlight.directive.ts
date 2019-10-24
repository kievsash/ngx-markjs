import { Directive, ElementRef, EventEmitter, Input, NgZone, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

declare var require: any;
const Mark = require('mark.js');

@Directive({
  selector: '[markjsHighlight]'
})
export class MarkjsHighlightDirective implements OnChanges {

  @Input() markjsHighlight: string = '';
  @Input() markjsConfig: any = {};
  @Input() scrollToFirstMarked: boolean = false;

  @Output() readonly getInstance: EventEmitter<any> = new EventEmitter<any>();

  private cancelAnimationId: number;
  private markInstance: any;

  constructor(
    private contentElementRef: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.markInstance) {
      this.ngZone.runOutsideAngular(() => this.markInstance = new Mark(this.contentElementRef.nativeElement));
      this.getInstance.emit(this.markInstance);
    }

    this.ngZone.runOutsideAngular(() => {
      this.hightlightText();
      if (this.scrollToFirstMarked) {
        this.scrollToFirstMarkedText();
      }
    });
  }

  private hightlightText(): void {
    this.markjsHighlight = this.markjsHighlight || '';
    if (this.markjsHighlight && this.markjsHighlight.length <= 2) {
      this.markInstance.unmark();
      return;
    } else {
      this.markInstance.unmark({
        done: () => {
          this.markInstance.mark((this.markjsHighlight || ''), this.markjsConfig);
        }
      });
    }
  }

  private scrollToFirstMarkedText(): void {
    const content = this.contentElementRef.nativeElement;
    const firstOffsetTop: number = (content.querySelector('mark') || {}).offsetTop || 0;

    this.scrollSmooth(content, firstOffsetTop);
  }

  private scrollSmooth(scrollElement, firstOffsetTop: number): void {
    const renderer: Renderer2 = this.renderer;

    if (this.cancelAnimationId) {
      cancelAnimationFrame(this.cancelAnimationId);
    }
    const currentScrollTop: number = scrollElement.scrollTop;
    const delta: number = firstOffsetTop - currentScrollTop;

    this.animate({
      duration: 500,
      timing(timeFraction: number): number {
        return timeFraction;
      },
      draw(progress: number): void {
        const nextStep: number = currentScrollTop + progress * delta;
        renderer.setProperty(scrollElement, 'scrollTop', nextStep);
      }
    });
  }

  private animate({timing, draw, duration}): void {
    const start: number = performance.now();
    this.cancelAnimationId = requestAnimationFrame(function animate2(time) {
      // timeFraction goes from 0 to 1
      let timeFraction: number = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      // calculate the current animation state
      const progress: number = timing(timeFraction);
      draw(progress); // draw it
      if (timeFraction < 1) {
        this.cancelAnimationId = requestAnimationFrame(animate2);
      }
    });
  }
}

