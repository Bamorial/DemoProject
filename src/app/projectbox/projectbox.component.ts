import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projectbox',
  standalone: true,
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './projectbox.component.html',
  styleUrl: './projectbox.component.css'
})
export class ProjectboxComponent implements OnInit{
  constructor(
    public projectService: ProjectService
  ){

  }
  @Input({required: true}) project!: Project
  @Input({required: true}) viewAll: boolean=false
  route=''
  imageURL: string |ArrayBuffer | null=null
  ngOnInit(): void {
    this.route='/Project/'+this.project.title
    let image: any= this.project.image
    if (this.project.image) {
      const uint8Array = new Uint8Array(image.buffer.data);
      const blob = new Blob([uint8Array], { type: image.mimetype });
      this.imageURL = URL.createObjectURL(blob);
    } 

  }
  async Update(project: Project){
    try{
      let res= await this.projectService.Put(project);
    }
    catch(err){
      console.log(err)
      alert('There was an error')
    }
  }
  
}
