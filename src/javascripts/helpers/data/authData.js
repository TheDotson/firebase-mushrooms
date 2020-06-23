import firebase from 'firebase/app';
import 'firebase/auth';
import mushroomList from '../../components/mushroomList/mushroomList';
import mycologistList from '../../components/mycologistList/mycologistList';

const authDiv = $('#auth');
const forestDiv = $('#forest');
const mycologistDiv = $('#hut');
const logoutButton = $('navbar-logou-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      forestDiv.removeClass('hide');
      mycologistDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      mushroomList.buildForest();
      mycologistList.buildhut();
    } else {
      authDiv.removeClass('hide');
      mycologistDiv.addClass('hide');
      forestDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
