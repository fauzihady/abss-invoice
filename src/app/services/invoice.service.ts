import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/invoices/';

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getInvoiceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);

  }

  deleteInvoice(id: number) {
    return this.http.delete(`${this.apiUrl}${id}`);
  }

  updateInvoice(id: number, invoiceData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${id}`, invoiceData);
  }

  createInvoice(invoice: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, invoice);
  }
}
