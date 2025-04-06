import { useColorModeValue } from "@/components/ui/color-mode";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: 0,
        image: null,
    });
    const handleAddProduct = () => {
        console.log(newProduct);
    };

    return (
        <Container maxW={Container.sm}>
            <VStack spacing={8}>
                <Heading as="h1" size="2xl" textAlign="center" mt={8}>
                    Create a new product
                </Heading>
                <Box w={"full"} bg={useColorModeValue("white", "gray.700")} p={4} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}>
                        </Input>
                        <Input
                            placeholder="Product Description"
                            name="description"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}>
                        </Input>
                        <Input
                            placeholder="Product Price"
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}>
                        </Input>
                        <Input
                            placeholder="Product Image URL"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}>
                        </Input>
                        <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"} >
                        
                            Add New Product    
                        </Button>
                    </VStack>


                </Box>

            </VStack>

        </Container>
    );
}

export default CreatePage;