import { Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  Renderer2,
  OnDestroy} from '@angular/core';

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
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy{
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px'
  @Input() intervalBySeconds = 2
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  @ViewChildren('imageItems') img: QueryList<ElementRef>

  selectedIndex = 0
  intervalId;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log(this.imgSlider)
    // this.imgSlider.nativeElement.innerHTML = `<span>test</span>`
  }

  ngAfterViewInit(): void {
    console.log(this.img)
    // this.img.forEach(item => {
    // this.rd2.setStyle(item.nativeElement, 'height', '100px')
    // })
    this.intervalId = setInterval(() => {
      // console.log(++i * this.imgSlider.nativeElement.scrollWith / this.sliders.length)
      console.log('interval')
      console.log(this.selectedIndex)
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length)
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length)
  }


  handleScroll(e) {
    let ratio = (e.target.scrollLeft * this.sliders.length) / e.target.scrollWidth
    // console.log(ratio)
    ratio = Math.ceil(ratio)
    if (ratio != this.selectedIndex) {
      console.log(this.selectedIndex, ratio)
      this.selectedIndex = Math.round(ratio)
      // console.log(this.selectedIndex + 'handle')

    }
  }
}
