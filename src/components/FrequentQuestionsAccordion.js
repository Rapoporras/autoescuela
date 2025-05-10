import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";

import FREQUENT_QUESTIONS from "../data/frequent_questions";

export default function FrequentQuestionsAccordion() {
  return (
    <Box width={["100%", "100%", "80%", "65%"]}>
      <Accordion allowMultiple allowToggle>
        {FREQUENT_QUESTIONS.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box textAlign="left" fontWeight="bold" as="h3">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {faq.answer.map((paragraph, index) => (
                <Text fontSize={["md"]} mt="15px" index={index}>
                  {paragraph}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
