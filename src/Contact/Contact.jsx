import {
  Text,
  Box,
  Grid,
  Icon,
  Button,
  Heading,
  GridItem,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  //EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eb6f1qn',
        'template_a2beno4',
        form.current,
        'nDxtYqP62UviJwHHm'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section id="contact">
        <Box mt={40} maxW="1200px" mx="auto" alignItems="center" mb={40}>
          <Heading as="h2" size="xl" align="center" fontWeight="900" mb={20}>
            Contact Me
          </Heading>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            templateRows={{ base: '1fr 1fr', md: '1fr' }}
            gap={4}
            ml={4}
            mr={4}
            mt={10}
          >
            {/* contact */}
            <GridItem>
              <Box>
                <Heading as="h2" size="xl" mb={6} fontWeight="800">
                  Let's discuss your project
                </Heading>

                <Grid
                  mt={'4.5rem'}
                  templateAreas={`"phoneIcon phone" "emailIcon icon" `}
                  templateColumns={'0.08fr 0.92fr'}
                  templateRows={'repeat(2, 1fr)'}
                >
                  <GridItem gridArea="phoneIcon">
                    <Icon color="blue.500" as={AiFillPhone} boxSize={8} />
                  </GridItem>
                  <GridItem gridArea="phone">
                    <Heading as="h3" size="md" fontWeight="bold" mb={2}>
                      Phone
                    </Heading>
                    <Text color="gray.600">+1-343-558-4977 (Canada)</Text>
                    <Text color="gray.600" mb={8}>
                      +852-9629-1557 (Hong Kong)
                    </Text>
                  </GridItem>
                  <GridItem gridArea="emailIcon">
                    <Icon color="blue.500" as={AiTwotoneMail} boxSize={8} />
                  </GridItem>
                  <GridItem gridArea="icon">
                    <Heading as="h3" size="md" fontWeight="bold" mb={2}>
                      Email Address
                    </Heading>
                    <Text color="gray.600" mb={8}>
                      lizzie.tse617@gmail.com
                    </Text>
                  </GridItem>
                </Grid>
              </Box>
            </GridItem>

            {/* form */}
            <GridItem>
              <Box>
                <Box>
                  <Heading
                    as="h3"
                    size="lg"
                    fontWeight="400"
                    color="gray.500"
                    mb={10}
                  >
                    I'm always open to discussing project
                    <Text span size="lg" color="black" fontWeight="bold">
                      Development or Hiring Opportunities
                    </Text>
                  </Heading>
                  <form ref={form} onSubmit={sendEmail}>
                    <Grid
                      templateAreas={`"name" "email" "message" "submitBtn"`}
                      templateColumns={'1fr'}
                      gridGap={4}
                    >
                      <GridItem gridArea={'name'}>
                        <label>Name</label>
                        <Input
                          type="text"
                          name="user_name"
                          bg="gray.100" // Set background color here
                        />
                      </GridItem>
                      <GridItem gridArea={'email'}>
                        <label>Email</label>
                        <Input
                          type="email"
                          name="user_email"
                          bg="gray.100" // Set background color here
                        />
                      </GridItem>
                      <GridItem gridArea={'message'}>
                        <label>Message</label>

                        <Textarea bg="gray.100" name="message" />

                        <Button
                          gridArea={'submitBtn'}
                          type="submit"
                          colorScheme="blue"
                          mt={4} // Set background color here
                        >
                          Send
                        </Button>
                      </GridItem>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </section>
    </div>
  );
}
