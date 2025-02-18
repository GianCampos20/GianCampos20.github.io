import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { SkillsComponent } from '../skills/skills.component';
import { InterestComponent } from '../interest/interest.component';
import { ContentPageComponent } from '../content-page/content-page.component';

@Component({
  selector: 'app-master',
  imports: [ContentPageComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

}
