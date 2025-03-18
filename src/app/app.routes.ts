import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'create', component: CreateComponent } 
];
