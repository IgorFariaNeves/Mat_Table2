import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface DataItem {
  codigo: number;
  descricao: string;
}

const ELEMENT_DATA: DataItem[] = [
  { codigo: 1, descricao: "Ford Mustang" },
  { codigo: 2, descricao: "Chevrolet Camaro" },
  { codigo: 3, descricao: "Porsche 911" },
  { codigo: 4, descricao: "Ferrari 488" },
  { codigo: 5, descricao: "Lamborghini Aventador" },
  { codigo: 6, descricao: "Tesla Model S" },
  { codigo: 7, descricao: "BMW M3" },
  { codigo: 8, descricao: "Audi R8" },
  { codigo: 9, descricao: "Mercedes-Benz G-Class" },
  { codigo: 10, descricao: "Nissan GT-R" },
  { codigo: 11, descricao: "Toyota Supra" },
  { codigo: 12, descricao: "Honda NSX" },
  { codigo: 13, descricao: "Jaguar F-Type" },
  { codigo: 14, descricao: "Mitsubishi Lancer Evo" },
  { codigo: 15, descricao: "Mazda MX-5" },
  { codigo: 16, descricao: "Aston Martin DB11" },
  { codigo: 17, descricao: "Bugatti Chiron" },
  { codigo: 18, descricao: "Koenigsegg Agera" },
  { codigo: 19, descricao: "McLaren P1" },
  { codigo: 20, descricao: "Pagani Huayra" }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ['codigo', 'descricao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator; // Atribuindo o paginator
    this.dataSource.sort = this.sort; // Atribuindo o sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
