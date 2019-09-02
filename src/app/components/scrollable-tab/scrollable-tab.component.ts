import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
export interface TopMenu {
  title: string;
  link?: string;
}


@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  title = 'pinduoduo';
  selectedIndex = -1;
  @Input() data: TopMenu[] = []
  @Output() tabSelected = new EventEmitter()
  handleSelection(i: number){
    this.selectedIndex = i
    this.tabSelected.emit(this.data[this.selectedIndex])
  }
  constructor() { }

  ngOnInit() {
  }

}
