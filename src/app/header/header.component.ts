import { Component } from '@angular/core';
import { ScrollSpyDirective } from '../directives/scroll-spy.directive';

@Component({
  selector: 'app-header',
  imports: [ScrollSpyDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
