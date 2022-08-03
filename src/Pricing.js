import React from "react";
import { chakra, Box, Flex, Icon, HStack, VStack } from "@chakra-ui/react";
import { IoCheckmark,IoWarning } from "react-icons/io5";

export default function Pricing() {
  const Feature = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "green.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoCheckmark}
        />
        <chakra.p fontSize="lg" color="#002327" {...props} />
      </Flex>
    );
  };
  const FeatureBad = (props) => {
    return (
      <Flex alignSelf="start" w="full">
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          _light={{ color: "yellow.500" }}
          viewBox="0 0 20 20"
          fill="currentColor"
          as={IoWarning}
        />
        <chakra.p fontSize="lg" color="#002327" {...props} />
      </Flex>
    );
  };
  return (
    <Flex
      bg="#E9F0F6"
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="full" pt={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          mb={{ base: 6, sm: 0 }}
        >
          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="#002327"
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
              color="white"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matricula
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  50€
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#fff"
              borderBottomLeftRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+2500 preguntas Oficiales DGT</Feature>
                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Soporte de profesores</Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="#fff"
                  bg="#002327"
                  _hover={{
                    bg: "brand.50",
                    _dark: { bg: "gray.700" },
                  }}
                  cursor="pointer"
                  href="https://buy.stripe.com/8wMfZe7fJfZn49yfZ1"
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
          <Flex
            flex={{ base: 1, lg: "initial" }}
            w={{ lg: 2.4 / 7 }}
            rounded="lg"
            bg="#00BAB5"
            _dark={{ bg: "gray.700" }}
            mt={{ base: 4, sm: -4 }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matricula + Bono 10 Clases Practicas
              </chakra.span>
              <VStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  340€
                </chakra.span>
                <chakra.span alignSelf="center" fontSize="3xl" color="#002327">
                  (Recomendado)
                </chakra.span>
              </VStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg="#fff"
              _dark={{ bg: "gray.800" }}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+2500 preguntas Oficiales DGT</Feature>
               
                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Clases Practicas de 45 min</Feature>
                <Feature>Prácticas en zona de examen</Feature>
                <Feature>Contacto directo con tu profesor/a</Feature>
                <FeatureBad>No incluye Tasas DGT ni examen Practico</FeatureBad>
              </VStack>
              <Box display="inline-flex" rounded="md" shadow="md" w="full">
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  _light={{ color: "white" }}
                  bg="#00BAB5"
                  _dark={{ bg: "brand.500" }}
                  _hover={{
                    bg: "brand.700",
                    _dark: { bg: "brand.600" },
                  }}
                  cursor="pointer"
                  href="https://buy.stripe.com/4gwaEUcA35kJ9tSaEK"
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>

          <Flex
            flex={{ sm: 1, lg: "initial" }}
            w={{ lg: 2.3 / 7 }}
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg="#002327"
            _dark={{ bg: "gray.700" }}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
              color="white"
            >
              <chakra.span fontSize="3xl" fontWeight="bold">
                Matricula + Bono 20 Clases Practicas
              </chakra.span>
              <HStack spacing={3}>
                <chakra.span
                  fontWeight="bold"
                  fontSize="6xl"
                  textShadow="2px 0 currentcolor"
                >
                  620€
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="#fff"
              _dark={{ bg: "gray.800" }}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>+2500 preguntas Oficiales DGT</Feature>
                <Feature>Recomendaciones personalizadas</Feature>
                <Feature>Clases Practicas de 45 min</Feature>
                <Feature>Prácticas en zona de examen</Feature>
                <Feature>Contacto directo con tu profesor/a</Feature>
                <FeatureBad>No incluye Tasas DGT ni examen Practico</FeatureBad>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="md"
                shadow="md"
              >
                <chakra.a
                  w="full"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  color="#fff"
                  bg="#002327"
                  _hover={{
                    bg: "brand.50",
                    _dark: { bg: "gray.700" },
                  }}
                  cursor="pointer"
                  href="https://buy.stripe.com/bIYcN243x6oN9tSdQU"
                >
                  Comienza ahora
                </chakra.a>
              </Box>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
