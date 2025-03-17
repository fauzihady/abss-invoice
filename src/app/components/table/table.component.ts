import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  invoices: any[] = [];

  constructor(private invoiceService: InvoiceService, private route: Router) {}

  
  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(response => {
      console.log("Invoices data:",response.data)
      this.invoices = response.data;
    });
  }

  viewDetail(id: number) {
    this.route.navigate(['/detail', id]);
  }
  
}
