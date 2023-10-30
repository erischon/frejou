"use client";

import { useState, useEffect } from "react";
import { getBudgets } from "@/utils/getBudgets";

export default function DashboardPage() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const budgets = async () => {
      const data = await getBudgets();

      console.log(data);

      setBudgets(data);
    };

    budgets();
  }, []);

  return (
    <>
      <div>
        <h1>Dashboard</h1>

        {budgets.map((data: any, k) => {
          const date = new Date(data?.budget?.month);

          return (
            <div key={k} className="flex flex-col">
              <div>{`${date.getMonth() + 1} ${date.getFullYear()}`}</div>
              <div>{`Budget Total : ${data?.budget?.totalBudget}`}</div>
              <div>{`Charges : ${data?.budget?.expenses}`}</div>
              <div>{`Loisirs : ${data?.budget?.entertainment}`}</div>
              <div>{`Epargne : ${data?.budget?.savings}`}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
