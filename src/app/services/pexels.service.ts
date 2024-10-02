import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PexelsService {
  private apiKey = 'rab2dj2nfNAqKjrZxUIITH2Zb5ublcFhLaq2rkmvsAbghY4W3QW8b9Rt';
  private apiUrl = 'https://api.pexels.com/v1/curated?per_page=10';

  constructor(private http: HttpClient) {}

  fetchImages(page: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey,
    });

    const url = `${this.apiUrl}&per_page=10&page=${page}`; // Adiciona o parâmetro de página
    return this.http.get(url, { headers }); // Busca imagens da URL definida
  }
}
