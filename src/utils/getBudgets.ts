import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "@/lib/firebase";

export async function getBudgets(): Promise<any> {
  const budgets: any[] = [];

  const querySnapshot = await getDocs(collection(db, "budgets"));

  querySnapshot.forEach((doc) => {
    const budget = { id: doc.id, ...doc.data() };

    budgets.push(budget);
  });

  return budgets;
}
