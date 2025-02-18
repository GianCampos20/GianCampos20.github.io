import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { InterestComponent } from '../interest/interest.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-content-page',
  imports: [AboutComponent, ExperienceComponent, EducationComponent, SkillsComponent, InterestComponent],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.scss'
})
export class ContentPageComponent {

}
