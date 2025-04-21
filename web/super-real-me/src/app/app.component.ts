import { Component } from '@angular/core';
import { FileUploadComponent } from "./components/file-upload/file-upload.component";
import { ReportComponent } from "./components/report/report.component";

@Component({
  selector: 'app-root',
  imports: [FileUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'super-real-me';
}
