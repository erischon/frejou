"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  totalBudget: number;
  expenses: number;
  entertainment: number;
  savings: number;
  investment: number;
};

const formInputs = [
  {
    label: "Budget total",
    id: "totalBudget",
    register: { required: "Le budget total est requis" },
  },
  {
    label: "Charges",
    id: "expenses",
  },
  {
    label: "Loisirs",
    id: "entertainment",
  },
  {
    label: "Epargne",
    id: "savings",
  },
  {
    label: "Investissement",
    id: "investment",
  },
];

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
          {formInputs.map((input, k) => (
            <div key={k}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                type="number"
                id={input.id}
                {...register(input.id, input.register)}
              />
              <p className="error">{errors[input.id]?.message}</p>
            </div>
          ))}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
