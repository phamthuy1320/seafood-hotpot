import { TOption } from "@/types/commons";

export const deliveryMethod: TOption<number>[] = [
  { label: "Đặt giao hàng", value: 1 },
  { label: "Đặt đến lấy", value: 0 }
];

export const contacts = {
  facebook: "",
  zalo: "",
  hotline: "tel:0375518575",
  email: ""
};

const repoName = process.env.NEXT_PUBLIC_REPO_NAME;
export const baseURL = repoName ? `/${repoName}` : "";
