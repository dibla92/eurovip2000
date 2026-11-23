"use client";

import { useRef, useState } from "react";

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

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
            <label htmlFor="quote-name">Come ti chiami?</label>
            <input id="quote-name" autoComplete="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="quote-email">La tua email</label>
            <input
              id="quote-email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="quote-phone">Telefono (facoltativo)</label>
            <input
              id="quote-phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
            />
          </div>
          <div className="form-field">
            <label htmlFor="quote-service">Che tipo di viaggio?</label>
            <select id="quote-service" defaultValue="" required>
              <option value="" disabled>
                Seleziona un servizio
              </option>
              <option>Trasferimento aeroportuale o stazione</option>
              <option>Viaggio di lavoro</option>
              <option>Viaggio privato</option>
              <option>Evento o servizio dedicato</option>
              <option>Altro</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="quote-origin">Da dove parti?</label>
            <input id="quote-origin" autoComplete="address-level2" required />
          </div>
          <div className="form-field">
            <label htmlFor="quote-destination">Dove vuoi arrivare?</label>
            <input
              id="quote-destination"
              autoComplete="address-level2"
              required
            />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="quote-date">Quando?</label>
            <input id="quote-date" type="date" required />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="quote-details">
              Qualche dettaglio in più? (facoltativo)
            </label>
            <textarea
              id="quote-details"
              rows={3}
              placeholder="Passeggeri, bagagli, orari o tappe intermedie..."
            />
          </div>
        </div>
        <button
          className="button button-form"
          type="button"
          onClick={showDemoConfirmation}
        >
          Prepara la richiesta <span aria-hidden="true">↗</span>
        </button>
        <p className="form-demo-note" id="quote-demo-note">
          Modulo dimostrativo: i dati inseriti non vengono inviati né salvati.
        </p>
        {submitted && (
          <p className="form-confirmation" role="status">
            La richiesta è stata verificata solo in questa anteprima. Nessun dato
            è stato inviato: il modulo sarà collegato ai contatti ufficiali in
            una fase successiva.
          </p>
        )}
      </form>
    </div>
  );
}
