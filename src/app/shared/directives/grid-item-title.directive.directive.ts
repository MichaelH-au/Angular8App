import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit{

  @HostBinding('style.font-size') area = '0.6rem'

  constructor(private elr: ElementRef, private rd2: Renderer2) {
  }

  ngOnInit(){
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title')
  }

}
