import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  editForm!: FormGroup;
  size!: string;
  prices!: string;
  thickness!: string
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      size: ['', [Validators.required]],
      price: ['', [Validators.required]],
      thickness: ['', [Validators.required]]
    })
  }
  editframe() {
    // this.AdminApi.editFrames(this.editForm.value).subscribe((res: any) => {
    //   if (res) {
    //     localStorage.setItem('add', JSON.stringify(res))
    //     this.Routes.navigate([''])
    //     alert('edited sucesfully')
    //   }
    // })
  }
}

