"use client";

import { useForm } from "react-hook-form";

import { addBudget } from "@/utils/addBudget";

type FormValues = {
  month: Date;
  totalBudget: number;
  expenses: number;
  entertainment: number;
  savings: number;
  investments: number;
};

const CURRENT_MONTH = new Date();

export function BudgetForm() {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  console.log(CURRENT_MONTH);

  const formInputs = [
    {
      label: "Charges",
      id: "expenses",
      register: {
        valueAsNumber: true,
      },
      percent: 60,
    },
    {
      label: "Loisirs",
      id: "entertainment",
      register: {
        valueAsNumber: true,
      },
      percent: 20,
    },
    {
      label: "Epargne",
      id: "savings",
      register: {
        valueAsNumber: true,
      },
      percent: 15,
    },
    {
      label: "Investissement",
      id: "investments",
      register: {
        valueAsNumber: true,
      },
      percent: 5,
    },
  ];

  const handleTotalBudget = (e: any) => {
    formInputs.forEach((input) => {
      setValue(
        input.id as keyof FormValues,
        (e.target.value * input.percent) / 100
      );
    });
  };

  const onSubmit = (data: FormValues) => {
    console.log(CURRENT_MONTH);
    data.month = CURRENT_MONTH;

    addBudget(data);

    console.log("=== Form submitted", data);
  };

  return (
    <main className="max-w-md">
      <h1 className="text-3xl font-semibold">Budget Mai 2023</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-3 my-10"
      >
        <div className="grid grid-cols-2 w-full">
          <label htmlFor={"totalBudget"} className="text-xl font-semibold">
            Budget total
          </label>

          <input
            type="number"
            id={"totalBudget"}
            {...register("totalBudget" as keyof FormValues, {
              required: "Le budget total est requis",
              onChange: (e: any) => handleTotalBudget(e),
              valueAsNumber: true,
            })}
            className="w-16 text-lg text-right focus:outline-none focus:ring-0 focus:border-b-2 border-b-2 border-slate-800 focus:border-slate-400 "
          />

          <p className="error">
            {errors["totalBudget" as keyof FormValues]?.message}
          </p>
        </div>

        <div>
          {formInputs.map((input, k) => (
            <div key={k} className="grid grid-cols-2 w-full">
              <label htmlFor={input.id}>{`Budget ${input.label}`}</label>

              <input
                type="number"
                id={input.id}
                {...register(input.id as keyof FormValues, input.register)}
                readOnly={true}
                className="w-16 text-lg text-right focus:outline-none focus:ring-0"
              />
              <p className="error">
                {errors[input.id as keyof FormValues]?.message}
              </p>
            </div>
          ))}
        </div>

        <button className="bg-sky-600 text-lg font-semibold text-sky-50 py-2 px-6 shadow-md w-fit mx-auto">
          Submit
        </button>
      </form>
    </main>
  );
}
