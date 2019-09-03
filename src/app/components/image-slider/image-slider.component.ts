import { Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2} from '@angular/core';

export interface ImageSlider {
  imageUrl: string;
  link:string;
  caption:string;

}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit{
  @Input() sliders: ImageSlider[] = [];
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('imageItems') img: QueryList<ElementRef>
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log(this.imgSlider)
    // this.imgSlider.nativeElement.innerHTML = `<span>test</span>`
  }

  ngAfterViewInit(): void {
    console.log(this.img)
    this.img.forEach(item => {
      this.rd2.setStyle(item.nativeElement, 'height', '100px')
    })
  }
}
