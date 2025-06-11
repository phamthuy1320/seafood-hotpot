import { TextIcon } from "@/components/atoms/textIcon";
import { TOption } from "@/types/commons";
import { BsShop } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";

export const deliveryMethod: TOption<number>[] = [
  {
    label: <TextIcon icon={<GrDeliver />}>Đặt giao hàng</TextIcon>,
    value: 1
  },
  {
    label: <TextIcon icon={<BsShop />}>Đặt đến lấy</TextIcon>,
    value: 0
  }
];

export const contacts = {
  facebook: "",
  zalo: "",
  hotline: "tel:0375518575",
  email: ""
};
