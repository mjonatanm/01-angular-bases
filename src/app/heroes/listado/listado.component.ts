import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Iron Man','Thor', 'Hulk','Capitan América'];
  heroeBorrado : string = '';
  borrado: boolean = false;

  eliminarHeroe(){
    //Elimina un elemento puntual
    // var index = this.heroes.indexOf('Hulk');
    // this.heroeBorrado = this.heroes[index];

    // if (index > -1) {
    //     this.heroes.splice(index,1);      
    // }

    this.heroeBorrado = this.heroes.shift() || '';

    if (this.heroeBorrado != '') {
      this.borrado = true;
    }


  }

}
