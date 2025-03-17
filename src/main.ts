import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import this!
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
// import { appRoutes } from './app/app.routes';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Use `routes` instead of `appRoutes`
    provideHttpClient()
  ]
}).catch(err => console.error(err));

