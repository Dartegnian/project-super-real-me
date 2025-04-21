import { Component } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { ReportComponent } from "../report/report.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  imports: [ReportComponent, CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  report: any;
  loading = false;

  constructor(private vs: ValidationService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile = input.files?.[0] ?? null;
  }

  submit() {
    if (!this.selectedFile) { return; }
    this.loading = true;
    this.vs.validateFile(this.selectedFile)
      .subscribe({
        next: (res) => { this.report = res; this.loading = false; },
        error: (err) => { console.error(err); this.loading = false; }
      });
  }
}
