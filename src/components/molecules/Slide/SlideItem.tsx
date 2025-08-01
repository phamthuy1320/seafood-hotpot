import { useRandomColor } from "@/hooks/useRandomColor";
import { Flex, Box } from "@chakra-ui/react";

export const SlideItem = (props: { src: string }) => {
  const color = useRandomColor();
  const { src } = props;
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
        w={"70%"}
        aspectRatio={2.5}
      >
        <Box
          backgroundImage={src}
          h={"full"}
          w={"full"}
          backgroundSize={"cover"}
        />
      </Box>
    </Flex>
  );
};
