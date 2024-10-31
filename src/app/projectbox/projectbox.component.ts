import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projectbox',
  standalone: true,
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './projectbox.component.html',
  styleUrl: './projectbox.component.css'
})
export class ProjectboxComponent implements OnInit{
  @Input({required: true}) project!: Project
  @Input({required: true}) viewAll: boolean=false
  route=''
  ngOnInit(): void {
    this.route='/Project/'+this.project.title

  }
  
}
