import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:string = "John";
  angularVersion = "latest";

  version: number = 2;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputtype: string = "text";
  selectedState: string = "";

  showWelcomealert(){
    alert("Welcome to Angular 2");
  }

  showMessage(message: string){
    alert(message);
  }
}
