// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { recommendations, category } from "@/mocks";
import { Box, Divider } from "@chakra-ui/react";
import pizza from "@/assets/images/temp/pizza.png";
import { Dish } from "@/components/molecules/dish";

export default function Home() {
  console.log(recommendations, category);

  const dish = {
    image: pizza,
    price: 169000,
    name: "Pizza Hải Sản Pesto Xanh",
    describe:
      "Tôm, thanh cua, mực và bông cải tươi ngon trên nền xốt Pesto Xanh"
  };
  return (
    <Box>
      {/* Slides  */}
      <Box></Box>
      <Divider />
      <Box hidden>
        <Dish {...dish} />
        <Dish {...dish} />
        <Dish {...dish} />
        <Dish {...dish} />
      </Box>
      {/* Menu */}
    </Box>
  );
}
