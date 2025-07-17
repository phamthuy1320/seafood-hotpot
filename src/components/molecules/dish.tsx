import { Box, Text, Image } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";

export type DishProps = {
  image?: string | StaticImageData;
  name: string;
  describe?: string;
  price: number;
};

export const Dish = (props: DishProps) => {
  const { image = "", name, describe, price } = props;

  return (
    <Box>
      <Box sx={{ contain: "paint" }}>
        <Image
          as={NextImage}
          src={image as string}
          alt={name}
          _hover={{ transform: "rotate(45deg)" }}
        />
      </Box>
      <Text fontSize={"md"} fontWeight={"bold"}>
        {name}
      </Text>
      <Text>{describe}</Text>
      <Text> {price}</Text>
    </Box>
  );
};
