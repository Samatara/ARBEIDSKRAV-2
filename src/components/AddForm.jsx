export default function AddForm() {
  return (
    <section>
      <form>
        <label>
          Vare
          <input type="text" placeholder="Egg..." />
        </label>

        <label>
          Antall
          <input type="number" />
        </label>

        <button type="submit">Legg til vare</button>
      </form>
    </section>
  );
}
