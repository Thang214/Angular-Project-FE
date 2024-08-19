import { Component } from '@angular/core';

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [],
  templateUrl: './bai2.component.html',
  styleUrl: './bai2.component.css',
})
export class Bai2Component {
  student = {
    hoten: 'Trần Đức Thắng',
    gioitinh: 'Nam',
    ngaysinh: '13/12/2004',
    anh: 'https://plus.unsplash.com/premium_photo-1670985849616-6aa6c441e0bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
    diemTB: 10,
  };
}
