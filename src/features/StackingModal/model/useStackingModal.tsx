import { useRef, useState } from "react";
import IError from "@/app/interfaces";

export default function useStackingModal() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState<IError[]>([]);

  const checkValidInput = (val: string) => {
    const  pattern = /^\d+\.?\d*$/;
    return pattern.test(val);
  };

  const onHandleClick = () => {
    setError([]);
    if (!checkValidInput(value)) {
      setError((prev) => [
        ...prev,
        {
          id: 1,
          message: "Необходимо ввести число",
        },
      ]);
      return;
    }
    setError([]);
    alert(value);
    setValue("");
  };

  return {
    inputRef,
    value,
    setValue,
    error,
    onHandleClick,
  };
}
