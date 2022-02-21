import { signInWithPopup } from 'firebase/auth';
import { auth, provider, storage } from '../firebase';
import { SET_USER, SIGN_OUT } from '../actions/actionType';
import db from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';

export const SignInAPI = () => async (dispatch) => {
  try {
    const response = await signInWithPopup(auth, provider);
    dispatch({ type: SET_USER, payload: response });
  } catch (error) {
    console.log(error);
  }
};

// export const getUserAuth = () => async (dispatch) => {
//   try {
//     await firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         dispatch({ type: SET_USER });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const SignOutAPI = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({ type: SIGN_OUT });
  } catch (error) {
    console.log(error);
  }
};

export const postArticleAPI = (image, user) => async (dispatch) => {
  try {
    console.log(image);
    if (image == null) return;

    await uploadBytes(ref(storage, `/images/${image.name}`));

    console.log('Uploaded a blob or file!');
  } catch (error) {
    console.log(error);
  }
};
