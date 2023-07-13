import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TutorComponent } from './tutor/tutor.component';
import { TutoriaComponent } from './tutoria/tutoria.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  {path:'tutoria',component:TutoriaComponent},
  {path:'tutor',component:TutorComponent},
  {path:'estudiante',component:EstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
