"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validators";

import type { Dictionary } from "@/types/dictionary";

interface HeroFormProps {
  dictionary: Dictionary;
}

export function HeroForm({ dictionary }: HeroFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);

    setSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-5">
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder={dictionary.contact.name}
          className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 sm:px-5 sm:py-3.5"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <input
          {...register("location")}
          placeholder={dictionary.contact.location}
          className="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-sm outline-none transition focus:border-emerald-500 sm:px-5 sm:py-3.5"
        />

        {errors.location && (
          <p className="mt-1 text-sm text-red-600">
            {errors.location.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-600 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg disabled:opacity-70 sm:px-5 sm:py-3.5"
      >
        {isSubmitting ? "Submitting..." : dictionary.contact.submit}
      </button>

      {submitted && (
        <p className="text-center text-sm font-medium text-emerald-700">
          {dictionary.contact.successDescription}
        </p>
      )}
    </form>
  );
}

export default HeroForm;