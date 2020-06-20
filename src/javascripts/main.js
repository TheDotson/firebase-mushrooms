import '../styles/main.scss';
import 'bootstrap';
import firebase from 'firebase/app';
import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';

const init = () => {
firebase.initializeApp(apiKeys.firebaseConfig);
authData.checkLoginStatus();
auth.loginButton();
myNavbar.logoutEvent();
};

init();
