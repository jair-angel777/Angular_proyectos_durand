import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SenatiComponent } from './senati/senati.component';
import { UserModule } from './user/user.module';
import { UserListComponent } from './user/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'senati-web-casafranca-fe';
}
