import { Component ,OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
    selector: 'partners-component',
    templateUrl: 'partners.html',
     styles: [`
       .tile {
            min-height: 200px;
            background-color: #fff;
            background-size: cover !important;
        }
        .leftRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        left: 0;
        }
        .rightRs {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);
        border-radius: 999px;
        right: 0;
        }
        
        
     `]
    
})

export class PartnersComponent implements OnInit
{
    public partnersTile: NgxCarousel;
    
    partners= ['assets/amazon.jpg','assets/deezerlogo.jpg', 'assets/shazam.jpg', 'assets/youtube.jpg',
                'assets/shazam.jpg', 'assets/youtube.jpg'];
    
    ngOnInit()
    {
        this.partnersTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 4, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true
    };
    }
    
     public ourfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }
}
