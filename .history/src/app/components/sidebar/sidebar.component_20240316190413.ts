import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: '/table-list', title: 'Usuarios',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Comentarios',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Publicaciones',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notificationes',  icon:'notifications', class: '' },
    { path: '/tags', title: 'tags',  icon: 'dashboard', class: '' },


    { path: '/icons', title: 'Publicaciones',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notificationes',  icon:'notifications', class: '' },
    { path: '/tags', title: 'tags',  icon: 'dashboard', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
