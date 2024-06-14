// Importar HttpClient y HttpHeaders
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getItems() {
    throw new Error('Method not implemented.');
  }
  // URL base del API
  baseUrl: string = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // Método para registrar un usuario
  registerUser(userData: { username: string, password: string }): Observable<any> {
    const url = `${this.baseUrl}register/`; // Asegúrate de que esta URL coincide con tu endpoint de backend
    return this.http.post(url, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
