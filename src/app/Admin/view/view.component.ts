import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { EditComponent } from '../edit/edit.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [EditComponent, NgFor],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent implements OnInit {
  Frames: any
  constructor(private AdminApi: AdminService,) {

  }
  ngOnInit(): void {
    console.log(localStorage.getItem('token'),'local storage');
    
    // this.AdminApi.viewFrames().subscribe((res) => {
    //   this.Frames = res
    // })

  }
  edit(data: any) {
    
  }
}

