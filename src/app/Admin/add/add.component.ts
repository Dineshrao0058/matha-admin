import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent implements OnInit {
  AddForm!: FormGroup;
  frames!: any;
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.AddForm = this.fb.group({
      size: ['', [Validators.required]],
    })
    this.AdminApi.Getsize().subscribe((res: any) => {
      this.frames = res
    })

  }

  addSizes() {
    this.AdminApi.Addsize(this.AddForm.value).subscribe((res: any) => {
      console.log(res);
      window.location.reload();

    })
  }
  edit() {
  //   this.AdminApi.getSizes(this.data._id, this.editForm.value)
  //     .subscribe((res: any) => {
  //       console.log(res, 'edit');
  //     });
  //   window.location.reload();
  }

}