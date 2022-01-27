import type { FunctionComponent } from "react";
import "./Input.scss";

export enum InputVariant {
  Text = "text",
  Password = "password",
}

export interface InputProps {
  value: string;
  className?: string;
  variant?: InputVariant;
  name: string;
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const Input: FunctionComponent<InputProps> = ({
  variant = InputVariant.Text,
  name,
  label,
  placeholder,
  className,
  onChange,
  value,
}) => {
  const internalClassName = "input-container";
  const actualClasName = className
    ? `${internalClassName} ${className}`
    : internalClassName;
  return (
    <div className={actualClasName}>
      <span className="label">{label}</span>
      <input
        value={value}
        type={variant}
        name={name}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        placeholder={placeholder || label}
      ></input>
      {false && <span className="error">error</span>}
    </div>
  );
};

export default Input;
