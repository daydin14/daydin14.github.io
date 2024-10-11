// Dependencies
import React from 'react';
import {
    ChakraProvider,
    Box,
    Button,
    Heading,
    Text,
    Input,
    Stack,
    Checkbox,
    Radio,
    RadioGroup,
    Select,
    Switch,
    FormControl,
    FormLabel
} from '@chakra-ui/react';

const ChakraUIExample = () => {
    return (
        <ChakraProvider>
            <Box className="container" p={5}>
                <Heading mb={4}>Chakra UI Example</Heading>

                <Text mb={4}>This is a sample page using various Chakra UI components.</Text>

                <Stack spacing={4} mb={4}>
                    <Button colorScheme="blue">Chakra UI Button</Button>
                    <Button colorScheme="green" variant="outline">Outline Button</Button>
                    <Button colorScheme="red" variant="solid">Solid Button</Button>
                    <Button colorScheme="yellow" variant="ghost">Ghost Button</Button>
                    <Button colorScheme="purple" variant="link">Link Button</Button>
                    <Button colorScheme="teal" size="lg">Large Button</Button>
                    <Button colorScheme="pink" size="sm">Small Button</Button>
                    <Button colorScheme="cyan" isLoading>Loading Button</Button>
                    <Button colorScheme="orange" isDisabled>Disabled Button</Button>
                    <Button colorScheme="gray" leftIcon={<span>🚀</span>}>Icon Button</Button>
                </Stack>

                <FormControl mb={4}>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input id="email" type="email" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input id="password" type="password" />
                </FormControl>

                <FormControl display="flex" alignItems="center" mb={4}>
                    <FormLabel htmlFor="newsletter" mb="0">
                        Subscribe to newsletter
                    </FormLabel>
                    <Switch id="newsletter" />
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel>Choose an option</FormLabel>
                    <RadioGroup defaultValue="option1">
                        <Stack direction="row">
                            <Radio value="option1">Option 1</Radio>
                            <Radio value="option2">Option 2</Radio>
                            <Radio value="option3">Option 3</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl mb={4}>
                    <FormLabel>Select a country</FormLabel>
                    <Select placeholder="Select country">
                        <option value="usa">United States</option>
                        <option value="canada">Canada</option>
                        <option value="mexico">Mexico</option>
                    </Select>
                </FormControl>

                <FormControl mb={4}>
                    <Checkbox defaultIsChecked>Accept Terms and Conditions</Checkbox>
                </FormControl>
            </Box>
        </ChakraProvider>
    );
};

export default ChakraUIExample