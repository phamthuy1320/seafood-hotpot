"use client";

import { Toggle } from "@/components/atoms/toggle";
import { contacts, deliveryMethod } from "@/constants";
import { Logo } from "@/components/atoms/logo";
import { LuSquareMenu } from "react-icons/lu";
import { Menu } from "@/components/molecules/menu";
import { Box, Flex, IconButton, useDisclosure, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { CartPopover } from "@/components/molecules/cartPopover";
import Link from "next/link";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const onDeliveryChange = () => {};
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useRef(null);

  return (
    <Box
      as={"main"}
      h={"full"}
      display={"grid"}
      gridTemplateRows={"min-content 1fr auto"}
    >
      <Box as={"header"} position={"sticky"} top={0} ref={ref} bg={"white"}>
        <Flex p={5} gap={10} justifyContent={"space-between"}>
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
      </Box>
      <Box as={"article"} p={5}>
        {children}
      </Box>
      <Box as="footer">
        <Box className="flex flex-col p-5 gap-4 items-center container">
          <Logo />
          <Box as="section">
            <Text className="text-center">
              <Text as={"strong"}>Địa chỉ</Text>
            </Text>
            <Text>Số 123, ABC </Text>
          </Box>
          <Box as="section">
            <Text className="text-center">
              <Text as="strong">Liên hệ</Text>
            </Text>
            <Text as="nav" className="flex gap-4">
              <Link href={contacts.facebook} target="_blank">
                Facebook
              </Link>
              <Link href={contacts.zalo} target="_blank">
                Zalo
              </Link>
              <Link href={contacts.hotline} target="_blank">
                Hotline
              </Link>
              <Link href={contacts.email} target="_blank">
                Email
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
