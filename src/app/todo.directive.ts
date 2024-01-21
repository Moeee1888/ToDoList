import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  constructor(private element :ElementRef) { }
  @HostListener('mouseenter') onMouseEnter(){
    this.setShadow('5px 5px 10px 2px rgba(0,0,0,.5);')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setShadow('none;')
  }
  setShadow(shadow:string){
   this.element.nativeElement.setAttribute('style',`box-shadow:${shadow}`)
  }
}
