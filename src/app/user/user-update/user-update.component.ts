import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../user-list/UserInterface';
import Swal, { SweetAlertIcon } from 'sweetalert2' 
@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent {
  showAlert(status: SweetAlertIcon, message: string){
        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
       },
       didClose: () => {
        console.log("termino")
       }
       });
       Toast.fire({
       icon: status,
       title: message
       });
    
      }
  
    formulario = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      lastname: new FormControl('')
    });
  
    newUser: UserInterface = {
      id: 0,
      name: "",
      lastname: ""
    }
    
      private http = inject(HttpClient);
      private router = inject(Router);
      private route = inject(ActivatedRoute);
      ngOnInit(){
        this.route.params.subscribe((params) => {
          this.formulario.controls.id.setValue(params["id"]);
        });
      }
  
      updateUser(){
        let id = Number(this.formulario.controls.id.value);

        console.log(id);
        this.newUser.id = id;
        this.newUser.name = String(this.formulario.controls.name.value);
        this.newUser.lastname = String(this.formulario.controls.lastname.value);
        
  
        this.http.put(`http://localhost:8080/api/user/${id}`, this.newUser).subscribe(resultado =>{
          console.log(resultado);
          this.showAlert("success","se actulizo correctamente");
        });
        this.router.navigate(["/"]);
      }
}
