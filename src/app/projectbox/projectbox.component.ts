import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projectbox',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './projectbox.component.html',
  styleUrl: './projectbox.component.css'
})
export class ProjectboxComponent implements OnInit{
  @Input({required: true}) project!: Project
  route=''
  ngOnInit(): void {
    this.route='/Project/'+this.project.title
    console.log(this.project)

  }
  
}
