import {
  Text,
  Box,
  Grid,
  Heading,
  Button,
  Link,
  GridItem,
} from '@chakra-ui/react';
import HoverableBox from './HoverableBox';

export default function Project() {
  return (
    <div className="projects">
      <section id="projects">


        <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={40}>
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={20}>
            Projects
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
            {/* 1 */}
            <GridItem>
              <HoverableBox imageUrl=
               {`${process.env.PUBLIC_URL}/Frame 1.png`}
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Giftr App
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  This website is developed by React with integrating Google
                  Sign-In into the web application. It is also build co-operated
                  with another developer. Build tool: Render, netlify, react
                </Text>
                <Link href="https://reactgiftr.netlify.app/">
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
                    VIEW LIVE
                  </Button>
                </Link>
                {/* view live */}
                <Link href="https://github.com/LizzieTse0617/server-side-final-project">
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    GITHUB
                  </Button>
                </Link>
              </HoverableBox>
            </GridItem>
            {/* 2 */}
            <GridItem>
              <HoverableBox imageUrl=
              
              {`${process.env.PUBLIC_URL}/Frame 2.png`}
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Media Player
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  This media player website is purely developed by Javascript
                  and its layout is compiled by SASS. Build tool: Javascript,
                  SASS, HTML
                </Text>
                <Link href="https://lizzietse0617.github.io/media-player/">
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
                    VIEW LIVE
                  </Button>
                </Link>
                {/* view live */}
                <Link href="https://github.com/LizzieTse0617/media-player">
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    GITHUB
                  </Button>
                </Link>
              </HoverableBox>
            </GridItem>
            {/* 3 */}
            <GridItem>
              <HoverableBox imageUrl=
              
              {`${process.env.PUBLIC_URL}/Frame 3.png`}
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Number guesting game
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  The Number Guessing Game where the player tries to guess a
                  randomly chosen number between 1 and 100, receiving feedback
                  from the computer until the correct number is guessed. Build
                  tool: c++
                </Text>

                {/* view live */}
                <Link href="https://github.com/LizzieTse0617/Guesting-game-c-">
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    GITHUB
                  </Button>
                </Link>
              </HoverableBox>
            </GridItem>
            {/* 4 */}
            <GridItem>
              <HoverableBox imageUrl=
              
              {`${process.env.PUBLIC_URL}/Frame 4.png`}
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Movie database API
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  This website is developed by pure Javascript with API fetching
                  (Open Source: https://developer.themoviedb.org/docs) on movie
                  between two categories(movie, tvshow). Build tool: Javascript,
                  HTML, CSS.
                </Text>
                <Link href="https://lizzietse0617.github.io/tmdb-jamstack/index.html">
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
                    VIEW LIVE
                  </Button>
                </Link>
                {/* view live */}
                <Link href="https://github.com/LizzieTse0617/tmdb-jamstack">
                  <Button
                    p={6}
                    mt={4}
                    colorScheme="blue"
                    size="xs"
                    _hover={{ bg: 'white', color: 'blue.600' }}
                    ml={2}
                    mr={2}
                  >
                    GITHUB
                  </Button>
                </Link>
              </HoverableBox>
            </GridItem>
      {/* 8 */}
      <GridItem>
              <HoverableBox imageUrl=
              
              {`${process.env.PUBLIC_URL}/Frame 8.png`}
              
              >
                <Heading as="h3" size="md" fontWeight="bold" mt={10} mb={3}>
                  Contactless vital signs monitor alarm system
                </Heading>

                <Text fontSize="sm" fontWeight="normal" mb={3}>
                  It is an User Experience design on an app work together with Vitals Surveillance system(Original prototype: Hillrom).i
It is designed to build extension support to patient monitoring & detection of early patient deterioration. Participation: UI & UX
                  development, product development
                </Text>
                <Link href="https://lizzietse0617.github.io/personal_portfolio/#/medical">
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
                    View more
                  </Button>
                </Link>


              </HoverableBox>
            </GridItem>
            {/* 9 */}
            <GridItem bgColor={'blue.500'} color="white">
              <Link href={'http://localhost:3000/personal_portfolio#/product'}>
                <Text
                  fontSize={'3rem'}
                  fontWeight={'bold'}
                  mt={10}
                  textAlign={'left'}
                  lineHeight={1}
                  pr={1}
                  pl={4}
                >
                  Click here to see Medical & Healthcare related Product 
                </Text>
              </Link>
            </GridItem>
          </Grid>
        </Box>  
      </section>
    </div>
  );
}
