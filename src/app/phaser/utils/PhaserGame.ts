import { PhaserWorldScene } from '../scenes/PhaserWorldScene';
import { PhaserBootScene } from '../scenes/PhaserBootScene';
import { PHASER_CONFIG } from './PhaserConfig';

export class PhaserGame extends Phaser.Game {

  constructor() {
    super(PHASER_CONFIG);
    this.scene.add(PhaserBootScene.SCENE_ID, new PhaserBootScene(), true);
    this.scene.add(PhaserWorldScene.SCENE_ID, new PhaserWorldScene());
  }
}
