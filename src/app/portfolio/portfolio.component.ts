import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';
import { ProjectboxComponent } from '../projectbox/projectbox.component';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectboxComponent, NgFor, RouterLink, AddProjectComponent, NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects: Project[]=[]
  isAdd=false;
  isDelete=false
  router: Router= new Router()
  constructor(
    public projectService: ProjectService 
  ){
  }
  async ngOnInit(): Promise<void> {
    await this.GetData()
  }
  async GetData(){
    this.projects= await this.projectService.GetAll()
    this.projects=this.projects.reverse()
    this.isAdd=false
    console.log(this.projects)
  }
  async OnClick(title: string){
    if(this.isDelete){
      await this.projectService.Delete(title)
      await this.GetData()
    }
    else{
     this.router.navigateByUrl('/Project/'+title) 
    }
  }

}
