import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dba.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 16000
        },
        {
          nombre: 'Krilin',
          poder: 4000
        },
        {
          nombre: 'Vegeta',
          poder: 12000
        }
      ]

    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){
    }

    agregarPersonaje( personaje:Personaje ){
        this._personajes.push(personaje);
    }
}