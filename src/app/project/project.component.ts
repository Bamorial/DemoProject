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
export class ProjectComponent implements OnInit{
  project: Project
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService,
    public router:Router

  ){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.project = navigation.extras.state['project'];
      console.log(this.project)
    }
  } 
  async ngOnInit(): Promise<void> {
  }
}
