<<<<<<< HEAD
import React from "react";
import { Box, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import logo from "/resourse/faire.png?url";
import {Search2Icon} from '@chakra-ui/icons'
const Header = () => {
  return (
    <Heading  display='flex' flexDirection='row' mt='5px' >
      <Image src={logo}  />
      <Search2Icon  boxSize={6} color='blue.400' alignItems='center'/>
      
=======
import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  IconButton,
  useColorMode,
  useColorModeValue,
  extendTheme,
  useTheme,
} from "@chakra-ui/react";
import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "/resourse/faire.png?url";


const Header = ({ onBuscar }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const bg =
  colorMode === "dark" ? theme.colors.dark.bgHF : theme.colors.light.bgHF;
  const color =
  colorMode === "dark" ? theme.colors.dark.color : theme.colors.light.color;
  const lupa =
  colorMode === "dark" ? theme.colors.dark.lupa : theme.colors.light.lupa;

  return (
    <Heading
      as="nav"
      display="flex"
      justifyContent="center"
      minH="8vh"
      alignItems="center"
      bg={bg}
      color={color}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        maxW="800px"
        width="100%"
      >
        <IconButton
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          boxSize="27px"
          bg={bg}
          color="grey"
          onClick={toggleColorMode}
          mr="100px"
        />
        <Box>
          <Image src={logo} width="125px" />
        </Box>

        <Box>
          <Search2Icon
            boxSize="27px"
            color={lupa}
            ml="100px"
            onClick={onBuscar}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
>>>>>>> 5c1edd35bdf0937b623a80a34e36d774280f007a
    </Heading>
  );
};

export default Header;
