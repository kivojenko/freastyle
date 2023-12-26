import React, {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any additional props specific to your button component
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({variant = "primary", ...props}) => {
  const buttonStyles: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  return <button style={buttonStyles} {...props} />;
};

export default Button;
