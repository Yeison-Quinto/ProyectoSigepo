import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio/servicio.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ServicioService ]
})
export class LoginComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

}
