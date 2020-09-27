import { animals } from './index';

async function getAnimals(reqData) {
  return await animals.get(
    `AbdmAnimalProtect?KEY=3d1064943f38403f857c7b59079e5934&Type=json&pSize=10&pIndex=${reqData.pIndex}&SIGUN_NM=${reqData.SIGUN_NM}&STATE_NM=${reqData.STATE_NM}&PBLANC_BEGIN_DE=${reqData.PBLANC_BEGIN_DE}&PBLANC_END_DE=${reqData.PBLANC_END_DE}&SPECIES_NM=${reqData.SPECIES_NM}&SHTER_NM=${reqData.SHTER_NM}`,
  );
}

export { getAnimals };
