import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PYTHON_API_UPLOAD_FILE = 'http://127.0.0.1:5000/parse';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private httpClient: HttpClient) { }

  parseTable(file) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post(PYTHON_API_UPLOAD_FILE, formData);
  }
}
