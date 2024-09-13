import { Roboto, Roboto_Mono, Cairo, Exo_2, Josefin_Sans, Maven_Pro, Ubuntu } from "next/font/google";

export const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})

export const cairo = Cairo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cairo',
})

export const exo_2 = Exo_2({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-exo-2',
})

export const josefin_sans = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-josefin-sans',
})

export const maven_pro = Maven_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-maven-pro',
})

export const ubuntu = Ubuntu({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-ubuntu',
})