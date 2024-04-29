import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule } from '@angular/forms';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(){

  }

  ngOnInit():void {
    
  }

  user_records:any[]=[];
  data={
    name:"",
    age:"",
    college:"",
    branch:""
  }

  doRegistration(Values:any){

    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');

    this.user_records.push(this.data);

      localStorage.setItem("users",JSON.stringify(this.user_records));


    // if(this.user_records.some((v)=>{return v.name==this.data.name})){
    //   alert("User already exists");
    // }else{
    //   alert("abcd");
    //   this.user_records.push(this.data);

    //   localStorage.setItem("users",JSON.stringify(this.user_records));

    //   alert("User registered successfully");
    // }

  }

}
