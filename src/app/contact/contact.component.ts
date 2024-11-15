import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  contact = {
    name: '',
    email: '',
    description: ''
  };

  onSubmit() {
    console.log('Form Submitted:', this.contact);
    alert('Thank you for reaching out, ' + this.contact.name + '! I will get back to you soon.');
    
    // Reset the form
    this.contact = { name: '', email: '', description: '' };
  }
}
