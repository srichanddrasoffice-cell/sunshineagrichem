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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
    space-y-4
    rounded-2xl
    bg-transparent"
    >
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder={`👨‍🌾 ${dictionary.contact.name}`}
          className="
    h-10
    w-full
    border-2
    border-slate-200
    bg-slate-50
    px-4
    text-lg
    font-medium
    text-slate-900
    outline-none
    transition-all
    duration-200
    placeholder:text-slate-500
    focus:border-emerald-600
    focus:bg-white
  "
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <input
          {...register("location")}
          placeholder={`📍 ${dictionary.contact.location}`}
          className="
    h-10
    w-full
    border-2
    border-slate-200
    bg-slate-50
    px-4
    text-lg
    font-medium
    text-slate-900
    outline-none
    transition-all
    duration-200
    placeholder:text-slate-500
    focus:border-emerald-600
    focus:bg-white
  "
        />
        {errors.location && (
          <p className="mt-2 text-sm text-red-600">
            {errors.location.message}
          </p>
        )}
      </div>

      {/* Crop Name */}
      <div>
        <input
          {...register("cropName" as any)}
          placeholder={`🌾 ${dictionary.contact.cropname}`}
          className="
    h-10
    w-full
    border-2
    border-slate-200
    bg-slate-50
    px-4
    text-lg
    font-medium
    text-slate-900
    outline-none
    transition-all
    duration-200
    placeholder:text-slate-500
    focus:border-emerald-600
    focus:bg-white
  "
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
      h-15
      w-full
      rounded-2xl
      bg-gradient-to-r
      from-emerald-600
      to-green-500
      text-lg
      font-bold
      text-white
      shadow-lg
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:shadow-xl
      disabled:opacity-60
      disabled:hover:translate-y-0
    "
      >
        {isSubmitting ? "Submitting..." : dictionary.contact.submit}
      </button>

      {submitted && (
        <p className="rounded-xl bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-700">
          {dictionary.contact.successDescription}
        </p>
      )}
    </form>
  );
}

export default HeroForm;