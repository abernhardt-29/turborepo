import {Box} from "@mui/material";
import React from "react";

interface BaseDrawerHeaderProps {
  children?: React.ReactNode;
}

const BaseDrawerHeader: React.FC<BaseDrawerHeaderProps> = ({
                                                              children,
                                                           }) => {

  return (
    <Box>
      {children}
    </Box>
  )
}
