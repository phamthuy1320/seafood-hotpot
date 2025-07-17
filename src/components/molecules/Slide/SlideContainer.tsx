"use client";

import { BoxProps, Box, Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const useAutoScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current as HTMLDivElement;
    const lastChild = element.lastElementChild as HTMLDivElement;
    const firstChild = element.firstElementChild as HTMLDivElement;

    console.log(element, firstChild, lastChild);
  }, [ref.current]);

  return { ref };
};

export const SlideContainer = ({ children, ...props }: BoxProps) => {
  const { ref } = useAutoScroll();

  return (
    <Box maxW={"90vw"} m="auto" {...props}>
      <Flex w={"full"} overflow={"auto"} scrollSnapType="x mandatory" ref={ref}>
        {children}
      </Flex>
    </Box>
  );
};
