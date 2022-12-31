import { Component, OnInit } from '@angular/core';
import { Row } from 'src/app/services/RowInterfaceRequisiciones';

@Component({
  selector: 'app-requisiciones',
  templateUrl: './requisiciones.component.html',
})
export class RequisicionesComponent  {
  rows: Row[] = [
    { number: 1, name: 'John', phone: '555-555-1212', email: 'john@example.com', address: '123 Main St', status: 'Active', showDetails: false },
    // Add more rows here
  ];
  sortBy: 'number' | 'name' | 'phone' | 'email' | 'address' | 'status' = 'number';
  sortAsc: boolean = true;

  toggleRowDetails(row: Row) {
    row.showDetails = !row.showDetails;
  }

  sortTable(header: 'number' | 'name' | 'phone' | 'email' | 'address' | 'status') {
    if (header === this.sortBy) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortBy = header;
      this.sortAsc = true;
    }
    this.rows.sort((a, b) => {
      if (a[header] < b[header]) {
        return this.sortAsc ? -1 : 1;
      }
      if (a[header] > b[header]) {
        return this.sortAsc ? 1 : -1;
      }
      return 0;
    });
  }
  
  constructor() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Gina'];
    const phones = ['555-555-1212', '555-555-1213', '555-555-1214', '555-555-1215', '555-555-1216', '555-555-1217', '555-555-1218'];
    const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eve@example.com', 'frank@example.com', 'gina@example.com'];
    const addresses = ['123 Main St', '456 Market St', '789 Elm St', '321 Oak St', '654 Pine St', '987 Maple St', '246 Cedar St'];
    const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
  
    for (let i = 0; i < 7; i++) {
      this.rows.push({
        number: this.rows.length + 1,
        name: names[Math.floor(Math.random() * names.length)],
        phone: phones[Math.floor(Math.random() * phones.length)],
        email: emails[Math.floor(Math.random() * emails.length)],
        address: addresses[Math.floor(Math.random() * addresses.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        showDetails: false
      });
    }
  }
  
}
