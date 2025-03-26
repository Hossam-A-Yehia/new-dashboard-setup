import React from "react";
import { FormLabel, FormLabelProps as MuiFormLabelProps } from "@mui/material";

interface ExtendedLabelProps extends Omit<MuiFormLabelProps, "htmlFor"> {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}

const Label: React.FC<ExtendedLabelProps> = ({
  htmlFor,
  children,
  required,
  ...props
}) => {
  return (
    <FormLabel
      htmlFor={htmlFor}
      required={required}
      sx={{
        fontSize: "0.875rem", // text-sm
        fontWeight: 600, // font-semibold
        mb: 1, // mb-2 (adjusted for MUI spacing)
        color: "text.primary",
        "& .MuiFormLabel-asterisk": {
          color: "error.main", // red-500 equivalent
        },
      }}
      {...props}
    >
      {children}
    </FormLabel>
  );
};

export default Label;