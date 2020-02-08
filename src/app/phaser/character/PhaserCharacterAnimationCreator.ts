import { PhaserLPCAnimationCreator } from '../utils/animations/PhaserLPCAnimationCreator';

export class PhaserCharacterAnimationCreator extends PhaserLPCAnimationCreator {

  constructor(animationManager: Phaser.Animations.AnimationManager, textureKey: string) {
    super(animationManager, textureKey);
  }
}
