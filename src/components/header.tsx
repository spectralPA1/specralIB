"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { AuthModal } from "./AuthModal";
export const EftLogo = () => { return ( <svg width="36" height="36" viewBox="0 0 36 36" fill="none"> <circle cx="18" cy="18" r="12" stroke="currentColor" strokeWidth="2" /> <line x1="18" y1="6" x2="18" y2="2" stroke="currentColor" strokeWidth="2" /> <line x1="18" y1="34" x2="18" y2="30" stroke="currentColor" strokeWidth="2" /> <line x1="6" y1="18" x2="2" y2="18" stroke="currentColor" strokeWidth="2" /> <line x1="34" y1="18" x2="30" y2="18" stroke="currentColor" strokeWidth="2" /> <path d="M14 18a4 4 0 018 0v1h-8v-1zm1 3h6c1.1 0 2 .9 2 2v3H13v-3c0-1.1.9-2 2-2z" fill="currentColor" /> </svg> ); };
export default function Header() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const navItems = [
    { label: "Главная", href: "/main" },
    { label: "Наш продукт", href: "/product" },
    { label: "О нас", href: "/about" },
  ];
  return (
    <>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <EftLogo />
          <p className="font-bold text-inherit">EFT</p>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <button onClick={() => setIsModalOpen(true)}>Войти</button>
          </NavbarItem>

          <NavbarItem>
            <Button color="primary" variant="flat" onPress={() => setIsModalOpen(true)}>
              Зарегистрироваться
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Модальное окно */}
      <AuthModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
