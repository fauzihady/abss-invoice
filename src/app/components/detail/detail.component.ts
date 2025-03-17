import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DetailComponent implements OnInit {
  invoice: any; // ✅ Store the invoice details here
  id!: number; 

  constructor(private route: ActivatedRoute, private invoiceService: InvoiceService, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')); // ✅ Get ID from URL
    if (this.id) {
      this.invoiceService.getInvoiceById(this.id).subscribe({
        next: (response) => {
          console.log(response);
          this.invoice = response; // ✅ Store fetched data
        },
        error: (error) => {
          console.error('Error fetching invoice details:', error);
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
