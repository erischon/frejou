import { collection, addDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function addBudget(budget: any): Promise<void> {
  try {
    const docRef = await addDoc(collection(db, "budgets"), {
      budget: budget,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
