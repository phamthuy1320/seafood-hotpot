import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  Flex
} from "@chakra-ui/react";
import { forwardRef, RefObject } from "react";
import { Toggle } from "../atoms/toggle";
import { deliveryMethod } from "@/constants";

export type MenuProps = Omit<DrawerProps, "children" | "portalProps">;

export const Menu = forwardRef(function Menu(props: MenuProps, ref: unknown) {
  const onDeliveryChange = () => {};

  return (
    <Drawer
      {...props}
      placement="top"
      portalProps={{ containerRef: ref as RefObject<HTMLElement> }}
    >
      <DrawerContent
        h="calc(100% - 131px)"
        containerProps={{ top: 131 }}
        style={{ position: "unset" }}
        background={"overlay"}
        motionProps={{ animate: { transform: "unset" } }}
      >
        <DrawerBody>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Flex w="fit-content">
              <Toggle<number>
                options={deliveryMethod}
                value={1}
                onChange={onDeliveryChange}
              />
            </Flex>
            <Box color="white" sx={{ a: { color: "inherit" } }}>
              <a href={"#sign-in"}>Đăng Nhập</a>
              <span>/</span>
              <a href={"#sign-up"}>Đăng Ký</a>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
