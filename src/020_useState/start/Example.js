import { useState } from "react";

const Example = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    return setText(value);
  };
  return (
    <>
      <input type="text" onChange={onChangeHandler} />
      <p>{text}</p>
    </>
  );
};

export default Example;
