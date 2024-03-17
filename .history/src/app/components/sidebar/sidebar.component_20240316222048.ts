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
    { path: '/table-list', title: 'Clientes',  icon:'group', class: '' },
  //  { path: '/typography', title: 'Categorias',  icon:'maps_ugc', class: '' },
    { path: '/icons', title: 'Publicaciones',  icon:'post_add', class: '' },
    { path: '/maps', title: 'Comentarios',  icon:'maps_ugc', class: '' },
    { path: '/notifications', title: 'Categorias',  icon:'notifications', class: '' },
    { path: '/tags', title: 'Tags',  icon: 'flag', class: '' },


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
