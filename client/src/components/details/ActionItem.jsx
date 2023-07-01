import React from "react";
import { Box } from "@mui/material";

const ActionItem = ({ product }) => {
  return (
    <Box>
      <img src={product.detailUrl} alt="pic" />
    </Box>
  );
};

export default ActionItem;
