// src/app/components/report/report.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MatTableModule }    from '@angular/material/table';

@Component({
  selector: 'app-report',
  imports: [
    CommonModule,                  // for *ngIf / *ngFor
    MatTableModule,                // for mat-table, mat-header-cell, etc.
  ],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  @Input() data!: { errors: string[]; warnings?: string[] };
}
