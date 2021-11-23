import { React, useState } from "react";
import { Form } from "react-bootstrap";


export default function linksForm({ addLinks }) {
  const [value, setValue] = useState("");

  const addlink = (e) => {
    let inputlinks = document.getElementById("inputlinks").value;
    if (
      inputlinks.includes("http://") ||
      inputlinks.includes("https://")
    ) {
      if (!value) return;
      addlink(value);
      setValue("");
    } else {
      alert("El link no contiene una URL valida");
    }
  };

  return (
    <>
      <Form.Group className="input-group ">
        <Form.Control
          id="inputlink"
          className="input"
          name="link"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Agregar link"
        />
     
      </Form.Group>
    </>
  );
}
