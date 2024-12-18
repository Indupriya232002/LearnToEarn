import { Component } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {

  components = [
    { name: 'Contact', route: '/contact' },
    { name: 'About Us', route: '/aboutus' },
    { name: 'Resources', route: '/resources' },
    { name: 'Skills', route: '/skills' }
  ];

 
}
