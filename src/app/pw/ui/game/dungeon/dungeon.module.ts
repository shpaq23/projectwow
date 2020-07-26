import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DungeonComponent } from './dungeon.component';
import { PhaserModule } from '../../../../phaser/PhaserModule';


@NgModule({
  declarations: [DungeonComponent],
  imports: [
    CommonModule,
    PhaserModule
  ]
})
export class DungeonModule {}
