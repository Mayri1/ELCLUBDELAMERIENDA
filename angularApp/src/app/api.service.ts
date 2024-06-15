// Importar HttpClient y HttpHeaders
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // URL base del API
  baseUrl: string = 'http://127.0.0.1:8000/api/';

   constructor(private http: HttpClient, private router: Router) {} 

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
