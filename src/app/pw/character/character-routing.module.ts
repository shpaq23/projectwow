import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { AuthGuard } from '../../guards/auth.guard';
import { NewCharacterComponent } from './new-character/new-character.component';
import { CharacterResolver } from '../../resolvers/character-resolver.service';


const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponent,
    canActivate: [AuthGuard],
    resolve: { character: CharacterResolver }
  },
  {
    path: 'character/new',
    component: NewCharacterComponent,
    canActivate: [AuthGuard],
    resolve: { character: CharacterResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
