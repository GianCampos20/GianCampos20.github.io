import { AfterViewInit, Component } from '@angular/core';
import { Hero } from "../sections/hero/hero";
import { Services } from '../sections/services/services';
import { Experiencie } from '../sections/experiencie/experiencie';

@Component({
  selector: 'app-content-page',
  imports: [Hero,Services,Experiencie],
  templateUrl: './content-page.html',
  styleUrl: './content-page.scss',
  standalone: true
})
export class ContentPage implements AfterViewInit {

  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.initReveal();
  }

  initReveal() {

    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, {
      threshold: 0.1
    });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        this.observer.observe(el);
      });
    });
  }
}
