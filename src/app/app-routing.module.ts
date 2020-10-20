import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'calculadora' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
