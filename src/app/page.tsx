import { recommendations, category } from "@/mocks";
import { Box, Divider } from "@chakra-ui/react";
import pizza from "@/assets/images/temp/pizza.png";
import comboSale1 from "@/assets/images/temp/combo-sale.png";
import comboSale2 from "@/assets/images/temp/combo-sale-2.png";
import { Dish } from "@/components/molecules/dish";
import { SlideContainer, SlideItem } from "@/components/molecules/Slide";

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
      <SlideContainer>
        <SlideItem src={comboSale1} />
        <SlideItem src={comboSale2} />
        <SlideItem src={comboSale1} />
        <SlideItem src={comboSale2} />
      </SlideContainer>

      <Divider />
      <Box>
        <Dish {...dish} />
        <Dish {...dish} />
        <Dish {...dish} />
      </Box>
      {/* Menu */}
    </Box>
  );
}
