import { Injectable } from '@angular/core';
import { Project } from './models/Project';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
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
    }) as unknown as Project[]
    for(let el of res){
      if(el.link)
      if(!el.link.startsWith('htt')){
        el.link='https://'+el.link
      }
    }
    return res as unknown as Project[]
    
   }
   async Post(project:Project){
    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('shortDescription', project.shortDescription);
    formData.append('link', project.link);
    formData.append('isVisible', project.isVisible.toString());
    if (project.image) {
      console.log(project.image)
      formData.append('image', project.image);
    }
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/portfolios',
      params: {title: 'hello'},
      headers: {'Content-Type': 'multipart/form-data'},
      data: formData
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
   async Put(project: Project){
    const formData = new FormData();
    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('link', project.link);
    formData.append('shortDescription', project.shortDescription);
    formData.append('isVisible', project.isVisible.toString());
    if (project.image) {
      formData.append('image', project.image);
    }
    const options = {
      method: 'PUT',
      url: 'http://localhost:3000/portfolios',
      headers: {'Content-Type': 'multipart/form-data'},
      data: formData
    };
    
    let res= await axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    return res

   }
}
