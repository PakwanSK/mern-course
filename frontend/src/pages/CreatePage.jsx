import { useColorModeValue } from "@/components/ui/color-mode";
import { useProductStore } from "../store/product";
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useToaster } from "@/components/ui/toaster";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
    const navigate = useNavigate();
    const toaster = useToaster();
    const [isLoading, setIsLoading] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    });

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        setIsLoading(true);
        try {
            const { success, message } = await createProduct(newProduct);
            if (success) {
                toaster.success({
                    title: "Success",
                    description: message
                });
                navigate("/");
            } else {
                toaster.error({
                    title: "Error",
                    description: message
                });
            }
        } catch (error) {
            toaster.error({
                title: "Error",
                description: "Failed to create product"
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxW="container.sm">
            <VStack spacing={8}>
                <Heading as="h1" size="2xl" textAlign="center" mt={8}>
                    Create a new product
                </Heading>
                <Box w="full" bg={useColorModeValue("white", "gray.700")} p={4} rounded="lg" shadow="md">
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder="Product Price"
                            type="number"
                            name="price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder="Product Image URL"
                            name="image"
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button
                            colorScheme="blue"
                            onClick={handleAddProduct}
                            w="full"
                            isLoading={isLoading}
                        >
                            Add New Product    
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default CreatePage;