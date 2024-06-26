/*
 * @Author: kasuie
 * @Date: 2024-05-24 09:39:33
 * @LastEditors: kasuie
 * @LastEditTime: 2024-06-01 15:54:11
 * @Description:
 */
"use client";
import { isClientSide } from "@kasuie/utils";
import { ThemeProvider } from "next-themes";

export function AppProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (isClientSide) {
    console.log(
      "\n %c Remio-home By kasuie %c https://kasuie.cc",
      "color:#555;background:linear-gradient(to right, #a8edea 0%, #fed6e3 100%);padding:5px 0;",
      "color:#fff;background:#fff;padding:5px 10px 5px 0px;"
    );
  }

  return (
    <ThemeProvider key="themeProvider" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
