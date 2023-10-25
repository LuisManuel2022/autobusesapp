import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Faq() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='h6'>¿En qué parte de las Pirámides nos deja el autobús?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='span'>
          La llegada a la Zona Arqueológica es en la puerta 1 y 2,
           lo puede abordar de regreso hacia CDMX en la puerta 1, 2 y 3.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>¿Son viajes directos ó van haciendo parada?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='span'>
          De ser necesario hacen parada en lo lugares que así lo requiera
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>¿Que tiempo de recorrido es desde la CDMX hasta las Pirámides?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='span'>
          Con un tráfico vehicular normal son 60 min.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>¿Dónde puedo abordar el autobús de regreso a la CDMX?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='span'>
          En la puerta 1, 2 y 3 de la Zona, puede abordar con salidas cada 15 min.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant='h6'>¿El costo del boleto incluye la entrada a Reino Animal?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='span'>
          No, sólo le cobramos el precio del viaje, el costo de la entrada se hace directamente en dicho lugar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}