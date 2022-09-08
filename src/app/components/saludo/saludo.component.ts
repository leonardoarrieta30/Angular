import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {


  @Input() nombre: string = "Anonimo";

  constructor() { }

  ngOnInit(): void {
    //instrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente Saludo");
  }

}
