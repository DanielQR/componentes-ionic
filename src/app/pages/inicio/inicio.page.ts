import { Component, OnInit } from '@angular/core';

interface componente{
  icon:string;
  name:string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirectTo: '/check'
    },
    {
      icon:'calendar-outline',
      name: 'DateTime',
      redirectTo:'/datetime'
    },
    {
      icon:'car-outline',
      name: 'Fab',
      redirectTo:'/fab'
    },
    {
      icon:'grid-outline',
      name: 'Grid',
      redirectTo:'/grid'
    },
    {
      icon:'infinite-outline',
      name: 'Infinite',
      redirectTo:'/infinite'
    },
    {
      icon:'hammer-outline',
      name: 'Input',
      redirectTo:'/input'
    },
    {
      icon:'list-outline',
      name: 'List - Sliding',
      redirectTo:'/list'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}