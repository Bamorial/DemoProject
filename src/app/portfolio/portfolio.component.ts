import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';
import { ProjectboxComponent } from '../projectbox/projectbox.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, ProjectboxComponent, NgFor, RouterLink, AddProjectComponent, NgIf, NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects: Project[]=[]
  isAdd=false;
  isDelete=false
  isEdit=false;
  router: Router= new Router()
  constructor(
    public projectService: ProjectService ,
    public cdr: ChangeDetectorRef
  ){
  }
  async ngOnInit(): Promise<void> {
    await this.GetData()
  }
  async GetData(){
    this.projects= await (await this.projectService.GetAll()).reverse()
    this.isAdd=false
  }
  async OnClick(project: Project){
    if(this.isDelete){
      try{
      await this.projectService.Delete(project.title)
      this.projects.splice(this.projects.indexOf(project), 1)
      this.isDelete=!this.isDelete
      }
      catch(err){
        console.log(err)
        alert('There was an error')
      }
    }
    else if(!this.isEdit){
      console.log(project)
     this.router.navigateByUrl('/Project/'+project.title, {state:{project: project}}) 
    }
  }

}
