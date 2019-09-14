import { Component } from '@angular/core';
import {TopMenu} from "./shared/components/scrollable-tab";
import {ImageSlider} from "./shared/components/image-slider";
import {Channel} from "./shared/components/horizontal-grid";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  handleTabSelected(tabMenu: TopMenu){
    console.log(tabMenu)
  }

  imageSliders:ImageSlider[] = [
    {
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567492080431&di=309eba35d0c7e0792eee9989bde5b519&imgtype=0&src=http%3A%2F%2Fimg4.cache.netease.com%2Fphoto%2F0001%2F2010-04-17%2F64EFS71V05RQ0001.jpg",
      link:"",
      caption:""
    },
    {
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567492080432&di=7b345a31bd8793401ce2b0a074ef8cf7&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fshejigao%2F20130520%2F20130518_e4d25725255d31629dfdLHBHyGfL3jgy.jpg",
      link:"",
      caption:""
    },
    {
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567492080433&di=991ca85494695f2a9e3663cbe63c00c3&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3D2d496375d739b60052ce02b7d9513526%2Fa6efce1b9d16fdfa97d6a678b68f8c5495ee7be9.jpg",
      link:"",
      caption:""
    },
    {
      imageUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567492080433&di=72f9e9a690ccd23d8a1bc3898400788f&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F2735225488%2FTB2R1z.fxPI8KJjSspfXXcCFXXa_%2521%25212735225488-0-weitao.jpg",
      link:"",
      caption:""
    }
  ]
  username = '';
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
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
      title: '限时秒杀',
      icon:'http://www.laawoo.com/images/default/activity/6010/big.jpg',
      link:''
    },
    {
      id:'4',
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
}
