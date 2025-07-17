import { Logo } from "@/components/atoms/logo";
import { contacts } from "@/constants";
import { Box, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer">
      <Box className="flex flex-col p-5 gap-4 items-center container">
        <Logo />
        <Box as="section">
          <Text className="text-center">
            <Text as={"strong"}>Địa chỉ</Text>
          </Text>
          <Text>Số 123, ABC </Text>
        </Box>
        <Box as="section">
          <Text className="text-center">
            <Text as="strong">Liên hệ</Text>
          </Text>
          <Text as="nav" className="flex gap-4">
            <Link href={contacts.facebook} target="_blank">
              Facebook
            </Link>
            <Link href={contacts.zalo} target="_blank">
              Zalo
            </Link>
            <Link href={contacts.hotline} target="_blank">
              Hotline
            </Link>
            <Link href={contacts.email} target="_blank">
              Email
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
