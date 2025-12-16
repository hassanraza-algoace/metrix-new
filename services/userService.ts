import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase/config'; // apna firebase config path
// import { useAuthStore } from '../src/store/authStore'; // apna auth store path

// User profile data type
export interface UserProfileData {
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
}

// Complete user data type (Firestore mein save hone wala)
export interface UserData extends UserProfileData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  createdAt?: string;
  updatedAt: string;
}

// Update user profile function
export const updateUserProfile = async (
  profileData: UserProfileData
): Promise<{ success: boolean; message: string; error?: string }> => {
  try {
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      return {
        success: false,
        message: "User not authenticated",
        error: "NO_USER",
      };
    }

    // Firestore mein user document update karo
    const userRef = doc(db, "users", currentUser.uid);
    
    const updateData = {
      ...profileData,
      updatedAt: new Date().toISOString(),
    };

    await updateDoc(userRef, updateData);

    return {
      success: true,
      message: "Profile updated successfully!",
    };
  } catch (error: any) {
    console.error("Error updating profile:", error);
    return {
      success: false,
      message: "Failed to update profile",
      error: error.code || error.message,
    };
  }
};

// Individual field update functions
export const updatePhoneNumber = async (
  phoneNumber: string
): Promise<{ success: boolean; message: string }> => {
  return updateUserProfile({ phoneNumber });
};

export const updateAddress = async (
  address: string
): Promise<{ success: boolean; message: string }> => {
  return updateUserProfile({ address });
};

export const updateCity = async (
  city: string
): Promise<{ success: boolean; message: string }> => {
  return updateUserProfile({ city });
};

export const updateState = async (
  state: string
): Promise<{ success: boolean; message: string }> => {
  return updateUserProfile({ state });
};

// Multiple fields ek saath update karne ke liye
export const updateUserAddress = async (
  address: string,
  city: string,
  state: string
): Promise<{ success: boolean; message: string }> => {
  return updateUserProfile({ address, city, state });
};

// Get current user profile data
export const getUserProfile = async (): Promise<{
  success: boolean;
  data?: UserData;
  message: string;
}> => {
  try {
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    const userRef = doc(db, "users", currentUser.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return {
        success: true,
        data: userSnap.data() as UserData,
        message: "Profile fetched successfully",
      };
    } else {
      return {
        success: false,
        message: "User profile not found",
      };
    }
  } catch (error: any) {
    console.error("Error fetching profile:", error);
    return {
      success: false,
      message: "Failed to fetch profile",
    };
  }
};

// Complete profile update with all fields
export const updateCompleteProfile = async (
  displayName?: string,
  phoneNumber?: string,
  address?: string,
  city?: string,
  state?: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      return {
        success: false,
        message: "User not authenticated",
      };
    }

    const userRef = doc(db, "users", currentUser.uid);
    
    const updateData: any = {
      updatedAt: new Date().toISOString(),
    };

    if (displayName) updateData.displayName = displayName;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;
    if (address) updateData.address = address;
    if (city) updateData.city = city;
    if (state) updateData.state = state;

    await updateDoc(userRef, updateData);

    return {
      success: true,
      message: "Profile updated successfully!",
    };
  } catch (error: any) {
    console.error("Error updating complete profile:", error);
    return {
      success: false,
      message: "Failed to update profile",
    };
  }
};