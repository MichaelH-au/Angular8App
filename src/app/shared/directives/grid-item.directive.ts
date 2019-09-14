import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core'

@Directive({
  selector: '[appGridItem]'
})

export class GridItemDirective {

  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';
  // @HostBinding('style.margin') width = '0 auto';

  @HostListener('click', ['$event.target'])
  handleClick(ev) {
     console.log(ev)
  }
}
