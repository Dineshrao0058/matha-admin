import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  AddForm!: FormGroup;
  size!: string;
  prices!: string;
  thickness!: string 
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      size: ['', [Validators.required]],
      price: ['', [Validators.required]],
      thickness: ['', [Validators.required]]
    })
  }
  addframe() {
    this.AdminApi.AddFrames(this.AddForm.value).subscribe((res: any) => {
    console.log(res);
    
    })
  }
} 
