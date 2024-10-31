import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class ProjectComponent {
  project: Project
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService,
    public router:Router

  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.project = navigation.extras.state['project'];   //i already had this data on the other page so I haven't done another fetch
      console.log(this.project)
    }
  } 
}
