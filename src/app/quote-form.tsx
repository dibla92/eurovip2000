"use client";

import { useRef, useState } from "react";
import { getTranslations, type Locale } from "./translations";

export default function QuoteForm({ locale }: { locale: Locale }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const copy = getTranslations(locale).form;

  function showDemoConfirmation() {
    if (formRef.current?.reportValidity()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="quote-form-wrap">
      <form
        className="quote-form"
        ref={formRef}
        onSubmit={(event) => event.preventDefault()}
        aria-describedby="quote-demo-note"
      >
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="quote-name">{copy.name}</label>
            <input id="quote-name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="quote-email">{copy.email}</label>
            <input
              id="quote-email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="quote-phone">{copy.phone}</label>
            <input
              id="quote-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
          <div className="form-field">
            <label htmlFor="quote-service">{copy.service}</label>
            <select id="quote-service" defaultValue="" required>
              <option value="" disabled>
                {copy.servicePlaceholder}
              </option>
              {copy.serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="quote-origin">{copy.origin}</label>
            <input id="quote-origin" autoComplete="address-level2" required />
          </div>
          <div className="form-field">
            <label htmlFor="quote-destination">{copy.destination}</label>
            <input
              id="quote-destination"
              autoComplete="address-level2"
              required
            />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="quote-date">{copy.date}</label>
            <input id="quote-date" type="date" required />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="quote-details">
              {copy.details}
            </label>
            <textarea
              id="quote-details"
              rows={3}
              placeholder={copy.detailsPlaceholder}
            />
          </div>
        </div>
        <button
          className="button button-form"
          type="button"
          onClick={showDemoConfirmation}
        >
          {copy.submit} <span aria-hidden="true">↗</span>
        </button>
        <p className="form-demo-note" id="quote-demo-note">
          {copy.demoNote}
        </p>
        {submitted && (
          <p className="form-confirmation" role="status">
            {copy.confirmation}
          </p>
        )}
      </form>
    </div>
  );
}
