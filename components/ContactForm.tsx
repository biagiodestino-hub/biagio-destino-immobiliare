export function ContactForm() {
  return (
    <form className="rounded-lg bg-white p-8 shadow-premium">
      <h2 className="text-3xl font-bold text-navy">Richiedi informazioni</h2>
      <div className="mt-8 grid gap-5">
        {["Nome e cognome", "Email", "Telefono"].map((label) => (
          <label key={label} className="grid gap-2 text-sm font-semibold text-navy">
            {label}
            <input className="rounded-md border border-stone bg-mist px-4 py-4 font-normal outline-none focus:border-gold" />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Messaggio
          <textarea rows={6} className="rounded-md border border-stone bg-mist px-4 py-4 font-normal outline-none focus:border-gold" />
        </label>
        <button type="submit" className="rounded-md bg-gold px-6 py-4 font-semibold text-white">
          Invia richiesta
        </button>
      </div>
    </form>
  );
}
