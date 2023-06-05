import {
    Text,
    Box,
    Grid,

    Icon,
    Link,
    Button,

    GridItem,
  } from '@chakra-ui/react';
  import { AiOutlineSend } from 'react-icons/ai';
  export default function Touch() {
    return (
      <div>
        <Box
          mt={40}
          maxW="1200px"
          mx="auto"
          alignItems="center"
          boxShadow="xl"
          rounded="md"
          bg="white"
        >
          <Grid templateColumns={{ base: '1fr', md: '0.6fr 0.4fr ' }} gap={6}
       
          
          >
            <GridItem p={10}>
              <Text as="span" fontSize={'xl'}>
                LET'S TALK
              </Text>
              <Text fontSize={'2rem'} lineHeight={1}>
                ABOUT YOUR
              </Text>
              <Text fontSize={'4rem'} lineHeight={1} fontWeight={'bold'}>
                NEXT PROJECT
              </Text>
            </GridItem>
            <GridItem pt={10} pb={10} textAlign={'center'}>
              <Link href="#contact">
                <Button
                  colorScheme="blue"
                  size="md"
                  p={8}
                  
                  variant="solid"
                  _hover={{ bg: 'blue.600' }}
                  rightIcon={<Icon as={AiOutlineSend} boxSize={4} />}
                >
                  Get in Touch
                </Button>
              </Link>
            </GridItem>
          </Grid>
        </Box>
      </div>
    );
  }
  