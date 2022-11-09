import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCxgnLyVzKkfYmClMZ3t6eqbJfl8GrJiU',
  authDomain: 'test-9cbef.firebaseapp.com',
  projectId: 'test-9cbef',
  storageBucket: 'test-9cbef.appspot.com',
  messagingSenderId: '833989992189',
  appId: '1:833989992189:web:d88df94ba57188ef4f6894',
};

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeLoginBtn: document.querySelector('[data-login-close]'),
  closeRegBtn: document.querySelector('[data-register-close]'),
  closeResultBtn: document.querySelector('[data-result-close]'),
  modal: document.querySelector('[data-auth-modal]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeLoginBtn.addEventListener('click', toggleModal);
refs.closeRegBtn.addEventListener('click', toggleModal);
refs.closeResultBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
  document.getElementById('register-div').style.display = 'none';
  document.getElementById('login-div').style.display = 'inline';
  document.getElementById('result-box').style.display = 'none';
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (auth.currentUser !== null) {
    refs.openModalBtn.style.display = 'none';
    document.getElementById('auth-btn-icon').style.display = 'none';
    document.getElementById('log-out-btn').style.display = 'block';
    document.getElementById('log-out-btn').innerHTML =
      'USER: ' + auth.currentUser.email + '<br>LOG OUT';
  } else {
    refs.openModalBtn.style.display = 'inline';
    document.getElementById('auth-btn-icon').style.display = 'inline';
  }
});

document.getElementById('reg-btn').addEventListener('click', function () {
  document.getElementById('register-div').style.display = 'inline';
  document.getElementById('login-div').style.display = 'none';
});
document.getElementById('log-btn').addEventListener('click', function () {
  document.getElementById('register-div').style.display = 'none';
  document.getElementById('login-div').style.display = 'inline';
});

document.getElementById('login-btn').addEventListener('click', function () {
  const loginEmail = document.getElementById('login-email').value;
  const loginPassword = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(userCredential => {
      const user = userCredential.user;
      document.getElementById('result-box').style.display = 'inline';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('result').innerHTML =
        'Welcome back!<br> ' +
        auth.currentUser.email +
        ' was login successfully';
      document.getElementById('result-box').style.textAlign = 'center';
      refs.openModalBtn.style.display = 'none';
      document.getElementById('auth-btn-icon').style.display = 'none';
      document.getElementById('log-out-btn').style.display = 'block';
      document.getElementById('log-out-btn').innerHTML =
        'USER: ' + auth.currentUser.email + '<br>LOG OUT';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display = 'inline';
      document.getElementById('login-div').style.display = 'none';
      document.getElementById('result').innerHTML =
        'Sorry! <br> Something is wrang.<br>' +
        'Please check your email or password.';
      document.getElementById('result').style.textAlign = 'center';
    });
});

document.getElementById('register-btn').addEventListener('click', function () {
  const registerEmail = document.getElementById('register-email').value;
  const registerPassword = document.getElementById('register-password').value;
  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then(userCredential => {
      const user = userCredential.user;
      document.getElementById('result-box').style.display = 'inline';
      document.getElementById('register-div').style.display = 'none';
      document.getElementById('result').innerHTML =
        'Welcome! <br> ' + registerEmail + ' was registered successfully';
      document.getElementById('result').style.textAlign = 'center';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display = 'inline';
      document.getElementById('register-div').style.display = 'none';
      document.getElementById('result').innerHTML =
        'Sorry! <br> Something is wrang.<br>' +
        'Check your email or password please.';
      document.getElementById('result-box').style.textAlign = 'center';
    });
});

document.getElementById('log-out-btn').addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      document.getElementById('result-box').style.display = 'none';
      document.getElementById('login-div').style.display = 'inline';
      refs.openModalBtn.style.display = 'inline';
      document.getElementById('auth-btn-icon').style.display = 'inline';
      document.getElementById('log-out-btn').style.display = 'none';
    })
    .catch(error => {
      document.getElementById('result').innerHTML =
        'Sorry! <br> Something is wrang.<br>';
      document.getElementById('result').style.textAlign = 'center';
    });
});
