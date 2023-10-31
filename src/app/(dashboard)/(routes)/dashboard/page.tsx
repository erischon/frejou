"use client";

import { useState, useEffect } from "react";
import { getBudgets } from "@/utils/getBudgets";
import dayjs from "dayjs";

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
          const day = dayjs.unix(data?.budget?.month.seconds);

          console.log(day, typeof day);

          return (
            <div key={k} className="flex flex-col">
              <div>{`${dayjs(day).format("MMMM YYYY")}`}</div>
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
