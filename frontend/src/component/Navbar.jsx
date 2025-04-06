import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
              h={16}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDir={{
                  base: "column",
                  sm: "row",
              }}
            >
                <Link to="/">
                    <Text 
                        color="blue.500"
                        fontSize="3xl"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        _hover={{ color: "blue.600" }}
                    >
                        Product Store
                    </Text>
                </Link>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={ toggleColorMode }>
                        {colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}

                    </Button>
                </HStack>
            </Flex>
        </Container>
    );
};

export default Navbar;