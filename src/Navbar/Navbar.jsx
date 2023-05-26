import { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  IconButton,
  Collapse,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { CloseIcon,HamburgerIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box position="sticky" top={0} zIndex={10} pr={4} pl={4}>
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.03)"
        zIndex={-1}
        backdropFilter="blur(20px)"
      />
      <Flex
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        bg="transparent"
        py={4}
        position="sticky"
      >
        <Link to="/">
          <Image
            src={`${process.env.PUBLIC_URL}/name-logo.svg`}
            alt="Image"
            height={10}
          />

<Image src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80"/>


        </Link>

        
        <Spacer />
        <IconButton
          display={{ base: 'block', md: 'none' }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          color="blue.500"
          boxSize={10}
          onClick={handleToggle}
          p={3}
        />
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          alignItems="center"
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={8}
            fontWeight="bold"
          >



            <Link to="/" active>
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/product">Products</Link>
            <Link to="/contact">Contact</Link>
          </Stack>
        </Box>
      </Flex>
      <Collapse in={isOpen} animateOpacity color="black">
        <Flex flexDirection="column" alignItems="flex-end"></Flex>
      </Collapse>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function NavLink({ href, children, active }) {
  const linkColor = useColorModeValue('black', 'blue.500');
  const hoverColor = useColorModeValue('blue.500', 'black');
  return (
    <Text
      fontSize="md"
      fontWeight="bold"
      color={active ? linkColor : 'black'}
      ml={10}
      _hover={{ color: hoverColor }}
    >
      <a href={href}>{children}</a>
    </Text>
  );
}

export default Navbar;
