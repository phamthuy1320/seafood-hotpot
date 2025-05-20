import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps
} from "@chakra-ui/react";
import { forwardRef, RefObject } from "react";

export type MenuProps = Omit<DrawerProps, "children" | "portalProps">;

export const Menu = forwardRef(function Menu(props: MenuProps, ref: unknown) {
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
        <DrawerBody>Menu</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});
