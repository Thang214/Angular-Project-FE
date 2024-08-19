import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { IUSER } from '../../interface/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  toastr = inject(ToastrService);
  form = this.formBilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private formBilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.form.invalid) return;

    this.userService.login(this.form.value as IUSER).subscribe((user) => {
      this.toastr.success('Đăng nhập thành công');
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigateByUrl('/');
    });
  }
}
