import React, { useState } from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    FormHelperText,
    Textarea,
    Center,
    Image,
    Icon,
    Button,
    VisuallyHidden,
    useBoolean,
} from "@chakra-ui/react";

import Page from "../layouts/Page";
import LogoImage from "../images/logo.png";
import { mintVideo } from "../utils/contract";
import { upload } from "../utils/storage";

const Upload = () => {
    const [title, setTitle] = useState("");
    const [fee, setFee] = useState(0.001);
    const [desc, setDesc] = useState("");
    const [poster, setPoster] = useState(LogoImage);
    const [video, setVideo] = useState("");

    const [saving, { on, off }] = useBoolean(false);
    const [status, setStatus] = useState("");

    const save = async () => {
        const data = {
            title,
            desc,
            poster,
            price: fee * 10 ** 9,
            cid: 0,
        };
        if (title && poster) {
            on();
            setStatus("Creating Trailer");
            const faker = JSON.stringify(data);
            setStatus("Uploading Video");
            const { cid } = await upload(video);
            setStatus("Creating Data");
            data.cid = cid;
            const token = JSON.stringify(data);
            setStatus("Minting Video");
            mintVideo(token, faker, data.price).then(off);
        } else {
            off();
        }
    };
    return (
        <Page>
            <Box bg={useColorModeValue("gray.50", "inherit")} p={10}>
                <Box>
                    <chakra.form
                        shadow="base"
                        rounded={[null, "md"]}
                        overflow={{ sm: "hidden" }}
                    >
                        <Stack
                            px={4}
                            py={5}
                            bg={useColorModeValue("white", "gray.700")}
                            spacing={6}
                            p={{ sm: 6 }}
                        >
                            <SimpleGrid columns={3} spacing={6}>
                                <FormControl as={GridItem} colSpan={[3, 2]}>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue(
                                            "gray.700",
                                            "gray.50"
                                        )}
                                    >
                                        Content Title
                                    </FormLabel>
                                    <InputGroup size="sm" w="full">
                                        <Input
                                            type="text"
                                            placeholder="My First Content"
                                            focusBorderColor="brand.400"
                                            rounded="md"
                                            value={title}
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                        />
                                    </InputGroup>
                                </FormControl>
                            </SimpleGrid>
                            <SimpleGrid columns={3} spacing={6}>
                                <FormControl as={GridItem} colSpan={[3, 2]}>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue(
                                            "gray.700",
                                            "gray.50"
                                        )}
                                    >
                                        View Fee
                                    </FormLabel>
                                    <InputGroup size="sm" w="full">
                                        <InputLeftAddon
                                            bg={useColorModeValue(
                                                "gray.50",
                                                "gray.800"
                                            )}
                                            color={useColorModeValue(
                                                "gray.500",
                                                "gay.50"
                                            )}
                                            rounded="md"
                                        >
                                            $MATIC
                                        </InputLeftAddon>
                                        <Input
                                            type="number"
                                            placeholder="10"
                                            focusBorderColor="brand.400"
                                            rounded="md"
                                            value={fee}
                                            onChange={(e) =>
                                                setFee(e.target.value)
                                            }
                                        />
                                    </InputGroup>
                                </FormControl>
                            </SimpleGrid>

                            <div>
                                <FormControl id="email" mt={1}>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue(
                                            "gray.700",
                                            "gray.50"
                                        )}
                                    >
                                        Content Description
                                    </FormLabel>
                                    <Textarea
                                        placeholder="Sample Video Description"
                                        mt={1}
                                        rows={3}
                                        shadow="sm"
                                        focusBorderColor="brand.400"
                                        fontSize={{ sm: "sm" }}
                                        value={desc}
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                    />
                                    <FormHelperText>
                                        Brief description for your video. URLs
                                        are hyperlinked.
                                    </FormHelperText>
                                </FormControl>
                            </div>

                            <Flex alignItems="center" mt={1}>
                                <FormControl mt="-4">
                                    <Image
                                        src={poster}
                                        alt=""
                                        width="100"
                                        height="100"
                                    />
                                    <Input
                                        w="150px"
                                        type="file"
                                        placeholder="Change Poster"
                                        onChange={(e) => {
                                            let reader = new FileReader();
                                            reader.readAsDataURL(
                                                e.target.files[0]
                                            );
                                            reader.onload = () => {
                                                setPoster(reader.result);
                                            };
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <FormLabel
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue(
                                            "gray.700",
                                            "gray.50"
                                        )}
                                    >
                                        Video File
                                    </FormLabel>
                                    <Flex
                                        mt={1}
                                        justify="center"
                                        px={6}
                                        pt={5}
                                        pb={6}
                                        borderWidth={2}
                                        borderColor={useColorModeValue(
                                            "gray.300",
                                            "gray.500"
                                        )}
                                        borderStyle="dashed"
                                        rounded="md"
                                    >
                                        <Stack spacing={1} textAlign="center">
                                            <Icon
                                                mx="auto"
                                                boxSize={12}
                                                color={useColorModeValue(
                                                    "gray.400",
                                                    "gray.500"
                                                )}
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </Icon>
                                            <Flex
                                                fontSize="sm"
                                                color={useColorModeValue(
                                                    "gray.600",
                                                    "gray.400"
                                                )}
                                                alignItems="baseline"
                                            >
                                                <chakra.label
                                                    htmlFor="file-upload"
                                                    cursor="pointer"
                                                    rounded="md"
                                                    fontSize="md"
                                                    color={useColorModeValue(
                                                        "brand.600",
                                                        "brand.200"
                                                    )}
                                                    pos="relative"
                                                    _hover={{
                                                        color: useColorModeValue(
                                                            "brand.400",
                                                            "brand.300"
                                                        ),
                                                    }}
                                                >
                                                    <span>Upload a file</span>
                                                    <VisuallyHidden>
                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            onChange={(e) => {
                                                                let reader =
                                                                    new FileReader();
                                                                reader.readAsDataURL(
                                                                    e.target
                                                                        .files[0]
                                                                );
                                                                reader.onload =
                                                                    () => {
                                                                        setVideo(
                                                                            reader.result
                                                                        );
                                                                    };
                                                            }}
                                                        />
                                                    </VisuallyHidden>
                                                </chakra.label>
                                                <Text pl={1}>
                                                    or drag and drop
                                                </Text>
                                            </Flex>
                                            <Text
                                                fontSize="xs"
                                                color={useColorModeValue(
                                                    "gray.500",
                                                    "gray.50"
                                                )}
                                            >
                                                MP4 up to 100MB
                                            </Text>
                                        </Stack>
                                    </Flex>
                                </FormControl>
                            </Flex>
                        </Stack>
                        <Box
                            px={{ base: 4, sm: 6 }}
                            py={3}
                            bg={useColorModeValue(
                                "blackAlpha.900",
                                "whiteAlpha.900"
                            )}
                            textAlign="right"
                        >
                            <Button
                                bgColor="red.700"
                                colorScheme="brand"
                                _focus={{ shadow: "" }}
                                fontWeight="md"
                                isLoading={saving}
                                loadingText={status}
                                onClick={save}
                            >
                                Save and Upload
                            </Button>
                        </Box>
                    </chakra.form>
                </Box>
            </Box>
        </Page>
    );
};

export default Upload;
