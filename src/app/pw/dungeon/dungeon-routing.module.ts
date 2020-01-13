import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DungeonComponent } from './dungeon.component';
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  {
    path: 'dungeon',
    component: DungeonComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DungeonRoutingModule {
}
