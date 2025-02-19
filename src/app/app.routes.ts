import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevisaoComponent } from './previsao/previsao.component';

const routes: Routes = [
  { path: 'previsao', component: PrevisaoComponent },
  { path: '', redirectTo: '/previsao', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
