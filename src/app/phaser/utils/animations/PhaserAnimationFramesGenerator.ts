export abstract class PhaserAnimationFramesGenerator {

  abstract getMoveUpAnimationFrames(): number[];

  abstract getMoveLeftAnimationFrames(): number[];

  abstract getMoveDownAnimationFrames(): number[];

  abstract getMoveRightAnimationFrames(): number[];

  abstract getAttackUpAnimationFrames(): number[];

  abstract getAttackLeftAnimationFrames(): number[];

  abstract getAttackDownAnimationFrames(): number[];

  abstract getAttackRightAnimation(): number[];

}
