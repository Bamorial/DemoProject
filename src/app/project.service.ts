import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  Get(){
    return [
      {title: 'Project#1', description: 'This is the first', link:'www.hello.com', isVisible: true}, 
      {title: 'Project#2', description: 'This is the second', link:'www.hello.com', isVisible: true}, 
    ]
  }
}
