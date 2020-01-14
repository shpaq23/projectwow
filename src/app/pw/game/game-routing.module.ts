import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GameComponent} from './game.component';
import {AuthGuard} from '../../guards/auth.guard';
import {CharacterComponent} from './character/character/character.component';
import {CharacterResolver} from '../../resolvers/character-resolver.service';
import {NewCharacterComponent} from './character/new-character/new-character.component';
import {DungeonComponent} from './dungeon/dungeon.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'character',
        component: CharacterComponent,
        resolve: { character: CharacterResolver },
        children: [
          {
            path: 'new',
            component: NewCharacterComponent
          }
        ]
      },
      { path: 'dungeon', component: DungeonComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
