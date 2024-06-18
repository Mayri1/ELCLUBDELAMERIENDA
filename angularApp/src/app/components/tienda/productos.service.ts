import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl = 'http://localhost:8000/api/productos'; // Cambia esto por la URL correcta de tu backend

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Agrega métodos adicionales según las necesidades de tu aplicación
}
