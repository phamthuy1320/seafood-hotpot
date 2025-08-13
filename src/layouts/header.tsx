import { Logo } from "@/components/atoms/logo";
import { Toggle } from "@/components/atoms/toggle";
import { CartPopover } from "@/components/molecules/cartPopover";
import { Menu } from "@/components/molecules/menu";
import { deliveryMethod } from "@/constants";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import { LuSquareMenu } from "react-icons/lu";

export default function Header() {
  const onDeliveryChange = () => {};
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useRef(null);
  return (
    <Box as={"header"} position={"sticky"} zIndex={10} top={0} bg={"white"}>
      <Flex
        p={5}
        gap={10}
        justifyContent={"space-between"}
        maxW={{ md: "80vw" }}
        mx="auto"
      >
        <Logo />
        <Flex
          gap={10}
          flex={1}
          justifyContent={"end"}
          display={{ base: "none", md: "flex" }}
        >
          <Flex flexBasis={"fit-content"}>
            <Toggle<number>
              options={deliveryMethod}
              value={1}
              onChange={onDeliveryChange}
            />
          </Flex>
          <Box>
            <Link href={"#sign-in"}>Đăng Nhập</Link>
            <Text as="span">/</Text>
            <Link href={"#sign-up"}>Đăng Ký</Link>
          </Box>
        </Flex>

        <CartPopover />

        <Box display={{ md: "none" }}>
          <IconButton
            icon={<LuSquareMenu />}
            aria-label={"menu"}
            onClick={onToggle}
          />
          <Menu isOpen={isOpen} onClose={onClose} ref={ref} />
        </Box>
      </Flex>
      <Flex
        h={10}
        bg={"primary"}
        maxW={{ md: "80vw" }}
        mx={"auto"}
        borderRadius={40}
      />
    </Box>
  );
}
