import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './UserInterface';
import { FormsModule } from '@angular/forms';
import Swal, { SweetAlertIcon } from 'sweetalert2' 

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private http = inject(HttpClient);
  private router = inject(Router);

  users: any;
  newUser: UserInterface = {
    id:0,
    name: "",
    lastname: ""
  };

  //addUser(){
  //  this.http.post("http://localhost:8080/api/user", this.newUser).subscribe(resultado =>{
  //    console.log(resultado);
  //    this.getAllUsers(); 
  //    this.newUser = { id: 0, name: '', lastname: '' };
  //  });
  //}
  
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get("http://localhost:8080/api/Users").subscribe(users => {
      this.users = users;
      console.log(users);
  });

  }

  showAlert() {
    Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
   })
  }
}

