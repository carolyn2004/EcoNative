import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = ['./assets/eco4.jpeg','./assets/eco5.jpeg',   './assets/eco6.jpeg',];

  slideIndex: number = 1;

  changeSlide(num: number) {
    if ((this.slideIndex + num) >= 0 && (this.slideIndex + num) <= (this.slides.length - 1)) {
      this.slideIndex += num;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
