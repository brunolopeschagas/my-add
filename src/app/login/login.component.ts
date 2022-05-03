import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(fb:FormBuilder) { 
    this.form = fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
  }

    login(){
      alert("logado: " + this.form.value.username);
    }

  ngOnInit(): void {
  }

}
