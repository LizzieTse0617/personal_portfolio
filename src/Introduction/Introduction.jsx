import {
    Text,
    Box,
    Grid,
    Heading,
    Icon,
    GridItem,
Link,
    Button,
    Image,
  } from '@chakra-ui/react';
  import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

  import {
    AiFillGithub,
    AiOutlineArrowRight,
    AiFillLinkedin,
    AiOutlineArrowDown,
  } from 'react-icons/ai';


  import './introduction.css';

  export default function Introduction() {
    return (
      <div className="introduction">
        <section id="introduction">
        
          <Box mt={40} mb={40} maxW="1200px" mx="auto" alignItems="center">
            <Grid
              m={4}
              p={4}
              templateAreas={{
                base: `"head pic" "text text"`,
                md: `"head text pic"`,
              }}
              templateColumns={{
                base: '0.2fr 1fr',
                md: '0.2fr 1.2fr 1fr',
              }}
              templateRows={{
                base: '1fr 1fr',
                md: '1fr ',
              }}
            >
              {/* link */}
              <GridItem
                bg="white"
                gridArea="head"
                align="center"
                justify="center"
                h="100%"
              >
                <Grid flexDirection={'column'} textAlign={'left'}>
                  <GridItem mt={20}>
                    <Link href={'https://github.com/LizzieTse0617/'} isExternal>
                      <Icon
                        as={AiFillGithub}
                        boxSize={10}
                        pt={2}
                        color="blue.500"
                        _hover={{ color: 'red.500' }}
                      />
                    </Link>
                  </GridItem>
                  <GridItem>
                    <Link
                      href={'https://www.linkedin.com/in/lizzie-tse-620668255'}
                      isExternal
                    >
                      <Icon
                        as={AiFillLinkedin}
                        boxSize={10}
                        pt={2}
                        color="blue.500"
                        _hover={{ color: 'red.500' }}
                      />
                    </Link>
                  </GridItem>
                </Grid>
              </GridItem>
              <GridItem mt={20} p={4} gridArea="text">
                <Heading as="h2" size="xl" fontWeight="bold" mb={5}>
                  Hi, I'm Lizzie
                </Heading>
  
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="bold"
                  color="gray.500"
                  mb={3}
                >
                Mobile & Web Software Student from Ottawa, Canada 👋
                </Heading>
                <Text fontSize="sm" fontWeight="normal" color="gray.700" mb={3}>

                Hi! I’m a mobile and web software student from Algonquin College, Canada. 
                😃 I was a former medical sales engineer & product engineer in medical equipment & Iot healthcare solution.(Yes, from hardware product production to software applications!). My goal is to use my skills in app development and industry knowledge to make life easier for physicians through AI healthcare technology.
              
                </Text>
  
                <Button
                  colorScheme="blue"
                  size="md"
                  variant="solid"
                  _hover={{ bg: 'blue.600' }}
                  rightIcon={<Icon as={AiOutlineArrowRight} boxSize={4} />}
                  onClick={() =>
                    (window.location = 'mailto:lizzie.tse617@gmail.com')
                  }
                >
                  Contact me by email
                </Button>
              </GridItem>
              <GridItem bg="white" p={4} gridArea="pic">
                <Image
                  src=

                  {`${process.env.PUBLIC_URL}/32380264-c434-4e91-923a-615b5e86a45b.png`}


                  alt="lizzie-tse-wing-shan-headshot"
                  borderRadius={'13rem'}
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </GridItem>
            </Grid>
          </Box>
       
          <ScrollLink to="about" smooth={true} duration={500}>




          <Box display="flex" alignItems="center" justifyContent="center">
         
              <a
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                }}
              >
                scroll-down
                <Icon
                  className="scrollDown"
                  as={AiOutlineArrowDown}
                  boxSize={6}
                  pl={1}
                  pt={1}
                  color="blue.500"
                />
              </a>
       
          </Box></ScrollLink>
        </section>
      </div>
    );
  }
  