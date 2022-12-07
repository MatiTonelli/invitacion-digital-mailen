import React from 'react';

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
  Link,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Fondo from '../Assets/backgroundHD.jpg';
import SideFlowers from '../Assets/sideFlowers.png';

export default function MoreInfo() {
  const [isShortThan960px] = useMediaQuery('(max-width: 960px)');
  const [isShortThan450px] = useMediaQuery('(max-width: 450px)');
  const navigate = useNavigate();
  return (
    <>
      {isShortThan960px ? (
        <Center
          w={'100vw'}
          minH="100vh"
          bgColor={'#333333'}
          flexDirection="column"
          justifyContent={'flex-start'}
        >
          <Text
            color={'white'}
            fontFamily="Parisienne"
            fontSize={isShortThan450px ? '10vw' : '5vw'}
            my="8vh"
          >
            Informacion extra
          </Text>
          <Box
            bgColor={'rgba(141, 2, 141, 0.72)'}
            px="5vw"
            py={'1.5vh'}
            align="center"
            borderRadius={'20px'}
            w="70%"
          >
            <Text
              fontSize={isShortThan450px ? '5vw' : '2.5vw'}
              color={'white'}
              fontWeight={700}
              fontFamily="Arapey"
            >
              Atencion!
            </Text>
            <br />
            <Text
              fontSize={isShortThan450px ? '5vw' : '2.3vw'}
              color={'white'}
              fontFamily="Arapey"
            >
              Contamos con un servicio de transporte, el cual parte el dia
              Sabado 10 a las 11 horas {'(estar presente 15 minutos antes)'},
              desde la puerda del colegio{' '}
              <a
                href="https://maps.app.goo.gl/6k2GmkhMpVdzDSYN9"
                target="_blank"
              >
                Instituto 25 de Mayo
              </a>{' '}
              y regresa aproximadamente a la 01 hora del dia Domingo 11.
            </Text>
          </Box>
          <Center
            my={'7vh'}
            p="2vh"
            alignContent="space-around"
            w="50%"
            border={'2px solid black'}
            borderRadius="15px"
          >
            <Image
              src={SideFlowers}
              position="absolute"
              left={'0'}
              h={isShortThan450px ? '50vw' : '40vw'}
            />
            <Image
              src={SideFlowers}
              position="absolute"
              right={'0'}
              h={isShortThan450px ? '50vw' : '40vw'}
              transform={'scaleX(-1)'}
            />
            <Text
              fontSize={isShortThan450px ? '6vw' : '2.2vw'}
              color={'white'}
              fontFamily="Arapey"
              mr={'5vw'}
            >
              No puede faltar:
            </Text>
            <Flex flexDirection={'column'}>
              <Text color={'white'} fontFamily="Arapey" fontSize={'3vw'}>
                - Muda de ropa
              </Text>
              <Text color={'white'} fontFamily="Arapey" fontSize={'3vw'}>
                - Toalla
              </Text>
              <Text color={'white'} fontFamily="Arapey" fontSize={'3vw'}>
                - Traje de baño
              </Text>
            </Flex>
          </Center>
          <Center w={'100%'} h="80vh" flexDirection="column" mb={'10vh'}>
            <Text
              color={'white'}
              fontFamily="Arapey"
              fontSize={isShortThan450px ? '6vw' : '3vw'}
              mb="2vh"
            >
              Locacion del lugar
            </Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.1342228666085!2d-58.9981466847778!3d-34.32160098053341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e93a5d1c661703d!2zMzTCsDE5JzE3LjgiUyA1OMKwNTknNDUuNSJX!5e0!3m2!1ses-419!2sar!4v1670411380142!5m2!1ses-419!2sar"
              width="60%"
              height="80%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Center>
          <Button
            m={'8vh'}
            px={'10vw'}
            py="2vh"
            border="none"
            fontSize={isShortThan450px ? '6vw' : '4vw'}
            bgColor="#8d028d"
            borderRadius={'20px'}
            color="white"
            fontFamily={'Arapey'}
            _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Volver
          </Button>
        </Center>
      ) : (
        <Center
          w={'100vw'}
          minH="100vh"
          bgColor={'#333333'}
          flexDirection="column"
          justifyContent={'flex-start'}
        >
          <Text
            color={'white'}
            fontFamily="Parisienne"
            fontSize={'4vw'}
            my="8vh"
          >
            Informacion extra
          </Text>
          <Box
            bgColor={'rgba(141, 2, 141, 0.72)'}
            px="5vw"
            py={'1.5vh'}
            align="center"
            borderRadius={'20px'}
            w="70%"
          >
            <Text
              fontSize={'2vw'}
              color={'white'}
              fontWeight={700}
              fontFamily="Arapey"
            >
              Atencion!
            </Text>
            <br />
            <Text fontSize={'1.5vw'} color={'white'} fontFamily="Arapey">
              Contamos con un servicio de transporte, el cual parte el dia
              Sabado 10 a las 11 horas {'(estar presente 15 minutos antes)'},
              desde la puerda del colegio{' '}
              <a
                href="https://maps.app.goo.gl/6k2GmkhMpVdzDSYN9"
                target="_blank"
              >
                Instituto 25 de Mayo
              </a>{' '}
              y regresa aproximadamente a la 01 hora del dia Domingo 11.
            </Text>
          </Box>
          <Center
            my={'7vh'}
            py="2vh"
            alignContent="space-around"
            w="30%"
            border={'2px solid black'}
            borderRadius="15px"
          >
            <Image src={SideFlowers} position="absolute" left={'0'} h="40vw" />
            <Image
              src={SideFlowers}
              position="absolute"
              right={'0'}
              h="40vw"
              transform={'scaleX(-1)'}
            />
            <Text
              fontSize={'1.7vw'}
              color={'white'}
              fontFamily="Arapey"
              mr={'7vw'}
            >
              No puede faltar:
            </Text>
            <Flex flexDirection={'column'}>
              <Text color={'white'} fontFamily="Arapey" fontSize={'1.5vw'}>
                - Muda de ropa
              </Text>
              <Text color={'white'} fontFamily="Arapey" fontSize={'1.5vw'}>
                - Toalla
              </Text>
              <Text color={'white'} fontFamily="Arapey" fontSize={'1.5vw'}>
                - Traje de baño
              </Text>
            </Flex>
          </Center>
          <Center w={'100%'} h="80vh" flexDirection="column" mb={'10vh'}>
            <Text
              color={'white'}
              fontFamily="Arapey"
              fontSize={'1.5vw'}
              mb="2vh"
            >
              Locacion del lugar
            </Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.1342228666085!2d-58.9981466847778!3d-34.32160098053341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e93a5d1c661703d!2zMzTCsDE5JzE3LjgiUyA1OMKwNTknNDUuNSJX!5e0!3m2!1ses-419!2sar!4v1670411380142!5m2!1ses-419!2sar"
              width="60%"
              height="80%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Center>
          <Button
            mb={'8vh'}
            px={'10vw'}
            py="2vh"
            border="none"
            fontSize={isShortThan450px ? '4vw' : '2vw'}
            bgColor="#8d028d"
            borderRadius={'20px'}
            color="white"
            fontFamily={'Arapey'}
            _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Volver
          </Button>
        </Center>
      )}
    </>
  );
}
