import { useState } from "react";
export const Counter = () => {
  const [state, setState] = useState(0);
  const handleSubmit = () => {
    setState((x) => x + 1);
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Incrementar
      </button>
      <h1>Counter: {state}</h1>
    </div>
  );
};
