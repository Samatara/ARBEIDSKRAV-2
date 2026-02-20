import { useState } from "react";

export default function AddForm({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submit forsøkt med:", name, quantity);

    if (!name && !quantity) {
      setError("Du må fylle inn vare og antall.");
      console.log("Valideringsfeil: mangler begge felt");
      return;
    }

    if (!name) {
      setError("Du må skrive inn en vare.");
      console.log("Valideringsfeil: mangler vare");
      return;
    }

    if (!quantity) {
      setError("Du må skrive inn antall.");
      console.log("Valideringsfeil: mangler antall");
      return;
    }

    if (quantity <= 0) {
      setError("Antall må være større enn 0.");
      console.log("Valideringsfeil: ugyldig antall");
      return;
    }

    setError("");
    addItem(name, quantity);
    console.log("Vare lagt til!");

    setName("");
    setQuantity("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Vare
          <input type="text" value={name} onChange={(e) => { console.log("Endrer vare-navn:", e.target.value);
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Antall
          <input type="number" value={quantity} onChange={(e) => { console.log("Endrer antall:", e.target.value);
              setQuantity(e.target.value);
            }}
          />
        </label>
        <button type="submit">Legg til vare</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
}
