import { Progress } from '@chakra-ui/react';
import {
  Text,
  Box,
  Grid,
  Heading,
  Tag,
  Icon,
  GridItem,
} from '@chakra-ui/react';
import ScrollableBox from './ScrollableBox';
import { AiOutlineLink } from 'react-icons/ai';
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

                {/* JS */}
                <Box p={5} mb={3} boxShadow="xl" rounded="md" bg="white">
                  <Text as="h3" fontWeight="bold" mb={1}>
                    Javascript{' '}
                    <Text as="span" color="blue.500" fontSize={'sm'}>
                      / 90%
                    </Text>
                  </Text>
                  <Progress value={90} size="sm" bgColor={'gray.200'} />
                </Box>
                {/* Figma */}
                <Box p={5} mb={3} boxShadow="xl" rounded="md" bg="white">
                  <Text as="h3" fontWeight="bold" mb={1}>
                    Figma{' '}
                    <Text as="span" color="blue.500" fontSize={'sm'}>
                      / 90%
                    </Text>
                  </Text>
                  <Progress value={90} size="sm" bgColor={'gray.200'} />
                </Box>
                {/* Node JS */}
                <Box p={5} mb={3} boxShadow="xl" rounded="md" bg="white">
                  <Text as="h3" fontWeight="bold" mb={1}>
                    NodeJS{' '}
                    <Text as="span" color="blue.500" fontSize={'sm'}>
                      / 80%
                    </Text>
                  </Text>
                  <Progress value={80} size="sm" bgColor={'gray.200'} />
                </Box>
                {/* C++ */}
                <Box p={5} mb={3} boxShadow="xl" rounded="md" bg="white">
                  <Text as="h3" fontWeight="bold" mb={1}>
                    C++
                    <Text as="span" color="blue.500" fontSize={'sm'}>
                      / 75%
                    </Text>
                  </Text>
                  <Progress value={75} size="sm" bgColor={'gray.200'} />
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
