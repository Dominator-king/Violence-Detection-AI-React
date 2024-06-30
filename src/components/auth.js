import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const doCreateUserWIthEmailAndPass = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const doSignInWithEmailAndPass = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const doSignOut = async () => {
  try {
    const status = await auth.signOut();
    console.log("Signed Out");
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const doResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password Reset Email Sent");
  } catch (error) {
    console.log(error);
  }
};
