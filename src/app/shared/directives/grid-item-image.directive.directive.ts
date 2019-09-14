import {Directive, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  @HostBinding('style.width') @Input() appGridItemImage='2rem';
  @HostBinding('style.height') @Input() appGridItemImage='2rem';
  @HostBinding('style.object-fit') @Input() fitMod='cover';
  @HostBinding('style.grid-area') area = 'image'
}
