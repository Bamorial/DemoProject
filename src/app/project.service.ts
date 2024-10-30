import { Injectable } from '@angular/core';
import { Project } from './models/Project';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  portfolios: Project[]=[
      { title: 'Project#1', description: 'This is the first', link:'www.hello.com', isVisible: true}, 
      { title: 'Project#2', description: 'This is the second', link:'www.hello.com', isVisible: true}, 
    ]
  constructor() { }
  async GetAll(){
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/portfolios',
      headers: {'Content-Type': 'application/json'},
    };
    let res=await axios.request(options).then(function (response) {
      console.log(response.data)
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    return res as unknown as Project[]
    
   }
   async GetById(title: string):Promise<Project>{
    for(let i in this.portfolios){
      if(this.portfolios[i].title==title)
        return this.portfolios[i]
    }
    return new Project
   }
   async Post(project:Project){
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/portfolios',
      params: {title: 'hello'},
      headers: {'Content-Type': 'application/json'},
      data: {
        title: project.title,
        description: project.description,
        image:'',
        link:project.link,
        isVisible: true
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.error(error);
    });
   }
   async Delete(title: string){
    const options = {
      method: 'DELETE',
      url: 'http://localhost:3000/portfolios',
      headers: {'Content-Type': 'application/json'},
      data: {title: title}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
   }
}
