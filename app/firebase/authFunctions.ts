import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  linkWithCredential,
  linkWithPopup,
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
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
      subscription: "Basic",
    });
    console.log("User signed up:", userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error("Error signing up:", error);

    if (error.code === "auth/email-already-in-use") {
      // Check if the existing account uses Google
      try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.includes("google.com")) {
          return {
            success: false,
            error:
              "This email is already associated with a Google account. Please use Google login.",
            code: "auth/email-already-in-use-google",
            providers: methods,
          };
        }
      } catch (fetchError) {
        console.error("Error fetching sign-in methods:", fetchError);
      }
    }

    return {
      success: false,
      error: error.message || "Signup failed",
      code: error.code,
    };
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
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error("Error logging in:", error);

    // Handle specific auth errors
    if (
      error.code === "auth/invalid-credentials" ||
      error.code === "auth/wrong-password"
    ) {
      // Check if this email has other sign-in methods (like Google)
      try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.includes("google.com")) {
          return {
            success: false,
            error:
              "This email is associated with a Google account. Please use Google login or link your accounts first.",
            code: "auth/account-exists-with-different-credential",
            providers: methods,
          };
        }
      } catch (fetchError) {
        console.error("Error fetching sign-in methods:", fetchError);
      }
    }

    return {
      success: false,
      error: error.message || "Login failed",
      code: error.code,
    };
  }
};

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const userCredential = await signInWithPopup(auth, provider);
    console.log("User logged in with Google:", userCredential.user);
    return { success: true, user: userCredential.user };
  } catch (error: any) {
    console.error("Error logging in with Google:", error);

    if (error.code === "auth/account-exists-with-different-credential") {
      // Handle the case where the email already exists with different provider
      const email = error.customData?.email;
      if (email) {
        return {
          success: false,
          error:
            "This email is already associated with an account. Please sign in with your password first, then link your Google account.",
          code: error.code,
          email: email,
        };
      }
    }

    return {
      success: false,
      error: error.message || "Google login failed",
      code: error.code,
    };
  }
};

const linkGoogleAccount = async (email: string, password: string) => {
  try {
    // First sign in with email/password
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Then link Google account
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    const linkedResult = await linkWithPopup(user, provider);

    console.log("Google account linked successfully:", linkedResult.user);
    return { success: true, user: linkedResult.user };
  } catch (error: any) {
    console.error("Error linking Google account:", error);

    if (error.code === "auth/credential-already-in-use") {
      return {
        success: false,
        error: "This Google account is already linked to another account.",
        code: error.code,
      };
    }

    return {
      success: false,
      error: error.message || "Failed to link Google account",
      code: error.code,
    };
  }
};

const logout = async () => {
  await signOut(auth);
};

export { signup, login, loginWithGoogle, linkGoogleAccount, logout };
