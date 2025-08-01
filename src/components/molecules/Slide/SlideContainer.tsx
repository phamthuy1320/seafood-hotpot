"use client";

import { theme } from "@/theme";
import { BoxProps, Box, Flex, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useRef } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight
} from "react-icons/fa";

const useSlick = (props?: { autoScroll?: boolean }) => {
  const { autoScroll = true } = props || {};
  const ref = useRef<HTMLDivElement>(null);

  const onPrev = useCallback(() => {
    if (!ref.current) return;
    const target = ref.current;
    const childrenCount = target.childElementCount || 1;
    const scrollGap = target.scrollWidth / childrenCount;
    const scrollLeft = target.scrollLeft || 0;
    const scrollWidth = target.scrollWidth;
    // At first child and slick left then go to last child
    if (scrollLeft === 0) {
      target.scrollTo({ left: scrollWidth, behavior: "smooth" });
      return;
    }

    // Slick left then scroll left
    target.scrollTo({ left: scrollLeft - scrollGap, behavior: "smooth" });
  }, []);

  const onNext = useCallback(() => {
    if (!ref.current) return;
    const target = ref.current;
    const childrenCount = target.childElementCount || 1;
    const scrollGap = target.scrollWidth / childrenCount;
    const scrollLeft = target.scrollLeft || 0;
    const scrollWidth = target.scrollWidth;

    // At last child and slick right then go to first child
    if (scrollLeft >= scrollWidth - scrollGap) {
      target.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    // Slick right then scroll right
    target.scrollTo({ left: scrollLeft + scrollGap, behavior: "smooth" });
  }, []);

  const mouseUp = useCallback(
    (x1: number, target: HTMLDivElement) => (e: Event) => {
      const x2 = (e as MouseEvent).x as number;
      const childrenCount = target.childElementCount || 1;
      const scrollGap = target.scrollWidth / childrenCount;
      const scrollLeft = target.scrollLeft || 0;
      const scrollWidth = target.scrollWidth;

      // At first child and slick left then go to last child
      if (scrollLeft === 0 && x2 > x1) {
        target.scrollTo({ left: scrollWidth, behavior: "smooth" });
        return;
      }

      // At last child and slick right then go to first child
      if (scrollLeft >= scrollWidth - scrollGap && x2 < x1) {
        target.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      // Slick right then scroll right
      if (x2 < x1) {
        target.scrollTo({ left: scrollLeft + scrollGap, behavior: "smooth" });
        return;
      }

      // Slick left then scroll left
      target.scrollTo({ left: scrollLeft - scrollGap, behavior: "smooth" });
    },
    []
  );

  const mouseDown = useCallback(
    (e: MouseEvent) => {
      const x1 = e.x as number;
      const target = e.currentTarget as HTMLDivElement;
      target?.addEventListener("mouseup", mouseUp(x1, target), { once: true });
    },
    [mouseUp]
  );

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current as HTMLDivElement;

    element.addEventListener("mousedown", mouseDown, true);
  }, [mouseDown]);

  useEffect(() => {
    if (!autoScroll) return;
    let pause = false;
    setInterval(() => {
      const target = ref.current?.parentElement;

      if (!pause) onNext();
      target?.addEventListener(
        "mouseenter",
        () => {
          pause = true;
          target?.addEventListener(
            "mouseleave",
            () => {
              pause = false;
            },
            { once: true }
          );
        },
        { once: true }
      );
    }, 2500);
  }, [autoScroll, onNext]);

  return { ref, onPrev, onNext };
};

export const SlideContainer = ({ children, ...props }: BoxProps) => {
  const { ref, onPrev, onNext } = useSlick();

  return (
    <Box maxW={"90vw"} m="auto" {...props} position={"relative"}>
      <SlideButton left={0} onClick={onPrev} aria-label="prev">
        <FaRegArrowAltCircleLeft />
      </SlideButton>
      <Flex
        w={"full"}
        overflow={"auto"}
        sx={{ "::-webkit-scrollbar": { display: "none" } }}
        scrollSnapType="x mandatory"
        ref={ref}
      >
        {children}
      </Flex>
      <SlideButton right={0} onClick={onNext} aria-label="next">
        <FaRegArrowAltCircleRight />
      </SlideButton>
    </Box>
  );
};

const SlideButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  &:hover {
    background: ${theme.colors.primary};
  }
`;
