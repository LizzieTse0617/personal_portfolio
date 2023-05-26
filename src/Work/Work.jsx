import { Box, Grid, Heading, Tag, Text, GridItem } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
export default function Work() {
  return (
    <div>
      <Box mt={20} maxW="1200px" mx="auto" alignItems="center" mb={40}>
        {/*work & experience  */}
        <Heading as="h2" size="xl" fontWeight="800" ml={4}>
          Work & Experience
        </Heading>

        <Accordion allowToggle mt={8}>
          {/* item1 */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" pt={3} pb={3}>
                  <Heading as="h3" size="md" fontWeight="bold" color="black">
                    Medical Sales Engineer (Equipment & IT Healthcare Team)
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    Solar-Med Limited | Jan22 - Aug22 | Permanent | Hong Kong
                  </Text>
                  <Text mt={3} fontSize="sm" fontWeight="normal" color="black">
                    Provide customized pre-sales solution with medical equipment
                    & devices(Hillrom, Laerdal) together with IT healthcare
                    solution will to fit customer needs.
                  </Text>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
          {/* item2 */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" pt={3} pb={3}>
                  <Heading as="h3" size="md" fontWeight="bold" color="black">
                    Administration Officer (Marketing - Medical device &
                    equipment)
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    POTUS Medical(HK) | May19 - Jul21 | Permanent | Hong Kong
                  </Text>
                  <Text mt={3} fontSize="sm" fontWeight="normal" color="black">
                    Monitoring and tracking Medical marketing Budget and
                    expenditure to promote diagnostic equipment & consumables,
                    as well as the documentation of import supportings.
                    (Oraquick,Immucor)
                  </Text>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
          {/* item3 */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" pt={3} pb={3}>
                  <Heading as="h3" size="md" fontWeight="bold" color="black">
                    Assistant Project Engineer (Disney team)
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    Jakks Pacific (HK) Ltd | Oct18 - Feb19 | Permanent | Hong
                    Kong
                  </Text>
                  <Text mt={3} fontSize="sm" fontWeight="normal" color="black">
                    Coordinating with the Disney designer & manufacturers on
                    product development transforming from product ideas,
                    prototyping and to large production. Client: The Walt Disney
                    Company
                  </Text>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>

          {/* item4 */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" pt={3} pb={3}>
                  <Heading as="h3" size="md" fontWeight="bold" color="black">
                    Product​ ​&​ ​packaging​ ​engineer (Factory based)
                  </Heading>
                  <Text fontSize="sm" color="gray.500">
                    JM Sunflower Ltd | Oct17 - Jun18 | Permanent |
                    DongGuang,China
                  </Text>
                  <Text mt={3} fontSize="sm" fontWeight="normal" color="black">
                    Coordinating with the designer & manufacturers on product
                    development & the packaging design transforming from product
                    ideas, prototyping and to large production.
                  </Text>
                </Box>

                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
}
