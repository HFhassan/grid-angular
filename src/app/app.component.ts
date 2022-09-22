// import { HttpClient } from '@angular/common/http';
// import { Component, ViewChild } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';
// import { CellClickedEvent, ColDef, GridReadyEvent, ColGroupDef,
//   GridApi, } from 'ag-grid-community';
// import { Observable } from 'rxjs';


// // -------------------

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import 'ag-grid-enterprise';
// import '../styles.css';
// import { IOlympicData } from './interface';




// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })



// export class AppComponent {
//   private gridApi!: GridApi<IOlympicData>;

//   public columnDefs: (ColDef | ColGroupDef)[] = [
//     {
//       headerName: 'Group A',
//       children: [
//         { field: 'athlete', minWidth: 200 },
//         { field: 'country', minWidth: 200 },
//       ],
//     },
//     {
//       headerName: 'Group B',
//       children: [
//         { field: 'sport', minWidth: 150 },
//         { field: 'gold' },
//         { field: 'silver' },
//         { field: 'bronze' },
//         { field: 'total' },
//       ],
//     },
//   ];
//   public defaultColDef: ColDef = {
//     sortable: true,
//     filter: true,
//     resizable: true,
//     minWidth: 100,
//     flex: 1,
//   };
//   public rowData!: IOlympicData[];

//   constructor(private http: HttpClient) {}

//   onBtExport() {
//     this.gridApi.exportDataAsExcel();
//   }

//   onGridReady(params: GridReadyEvent<IOlympicData>) {
//     this.gridApi = params.api;

//     this.http
//       .get<IOlympicData[]>(
//         'https://www.ag-grid.com/example-assets/small-olympic-winners.json'
//       )
//       .subscribe((data) => {
//         this.rowData = data;
//       });
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
// import '../styles.css';
import { IOlympicData } from './interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })

// @Component({
//   selector: 'my-app',
//   template: `<div class="container">
//     <div>
//       <button
//         (click)="onBtExport()"
//         style="margin-bottom: 5px; font-weight: bold;"
//       >
//         Export to Excel
//       </button>
//     </div>
//     <div class="grid-wrapper">
//       <ag-grid-angular
//         style="width: 100%; height: 100%;"
//         class="ag-theme-alpine"
//         [columnDefs]="columnDefs"
//         [defaultColDef]="defaultColDef"
//         [rowData]="rowData"
//         (gridReady)="onGridReady($event)"
//       ></ag-grid-angular>
//     </div>
//   </div>`,
// })
export class AppComponent {
  private gridApi!: GridApi<IOlympicData>;

  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Group A',
      children: [
        { field: 'athlete', minWidth: 200 },
        { field: 'country', minWidth: 200 },
      ],
    },
    {
      headerName: 'Group B',
      children: [
        { field: 'sport', minWidth: 150 },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
    },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };
  
  public rowData!: IOlympicData[];

  constructor(private http: HttpClient) {}

  onBtExport() {
    this.gridApi.exportDataAsExcel();
  }

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.gridApi = params.api;

    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/small-olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}