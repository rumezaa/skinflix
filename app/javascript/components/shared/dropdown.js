import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Chip } from "@mui/material";

const product_types = ["cleanser", "serum", "sunscreen", "moisturizer"];

export default function MultipleSelect({ productType, setProductType }) {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setProductType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    productType && (
      <div className="flex flex-col items-center gap-2 md:flex-row-reverse w-full md:gap-0 md:justify-between">
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select multiple value={productType} onChange={handleChange}>
              {product_types.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex flex-col w-full gap-4">
          {!!productType.length && (
            <h2 className="text-xs">showing results for</h2>
          )}
          <div className="flex flex-row w-full gap-3">
            {productType.map((type) => (
              <Chip label={type} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}
