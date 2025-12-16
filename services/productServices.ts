// import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../firebase/config'; // apna firebase config path

// // Product data type
// export interface ProductData {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   stock: number;
//   imageUrl?: string;
//   createdAt?: any;
//   updatedAt?: any;
// }

// // Product upload function (Firestore only)
// export const uploadProduct = async (
//   productData: ProductData
// ): Promise<{ success: boolean; message: string; productId?: string }> => {
//   try {
//     // 🔹 Firestore me document ref, product name ke basis pe
//     const productRef = doc(db, 'products', productData.name);

//     const product = {
//       ...productData,
//       imageUrl: productData.imageUrl || '',
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp(),
//     };

//     // 🔹 Firestore me set karo
//     await setDoc(productRef, product);

//     return {
//       success: true,
//       message: 'Product uploaded successfully!',
//       productId: productData.name,
//     };
//   } catch (error: any) {
//     console.error('Error uploading product:', error);
//     return {
//       success: false,
//       message: error.message || 'Failed to upload product',
//     };
//   }
// };
