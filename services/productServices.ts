import { collection, doc, setDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../firebase/config'; // apna firebase config path
// import { ProductData, Product } from "../firebase/config";

// Product data type
// Product data type
export interface ProductData {
  productName: string;
  description: string;
  sellingPrice: number;
  category: string;
  discountValue: string;
  quantity: number;
  imageUrl?: string;
  createdAt?: any;
  updatedAt?: any;
}

// Firestore document with id and userId
export interface Product extends ProductData {
  id: string;        // Firestore document id
  userId: string;    // Kaun upload kar raha hai
}


// Product upload function (Firestore only)
export const uploadProduct = async (
  productData: ProductData
): Promise<{ success: boolean; message: string; productId?: string }> => {
  try {
    // ✅ Check: User logged in hai ya nahi
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.error("❌ User not authenticated");
      return {
        success: false,
        message: 'Please login first to upload products',
      };
    }

    console.log("✅ User authenticated:", currentUser.email);
    console.log("📦 Uploading product:", productData);

    // 🔹 Firestore me document ref, product name ke basis pe
    const productRef = doc(db, 'products', productData.productName);

    const product = {
      ...productData,
      imageUrl: productData.imageUrl || '',
      userId: currentUser.uid, // Track kaun upload kar raha hai
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    console.log("📤 Sending to Firestore...");

    // 🔹 Firestore me set karo
    await setDoc(productRef, product);

    console.log("✅ Product uploaded successfully!");

    return {
      success: true,
      message: 'Product uploaded successfully!',
      productId: productData.productName,
    };
  } catch (error: any) {
    console.error('❌ Error uploading product:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);

    // Specific error messages
    let errorMessage = 'Failed to upload product';

    if (error.code === 'permission-denied') {
      errorMessage = 'Permission denied. Check Firestore rules.';
    } else if (error.code === 'unavailable') {
      errorMessage = 'Network error. Check your internet connection.';
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    const products: Product[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, "id">),
    }));

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Test function - Firestore connection check karne ke liye
export const testFirestoreConnection = async (): Promise<boolean> => {
  try {
    console.log("🔍 Testing Firestore connection...");

    const testRef = doc(db, 'test', 'connection');
    await setDoc(testRef, {
      test: true,
      timestamp: serverTimestamp()
    });

    console.log("✅ Firestore connection working!");
    return true;
  } catch (error: any) {
    console.error("❌ Firestore connection failed:", error);
    return false;
  }
};