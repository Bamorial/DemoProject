import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {component: HomeComponent, path: ''},
    {component: PortfolioComponent, path: 'Portfolio'},
];
RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})