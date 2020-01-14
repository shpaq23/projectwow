import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonComponent } from './dungeon.component';
import { PhaserModule } from '../../../phaser/PhaserModule';
import { DungeonRoutingModule } from './dungeon-routing.module';


@NgModule({
  declarations: [DungeonComponent],
  imports: [
    CommonModule,
    PhaserModule,
    DungeonRoutingModule
  ]
})
export class DungeonModule {}
