import { Component, OnInit } from '@angular/core';
import {TopMenu} from "../../../shared/components/scrollable-tab";
import {ImageSlider} from "../../../shared/components/image-slider";
import {Channel} from "../../../shared/components/horizontal-grid";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor() {}
  selectedTabLink;

  ngOnInit() {
  }

  topMenu: TopMenu[] = [
    {
      title: "热门",
      link: ''
    },
    {
      title: "男装",
      link: ''
    },
    {
      title: "百货",
      link: ''
    },
    {
      title: "运动",
      link: ''
    },
    {
      title: "手机",
      link: ''
    },
    {
      title: "家纺",
      link: ''
    },
    {
      title: "内衣",
      link: ''
    },
    {
      title: "家装",
      link: ''
    },
    {
      title: "母婴",
      link: ''
    },
    {
      title: "美妆",
      link: ''
    },
    {
      title: "家具",
      link: ''
    },
    {
      title: "食品",
      link: ''
    },
    {
      title: "鞋包",
      link: ''
    }];



  handleTabSelected(topMenu: TopMenu){
    console.log(topMenu)
    // this.router.navigate(['home', topMenu.link])
  }

}
