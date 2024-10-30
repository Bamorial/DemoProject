import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  @Output() resetEvent= new EventEmitter<boolean>()
  project: Project={title:'', description:'', link:'', isVisible:true}
  constructor(
    public projectService: ProjectService
  ){
  }
  async Post(){
   await this.projectService.Post(this.project) 
   this.resetEvent.emit()
  }
}
