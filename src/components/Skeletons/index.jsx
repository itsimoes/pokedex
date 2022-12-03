import { Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
  return (
    <>
      <Skeleton variant="rounded" width={"100%"} height={300} sx={{ marginLeft: "1em" }} />;
      <Skeleton variant="rounded" width={"100%"} height={300} sx={{ marginLeft: "1em" }} />;
      <Skeleton variant="rounded" width={"100%"} height={300} sx={{ marginLeft: "1em" }} />;      
    </>
  );
};
