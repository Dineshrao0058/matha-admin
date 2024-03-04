import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent implements OnInit {
  ThicknessForm!: FormGroup;
  frames!:any
  addbtn: boolean = true
  editbtn: boolean = false
  constructor(private AdminApi: AdminService,
    private fb: FormBuilder,
    private Routes: Router) { }

  ngOnInit(): void {
    this.ThicknessForm = this.fb.group({
      thickness: ['', [Validators.required]],
            id: ['', [Validators.required]],
    })
    this.AdminApi.Getthickness().subscribe((res: any) => {
      this.frames = res
    })

  }

  addThickness() {
    this.AdminApi.Addthickness(this.ThicknessForm.value).subscribe((res: any) => {
      console.log(res);
      this.Routes.navigate(['/frame'])

    })
  }

  editThickness(b: any) {
    this.addbtn = false
    this.editbtn = true
    this.ThicknessForm.patchValue({
      thickness: b. thickness,
      id:b._id, 
    });
  }

  updateThickness(){
    this.AdminApi.updateThickness(this.ThicknessForm.value).subscribe((res:any)=>{
      console.log(res)
      this.Routes.navigate(['/frame'])
    })
  }

  deleteThickness(b:any){
    this.AdminApi.deleteThickness(b._id).subscribe((res:any)=>{
      console.log(res)
      this.Routes.navigate(['/frame'])
    })
  }  
}

