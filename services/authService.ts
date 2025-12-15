// authService.ts

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useAuthStore } from "../src/store/authStore";

// --- Types for better type safety (Best Practice) ---
interface AuthResult {
  success: boolean;
  user?: FirebaseUser | null;
  error?: string;
  message: string;
}

// --- Internal Utility Function ---
/**
 * Maps Firebase Auth error codes to user-friendly messages.
 * @param errorCode - The Firebase error code string.
 * @returns A user-friendly error message.
 */
const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "This email is already registered";
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/weak-password":
      return "Password should be at least 6 characters";
    case "auth/user-not-found":
      return "No account found with this email";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later";
    case "auth/network-request-failed":
      return "Network error. Check your connection";
    default:
      return "An error occurred. Please try again";
  }
};

// --- Exported Auth Functions ---

/**
 * Sets up the Firebase Auth state listener and manages the global store.
 * @returns An unsubscribe function.
 */
export const initAuthListener = () => {
  const { setUser, setLoading } = useAuthStore.getState();
  setLoading(true);

  // Return the unsubscribe function provided by onAuthStateChanged
  return onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      // Clean, optional chaining for safety, though Firebase guarantees uid/email
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email ?? null,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
      });
    } else {
      setUser(null);
    }
    setLoading(false);
  });
};

/**
 * Registers a new user with email, password, and display name.
 */
export const signup = async (
  email: string,
  password: string,
  displayName: string
): Promise<AuthResult> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update user profile with display name
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });

      // Update store with user data
      const { setUser } = useAuthStore.getState();
      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email ?? null,
        displayName: displayName,
        photoURL: userCredential.user.photoURL,
      });
    }

    return {
      success: true,
      user: userCredential.user,
      message: "Account created successfully!",
    };
  } catch (error: any) {
    // Error handling is centralized and uses our utility function
    return {
      success: false,
      error: error.code,
      message: getErrorMessage(error.code),
    };
  }
};

/**
 * Logs in an existing user with email and password.
 */
export const login = async (
  email: string,
  password: string
): Promise<AuthResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Update store with user data
    const { setUser } = useAuthStore.getState();
    setUser({
      uid: userCredential.user.uid,
      email: userCredential.user.email ?? null,
      displayName: userCredential.user.displayName,
      photoURL: userCredential.user.photoURL,
    });

    return {
      success: true,
      user: userCredential.user,
      message: "Login successful!",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.code,
      message: getErrorMessage(error.code),
    };
  }
};

/**
 * Logs out the current user.
 */
export const logout = async (): Promise<AuthResult> => {
  try {
    console.log("Hello");
    await signOut(auth);
    const { logout: clearStore } = useAuthStore.getState(); // Renaming to avoid clash
    clearStore();

    return {
      success: true,
      message: "Logged out successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.code,
      message: "Error logging out", // Simple message for logout failure
    };
  }
};

/**
 * Retrieves the current Firebase user object.
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};