import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import { products } from "./products.js";

async function uploadProducts() {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);

      console.log("Produto enviado:", product.id);
    }

    console.log("Todos enviados!");
  } catch (error) {
    console.error(error);
  }
}

uploadProducts();
