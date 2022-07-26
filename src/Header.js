import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// import { Logo } from "@choc-ui/logo";

export default function Header(props) {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        position={"fixed"}
        zIndex="99999999"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image
                height="40px"
                src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/Click%20%26%20Drive_Logo.png?alt=media&token=698c89b0-4bfc-4de1-a835-8b33cab11147"
              />
              <VisuallyHidden>Autoescuela Click&drive</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button
                variant="ghost"
                onClick={() => props.scrollTo("#item-20")}
              >
                Inicio
              </Button>
              <Button variant="ghost">Sobre Nosotros</Button>
              <Button variant="ghost">Servicios</Button>
              <Button variant="ghost">Precios</Button>
              <Button backgroundColor="#00BAB5" color="#fff">Matriculate</Button>
            </HStack>

            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button
                  w="full"
                  variant="ghost"
                  onClick={() => props.scrollTo("#item-20")}
                >
                  Inicio
                </Button>
                <Button w="full" variant="ghost">
                  Sobre Nosotros
                </Button>
                <Button w="full" variant="ghost">
                  Servicios
                </Button>
                <Button w="full" variant="ghost">
                  Precios
                </Button>
                <Button w="full" backgroundColor="#00BAB5" color="#fff">
                  Matriculate
                </Button>
               
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
