// import type { Metadata } from "next";
import "@mantine/core/styles.css";
// import localFont from "next/font/local";
import { Work_Sans } from "@next/font/google";
import { createTheme, MantineProvider } from "@mantine/core";
import "./globals.scss";
import ReactQueryProvider from "./_providers/reactquery-providers";
import { GlobalProvider } from "./_providers/context-providers";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
// const avenir = localFont({
//   src: [
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Light.woff',
//       weight: '100',
//     },
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Thin.woff',
//       weight: '300',
//     },
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Regular.woff',
//       weight: '400',
//     },
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Medium.woff',
//       weight: '500',
//     },
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Bold.woff',
//       weight: '700',
//     },
//     {
//       path: './fonts/avenir-next/AvenirNextCyr-Heavy.woff',
//       weight: '900',
//     },
//   ],
//   variable: '--font-mueso',
// });

export const metadata = {
  title: "Lendsqr Frontend Assesment",
  description: "I have followed setup instructions carefully",
};
const theme = createTheme({
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "120em",
  },
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${worksans.className} antialiased`}>
        <ReactQueryProvider>
          <GlobalProvider>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </GlobalProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
