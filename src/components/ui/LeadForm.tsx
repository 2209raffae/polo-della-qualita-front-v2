"use client";

import { FormEvent, useId, useState } from "react";

type LeadFormProps = {
  leadType: "contact" | "event" | "manager";
  crmTitle?: string;
};

const MAX_CURRICULUM_SIZE = 5 * 1024 * 1024;

export default function LeadForm({ leadType, crmTitle }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const curriculumInputId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(form);
    const curriculum = formData.get("curriculum");

    if (curriculum instanceof File && curriculum.size > MAX_CURRICULUM_SIZE) {
      setStatus("error");
      setMessage("Il curriculum non può superare 5 MB.");
      return;
    }

    formData.set("leadType", leadType);
    formData.set("crmTitle", crmTitle || "");

    try {
      const response = await fetch("/api/crm-lead", {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.error || "Non è stato possibile inviare la richiesta.");
      }

      form.reset();
      setStatus("success");
      setMessage(
        leadType === "manager"
          ? "Candidatura inviata correttamente."
          : "Richiesta inviata correttamente.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Non è stato possibile inviare la richiesta.");
    }
  }

  return (
    <form className="flex flex-col gap-12" encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col">
          <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Email</label>
          <input
            name="email"
            type="email"
            placeholder="e.g. name@company.com"
            required
            className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Telefono</label>
          <input
            name="phone"
            type="tel"
            placeholder="e.g. 333 123 4567"
            className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col">
          <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Nome</label>
          <input
            name="firstName"
            type="text"
            placeholder="e.g. Jane"
            required
            className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Cognome</label>
          <input
            name="lastName"
            type="text"
            placeholder="e.g. Doe"
            required
            className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300"
          />
        </div>
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[9px] font-bold tracking-[0.15em] uppercase text-black mb-3">Messaggio</label>
        <textarea
          name="message"
          placeholder="Scrivi qui il tuo messaggio"
          rows={4}
          className="w-full pb-3 border-b border-gray-200 bg-transparent text-sm font-light focus:outline-none focus:border-black transition-colors placeholder:text-gray-300 resize-none"
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor={curriculumInputId}
          className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-black"
        >
          Curriculum <span className="font-light normal-case tracking-normal text-gray-400">(facoltativo)</span>
        </label>
        <input
          id={curriculumInputId}
          name="curriculum"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          aria-describedby={`${curriculumInputId}-help`}
          className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm font-light text-gray-600 file:mr-4 file:border-0 file:bg-black file:px-4 file:py-2 file:text-[9px] file:font-bold file:uppercase file:tracking-[0.15em] file:text-white hover:file:bg-gray-800 focus:outline-none"
        />
        <p id={`${curriculumInputId}-help`} className="mt-3 text-xs font-light leading-relaxed text-gray-500">
          Formati accettati: PDF, DOC o DOCX. Dimensione massima: 5 MB.
        </p>
      </div>

      <div className="mt-6 flex flex-col items-end gap-4">
        {message ? (
          <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`} role="status">
            {message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-black hover:bg-gray-800 disabled:bg-gray-500 text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-12 py-5 transition-colors cursor-pointer disabled:cursor-wait"
        >
          {status === "sending"
            ? "Invio..."
            : leadType === "manager"
              ? "Invia candidatura"
              : "Invia Messaggio"}
        </button>
      </div>
    </form>
  );
}
