import React from "react";
import { Button, Container, Heading, Stack, HStack } from "@chakra-ui/react";

const index = () => {
  
  
  return (
    <>
      <Container maxW="container.xl" p={5} centerContent>
        <Stack spacing={3} my={"40"} justify="center">
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 " >Reserva tu Espacio</h1>
              <h2 class="lead">
                Bienvenido Porfavor seleccione una opcion:
              </h2>
            </div>
          </div>
          <HStack justify="center" p="30">
            <a href="./usuario" type="button">
              <img
                border="0"
                alt="usuario"
                src="usuario.gif"
                width="100"
                height="100"
                align="center"
              />
            </a>
            <Heading as="h3" className="nav-" size="lg" align="center">
              Inicio Usuario
            </Heading>
          </HStack>
          <HStack justify="center" p="30">
            <a href="./admin">
              <img border="0" src="usuario.gif" width="100" height="100" />
            </a>
            <Heading as="h3" size="lg" align="center">
              Administrador
            </Heading>
          </HStack>
        </Stack>
      </Container>
    </>
  );
};

export default index;
