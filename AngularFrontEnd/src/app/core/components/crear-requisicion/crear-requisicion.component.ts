import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';






@Component({
  selector: 'app-crear-requisicion',
  templateUrl: './crear-requisicion.component.html',
})
export class CrearRequisicionComponent{

  
  readonly tableBody = document.querySelector('tbody');
  readonly addRowButton: HTMLElement | null = document.getElementById('addRowButton');

  constructor() {
    // bind event listeners
    this.bindEventListeners();
  }

    private bindEventListeners(): void {
    // add row button event listener
    if (this.addRowButton) {
      this.addRowButton.addEventListener('click', () => {
        this.addRow();
      });
    }

    // generate PDF button event listener
    const generatePDFButton = document.getElementById('generatePDFButton');
    if (generatePDFButton) {
      generatePDFButton.addEventListener('click', () => {
        this.generatePDF();
      });
    }

    // complete button event listener
    /*
    const completeButton = document.getElementById('completeButton');
    if (completeButton) {
      completeButton.addEventListener('click', () => {
        this.complete();
      });
    }
    */
  }

  private addRow(): void {
    if (this.addRowButton instanceof HTMLElement) {
      (this.addRowButton as HTMLElement).addEventListener('click', () => {
        // get the table body element
        const tableBody = document.querySelector('tbody');
      
        // create a new table row element
        const newRow = document.createElement('tr');
      
        // create table cells for the new row
        const numberCell = document.createElement('th');
        numberCell.scope = 'row';
        const numberInput = document.createElement('input');
        numberInput.type = 'text';
        numberInput.classList.add('form-control');
        numberCell.appendChild(numberInput);
        newRow.appendChild(numberCell);
      
        const descriptionCell = document.createElement('td');
        const descriptionInput = document.createElement('input');
        descriptionInput.type = 'text';
        descriptionInput.classList.add('form-control');
        descriptionCell.appendChild(descriptionInput);
        newRow.appendChild(descriptionCell);
      
        const brandCell = document.createElement('td');
        const brandInput = document.createElement('input');
        brandInput.type = 'text';
        brandInput.classList.add('form-control');
        brandCell.appendChild(brandInput);
        newRow.appendChild(brandCell);
      
        const sellerCell = document.createElement('td');
        const sellerInput = document.createElement('input');
        sellerInput.type = 'text';
        sellerInput.classList.add('form-control');
        sellerCell.appendChild(sellerInput);
        newRow.appendChild(sellerCell);
      
        const priceCell = document.createElement('td');
        const priceInput = document.createElement('input');
        priceInput.type = 'text';
        priceInput.classList.add('form-control');
        priceCell.appendChild(priceInput);
        newRow.appendChild(priceCell);
      
        // append the new row to the table body
        if (tableBody) {
          tableBody.appendChild(newRow);
        }
      });
      }
  }
  
  private generatePDF(): void {
    // get the input field values
    const name = (document.getElementById('nameInput') as HTMLInputElement).value;
    const surname = (document.getElementById('surnameInput') as HTMLInputElement).value;
    const employeeNumber = (document.getElementById('employeeNumberInput') as HTMLInputElement).value;
    const folio = (document.getElementById('folioInput') as HTMLInputElement).value;
    const project = (document.getElementById('projectInput') as HTMLSelectElement).value;
    const area = (document.getElementById('areaInput') as HTMLInputElement).value;
    const plant = (document.getElementById('plantInput') as HTMLInputElement).value;
    const currency = (document.getElementById('currencyInput') as HTMLSelectElement).value;
  
    // create the PDF
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(`Work Order - FOLIO ${folio}`, 10, 10);
    doc.setFontSize(14);
    doc.text(`Name: ${name} ${surname}`, 10, 20);
    doc.text(`Employee Number: ${employeeNumber}`, 10, 30);
    doc.text(`Project: ${project}`, 10, 40);
    doc.text(`Area: ${area}`, 10, 50);
    doc.text(`Plant: ${plant}`, 10, 60);
    doc.text(`Currency: ${currency}`, 10, 70);

    // get the data for the table
    const tableData = this.getTableData();

    // add the table to the PDF
    autoTable(doc, {
      head: [['Number', 'Description', 'Brand', 'Seller', 'Price']],
      body: tableData
    });
    // save the PDF
    doc.save(`Work Order - FOLIO ${folio}.pdf`);
  }
  
  private getTableData(): any[][] {
    // get the rows of the table
    if (this.tableBody) {
      const rows = Array.from(this.tableBody.querySelectorAll('tr'));
  
      // create an array to store the data for the table
      const tableData = [];
  
      for (const row of rows) {
        // create an array to store the data for the current row
        const rowData = [];
  
        // get the cells of the current row
        const cells = Array.from(row.querySelectorAll('td'));
  
        // add the data from each cell to the row data array
        for (const cell of cells) {
          rowData.push(cell.textContent);
        }
  
        // add the row data array to the table data array
        tableData.push(rowData);
      }
  
      return tableData;
    }
  
    return [];
  }
  
  ngOnInit(): void {
    const completeButton = document.getElementById('completeButton');

    // check if the input fields are filled
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const surnameInput = document.getElementById('surnameInput') as HTMLInputElement;
    const employeeNumberInput = document.getElementById('employeeNumberInput') as HTMLInputElement;
    const projectSelect = document.getElementById('projectSelect') as HTMLSelectElement;
    const areaInput = document.getElementById('areaInput') as HTMLInputElement;
    const plantInput = document.getElementById('plantInput') as HTMLInputElement;
    const currencySelect = document.getElementById('currencySelect') as HTMLSelectElement;
    const emailSelect = document.getElementById('emailSelect') as HTMLSelectElement;

    const inputFieldsFilled = nameInput.value && surnameInput.value && employeeNumberInput.value && projectSelect.value && areaInput.value && plantInput.value && currencySelect.value && emailSelect.value;

// check if at least one row in the table is filled
    if (this.tableBody) {
      const rows = Array.from(this.tableBody.querySelectorAll('tr'));
      let tableRowsFilled = false;
      for (const row of rows) {
        const cells = Array.from(row.querySelectorAll('td'));
        const rowFilled = cells[0].textContent && cells[1].textContent && cells[2].textContent && cells[3].textContent && cells[4].textContent;
        if (rowFilled) {
          tableRowsFilled = true;
          break;
        }
      }

      // enable the "Complete" button if the input fields and the table rows are filled
      if (inputFieldsFilled && tableRowsFilled) {
        (completeButton as HTMLButtonElement).disabled = false;
      } else {
        (completeButton as HTMLButtonElement).disabled = true;
      }
    }
  }
}
