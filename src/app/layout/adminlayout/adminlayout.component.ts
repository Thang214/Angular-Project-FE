import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from '../../components/admin/aside/aside.component';
import { NavbarComponent } from '../../components/admin/navbar/navbar.component';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsideComponent, NavbarComponent],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css',
})
export class AdminlayoutComponent {}
