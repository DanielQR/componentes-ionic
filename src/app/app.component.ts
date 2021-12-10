import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<componente[]>;
  constructor( private dataservice: DataService ) {}

  ngOnInit() {

    this.componentes = this.dataservice.getMenuOpts();

  }
}
