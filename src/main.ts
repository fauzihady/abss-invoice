import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter,Routes  } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { TableComponent } from './app/components/table/table.component';
import { DetailComponent } from './app/components/detail/detail.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'second-component', component: DetailComponent }, // Ensure this exists
];

bootstrapApplication(TableComponent, {
  providers: [provideHttpClient(), provideRouter(routes)] // ✅ Add routing provider
}).catch(err => console.error(err));
