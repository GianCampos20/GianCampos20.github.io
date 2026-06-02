import { AfterViewInit, Component } from '@angular/core';
import { Hero } from "../sections/hero/hero";
import { Services } from '../sections/services/services';
import { Experiencie } from '../sections/experiencie/experiencie';
import { Education } from '../sections/education/education';
import { Skills } from '../sections/skills/skills';
import { Projects } from '../sections/projects/projects';
import { Certificates } from '../certificates/certificates';
import { Contact } from '../sections/contact/contact';

@Component({
  selector: 'app-content-page',
  imports: [Hero,Services,Experiencie,Education,Skills,Projects,Certificates,Contact],
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
