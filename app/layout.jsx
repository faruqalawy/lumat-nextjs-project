import "./globals.css";
import { nunito, barlow, openSans } from "./fonts.js";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { SmallNavProvider } from "@/context/SmallNavContext";
import MainHeader from "@/components/Header/MainHeader";
import MainFooter from "@/components/Footer/MainFooter";
import WhatsappButton from "@/components/Other/WhatsappButton";

export const metadata = {
  title: "Lumat Official",
  description:
    "Lumat bergerak dalam bidang food and beverages, menyediakan berbagai jenis produk makanan rumahan yang bisa disajikan dengan cepat, memiliki rasa yang lezat, dan packaging yang aman dan bersih. Kami berkomitmen untuk kepuasan pelanggan dengan produk bermutu, harga bersaing, dan pelayanan terbaik. Lumat, 'Lumbung Makanan Nikmat' untuk kelezatan yang tak terlupakan.",
  keywords: ["makanan", "cepat saji", "rasa lezat", "packaging aman",  "ayam karaton", "lumat", "ayam bumbu kuning", "risol", "tahu bakso", "perkedel", "ali agrem" ],
  author: "Lumat Team",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "Lumat Official",
    description: "Lumat bergerak dalam bidang food and beverages, menyediakan berbagai jenis produk makanan rumahan yang bisa disajikan dengan cepat, memiliki rasa yang lezat, dan packaging yang aman dan bersih.",
    type: "website",
    url: "https://www.lumat.id",
    site_name: "Lumat Official",
    images: [
      {
        url: "https://res.cloudinary.com/dnwvsqlh1/image/upload/f_auto,q_auto/v1/icons/hduufrwpsikpngcn5xh7",
        width: 800,
        height: 600,
        alt: "Lumat Official",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumat Official",
    description: "Lumat bergerak dalam bidang food and beverages, menyediakan berbagai jenis produk makanan rumahan yang bisa disajikan dengan cepat, memiliki rasa yang lezat, dan packaging yang aman dan bersih.",
    image: "https://res.cloudinary.com/dnwvsqlh1/image/upload/f_auto,q_auto/v1/icons/hduufrwpsikpngcn5xh7"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
    console.log(nunito.variable); // Tambahkan log untuk memastikan variabel CSS

  return (
    <html lang="en" className={`${nunito.className} ${barlow.variable} ${openSans.variable}`}>
      <body>
        <SmallNavProvider>
          <header>
            <MainHeader />
          </header>
          <main>
            {children}
            <WhatsappButton />
          </main>
          <footer>
            <MainFooter />
          </footer>
        </SmallNavProvider>
      </body>
    </html>
  );
}

