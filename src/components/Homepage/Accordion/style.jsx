import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import CloseIcon from "@mui/icons-material/Close";

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  fontSize: "1.125rem",
  backgroundColor: "transparent",
  marginBottom: "8px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <CloseIcon
        sx={{ fontSize: "25px", transform: "rotate(45deg)", color: "#fff" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  fontSize: "1.25rem",
  backgroundColor: "#303030",
  color: "#fff",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: "#303030",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  marginTop: "1px",
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
