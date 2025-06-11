import { IoCartOutline } from "react-icons/io5";
import { TextIcon } from "../atoms/textIcon";
import {
  Box,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";

export type CartPopoverProps = {
  dishes?: object[];
};

export const CartPopover = (props: CartPopoverProps) => {
  const {} = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Popover isOpen={isOpen} closeOnBlur={true}>
        <PopoverTrigger>
          <Box onMouseEnter={onOpen} onMouseLeave={onClose}>
            <TextIcon icon={<IoCartOutline />}>Giỏ hàng</TextIcon>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <Box>Nothing here, order now!</Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
