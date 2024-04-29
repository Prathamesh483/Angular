import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){

  }

  registerbtn(){
    this.router.navigate(['/register']);
  }
  loginbtn(){
    this.router.navigate(['/login']);
  }
  userdatabtn(){
    this.router.navigate(['/userdata']);
  }





}
