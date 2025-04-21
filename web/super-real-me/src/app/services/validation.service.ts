import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ValidationService {
	private http = inject(HttpClient);
	private apiUrl = 'https://your‑api.domain/validate';

	constructor() { }

	validateFile(file: File): Observable<any> {
		const form = new FormData();
		form.append('file', file, file.name);
		return this.http.post<any>(this.apiUrl, form);
	}
}
