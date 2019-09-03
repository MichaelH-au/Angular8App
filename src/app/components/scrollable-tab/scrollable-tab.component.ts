import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';
export interface TopMenu {
  title: string;
  link?: string;
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit {
  title = 'pinduoduo';
  selectedIndex = -1;
  @Input() data: TopMenu[] = []
  @Input() backgroundColor = "white"
  @Input() activeColor = "red"
  @Input() normalColor = "black"
  @Input() indicatorColor = "brown"
  @Output() tabSelected = new EventEmitter()
  handleSelection(i: number){
    this.selectedIndex = i
    this.tabSelected.emit(this.data[this.selectedIndex])
  }
  constructor() {
    console.log('construct')
  }

  ngOnInit() {
    console.log('init')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)

  }

  ngAfterContentInit(): void{

    console.log('content')
  }

}
