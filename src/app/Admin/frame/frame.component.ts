import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgFor],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent implements OnInit {
  ThicknessForm!: FormGroup;
  frames!:any
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.ThicknessForm = this.fb.group({
      thickness: ['', [Validators.required]],
    })
    this.AdminApi.Getthickness().subscribe((res: any) => {
      this.frames = res
    })

  }

  addThickness() {
    this.AdminApi.Addthickness(this.ThicknessForm.value).subscribe((res: any) => {
      console.log(res);
      window.location.reload();

    })
  }
}

