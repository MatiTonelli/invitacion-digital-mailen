import React from 'react';
import Fondo from '../Assets/backgroundHD.jpg';
import FondoCortado from '../Assets/fondoCortado.png';
import FondoFooter from '../Assets/fondoFooter.png';
import HeadFlowers from '../Assets/headFlowers.png';
import TimeFlowers from '../Assets/timeFlowers.png';
import SideFlowers from '../Assets/sideFlowers.png';
import ArrowDown from '../Assets/arrowDown.png';
import HeartIcon from '../Assets/heartIcon.png';
import Lines from '../Assets/lines.png';
import Confeti from '../Assets/confeti.png';
import Letrero from '../Assets/letrero.png';
import SeparacionSlide from '../Assets/separacionSlide.png';
import LineaSimpleSeparadora from '../Assets/lineaSimpleSeparadora.png';
import Camera from '../Assets/camera.png';
import CheckList from '../Assets/checkList.png';
import Foto1 from '../Assets/FotosSlide/foto1.jpg';
import Foto2 from '../Assets/FotosSlide/foto2.jpg';
import Foto3 from '../Assets/FotosSlide/foto3.jpg';
import Foto4 from '../Assets/FotosSlide/foto4.jpg';
import Foto5 from '../Assets/FotosSlide/foto5.jpg';
import Foto6 from '../Assets/FotosSlide/foto6.jpg';

import { useMediaQuery } from '@chakra-ui/react';
import { Timer } from 'easytimer.js/dist/easytimer.min.js';
import $ from 'jquery';
import Countdown from 'react-countdown';


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
import { useNavigate } from 'react-router-dom';


const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
};

const images = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

