import { Box } from '@chakra-ui/react';
import {
  Text,
  Grid,
  Flex,
  Heading,
  Tag,
  Link,
  Icon,
  GridItem,
} from '@chakra-ui/react';
import { AiOutlineLink } from 'react-icons/ai';
export default function ScrollableBox() {
  return (
    <Box
      h="18rem"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          backgroundColor: '#EBF8FF',
          width: '0.5rem',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#3182CE',
          borderRadius: '1rem',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '1rem',
        },
      }}
    >
      {/* Event 3 */}
      <Box bgColor="gray.100" p={2} mb={4}>
        <Text fontWeight="bold">
          IRCC ArriveCAN usability testing{' '}
          <Text as="span" color="gray.500" fontSize={'sm'}>
            - User Experience A/B test, date: 10th Feb 2023
          </Text>
          <Box>
            <Text as="span" fontSize="xs" color="gray.500">
              Link
              <Icon as={AiOutlineLink} boxSize={4} />
            </Text>
          </Box>
        </Text>
      </Box>
      {/* Event 2 */}
      <Box bgColor="gray.100" p={2} mb={4}>
        <Text fontWeight="bold">
          Accomplish Google UX Design Certificate
          <Text as="span" color="gray.500" fontSize={'sm'}>
            - date: 1st Sept 2021
          </Text>
          <Box>
            <Link
              href="https://coursera.org/share/cf2dd282885254f3bbad21d1cd6200da
"
            >
              <Text as="span" fontSize="xs" color="gray.500">
                Link <Icon as={AiOutlineLink} boxSize={4} />
              </Text>
            </Link>
          </Box>
        </Text>
      </Box>
      {/* Event 1 */}
      <Box bgColor="gray.100" p={2} mb={4}>
        <Text fontWeight="bold">
          Code challenge : Edabit
          <Box>
            <Link href="https://edabit.com/user/J8Lhcdc6cBHL8QAdR">
              <Text as="span" fontSize="xs" color="gray.500">
                Link <Icon as={AiOutlineLink} boxSize={4} />
              </Text>
            </Link>
          </Box>
        </Text>
      </Box>
    </Box>
  );
}
