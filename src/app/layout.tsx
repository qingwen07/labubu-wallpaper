import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labubu 壁纸 - 高清无水印动态壁纸免费下载",
  description: "免费下载高清 Labubu 静态与动态壁纸，无水印，支持 iPhone 和安卓设备，永久免费。",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "Labubu",
    "Labubu 壁纸",
    "拉布布电脑壁纸",
    "拉布布动态壁纸",
    "拉布布手机壁纸",
    "拉布布头像",
    "拉布布图片",
    "拉布布高清壁纸",
    "拉布布动态壁纸",
    "iPhone 拉布布壁纸",
    "苹果手机拉布布壁纸",
    "安卓拉布布壁纸",
    "拉布布平板壁纸",
    "拉布布手电筒动态壁纸",
    "拉布布壁纸免费下载"
  ],
  openGraph: {
    title: "Labubu 壁纸 - 高清无水印动态壁纸免费下载",
    description: "免费下载高清 Labubu 静态与动态壁纸，无水印，支持 iPhone 和安卓设备，永久免费。",
    url: "https://www.labubuwallpaper.cn", // 如有正式域名请替换
    siteName: "Labubu 壁纸",
    images: [
      {
        url: "/logo.png",
        width: 256,
        height: 256,
        alt: "Labubu 壁纸 Logo"
      }
    ],
    locale: "zh_CN",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Labubu 壁纸 - 高清无水印动态壁纸免费下载",
    description: "免费下载高清 Labubu 静态与动态壁纸，无水印，支持 iPhone 和安卓设备，永久免费。",
    images: ["/logo.png"],
    site: "@shadouyoua" // 如有官方账号请替换
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HWEDR9SKSB"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HWEDR9SKSB');
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
