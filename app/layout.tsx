import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "최광수 | 이력서",
  description: "최광수의 이력서 - 프로덕트 빌더 ・ 소프트웨어 엔지니어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-jp-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
