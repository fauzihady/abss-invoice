import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'detail/:id', component: DetailComponent }
];
