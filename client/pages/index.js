import { Center } from "@chakra-ui/react";
import LogIn from "../components/Login";

export default function Home() {
  return (
    <>
      <Center bgColor='lightblue' top  >
        navbar
      </Center>
      <Center bgColor='lightgreen' top  >
        <LogIn></LogIn>
      </Center>
      <Center bgColor='pink' top  >
        bottom
      </Center>
    </>
      )
}
