
import "./globals.css";
import Head from "next/head";
import { ReactNode } from "react";



export const metadata = {
  title: "Food Menus",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/iconify/2.0.0/iconify.min.js"
          integrity="sha512-lYMiwcB608+RcqJmP93CMe7b4i9G9QK1RbixsNu4PzMRJMsqr/bUrkXUuFzCNsRUo3IXNUr5hz98lINURv5CNA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          async
        ></script>
      </Head>
      <body>{children}</body>
    </html>
  );
}