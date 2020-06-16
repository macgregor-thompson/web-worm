import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, ExtraOptions } from '@angular/router';

import { HomeComponent } from './_core/components/home/home.component';
import { AboutComponent } from './_core/components/about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Articles' } },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: '**', redirectTo: '' }
];

const routeConfig = {
  preloadingStrategy: PreloadAllModules,
  enableTracing: false,
} as ExtraOptions;

@NgModule({
  imports: [RouterModule.forRoot(routes, routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
