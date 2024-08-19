import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/home/navbar/navbar.component';
import { FooterComponent } from '../../components/home/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userlayout',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './userlayout.component.html',
  styleUrl: './userlayout.component.css',
})
export class UserlayoutComponent {}
