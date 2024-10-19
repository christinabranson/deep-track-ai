import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // add "dark" to classname for dark mode
    <Html lang="en" className="">
      <Head />
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
