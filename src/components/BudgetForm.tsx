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
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  const formInputs = [
    {
      label: "Charges",
      id: "expenses",
      register: {},
    },
    {
      label: "Loisirs",
      id: "entertainment",
      register: {},
    },
    {
      label: "Epargne",
      id: "savings",
      register: {},
    },
    {
      label: "Investissement",
      id: "investment",
      register: {},
    },
  ];

  const handleTotalBudget = (e: any) => {
    setValue("expenses", (e.target.value * 60) / 100);
    setValue("entertainment", (e.target.value * 20) / 100);
    setValue("savings", (e.target.value * 15) / 100);
    setValue("investment", (e.target.value * 5) / 100);
  };

  const onSubmit = (data: FormValues) => {
    console.log("=== Form submitted", data);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Budget Mai 2023</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3 my-10"
      >
        <div>
          <label htmlFor={"totalBudget"} className="text-xl font-semibold">
            Budget total
          </label>
          <input
            type="number"
            id={"totalBudget"}
            {...register("totalBudget" as keyof FormValues, {
              required: "Le budget total est requis",
              onChange: (e: any) => handleTotalBudget(e),
            })}
            className="focus:outline-none focus:ring-0 focus:border-b-2 border-b-2 border-slate-800 focus:border-slate-400"
          />
          <p className="error">
            {errors["totalBudget" as keyof FormValues]?.message}
          </p>
        </div>

        <div>
          {formInputs.map((input, k) => (
            <div key={k}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                type="number"
                id={input.id}
                {...register(input.id as keyof FormValues, input.register)}
              />
              <p className="error">
                {errors[input.id as keyof FormValues]?.message}
              </p>
            </div>
          ))}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
