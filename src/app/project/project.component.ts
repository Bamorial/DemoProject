import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit{
  project: Project
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService,

  ){

  } 
  async ngOnInit(): Promise<void> {
    let id= this.route.snapshot.paramMap.get('id')
    this.project=await this.projectService.GetById(id as string)
  }
}
