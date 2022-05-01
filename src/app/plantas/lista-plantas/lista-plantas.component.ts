import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
    });
  }

  getTotalInterior():number{
    let suma = 0;

    for (let i = 0; i < this.plantas.length; i++) {
      if(this.plantas[i].tipo === "Interior"){
        suma ++;
      }
    }
    return suma;
  }

  getTotalExterior():number{
    let suma = 0;

    for (let i = 0; i < this.plantas.length; i++) {
      if(this.plantas[i].tipo === "Exterior"){
        suma ++;
      }
    }
    return suma;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
