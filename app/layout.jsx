import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Struntz.net",
  description: "Web development tutorial and courses",
  key: "web development, web design, javascript, react, node, angular, vue, html, css"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container"> {children}</main>
       
      </body>
    </html>
  );
}
