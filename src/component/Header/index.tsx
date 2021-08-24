import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
    return (
        <Flex
            id="app-root"
            as="nav"
            backgroundColor="rgba(0,0,0,0.52)"
            color="gray.50"
            p={4}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            maxHeight="40px"
        >
            <Text
                fontFamily="monospace"
                fontSize="24px"
            >
                Drello
            </Text>
        </Flex>
    )
}

export default Header;