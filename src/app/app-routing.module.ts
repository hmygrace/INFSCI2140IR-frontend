import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { SavedComponent } from './components/saved/saved.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: "", component: JobsComponent },
      { path: "jobs", component: JobsComponent },
      { path: "saved", component: SavedComponent },
    ],
    component: HomeComponent
  },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
