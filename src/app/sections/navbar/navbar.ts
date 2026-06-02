import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar implements OnInit {

  dark = false;
  mm = false;
  s: string = 'services';
  sc = false;
  onScroll() {
    this.sc = window.scrollY > 20;
  }


  ngOnInit() {
    const saved = localStorage.getItem('theme');

    this.dark =
      saved === 'dark' ||
      (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.applyTheme();
    this.onScroll(); //


  }
  @HostListener('window:scroll')
  onscroll() {
    this.sc = window.scrollY > 20;
  }
  toggleDark() {
    this.dark = !this.dark;

    localStorage.setItem('theme', this.dark ? 'dark' : 'light');

    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.classList.toggle('dark', this.dark);
  }

  goSection(id: string) {
    this.mm = false;

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }


}