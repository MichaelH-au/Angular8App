import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Confirmable, Emoji} from "../../decorators";

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  // username = ''
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
