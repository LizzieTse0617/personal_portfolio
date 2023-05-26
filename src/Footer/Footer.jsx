import { Text, Box, Grid, Heading, Icon, GridItem } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <Box bgColor={'blue.500'}>
        <Box maxW="1200px" mx="auto" alignItems="center">
          <Grid
            templateAreas={{
              base: `"about" "navigate" "follow" "end"`,
              md: `"about navigate follow" "end end end"`,
            }}
            templateColumns={{ base: '1fr', md: '0.8fr 1.5fr 0.5fr' }}
            templateRows={{ base: 'repeat(4, 1fr)', md: '1fr 0.5fr' }}
            color={'white'}
            gridGap={'1rem'}
            pt={8}
          >
            {/* Box 1 */}

            <GridItem gridArea="about" pl={4}>
              <Link to="/">
                <Heading as="h2" size="xl" fontWeight="900">
                  Lizzie
                </Heading>
              </Link>
              <Text mb={8}>Full stack developer</Text>
              <Link to="/about">About me</Link>
            </GridItem>

            {/* Box 2 */}
            <GridItem gridArea="navigate">
              <Grid
                pl={4}
                templateColumns={'repeat(5, 1fr)'}
                templateAreas={`"title title title title title" "t1 t2 t3 t4 t5"  `}
                gridGap="1rem"
                maxWidth={'30rem'}
              >
                <GridItem gridArea="title">
                  <Heading as="h3" size="md" fontWeight="bold">
                    More
                  </Heading>
                </GridItem>
                <GridItem gridArea="t1">
                  <Link to="/skills">Skills</Link>
                </GridItem>
                <GridItem gridArea="t2">
                  <Link to="/services">Services</Link>
                </GridItem>
                <GridItem gridArea="t3">
                  <Link to="/projects">Projects</Link>
                </GridItem>
                <GridItem gridArea="t4">
                  <Link to="/product">Products</Link>
                </GridItem>
                <GridItem gridArea="t5">
                  <Link to="/contact">Contact</Link>
                </GridItem>
              </Grid>
            </GridItem>

            {/* Box 3 */}
            <GridItem gridArea="follow">
              <Grid
                pl={4}
                maxWidth={'10rem'}
                templateColumns={'repeat(2, 1fr)'}
                templateRows={'repeat(2, 1fr)'}
                templateAreas={`"title title""gh in"  `}
                gridGap="1rem"
              >
                <GridItem gridArea="title">
                  <Heading as="h3" size="md" fontWeight="bold">
                    Follow
                  </Heading>
                </GridItem>
                <GridItem gridArea="gh">
                  <Link to={'https://github.com/LizzieTse0617/'} isExternal>
                    <Icon
                      as={AiFillGithub}
                      boxSize={6}
                      _hover={{ color: 'blue.700' }}
                    />
                  </Link>
                </GridItem>
                <GridItem gridArea="in">
                  <Link
                    to={'https://www.linkedin.com/in/lizzie-tse-620668255'}
                    isExternal
                  >
                    <Icon
                      as={AiFillLinkedin}
                      boxSize={6}
                      _hover={{ color: 'blue.700' }}
                    />
                  </Link>
                </GridItem>
              </Grid>
            </GridItem>

            {/* Box 4 */}
            <GridItem gridArea="end" textAlign="center">
              © 2023 by Lizzie Tse. All rights reserved.
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
