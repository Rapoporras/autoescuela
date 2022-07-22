import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import Features from "./Feature";
import Pricing from "./Pricing";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Center
        w="100%"
        bg="#E9F0F6"
        minHeight="100vh"
        color="#002327"
        p="15px"
      // position="relative"
      >
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Center>
            <Box maxW={"500px"}>
              <Heading as="h2" size="2xl">
                (2xl) In love with React & Next
              </Heading>
              <Text fontSize="xl" mt="15px">
                (xl) In love with React & Next
              </Text>
              <Button colorScheme="blue" mt="15px">
                Button
              </Button>
            </Box>
          </Center>

          <Image
            w="100%"
            objectFit="cover"
            shadow={"sm"}
            borderRadius="1em"
            src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/driving-instructor-showing-vehicle-dashboard-and-buttons-to-the-student-taking-driving-lessons.jpg?alt=media&token=d50d1a7e-9ce7-473b-a629-84bb8e73cfc8"
            alt="Dan Abramov"
          />
        </SimpleGrid>
        {/* <div className="wave"></div> */}
      </Center>
      <Center
        w="100%"
        bg="#fff"
        p="15px"
        minHeight="100vh"
        height="auto"
        color="#002327"
      > 
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Center>
            <Box maxW={"500px"}>
              <Heading as="h2" size="2xl">
                (2xl) In love with React & Next
              </Heading>
              <Text fontSize="xl" mt="15px">
                (xl) In love with React & Next
              </Text>
              <List spacing={15} mt="15px">
                <ListItem>
                  <ListIcon as={AiFillCar} color="green.500" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCar} color="green.500" />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={AiFillCar} color="green.500" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={AiFillCar} color="green.500" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Center>

          <Image
            objectFit="cover"
            src="https://firebasestorage.googleapis.com/v0/b/autoescuelaclickanddrive.appspot.com/o/Group%201.png?alt=media&token=35084f70-5926-41cd-94bf-1307b7ec78f8"
            alt="Dan Abramov"
          />
        </SimpleGrid>
      </Center>
      <Center w="100%" bg="#00BAB5" p="5px 5px 5px 0xpx" height="524px" color="#002327">
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box height="524px" >

            Hola

          </Box>

          <video
            controls muted autoPlay loop>
            <source src=
              "https://media.geeksforgeeks.org/wp-content/uploads/20200409094356/Placement100-_-GeeksforGeeks2.mp4"
              type="video/mp4" />
          </video>

        </SimpleGrid>
      </Center>
      <Center
        w="100%"
        bg="#fff"
        p="15px"
        minHeight="100vh"
        color="#002327"
        mt="15px"
        textAlign="center"
      >
        <SimpleGrid
          columns={[1, null, 1]}
          spacing="40px"
          style={{ alignSelf: "center" }}
        >
          <Heading as="h2" size="2xl">
            (2xl) In love with React & Next
          </Heading>
          <Text fontSize="xl" mt="15px">
            (xl) In love with React & Next
          </Text>
          <Features></Features>
        </SimpleGrid>
      </Center>
      <Center w="100%" bg="#E9F0F6" p="15px" minHeight="100vh" color="#002327">
        <Pricing></Pricing>
      </Center>
      <Center w="100%" bg="#00BAB5" p="15px" height="300px" color="#002327">
        This is the Center
      </Center>
    </div>
  );
}

export default App;
