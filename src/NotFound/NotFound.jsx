import React from 'react'
import {
  Text,
  Box,

} from '@chakra-ui/react';
export default function NotFound() {
  return (
    <div >
         <Box maxW="1200px" mx="auto"   textAlign="center" fontSize={{
                    base: "2xl",
                    md: "4xl",
                  }} fontWeight="bold"  p="1rem">
     <Text as="h2"> 404 not found</Text></Box>
    </div>
  )
}