export default function Home() {
  const [slider, setSlider] = React.useState(null);
  const [isShortThan960px] = useMediaQuery('(max-width: 960px)');
  const [isShortThan450px] = useMediaQuery('(max-width: 450px)');
  const navigate = useNavigate()
  var timer = new Timer();
  timer.start({ countdown: true, startValues: { seconds: 30 } });
  timer.addEventListener('secondsUpdated', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
  });
  return (
    <>
      {isShortThan960px ? (
        <Box w={'100vw'} minH={'100vh'} bgColor={'#333333'}>
          <Center
            w={'100%'}
            h={'100vh'}
            bgImage={Fondo}
            justifyContent="flex-start"
            bgPosition={'center'}
            flexDirection="column"
            borderBottom={'5px solid black'}
          >
            <Image src={HeadFlowers} h={isShortThan450px ? "26vh" : "30vh"} mt={'-17%'}></Image>
            <Flex mt="2vh">
              <Box w="10vw" mt={'-2.3vw'} mr="-1.2vw">
                <hr />
              </Box>
              <Text color={'white'} fontSize={isShortThan450px ? "6vw" : "5vw" } mt="-13%">
                10.12.2022
              </Text>
              <Box w="10vw" mt={'-2.3vw'} ml="-1.2vw">
                <hr />
              </Box>
            </Flex>
            <Text mt={isShortThan450px ? "5vh" : "2vh" } color={'white'} fontFamily="Parisienne" fontSize={isShortThan450px ? "12vh" : "20vh"}>
              Mailen
            </Text>
            <Text
              color={'#8d028d'}
              fontFamily="Arapey"
              fontSize="7vw"
              mb={isShortThan450px ? "15vh" : "4vh" }
              fontWeight={700}
            >
              Mis 15 años
            </Text>
            <Text
              color={'#dadada'}
              fontSize="4.5vw"
              fontFamily="Arapey"
              m={isShortThan450px ? "3vw" : '1vw'}
              align={'center'}
            >
              Te espero para compartir la alegría de este día que será para mi
              mágico, inolvidable y único.
            </Text>
            <Image
              position={'absolute'}
              bottom="-5"
              src={ArrowDown}
              color="white"
              w="14vw"
              transform={'rotate(270deg)'}
            />
          </Center>
          <Center
            w={'100%'}
            h={'100vh'}
            bgImage={FondoCortado}
            alignItems="center"
            bgPosition={'center'}
            borderBottom={'5px solid black'}
            overflow="hidden"
          >
            <Image mt={'-9vh'} ml="-4vw" src={TimeFlowers} w={isShortThan450px? "150vw" : "115vw"}></Image>
            <Circle
              position={'absolute'}
              w={isShortThan450px? "70vw" : "50vw"}
              h={isShortThan450px? "70vw" : "50vw"}
              bgColor="gray"
              opacity={'1'}
              color="white"
              border={'2px solid'}
              borderColor="#8d028d"
              fontSize={isShortThan450px ? "12vw" : "7vw" }
              flexDirection={'column'}
              justifyContent="space-evenly"
            >
              <Text
                color={'#8d028d'}
                fontFamily="Parisienne"
              >
                Falta
              </Text>
              <Countdown
                date={'2022-12-10T12:00:00'}
                renderer={(props) => {
                  return (
                    <Flex w={'100%'}>
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        <Text fontSize={isShortThan450px ? "6vw" : '5vw'} color={'white'}>{props.days}</Text>
                        <Text fontSize={'4vw'} color={'#8d028d'}>
                          dias
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        <Text fontSize={isShortThan450px ? "6vw" : '5vw'} color={'white'}>{props.hours}</Text>
                        <Text fontSize={'4vw'} color={'#8d028d'}>
                          hs
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        <Text fontSize={isShortThan450px ? "6vw" : '5vw'} color={'white'}>{props.minutes}</Text>
                        <Text fontSize={'4vw'} color={'#8d028d'}>
                          min
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        <Text fontSize={isShortThan450px ? "6vw" : '5vw'} color={'white'}>{props.seconds}</Text>
                        <Text fontSize={'4vw'} color={'#8d028d'}>
                          segs
                        </Text>
                      </Flex>
                    </Flex>
                  );
                }}
              />
              <Image src={HeartIcon} h="20%"></Image>
            </Circle>
          </Center>
          <Box
            w={'100%'}
            h={'100vh'}
            bgColor={'#333333'}
            alignItems="flex-start"
            bgPosition={'center'}
            borderBottom={'5px solid black'}
            display="block"
          >
            <Center w={'100%'} alignItems="center" mt={'10vh'}>
              <Image src={Lines} w="40%" mt="-5vh"></Image>
              <Circle
                w="30%"
                h="30vw"
                bgColor={'gray'}
                mx="-3vh"
                zIndex={'10'}
                mt="-5vh"
              >
                <Image src={Confeti} w="70%"></Image>
              </Circle>
              <Image src={Lines} w="40%" mt="-5vh"></Image>
            </Center>
            <Center flexDirection={'column'}>
              <Center mt="10vh">
                <Image src={Letrero} w="45%" position={'absolute'} />
                <Text
                  zIndex={'10'}
                  fontFamily="Parisienne"
                  color="white"
                  fontSize={'6vw'}
                >
                  Fiesta
                </Text>
              </Center>

              <Center mt={'10vh'} w="100%" justifyContent={'space-evenly'} flexWrap="wrap">
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="80%"
                  my={"1vh"}
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={isShortThan450px ? "8vw" : '6vw'}
                    mb="2vh"
                  >
                    Día
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize={isShortThan450px ? "6vw" : '4vw'}>
                    Sábado 10 de Diciembre - 13hs
                  </Text>
                </Center>
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="80%"
                  my={"1vh"}
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={isShortThan450px ? "8vw" : '6vw'}
                    mb="2vh"
                  >
                    Lugar
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize={isShortThan450px ? "6vw" : '4vw'}>
                    Quinta Cardales
                  </Text>
                </Center>
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="80%"
                  my={"1vh"}
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={isShortThan450px ? "8vw" : '6vw'}
                    mb="2vh"
                  >
                    Dirección
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize={isShortThan450px ? "6vw" : '4vw'}>
                    Gral. Rodríguez entre Garin y Solís
                  </Text>
                </Center>
              </Center>
              <Button
                mt={'8vh'}
                px={'10vw'}
                py="2vh"
                border="none"
                fontSize={isShortThan450px ? "6vw" : '4vw'}
                bgColor="#8d028d"
                borderRadius={'20px'}
                color="white"
                fontFamily={'Arapey'}
                _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
                onClick={() => navigate('/more-info')}
              >
                ¿CÓMO LLEGAR?
              </Button>
            </Center>
            <Center bgColor={'#333333'}>
              <Image src={SeparacionSlide} w="100%" my={'20vh'} />
            </Center>
            <Center bgColor={'#333333'} flexDirection="column" pb="20vh" align="center" borderTop={"4px solid #333333"}>
              <Text fontFamily={'Parisienne'} color="white" fontSize={'7vw'}>
                Un recorrido de estos 15 años
              </Text>
              <Text fontFamily={'Arapey'} color="#8d028d" fontSize={'4vw'} mx="6vw">
                Junto a personas que son muy importantes en mi vida
              </Text>
              <Image src={Camera} h={'20vh'} my="10vh" />

              <Center flexWrap={'wrap'} w="65%">
                <Image
                  src={SideFlowers}
                  position="absolute"
                  left={'0'}
                  h="40vw"
                />
                <Image
                  src={SideFlowers}
                  position="absolute"
                  right={'0'}
                  h="40vw"
                  transform={'scaleX(-1)'}
                />
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto1} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto6} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto2} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto5} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto3} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={isShortThan450px ? "50vw" : '30vw'} m="2vh">
                  <Image src={Foto4} h="80%" />
                </Box>
              </Center>
              <Image src={LineaSimpleSeparadora} mt="5vh" mb="-10vh" w="100%"/>
              <Center flexDirection={'column'} mt="20vh">
                <Text fontFamily={'Parisienne'} color="white" fontSize={'7vw'}>
                  Fiesta
                </Text>
                <Text fontFamily={'Arapey'} color="#8d028d" fontSize={'4vw'}>
                  Hagamos juntxs una fiesta épica.
                </Text>
                <Center
                  bgColor={'#7B7A7D'}
                  flexDirection="column"
                  p={'3vw'}
                  borderRadius="40px"
                  mt={'10vh'}
                  h="40vh"
                  justifyContent={'space-between'}
                >
                  <Text fontFamily={'Parisienne'} fontSize="5vw" color="white">
                    Tips y Notas
                  </Text>
                  <Image src={CheckList} h="15vh" mt={'1vh'}></Image>
                  <Text fontFamily={'Arapey'} color="#8d028d" fontSize="4vw">
                    Información adicional para tener en cuenta
                  </Text>
                  <Button
                    w={'50%'}
                    py="1vh"
                    border={'none'}
                    fontSize={'4vw'}
                    bgColor="#8d028d"
                    borderRadius={'20px'}
                    color="white"
                    fontFamily={'Arapey'}
                    _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
                    onClick={() => navigate('/more-info')}
                  >
                    + INFO
                  </Button>
                </Center>
              </Center>
            </Center>
            <Center bgImage={FondoFooter} h="100%" w="100%">
              <Center justifyContent={'space-between'} w="70%">
                <Flex flexDirection={'column'} justifyContent="center" w="40%">
                  <Text
                    fontFamily={'Parisienne'}
                    color="white"
                    fontSize={isShortThan450px ? "20vw" : '12vw'}
                  >
                    Mailen
                  </Text>
                  <Text
                    fontFamily={'Arapey'}
                    color="#8d028d"
                    fontSize={isShortThan450px ? "5vw" : '4vw'}
                    fontWeight={700}
                  >
                    Mis 15 años
                  </Text>
                </Flex>
                <Flex
                  flexDirection={'column'}
                  justifyContent="center"
                  w="50%"
                  mb={'-30vh'}
                >
                  <Text fontFamily={'Arapey'} color="white" fontSize={isShortThan450px ? "5vw" : '3vw'} align="end" mb={"3vh"} onClick={()=>navigate('/more-info')} _hover={{cursor: 'pointer'}}>
                    ¿Cómo llegar?
                  </Text>
                  <Text fontFamily={'Arapey'} color="white" fontSize={isShortThan450px ? "5vw" : '3vw'} align="end" onClick={()=>navigate('/more-info')} _hover={{cursor: 'pointer'}}>
                    Más información
                  </Text>
                </Flex>
              </Center>
            </Center>
          </Box>
        </Box>
      ) : (
        <Box w={'100vw'} minH={'100vh'} bgColor={'#333333'}>
          <Center
            w={'100%'}
            h={'100vh'}
            bgImage={Fondo}
            justifyContent="flex-start"
            bgPosition={'center'}
            flexDirection="column"
            borderBottom={'5px solid black'}
          >
            <Image src={HeadFlowers} h="50vh" mt={'-11%'}></Image>
            <Flex mt="2vh">
              <Box w="10vw" mt={'-2.3vw'} mr="-1.2vw">
                <hr />
              </Box>
              <Text color={'white'} fontSize="2.5vw" mt="-13%">
                10.12.2022
              </Text>
              <Box w="10vw" mt={'-2.3vw'} ml="-1.2vw">
                <hr />
              </Box>
            </Flex>
            <Text color={'white'} fontFamily="Parisienne" fontSize="25vh">
              Mailen
            </Text>
            <Text
              color={'#8d028d'}
              fontFamily="Arapey"
              fontSize="3.3vw"
              mt={'-4vh'}
              mb="6vh"
              fontWeight={700}
            >
              Mis 15 años
            </Text>
            <Text
              color={'#dadada'}
              fontSize="2.2vw"
              fontFamily="Arapey"
              mx={'20vw'}
              align={'center'}
            >
              Te espero para compartir la alegría de este día que será para mi
              mágico, inolvidable y único.
            </Text>
            <Image
              position={'absolute'}
              bottom="-5"
              src={ArrowDown}
              color="white"
              w="7vw"
              transform={'rotate(270deg)'}
            />
          </Center>
          <Center
            w={'100%'}
            h={'100vh'}
            bgImage={FondoCortado}
            alignItems="center"
            bgPosition={'center'}
            borderBottom={'5px solid black'}
          >
            <Image mt={'-9vh'} ml="-4vw" src={TimeFlowers} w="50vw"></Image>
            <Circle
              position={'absolute'}
              w="21vw"
              h="21vw"
              bgColor="gray"
              opacity={'1'}
              color="white"
              border={'2px solid'}
              borderColor="#8d028d"
              fontSize="3vw"
              flexDirection={'column'}
              justifyContent="space-evenly"
            >
              <Text
                color={'#8d028d'}
                fontFamily="Parisienne" /* mt="-4vh" mb={"3vh"} */
              >
                Falta
              </Text>
              <Countdown
                date={'2022-12-10T12:00:00'}
                renderer={(props) => {
                  return (
                    <Flex w={'100%'}>
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        {props.days}
                        <Text fontSize={'2vw'} color={'#8d028d'}>
                          dias
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        {props.hours}
                        <Text fontSize={'2vw'} color={'#8d028d'}>
                          hs
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        {props.minutes}
                        <Text fontSize={'2vw'} color={'#8d028d'}>
                          min
                        </Text>
                      </Flex>
                      <hr />
                      <Flex
                        flexDirection={'column'}
                        alignItems="center"
                        w={'25%'}
                      >
                        {props.seconds}
                        <Text fontSize={'2vw'} color={'#8d028d'}>
                          segs
                        </Text>
                      </Flex>
                    </Flex>
                  );
                }}
              />
              <Image src={HeartIcon} h="20%"></Image>
            </Circle>
          </Center>
          <Box
            w={'100%'}
            h={'100vh'}
            bgColor={'#333333'}
            alignItems="flex-start"
            bgPosition={'center'}
            borderBottom={'5px solid black'}
            display="block"
          >
            <Center w={'100%'} alignItems="center" mb={'-10vh'}>
              <Image src={Lines} w="45%" mt="-5vh"></Image>
              <Circle
                w="10%"
                h="10vw"
                bgColor={'gray'}
                mx="-3vh"
                zIndex={'10'}
                mt="-5vh"
              >
                <Image src={Confeti} w="70%"></Image>
              </Circle>
              <Image src={Lines} w="45%" mt="-5vh"></Image>
            </Center>
            <Center flexDirection={'column'}>
              <Center mt="4vh">
                <Image src={Letrero} w="25%" position={'absolute'} />
                <Text
                  zIndex={'10'}
                  fontFamily="Parisienne"
                  color="white"
                  fontSize={'3vw'}
                >
                  Fiesta
                </Text>
              </Center>

              <Center mt={'10vh'} w="100%" justifyContent={'space-evenly'}>
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="300px"
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={'2.6vw'}
                    mb="2vh"
                  >
                    Día
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize="2vw">
                    Sábado 10 de Diciembre - 13hs
                  </Text>
                </Center>
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="300px"
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={'2.6vw'}
                    mb="2vh"
                  >
                    Lugar
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize="2vw">
                    Quinta Cardales
                  </Text>
                </Center>
                <Center
                  flexDirection={'column'}
                  textAlign={'center'}
                  minW="300px"
                >
                  <Text
                    fontFamily="Parisienne"
                    color="white"
                    fontSize={'2.6vw'}
                    mb="2vh"
                  >
                    Dirección
                  </Text>
                  <Text fontFamily="Arapey" color={'#8d028d'} fontSize="2vw">
                    Gral. Rodríguez entre Garin y Solís
                  </Text>
                </Center>
              </Center>
              <Button
                mt={'8vh'}
                px={'10vw'}
                py="2vh"
                border="none"
                fontSize={'2vw'}
                bgColor="#8d028d"
                borderRadius={'20px'}
                color="white"
                fontFamily={'Arapey'}
                _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
              >
                ¿CÓMO LLEGAR?
              </Button>
            </Center>
            <Center bgColor={'#333333'}>
              <Image src={SeparacionSlide} w="100%" my={'20vh'} />
            </Center>
            <Center bgColor={'#333333'} flexDirection="column" pb="20vh">
              <Text fontFamily={'Parisienne'} color="white" fontSize={'5vw'}>
                Un recorrido de estos 15 años
              </Text>
              <Text fontFamily={'Arapey'} color="#8d028d" fontSize={'2vw'}>
                Junto a personas que son muy importantes en mi vida
              </Text>
              <Image src={Camera} h={'20vh'} my="10vh" />

              <Center flexWrap={'wrap'} w="65%">
                <Image
                  src={SideFlowers}
                  position="absolute"
                  left={'0'}
                  h="40vw"
                />
                <Image
                  src={SideFlowers}
                  position="absolute"
                  right={'0'}
                  h="40vw"
                  transform={'scaleX(-1)'}
                />
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto1} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto6} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto2} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto5} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto3} h="80%" />
                </Box>
                <Box bgColor={'white'} px="30px" pt={'25px'} h={'20vw'} m="2vh">
                  <Image src={Foto4} h="80%" />
                </Box>
              </Center>
              <Image src={LineaSimpleSeparadora} mt="5vh" mb="-10vh" w="100%" />
              <Center flexDirection={'column'} mt="20vh">
                <Text fontFamily={'Parisienne'} color="white" fontSize={'5vw'}>
                  Fiesta
                </Text>
                <Text fontFamily={'Arapey'} color="#8d028d" fontSize={'2vw'}>
                  Hagamos juntxs una fiesta épica.
                </Text>
                <Center
                  bgColor={'#7B7A7D'}
                  flexDirection="column"
                  p={'3vw'}
                  borderRadius="40px"
                  mt={'10vh'}
                  h="70vh"
                  justifyContent={'space-between'}
                >
                  <Text fontFamily={'Parisienne'} fontSize="3vw" color="white">
                    Tips y Notas
                  </Text>
                  <Image src={CheckList} h="30vh" mt={'1vh'}></Image>
                  <Text fontFamily={'Arapey'} color="#8d028d" fontSize="1.5vw">
                    Información adicional para tener en cuenta
                  </Text>
                  <Button
                    w={'50%'}
                    py="1vh"
                    border={'none'}
                    fontSize={'2vw'}
                    bgColor="#8d028d"
                    borderRadius={'20px'}
                    color="white"
                    fontFamily={'Arapey'}
                    _hover={{ backgroundColor: '#7d025d', cursor: 'pointer' }}
                  >
                    + INFO
                  </Button>
                </Center>
              </Center>
            </Center>
            <Center bgImage={FondoFooter} h="100%" w="100%">
              <Center justifyContent={'space-between'} w="70%">
                <Flex flexDirection={'column'} justifyContent="center" w="40%">
                  <Text
                    fontFamily={'Parisienne'}
                    color="white"
                    fontSize={'7vw'}
                  >
                    Mailen
                  </Text>
                  <Text
                    fontFamily={'Arapey'}
                    color="#8d028d"
                    fontSize={'3vw'}
                    fontWeight={700}
                  >
                    Mis 15 años
                  </Text>
                </Flex>
                <Flex
                  flexDirection={'column'}
                  justifyContent="center"
                  w="40%"
                  mb={'-15vh'}
                >
                  <Text fontFamily={'Arapey'} color="white" fontSize={'1.7vw'} mb={"3vh"} onClick={()=>navigate('/more-info')} _hover={{cursor: 'pointer'}}> 
                    ¿Cómo llegar?
                  </Text>
                  <Text fontFamily={'Arapey'} color="white" fontSize={'1.7vw'} onClick={()=>navigate('/more-info')} _hover={{cursor: 'pointer'}}>
                    Más información
                  </Text>
                </Flex>
              </Center>
            </Center>
          </Box>
        </Box>
      )}
    </>
  );
}
