import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Box,
  Grid,
  GridItem,
  Heading,
  ModalBody,
  Icon,
  ModalCloseButton,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/react';
import {
  MdOutlineAppShortcut,
  MdOutlineWorkHistory,
  MdOutlineWeb,
} from 'react-icons/md';
import { BiPen } from 'react-icons/bi';
import { FiBox, FiArrowRight } from 'react-icons/fi';

export default function Service() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="services">
      <section id="services">
        <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={20}>
          {/* heading-skills */}
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={10}>
            Services
          </Heading>
          <Heading as="h2" size="xl" fontWeight="800" ml={4}>
            What I Provide
          </Heading>

          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            templateRows={{ base: 'repeat(3, 1fr)', md: '1fr' }}
            gap={4}
            ml={4}
            mr={4}
            mt={10}
          >
            <GridItem>
              <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                <Icon
                  as={MdOutlineAppShortcut}
                  boxSize={20}
                  color={'blue.500'}
                />
                <Heading
                  as="h3"
                  size="md"
                  mt={4}
                  ml={4}
                  mb={4}
                  fontWeight="800"
                  color="black"
                >
                  Mobile Apps Development
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                <Icon
                  as={MdOutlineWeb}
                  ml={4}
                  boxSize={20}
                  color={'blue.500'}
                />
                <Heading
                  as="h3"
                  size="md"
                  mt={4}
                  ml={4}
                  mb={4}
                  fontWeight="800"
                  color="black"
                >
                  Web Development
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                <Icon as={BiPen} boxSize={20} ml={4} color={'blue.500'} />
                <Heading
                  as="h3"
                  size="md"
                  mt={4}
                  ml={4}
                  mb={4}
                  fontWeight="800"
                  color="black"
                >
                  UI/UX Development
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              {' '}
              <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                <Icon as={FiBox} ml={4} boxSize={20} color={'blue.500'} />
                <Heading
                  as="h3"
                  size="md"
                  mt={4}
                  ml={4}
                  mb={4}
                  fontWeight="800"
                  color="black"
                >
                  Product Development
                </Heading>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={6} mb={6} boxShadow="xl" rounded="md" bg="white">
                <Icon
                  as={MdOutlineWorkHistory}
                  ml={4}
                  boxSize={20}
                  color={'blue.500'}
                />
                <Heading
                  as="h3"
                  size="md"
                  mt={4}
                  ml={4}
                  mb={4}
                  fontWeight="800"
                  color="black"
                >
                  Project Development
                </Heading>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </section>
    </div>
  );
}
