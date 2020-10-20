import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  firstList: any[] = [
    { value: 1, disabled: false},
    { value: 2, disabled: false},
    { value: 3, disabled: false},
    { value: 4, disabled: false},
    { value: 5, disabled: false},
    { value: 6, disabled: false},
    { value: 7, disabled: false},
    { value: 8, disabled: false},
    { value: 9, disabled: false},
    { value: 10, disabled: false}
  ];

  secondList: any[] = [
    { value: 1, disabled: false},
    { value: 2, disabled: false},
    { value: 3, disabled: false},
    { value: 4, disabled: false},
    { value: 5, disabled: false},
    { value: 6, disabled: false},
    { value: 7, disabled: false},
    { value: 8, disabled: false},
    { value: 9, disabled: false},
    { value: 10, disabled: false}
  ];

  operaciones: any[] = [
    { value: '+', disabled: false },
    { value: '-', disabled: false },
    { value: '*', disabled: false },
    { value: '/', disabled: false }
  ];

  formula = [];

  result: number | string = 0;

  mostrar = false;

  alerta: string;

  primerArgumento = [];
  operacion = [];
  segundoArgumento = [];


  drop(event: CdkDragDrop<string[]>): void {
    console.log( event );
    if (event.previousContainer === event.container) {
      moveItemInArray( event.container.data,
        event.previousIndex,
        event.currentIndex );
    } else {
      transferArrayItem( event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if ( event.previousContainer.data.length === 9 || event.previousContainer.data.length === 3 ) {
      event.previousContainer.data.forEach( ( item: any ) => {
        item.disabled = true;
      });
    }
  }

  calcular() {

    this.formula.push( this.primerArgumento, this.operacion, this.segundoArgumento );

    if ( this.formula.length === 3 ) {

      switch (this.formula[1][0].value) {
        case '+':
          this.result = this.formula[0][0].value + this.formula[2][0].value;
          break;
        case '-':
          this.result = this.formula[0][0].value - this.formula[2][0].value;
          break;
        case '*':
          this.result = this.formula[0][0].value * this.formula[2][0].value;
          break;
        case '/':
          this.result = this.formula[0][0].value / this.formula[2][0].value;
          break;
      }
    } else {
      return false;
    }
  }

  limpiar(): void {
    this.firstList = [
      { value: 1, disabled: false},
      { value: 2, disabled: false},
      { value: 3, disabled: false},
      { value: 4, disabled: false},
      { value: 5, disabled: false},
      { value: 6, disabled: false},
      { value: 7, disabled: false},
      { value: 8, disabled: false},
      { value: 9, disabled: false},
      { value: 10, disabled: false}
    ];
    this.secondList = [
      { value: 1, disabled: false},
      { value: 2, disabled: false},
      { value: 3, disabled: false},
      { value: 4, disabled: false},
      { value: 5, disabled: false},
      { value: 6, disabled: false},
      { value: 7, disabled: false},
      { value: 8, disabled: false},
      { value: 9, disabled: false},
      { value: 10, disabled: false}
    ];
    this.operaciones = [
      { value: '+', disabled: false },
      { value: '-', disabled: false },
      { value: '*', disabled: false },
      { value: '/', disabled: false }
    ];

    this.result = 0;

    this.formula = [];

    this.primerArgumento = [];
    this.operacion = [];
    this.segundoArgumento = [];
  }


}
