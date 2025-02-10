import { ChangeEvent, useState } from "react";

function State() {
  const [text, setText] = useState<string | null>('testando o hook');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div>
      <p>O texto é {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State