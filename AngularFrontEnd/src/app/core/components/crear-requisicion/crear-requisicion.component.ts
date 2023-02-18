import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

import autoTable from 'jspdf-autotable';

interface Proj {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear-requisicion',
  templateUrl: './crear-requisicion.component.html',
})

export class CrearRequisicionComponent{

  Projects: Proj[]=[
    { value: '0', viewValue: 'Mantenimiento'},
    { value: '1', viewValue: 'Reparacion'},
    { value: '3', viewValue: 'Interno'},
  ]
}
