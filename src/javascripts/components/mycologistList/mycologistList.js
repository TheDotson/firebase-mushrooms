import mycologistComponent from '../mycologist/mycologist';
import singleMycologist from '../singleMycologist/singleMycologist';
import mycologistData from '../../helpers/data/mycologistData';
import utils from '../../helpers/utils';

const buildhut = () => {
  mycologistData.getMycologists()
    .then((mycologists) => {
      console.warn('Get Mycologists worked!!', mycologists);
      let domString = `
        <h2 class="text-center">Hut</h2>
        <div class="d-flex flex-wrap">
      `;

      mycologists.forEach((mycologist) => {
        domString += mycologistComponent.mycologistMaker(mycologist);
      });

      domString += '</div>';

      utils.printToDom('#hut', domString);

      $('body').on('click', '.myco-card', singleMycologist.buildMycologist);
    })
    .catch((err) => console.error('get mycologists broke :/', err));
};

export default { buildhut };
