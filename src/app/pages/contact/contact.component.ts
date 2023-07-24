import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Contact | Sector 67');

    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let result = this.contactForm.value;
      alert(
        `Name: ${result.name}\nEmail: ${result.email}\nSubject: ${result.subject}\nMessage: ${result.message}`
      );
    } else {
      alert('Form is not valid');
    }
  }
}
