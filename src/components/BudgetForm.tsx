"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  totalBudget: number;
  expenses: number;
  entertainment: number;
  savings: number;
  investment: number;
};

export function BudgetForm() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("=== Form submitted", data);
  };

  return (
    <div>
      <h1>Budget Mai 2023</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3"
      >
        <div>
          <label htmlFor="totalBudget">Budget total</label>
          <input
            type="number"
            id="totalBudget"
            {...register("totalBudget", {
              required: "Le budget total est requis",
            })}
          />

          <p className="error">{errors.totalBudget?.message}</p>
        </div>

        <div>
          <label htmlFor="expenses">Charges</label>
          <input type="number" id="expenses" {...register("expenses")} />
        </div>

        <div>
          <label htmlFor="entertainment">Loisirs</label>
          <input
            type="number"
            id="entertainment"
            {...register("entertainment")}
          />
        </div>

        <div>
          <label htmlFor="savings">Epargne</label>
          <input type="number" id="savings" {...register("savings")} />
        </div>

        <div>
          <label htmlFor="investment">Investissement</label>
          <input type="number" id="investment" {...register("investment")} />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
