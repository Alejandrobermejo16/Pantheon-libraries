import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PantheonRestService {

  protected baseUrl = 'https://backendabmprojects.vercel.app/api';

  constructor(protected http: HttpClient) { }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const httpParams = params ? new HttpParams({ fromObject: params }) : undefined;
      return await firstValueFrom(this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params: httpParams }));
    } catch (err) {
      console.error(`GET ${endpoint} failed`, err);
      throw err;
    }
  }

  async post<T>(endpoint: string, body: any): Promise<T> {
    try {
      return await firstValueFrom(this.http.post<T>(`${this.baseUrl}/${endpoint}`, body));
    } catch (err) {
      console.error(`POST ${endpoint} failed`, err);
      throw err;
    }
  }

  async put<T>(endpoint: string, body: any): Promise<T> {
    try {
      return await firstValueFrom(this.http.put<T>(`${this.baseUrl}/${endpoint}`, body));
    } catch (err) {
      console.error(`PUT ${endpoint} failed`, err);
      throw err;
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      return await firstValueFrom(this.http.delete<T>(`${this.baseUrl}/${endpoint}`));
    } catch (err) {
      console.error(`DELETE ${endpoint} failed`, err);
      throw err;
    }
  }


  async patch<T>(endpoint: string, body: any): Promise<T> {
    try {
      return await firstValueFrom(this.http.patch<T>(`${this.baseUrl}/${endpoint}`, body));
    } catch (err) {
      console.error(`PATCH ${endpoint} failed`, err);
      throw err;
    }
  }
}
