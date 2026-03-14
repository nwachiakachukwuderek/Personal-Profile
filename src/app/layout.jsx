import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
    title: "Nigerian Election 2027 Countdown",
    description: "Countdown to the Nigerian Presidential Election (January 16, 2027).",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col pt-16 lg:pt-0 relative">
                <Header />
                {children}
            </body>
        </html>
    );
}
