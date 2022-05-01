/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { ListaPlantasComponent } from './lista-plantas.component';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('ListaPlantasComponent', () => {
  let component: ListaPlantasComponent;
  let fixture: ComponentFixture<ListaPlantasComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListaPlantasComponent ],
      providers:[PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlantasComponent);
    component = fixture.componentInstance;

    component.plantas = [
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      ),
      new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba encabezado nombre_cientifico ', () => {
    let trs = fixture.nativeElement.querySelectorAll('tr');

    expect(trs.length).toBe(4);
  });
});
