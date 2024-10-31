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
  project: Project={title:'',shortDescription:'', description:'', link:'', isVisible:true, image:new File([],'')}
  constructor(
    public projectService: ProjectService
  ){
  }
  async Post(){
    try{
   await this.projectService.Post(this.project).then(()=>{
    this.resetEvent.emit()
   })
  }
  catch(err){
    console.log(err)
    alert('There is an error')
  }
  }
  onFileSelected(event: any) {
    this.project.image = event.target.files[0];
  }
}
