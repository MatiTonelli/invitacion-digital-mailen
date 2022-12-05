import React from 'react';
import Fondo from '../Assets/backgroundHD.jpg';

import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Circle,
  useColorModeValue,
  Heading,
  Center,
  Tooltip,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box w={'100vw'} minH={'100vh'}>
      <Box h={'100vh'} bgImage={Fondo}></Box>
      <Box h={'100vh'} bgImage={Fondo}></Box>
    </Box>
  );
}
