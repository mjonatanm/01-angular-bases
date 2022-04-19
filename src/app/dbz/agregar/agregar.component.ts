import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dba.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  constructor( private DbzService: DbzService){}

  @Input() nuevo: Personaje = {    
        nombre:'',
        poder:0};

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    console.log( this.nuevo );
    // this.onNuevoPersonaje.emit( this.nuevo );
    this.DbzService.agregarPersonaje( this.nuevo );


    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
