import { Component } from '@angular/core';
import { Inventor } from '../../interface/inventor';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bai3',
  standalone: true,
  imports: [NgFor],
  templateUrl: './bai3.component.html',
  styleUrl: './bai3.component.css'
})
export class Bai3Component {
  inventors: Inventor[] = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { id: 7, first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { id: 8, first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { id: 9, first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { id: 10, first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { id: 11, first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { id: 12, first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];
}
