import { Component } from '@angular/core';
import { from } from 'rxjs';
import{FormControl,FormGroup,Validators} from  '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular10';
  loginForm=new FormGroup({
  username : new FormControl('',Validators.required),
  email : new FormControl('',Validators.required),
  password : new FormControl('',Validators.required)
  })
  onSubmit(){
    console.warn(this.loginForm.value)
  }
}
