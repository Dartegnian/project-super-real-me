import { Component } from '@angular/core';
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { ReportComponent } from "./components/report/report.component";
import { A11yModule }                      from '@angular/cdk/a11y';
import { MatTableModule }                  from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [
    A11yModule, // ← now the compiler knows this class
    MatTableModule,
    FileUploadComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'super-real-me';
}
