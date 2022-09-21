import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'spaApp';
  slides = ['./assets/eco4.jpeg', './assets/eco5.jpeg', './assets/eco6.jpeg' ];

  slideIndex: number = 1;

  changeSlide(num: number) {
    if ((this.slideIndex + num) >= 0 && (this.slideIndex + num) <= (this.slides.length - 1)) {
      this.slideIndex += num;
    }
  }
}
