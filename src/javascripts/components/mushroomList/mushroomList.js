import mushroomData from '../../helpers/data/mushroomData';
// import utils from '../../helpers/utils';

const buildForest = () => {
  mushroomData.getMushrooms()
    .then((mushrooms) => console.warn('get mushrooms worked!!', mushrooms))
    .catch((err) => console.error('get mushrooms broke', err));
  // const domString = 'I see mushrooms for reals';
  // utils.printToDom('#forest', domString);
};

export default { buildForest };
