import { useRandomColor } from "@/hooks/useRandomColor";
import { Flex, Box } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";

export const SlideItem = (props: Omit<ImageProps, "alt">) => {
  const color = useRandomColor();
  return (
    <Flex
      minW={"90vw"}
      justifyContent="center"
      alignItems="center"
      scrollSnapAlign={"start"}
    >
      <Box
        borderRadius={15}
        sx={{ contain: "content" }}
        borderColor={color}
        borderWidth={4}
      >
        <Image style={{ pointerEvents: "none" }} alt="slide-item" {...props} />
      </Box>
    </Flex>
  );
};
