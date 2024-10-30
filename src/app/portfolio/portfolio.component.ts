import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';
import { ProjectboxComponent } from '../projectbox/projectbox.component';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AddProjectComponent } from '../add-project/add-project.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FormsModule, ProjectboxComponent, NgFor, RouterLink, AddProjectComponent, NgIf],
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
    this.projects=[]
    this.projects= await this.projectService.GetAll()
    this.projects=this.projects.reverse()
    this.isAdd=false
    this.cdr.detectChanges()
    console.log(this.projects)
  }
  async OnClick(project: Project){
    if(this.isDelete){
      await this.projectService.Delete(project.title).then(
        async()=>{
          await this.GetData();
        }
      )
      this.isDelete=!this.isDelete
    }
    else{
     this.router.navigateByUrl('/Project/'+project.title, {state:{project: project}}) 
    }
  }

}
