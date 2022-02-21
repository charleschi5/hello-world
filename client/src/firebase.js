import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Cn4PzKfpZZMu-wix-kzMMuFPJB4BeMA',
  authDomain: 'linkedin-clone-project-8a27f.firebaseapp.com',
  projectId: 'linkedin-clone-project-8a27f',
  storageBucket: 'linkedin-clone-project-8a27f.appspot.com',
  messagingSenderId: '733822830303',
  appId: '1:733822830303:web:f0aac8b88e7cee7d3ccb6a',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export { auth, storage, provider };
export default db;
