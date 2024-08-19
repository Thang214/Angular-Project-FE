import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { PostlistComponent } from '../../components/home/postlist/postlist.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, PostlistComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
