import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {component: HomeComponent, path: ''},
    {component: PortfolioComponent, path: 'Portfolio'},
    {component: ProjectComponent, path: 'Project/:id'},
];
RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})