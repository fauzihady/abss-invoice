import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateComponent {
  invoice = { customer_name: '', number: '', date: new Date().toISOString().split('T')[0]};
  errorMessage: string = '';

  constructor(private invoiceService: InvoiceService, private router: Router) {}

  createInvoice() {
    this.invoiceService.createInvoice(this.invoice).subscribe({
      next: () => {
        alert('Invoice created successfully!');
        this.router.navigate(['/']);
      },
      error: (error) => {
        if (error.status === 422) { // Handle duplicate entry error
          this.errorMessage = 'Invoice number is already in use. Please choose a different one.';
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
