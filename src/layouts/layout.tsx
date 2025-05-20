"use client";

import { Toggle } from "@/components/toggle";
import { contacts, deliveryMethod } from "@/constants";
import { Logo } from "@/components/logo";
import { LuSquareMenu } from "react-icons/lu";
import { Menu } from "@/components/menu";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const onDeliveryChange = () => {};
  const onMouseEnterCart = () => {};
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useRef(null);

  return (
    <main className="h-full grid grid-rows-[min-content_1fr_auto]">
      <header className="sticky top-0 relative" ref={ref}>
        <div className={"container p-5 flex gap-10"}>
          <Logo />
          <div className="invisible lg:visible flex gap-10 flex-1 justify-end">
            <Toggle<number>
              options={deliveryMethod}
              value={1}
              onChange={onDeliveryChange}
            />
            <div>
              <a>Đăng Nhập</a>
              <span>/</span>
              <a>Đăng Ký</a>
            </div>
          </div>

          <a href="#cart" onMouseEnter={onMouseEnterCart}>
            Giỏ hàng
          </a>
          <IconButton
            icon={<LuSquareMenu />}
            aria-label={"menu"}
            onClick={onToggle}
          />
          <Menu isOpen={isOpen} onClose={onClose} ref={ref} />
        </div>
      </header>
      <article className="p-5">{children}</article>
      <footer>
        <div className="flex flex-col p-5 gap-4 items-center container">
          <Logo />
          <section>
            <p className="text-center">
              <strong>Địa chỉ</strong>
            </p>
            <p>Số 123, ABC </p>
          </section>
          <section>
            <p className="text-center">
              <strong>Liên hệ</strong>
            </p>
            <nav className="flex gap-4">
              <a href={contacts.facebook} target="_blank">
                Facebook
              </a>
              <a href={contacts.zalo} target="_blank">
                Zalo
              </a>
              <a href={contacts.hotline} target="_blank">
                Hotline
              </a>
              <a href={contacts.email} target="_blank">
                Email
              </a>
            </nav>
          </section>
        </div>
      </footer>
    </main>
  );
}
