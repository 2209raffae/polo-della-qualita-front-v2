"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = {
  leadType: "contact" | "event" | "manager";
  crmTitle?: string;
};

export default function LeadForm({ leadType, crmTitle }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      leadType,
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      message: String(formData.get("message") || ""),
      documentUrl: String(formData.get("documentUrl") || ""),
      crmTitle: crmTitle || "",
    };

    try {
      const response = await fetch("/api/crm-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
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

      {leadType === "manager" ? (
        <div className="flex flex-col">
          <label
            htmlFor="manager-document-url"
            className="mb-3 text-[9px] font-bold uppercase tracking-[0.15em] text-black"
          >
            Curriculum o company profile
          </label>
          <input
            id="manager-document-url"
            name="documentUrl"
            type="url"
            placeholder="Link al documento (Drive, Dropbox o sito personale)"
            required
            maxLength={2048}
            aria-describedby="manager-document-help"
            className="w-full border-b border-gray-200 bg-transparent pb-3 text-sm font-light transition-colors placeholder:text-gray-300 focus:border-black focus:outline-none"
          />
          <p id="manager-document-help" className="mt-3 text-xs font-light leading-relaxed text-gray-500">
            Inserisci un link accessibile al tuo curriculum o al company profile.
          </p>
        </div>
      ) : null}

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
