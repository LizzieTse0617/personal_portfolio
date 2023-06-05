import {
  Text,
  Box,
  Grid,
  Heading,
  Button,
  Link,
  GridItem,
} from '@chakra-ui/react';
import GoUp from '../GoUp/GoUp';

import HoverableBox from '../Project/HoverableBox';

export default function Products() {
  return (
    <div className="products">
      <section id="products">
        <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={40}>
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={20}>
            Products
          </Heading>
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            ml={4}
            mr={4}
            mt={10}
            gridGap={4}
            color="white"
            textAlign={'center'}
          >
            {/* 5 */}
            <GridItem>
              <HoverableBox imageUrl=

              {`${process.env.PUBLIC_URL}/Frame 5.png`}>


                <Heading as="h3" size="md" fontWeight="bold" mt={3} mb={3}>
                  HIV self test
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  It is an in-vitro diagnostic home-use test product developed
                  from scratch (importing & validation) and repackage
                  it(validation, testing & rebrand) and launch(to local
                  Government & Hospital, B2C) Product (Research word: Oraquick
                  HIV In-Home self test) Marketing analysis. Participation:
                  product & project development, packaging design, sales &
                  marketing, customer support
                </Text>
                <Link href="https://oraquick.com/">
                  {/* view live */}
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    Source
                  </Button>
                </Link>
                {/* view live */}
                <Link href="https://en.hivselftest.com.hk/https://github.com/LizzieTse0617/server-side-final-project">
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    Rebrand-WEBSITE
                  </Button>
                </Link>
              </HoverableBox>
            </GridItem>
            {/* 6 */}
            <GridItem>
              <HoverableBox imageUrl=
              {`${process.env.PUBLIC_URL}/Frame 6.png`}
              
              
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  3D print clinical application
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  3D print tray is designed and built to carry patient-specific
                  devices & other medical device(e.g.surgical tools with complex
                  geometry). Participation: product & project development,
                  material sourcing, customer support
                </Text>
              </HoverableBox>
            </GridItem>
            {/* 7 */}
            <GridItem>
              <HoverableBox imageUrl=
              
              {`${process.env.PUBLIC_URL}/Frame 7.png`}
              
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Automated Medication Dispensing Cabinets
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  Automated Medication Dispensing Cabinets provides a safe and
                  accurate medication management. It is able to dispense
                  medication, control inventory and manage user access, reducing
                  time and improving efficiency for the facility. It contains a
                  app which control the Real-time inventory management.
                  Participation: product & project development, sales &
                  marketing, UI & UX development
                </Text>
              </HoverableBox>
            </GridItem>
      
          </Grid>
        </Box>
      </section>
      <GoUp />
    </div>
  );
}
