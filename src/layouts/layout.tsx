"use client";

import { logo } from "@/assets/images";
import { Toggle } from "@/components/toggle";
import { contacts, deliveryMethod } from "@/constants";
import Image from "next/image";

type BeforeInstallPromptEvent = Event & { prompt: () => void };

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const onDeliveryChange = () => {};
  const onMouseEnterCart = () => {};
  let deferredPrompt: BeforeInstallPromptEvent | null = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    //if app can be installed, assign the event to deferred prompt variable
    deferredPrompt = e as BeforeInstallPromptEvent;
  });

  const handleClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
  };

  return (
    <main className="h-full grid grid-rows-[min-content_1fr_auto]">
      <header className="sticky top-0 p-5 flex justify-between border-b-1">
        <div className="flex justify-center aspect-square h-22.5 w-80 ">
          <Image aria-hidden src={logo} alt="LOGO" width={120} height={90} />
        </div>
        <button onClick={handleClick}>Install</button>
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
        <a href="#cart" onMouseEnter={onMouseEnterCart}>
          Giỏ hàng
        </a>
      </header>
      <article className="p-5">{children}</article>
      <footer className="flex flex-col p-5 gap-4 items-center border-t-1 ">
        <div className="flex justify-center max-h-22.5 max-w-80">
          <Image aria-hidden src={logo} alt="LOGO" width={120} height={90} />
        </div>
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
      </footer>
    </main>
  );
}
