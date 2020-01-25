export class PhaserCharacterAnimationFramesGenerator {

  private readonly spritesInRow = 13;
  private readonly numberOfRows = 21;

  constructor() {}

  getMoveUpAnimationFrames(): number[] {
    const animationLength = 9;
    const animationRow = 8;
    return this.generateFrames(animationLength, animationRow);
  }

  getMoveDownAnimationFrames(): number[] {
    const animationLength = 9;
    const animationRow = 10;
    return this.generateFrames(animationLength, animationRow);
  }

  getMoveLeftAnimationFrames(): number[] {
    const animationLength = 9;
    const animationRow = 9;
    return this.generateFrames(animationLength, animationRow);
  }

  getMoveRightAnimationFrames(): number[] {
    const animationLength = 9;
    const animationRow = 11;
    return this.generateFrames(animationLength, animationRow);
  }

  private generateFrames(animationLength: number, animationRow: number): number[] {
    const frames: number[] = [];
    const startFrame = (animationRow * this.spritesInRow);
    for (let i = startFrame; i < (startFrame + animationLength); i++) {
      frames.push(i);
    }
    return frames;
  }

}
