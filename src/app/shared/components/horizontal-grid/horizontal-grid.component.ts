import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Confirmable, Emoji} from "../../decorators";

export interface Channel {
  id: string;
  icon: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Input() cols = 6;
  @Input() displayCols = 5;
  sliderMargin = '0'


  private _username = ''
  @Output() usernameChange = new EventEmitter()
  @Emoji() result = 'Hello'
  constructor() { }

  ngOnInit() {
    console.log(this.result)
  }

  @Input()
  public get username(): string {
    return this._username
  }


  public set username(value: string){
    console.log('write')
    this._username = value
    this.usernameChange.emit(value)
  }

  @Confirmable('Are your sure?')
  handleClick(){
    console.log('yes')
  }

  public get scrollable() : boolean {
    return this.cols > this.displayCols;
  }

  public get templateRows() : string {
    return `minmax(auto, max-content)`
  }
  public get templateColumns() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`
  }
  handleScroll(ev) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`
  }
}
