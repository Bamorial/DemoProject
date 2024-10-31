import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  project: Project
  isEdit=false
  editText='Edit'
  imageUrl=''
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService,
    public router:Router

  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.project = navigation.extras.state['project'];   //i already had this data on the other page so I haven't done another fetch
    }
  } 
  ngOnInit(): void {
    let image: any= this.project.image
    if (this.project.image) {
      const uint8Array = new Uint8Array(image.buffer.data);
      const blob = new Blob([uint8Array], { type: image.mimetype });
      this.imageUrl = URL.createObjectURL(blob);
      console.log(this.imageUrl)
    } 
  }
  async toggleEdit(){
    if(!this.isEdit){
      this.isEdit=!this.isEdit
      this.editText="Done"
    }
    else{
      this.editText='Edit'
      this.isEdit=!this.isEdit
      try{
        await this.projectService.Put(this.project) 
      }
      catch(err){
        console.log(err)
        alert('There was an error')
      }
    }
  }
}
