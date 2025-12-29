import { Directive, OnInit } from '@angular/core';

@Directive()
export abstract class PantheonBaseComponent implements OnInit {


  protected async initCall(
    endpoint: string,
    body?: any,
    url?: string,
    module?: string,
    method?: string
  ): Promise<any> {

    const finalMethod = (method || this.getRequestMethod()).toUpperCase();
    let fullUrl = `${url || this.getUrl()}/api/${module || this.getModule()}/${endpoint}`;

    // Si es GET y hay parámetros, los añadimos a la URL
    if (finalMethod === 'GET' && body) {
      const query = new URLSearchParams(body).toString();
      fullUrl += `?${query}`;
    }

    const response = await fetch(fullUrl, {
      method: finalMethod,
      headers: { 'Content-Type': 'application/json' },
      body: finalMethod !== 'GET' && body ? JSON.stringify(body) : undefined,
      credentials: 'include' // si necesitas cookies o autenticación
    });

    if (!response.ok) {
      throw new Error(`Error en la llamada a ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
  }

  public ngOnInit(): void {
    const defaultBody = this.getDefaultBody?.() || undefined;

    this.initCall(this.getResource(), defaultBody)
      .then(data => {
        this.dataAfterRequest?.(data);
      })
      .catch(err => console.error('Error en initCall:', err));
  }

  // Métodos abstractos que el hijo debe implementar
  protected abstract getModule(): string;
  protected abstract getResource(): string;

  // Opcionales con valores por defecto
  protected getUrl(): string { return 'https://backendabmprojects.vercel.app'; }
  protected getRequestMethod(): string { return 'GET'; }
  protected getDefaultBody?(): any;
  protected dataAfterRequest?(data: any): void;
}
