import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/api/guards/login/auth.guard';
import { CharacterGuard } from 'src/app/api/guards/character/character.guard';
import { NewCharacterGuard } from 'src/app/api/guards/character/new-character.guard';
import { CharacterResolver } from 'src/app/api/resolvers/character-resolver.service';
import { CharacterComponent } from 'src/app/pw/ui/game/character/character.component';
import { DungeonComponent } from 'src/app/pw/ui/game/dungeon/dungeon.component';
import { GameComponent } from 'src/app/pw/ui/game/game.component';
import { NewCharacterComponent } from 'src/app/pw/ui/game/new-character/new-character.component';


const routes: Routes = [
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard, CharacterGuard],
    resolve: { character: CharacterResolver },
    children: [
      { path: 'character', component: CharacterComponent },
      { path: 'dungeon', component: DungeonComponent },
      { path: '', redirectTo: 'character', pathMatch: 'full' },
    ]
  },
  {
    path: 'new-character',
    component: NewCharacterComponent,
    canActivate: [AuthGuard, NewCharacterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
