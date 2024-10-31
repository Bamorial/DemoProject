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
    if (this.project.image) {
      console.log(this.project.image)
      const blob = new Blob([this.project.image], { type: this.project.image.type });
      this.imageURL = URL.createObjectURL(blob);
      console.log(this.imageURL)
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
