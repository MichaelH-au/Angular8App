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

  channels: Channel[] = [
    {
      id:'1',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'2',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'3',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    }
  ]


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
}
