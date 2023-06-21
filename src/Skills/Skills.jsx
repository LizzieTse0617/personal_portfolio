
import {
  Text,
  Box,
  Grid,
  Heading,
  Tag,UnorderedList, ListItem,
  GridItem,
} from '@chakra-ui/react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import ScrollableBox from './ScrollableBox';

export default function Skills() {
  return (
    <div className="skills">
      <section id="skills">
        <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={20}>
          {/* heading-skills */}
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={10}>
            Skills
          </Heading>
          {/* education */}
          <Heading as="h2" size="xl" fontWeight="800" ml={4}>
            Education & Skills
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="normal"
            color="gray.700"
            mb={3}
            maxWidth={'700px'}
            ml={4}
            mr={4}
          >
            Graduated in Product Engineering with Marketing (Bachelor of
            Engineering) Degree from the Hong Kong Polytechnic University, With
            Technical knowledge in software engineering, problem solving,
            product development & project management .
          </Text>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            templateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
            gap={4}
            ml={4}
            mr={4}
            mt={10}
          >
            {/* education */}
            <GridItem>
              <Box spacing={4}>
                <Tag
                  mb={4}
                  colorScheme="blue"
                  p={3}
                  bgColor="blue.500"
                  color="white"
                  fontWeight={'bold'}
                >
                  Education
                </Tag>
                <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                  <Text as="span" fontSize={'sm'}>
                    2022-2024
                  </Text>
                  <Text fontWeight="bold">
                    Diploma, Mobile Application Design and Development
                    <Box>
                      <Text as="span" fontSize={'xs'} color="gray.500">
                        Algonquin College, ON Canada
                      </Text>
                    </Box>
                  </Text>
                </Box>
                <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                  <Text as="span" fontSize={'sm'}>
                    2013-2017
                  </Text>
                  <Text fontWeight="bold">
                    Product Engineering with Marketing (B.E.)
                    <Box>
                      <Text as="span" fontSize={'xs'} color="gray.500">
                        The Hong Kong Polytechnic University, Hong Kong, China
                      </Text>
                    </Box>
                  </Text>
                </Box>
              </Box>
            </GridItem>

            {/* skills */}
            <GridItem>
              <Box spacing={4}>
                <Tag
                  mb={4}
                  colorScheme="blue"
                  p={3}
                  bgColor="blue.500"
                  color="white"
                  fontWeight={'bold'}
                >
                  Skills
                </Tag>
{/* frontend */}
                <Box p={3} mb={3} boxShadow="xl" rounded="md" bg="white">
              <Accordion allowToggle border="white">
                 <AccordionItem>

      <AccordionButton >
      <Box as="span" flex="1" textAlign="left">
        <Heading as="h3" size="md" fontWeight="bold" color="black" borderBottom="none">
          Frontend developer
        </Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>

      <AccordionPanel pb={4}>
        <UnorderedList>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>Javascript</ListItem>
          <ListItem>React</ListItem>
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>

</Accordion>
</Box>
{/* frontend */}
<Box p={3} mb={3} boxShadow="xl" rounded="md" bg="white">
              <Accordion allowToggle border="white">
                 <AccordionItem>

      <AccordionButton >
      <Box as="span" flex="1" textAlign="left">
        <Heading as="h3" size="md" fontWeight="bold" color="black" borderBottom="none">
          Backend developer
        </Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>

      <AccordionPanel pb={4}>
        <UnorderedList>
          <ListItem>MongoDB</ListItem>
          <ListItem>NodeJS</ListItem>
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>

</Accordion>
</Box>

{/* UI/UX */}
<Box p={3} mb={3} boxShadow="xl" rounded="md" bg="white">
              <Accordion allowToggle border="white">
                 <AccordionItem>

      <AccordionButton >
      <Box as="span" flex="1" textAlign="left">
        <Heading as="h3" size="md" fontWeight="bold" color="black" borderBottom="none">
          UI/UX Designer
        </Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>

      <AccordionPanel pb={4}>
        <UnorderedList>
          <ListItem>Figma</ListItem>
          <ListItem>AdobeXD</ListItem>
          <ListItem>Illustrator</ListItem>
          <ListItem>Photoshop</ListItem>
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>

</Accordion>
</Box>

{/* product development */}
<Box p={3} mb={3} boxShadow="xl" rounded="md" bg="white">
              <Accordion allowToggle border="white">
                 <AccordionItem>
      <AccordionButton >
      <Box as="span" flex="1" textAlign="left">
        <Heading as="h3" size="md" fontWeight="bold" color="black" borderBottom="none">
          Product development
        </Heading>
      </Box>
      <AccordionIcon />
    </AccordionButton>
      <AccordionPanel pb={4}>
        <UnorderedList>
          <ListItem>AutoCAD</ListItem>
          <ListItem>Solidwork</ListItem>
  
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>

</Accordion>
</Box>

              </Box>      
</GridItem>


            {/* code */}
            <GridItem>
              <Box spacing={4}>
                <Tag
                  mb={4}
                  colorScheme="blue"
                  p={3}
                  bgColor="blue.500"
                  color="white"
                  fontWeight="bold"
                >
                  Events
                </Tag>

                <Box
                  p={6}
                  mb={6}
                  boxShadow="xl"
                  height={'21rem'}
                  rounded="md"
                  bg="white"
                >
                  <ScrollableBox />
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </section>
    </div>
  );
}
