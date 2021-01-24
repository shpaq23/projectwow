import { LPCFemaleHairEnum } from 'src/app/LPC/enums/female/LPC-female-hair.enum';
import { LPCFemaleSpecialEnum } from 'src/app/LPC/enums/female/LPC-female-special.enum';
import { LPCChestEnum } from 'src/app/LPC/enums/LPC-chest.enum';
import { LPCEyesEnum } from 'src/app/LPC/enums/LPC-eyes.enum';
import { LPCHairColorEnum } from 'src/app/LPC/enums/LPC-hair-color.enum';
import { LPCLegsEnum } from 'src/app/LPC/enums/LPC-legs.enum';
import { LPCRaceEnum } from 'src/app/LPC/enums/LPC-race.enum';
import { LPCWeaponEnum } from 'src/app/LPC/enums/LPC-weapon.enum';
import { LPCMaleHairEnum } from 'src/app/LPC/enums/male/LPC-male-hair.enum';
import { LPCMaleRaceEnum } from 'src/app/LPC/enums/male/LPC-male-race.enum';
import { LPCFemaleLook } from 'src/app/LPC/LPCFemaleLook';
import { LPCMaleLook } from 'src/app/LPC/LPCMaleLook';

describe('LPCLook', () => {

  const SKELETON_RANGER = new LPCMaleLook(
    LPCMaleRaceEnum.SKELETON,
    LPCEyesEnum.ORANGE,
    LPCMaleHairEnum.MESSY,
    LPCHairColorEnum.GREEN,
    null,
    LPCLegsEnum.MAGENTA_PANTS,
    null,
    LPCChestEnum.BROWN_SHIRT,
    null,
    null,
    null,
    LPCWeaponEnum.BOW,
    null
  );

  const DARK_ELF_RANGER = new LPCFemaleLook(
    LPCRaceEnum.DARK_ELF,
    LPCEyesEnum.RED,
    LPCFemaleHairEnum.PRINCESS,
    LPCHairColorEnum.GREEN,
    null,
    null,
    null,
    LPCChestEnum.LEATHER_CHEST,
    null,
    null,
    null,
    LPCWeaponEnum.BOW,
    LPCFemaleSpecialEnum.CAPE_MAROON
  );


  it('should return proper urls for SKELETON RANGER', () => {
    expect(SKELETON_RANGER.getRaceUrl()).toBe('LPC/male/race/skeleton.png');
    expect(SKELETON_RANGER.getWeaponUrl()).toBe('LPC/male/weapon/bow_skeleton.png');
    expect(SKELETON_RANGER.getQuiverUrl()).toBe('LPC/male/weapon/quiver.png');
    expect(SKELETON_RANGER.getArrowUrl()).toBe('LPC/male/weapon/arrow_skeleton.png');
    expect(SKELETON_RANGER.getBootsUrl()).toBeFalsy();
    expect(SKELETON_RANGER.getSpecialUrl()).toBeFalsy();
    expect(SKELETON_RANGER.getEarsUrl()).toBeFalsy();
  });

  it('should return proper urls for DARK_ELF_RANGER', () => {
    expect(DARK_ELF_RANGER.getRaceUrl()).toBe('LPC/female/race/darkelf.png');
    expect(DARK_ELF_RANGER.getEarsUrl()).toBe('LPC/female/ears/elvenears_darkelf.png');
    expect(DARK_ELF_RANGER.getWeaponUrl()).toBe('LPC/female/weapon/bow.png');
    expect(DARK_ELF_RANGER.getQuiverUrl()).toBe('LPC/female/weapon/quiver.png');
    expect(DARK_ELF_RANGER.getArrowUrl()).toBe('LPC/female/weapon/arrow.png');
    expect(DARK_ELF_RANGER.getSpecialUrl()).toBe('LPC/female/special/cape_maroon.png');

  });

});
