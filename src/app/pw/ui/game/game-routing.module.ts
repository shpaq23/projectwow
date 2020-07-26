import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameComponent} from './game.component';
import {AuthGuard} from '../../../api/guards/auth.guard';
import {CharacterComponent} from './character/character.component';
import {CharacterResolver} from '../../../api/resolvers/character-resolver.service';
import {NewCharacterComponent} from './new-character/new-character.component';
import {DungeonComponent} from './dungeon/dungeon.component';
import {CharacterGuard} from '../../../api/guards/character.guard';
import {NoCharacterGuard} from '../../../api/guards/no-character.guard';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard],
    resolve: { character: CharacterResolver },
    children: [
      { path: 'character', component: CharacterComponent, canActivate: [CharacterGuard] },
      { path: 'dungeon', component: DungeonComponent, canActivate: [CharacterGuard] },
      { path: 'new', component: NewCharacterComponent, canActivate: [NoCharacterGuard] },
      { path: '', redirectTo: 'character', pathMatch: 'full' },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
