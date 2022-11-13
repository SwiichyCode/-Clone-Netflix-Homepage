import * as React from "react";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionSummary, AccordionDetails } from "./style";
import styled from "styled-components";

export const StyledAccordions = ({ data }) => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
            >
              <Title>{item.title}</Title>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.firstP}</Typography>
              {item.secondP && <Typography>{item.secondP}</Typography>}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1.25em;

  @media screen and (min-width: 550px) {
    width: 90%;
    margin: auto auto 1.25em;
    max-width: 815px;
  }
`;

const Title = styled(Typography)`
  @media screen and (min-width: 550px) {
    font-size: 1.25rem !important;
  }
  @media screen and (min-width: 950px) {
    font-size: 1.35rem !important;
  }
`;
