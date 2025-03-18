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
  
  deleteInvoice(id: number) {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(id).subscribe({
        next: () => {
          this.invoices = this.invoices.filter(invoice => invoice.id !== id);
          console.log('Invoice deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting invoice:', error);
        }
      });
    }
  }

  navigateToCreate() {
    this.route.navigate(['/create']);
  }

}
