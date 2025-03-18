import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DetailComponent implements OnInit {
  invoice: any;
  id!: number; 

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.invoiceService.getInvoiceById(this.id).subscribe({
        next: (response) => {
          console.log(response);
          this.invoice = response;
        },
        error: (error) => {
          console.error('Error fetching invoice details:', error);
        }
      });
    }
  }

  updateInvoice() {
    this.invoiceService.updateInvoice(this.id, this.invoice).subscribe({
      next: () => {
        alert('Invoice updated successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error updating invoice:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
