import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects: Project[]=[]
  constructor(
    public projectService: ProjectService 
  ){
  }
  async ngOnInit(): Promise<void> {
    this.projects= await this.projectService.Get()
    console.log(this.projects)
  }

}
