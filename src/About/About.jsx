import { AiOutlineDownload } from 'react-icons/ai';
import {
  Text,
  Box,
  Grid,
  Image,
  Heading,
  Icon,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { Element } from 'react-scroll';
export default function About() {
  return (
    <div className="about">
        <Element name="about">
      <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={40}>
        {/* heading */}{' '}
        <section id="about">
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={10}>
            About Me
          </Heading>
        </section>
        {/* grid */}
        <Grid
          m={4}
          templateAreas={{
            base: `"pic" "text"`,
            md: `"pic text"`,
          }}
          templateColumns={{
            base: '1fr',
            md: '0.4fr  0.6fr',
          }}
          templateRows={{
            base: '1fr 1fr',
            md: '1fr ',
          }}
        >
          {/* text */}
          <GridItem p={4} gridArea="text">
            <Heading as="h2" size="xl" fontWeight="bold" mb={5}>
              I'm Lizzie
            </Heading>

            <Heading
              as="h3"
              size="md"
              fontWeight="bold"
              color="gray.500"
              mb={3}
            >
              A Full Stack Developer based in Ottawa
            </Heading>
            <Text fontSize="sm" fontWeight="normal" color="gray.700" mb={3}>
              I design and develop services for customers specializing creating
              digital & hardware healthcare products (websites, mobile apps and
              web services). My passion is to design digital user experiences
              through that facilitate healthcare services and provide new ways
              to perform medical treatments using the latest technologies. Check
              out my Portfolio
            </Text>
            <hr style={{ borderTop: '1px solid #ddd', margin: '20px 0' }} />
            <Grid
              mt={5}
              mb={5}
              templateAreas={{
                base: `"coding" "medical" "product"`,
                md: `"coding medical product"`,
              }}
              templateColumns={{
                base: '1fr',
                md: '0.5fr  0.5fr  0.5fr',
              }}
              templateRows={{
                base: '1fr 1fr 1fr',
                md: '1fr ',
              }}
            >
              <GridItem bg="white" gridArea="coding">
                <Grid
                  templateAreas={`"yr txt"`}
                  templateColumns={'0.3fr 1fr'}
                  templateRows={'1fr'}
                >
                  <GridItem gridArea="yr">
                    {' '}
                    <Heading
                      as="h4"
                      size="xl"
                      p={1}
                      fontWeight="bold"
                      color="black"
                    >
                      {' '}
                      1+
                    </Heading>
                  </GridItem>
                  <GridItem gridArea="txt" p={1}>
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="gray.700"
                      mb={3}
                    >
                      Years of coding experience
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>

              <GridItem bg="white" gridArea="medical">
                <Grid
                  templateAreas={`"yr txt"`}
                  templateColumns={'0.3fr 1fr'}
                  templateRows={'1fr'}
                >
                  <GridItem gridArea="yr">
                    {' '}
                    <Heading
                      as="h4"
                      size="xl"
                      p={1}
                      fontWeight="bold"
                      color="black"
                    >
                      {' '}
                      3+
                    </Heading>
                  </GridItem>
                  <GridItem gridArea="txt" p={1}>
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="gray.700"
                      mb={3}
                    >
                      Years in medical industry
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>

              <GridItem bg="white" gridArea="product">
                <Grid
                  templateAreas={`"yr txt"`}
                  templateColumns={'0.3fr 1fr'}
                  templateRows={'1fr'}
                >
                  <GridItem gridArea="yr">
                    {' '}
                    <Heading
                      as="h4"
                      size="xl"
                      p={1}
                      fontWeight="bold"
                      color="black"
                    >
                      {' '}
                      4
                    </Heading>
                  </GridItem>
                  <GridItem gridArea="txt" p={1}>
                    <Text
                      fontSize="sm"
                      fontWeight="normal"
                      color="gray.700"
                      mb={3}
                    >
                      Healthcare related products
                    </Text>
                  </GridItem>
                </Grid>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem p={4} gridArea="pic">
            <Image
              src={`${process.env.PUBLIC_URL}/IMG-3107.jpg`}
              alt="lizzie-tse-wing-shan-headshot-2"
              width="100%"
              height="auto"
              objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Box></Element>
    </div>
  );
}
