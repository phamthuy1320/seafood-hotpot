"use client";

import { theme } from "@/theme";
import { BoxProps, Box, Flex, IconButton } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight
} from "react-icons/fa";

const threshold: number[] = [];
for (let i = 0; i < 1.0; i += 0.01) {
  threshold.push(i);
}

const useSlick = (props?: { autoScroll?: boolean }) => {
  const { autoScroll = true } = props || {};
  const ref = useRef<HTMLDivElement>(null);
  const [childrenCount, setChildCount] = useState(1);
  const [activeNth, setActiveNth] = useState(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const onPrev = useCallback(() => {
    if (!ref.current) return;
    const prevChild =
      ref.current.querySelector(`[data-current]`)?.previousElementSibling ||
      ref.current.lastElementChild;
    const prevNth = Number(prevChild?.getAttribute("data-nth"));
    ref.current.style = `transform: translateX(-${prevNth * 100}%);`;
  }, []);

  const onNext = useCallback(() => {
    if (!ref.current) return;
    const nextChild =
      ref.current.querySelector(`[data-current]`)?.nextElementSibling ||
      ref.current.firstElementChild;
    const nextNth = Number(nextChild?.getAttribute("data-nth"));
    ref.current.style = `transform: translateX(-${nextNth * 100}%);`;
    return;
  }, []);

  const mouseUp = useCallback(
    (x1: number) => (e: Event) => {
      const x2 = (e as MouseEvent).x as number;
      if (x2 > x1) {
        onPrev();
        return;
      }
      onNext();
      return;
    },
    [onPrev, onNext]
  );

  const mouseDown = useCallback(
    (e: MouseEvent) => {
      const x1 = e.x as number;
      const target = e.currentTarget as HTMLDivElement;
      target?.addEventListener("mouseup", mouseUp(x1), { once: true });
    },
    [mouseUp]
  );

  const onGoTo = useCallback(
    (nth: number) => () => {
      if (!ref.current) return;
      ref.current.style = `transform: translateX(-${nth * 100}%);`;
    },
    []
  );

  useEffect(() => {
    if (!ref.current) return;
    setChildCount(ref.current?.childElementCount || 1);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current as HTMLDivElement;

    element.addEventListener("mousedown", mouseDown, true);
  }, [mouseDown]);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries.find(
        (e) => e.intersectionRatio && e.isIntersecting
      );

      entries.map((e) =>
        e.target?.parentElement?.toggleAttribute("data-current", false)
      );

      // Mark current showed element
      if (entry) {
        const target = entry.target?.parentElement;
        const nth = Number(target?.getAttribute("data-nth"));
        target?.toggleAttribute("data-current", true);
        setActiveNth(nth);
      }
    });

    [...ref.current.children].map((child, nth) => {
      child.setAttribute("data-nth", nth.toString());
      child?.toggleAttribute("data-current", false);

      observer.observe(child?.firstElementChild || child);
    });
  }, []);

  useEffect(() => {
    if (!autoScroll) return;
    if (!childrenCount) return;
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(onNext, 3000);
    setTimeoutId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoScroll, activeNth, childrenCount]);

  return {
    ref,
    childrenCount,
    onPrev,
    onNext,
    onGoTo,
    activeNth
  };
};

export const SlideContainer = ({ children, ...props }: BoxProps) => {
  const { ref, onPrev, onNext, onGoTo, childrenCount, activeNth } = useSlick();

  return (
    <Box
      maxW={"90vw"}
      m="auto"
      {...props}
      position={"relative"}
      sx={{ contain: "paint" }}
    >
      <SlideButton left={0} onClick={onPrev} aria-label="prev">
        <FaRegArrowAltCircleLeft />
      </SlideButton>
      <Flex w={"full"} ref={ref} transition={"transform 1s"}>
        {children}
      </Flex>
      <SlideButton right={0} onClick={onNext} aria-label="next">
        <FaRegArrowAltCircleRight />
      </SlideButton>
      {/* Dots */}
      <Flex gap={2} m={2} justifyContent={"center"}>
        {Array(childrenCount)
          .fill(null)
          .map((_, nth) => (
            <Dot
              onClick={onGoTo(nth)}
              key={nth}
              data-active={nth === activeNth}
            />
          ))}
      </Flex>
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
  z-index: 1;
  &:hover {
    background: ${theme.colors.primary};
  }
`;

const Dot = styled(Box)`
  height: 10px;
  width: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  transition: all 0.6s ease-out;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
  &[data-active="true"] {
    background: ${theme.colors.primary};
  }
`;
