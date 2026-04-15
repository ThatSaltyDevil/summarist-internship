import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider
 } from "firebase/auth";
import { 
    getFirestore,
    addDoc,
    collection
 } from "firebase/firestore";
import { auth, app } from "./init";

const db = getFirestore(app);

const signup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    console.log("User signed up:", userCredential.user);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("User logged in:", userCredential.user);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    console.log("User logged in with Google:", userCredential.user);
  } catch (error) {
    console.error("Error logging in with Google:", error);
  }
};


const logout = async () => {
    await signOut(auth);
  }

export { signup, login, loginWithGoogle,  logout };