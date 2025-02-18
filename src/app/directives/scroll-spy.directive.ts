import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {

  @Input('appScrollSpy') sectionId: string = ''

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  
  onWindowScroll() {
    const section = document.getElementById(this.sectionId)

    if (section) {
      const rect = section.getBoundingClientRect()
      const isInViewport = rect.top >=0 && rect.top < window.innerHeight / 2

      if (isInViewport) {
        this.renderer.addClass(this.el.nativeElement, 'active')
      }else {
        this.renderer.removeClass(this.el.nativeElement, 'active')
      }
    }
  }
}
