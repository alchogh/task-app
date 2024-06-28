import React, { ChangeEvent, useState } from "react";
import { icon, input, sideForm } from "./SideForm.css";
import { FiCheck } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";

interface SideFormProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideForm({ setIsFormOpen }: SideFormProps) {
  console.log(setIsFormOpen);
  const [inputText, setInputText] = useState("");
  const dispatch = useTypedDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleOnBlur = () => {
    setIsFormOpen(false);
  };

  const handleClick = () => {
    if (inputText) {
      dispatch;
    }
  };

  return (
    <div className={sideForm}>
      <input
        type="text"
        className={input}
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
      <FiCheck className={icon} />
    </div>
  );
}
