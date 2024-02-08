import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent implements OnInit {
  AdminLoginForm!: FormGroup;
  username!: string;
  password!: string;
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.AdminLoginForm = this.fb.group({
     username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  adminlogin() {
    if (this.AdminLoginForm.valid) {
      let username = this.AdminLoginForm.get('username')?.value
      let password = this.AdminLoginForm.get('password')?.value

      this.AdminApi.getAdmin(this.AdminLoginForm.value).subscribe((res: any) => {
        if (res) {
          localStorage.setItem('admin', JSON.stringify(res))
          this.Routes.navigate(['admin-dashboard'])
          alert('login sucesfully')
        } else {
          alert("Invalid Credentials")
        }
      })
    }
  }
}
