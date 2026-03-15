import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookBeauty - Premium Salon Booking",
  description: "Book appointments at top salons, spas, and wellness centers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-black">
              BookBeauty
            </Link>
            <div className="flex gap-8 items-center">
              <Link href="/search" className="text-black hover:text-gray-600 transition-colors font-medium">
                Find Salons
              </Link>
              <Link href="/business" className="text-black hover:text-gray-600 transition-colors font-medium">
                For Business
              </Link>
              <Link href="/login" className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-black text-white py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">BookBeauty</h3>
                <p className="text-gray-400">Your trusted platform for beauty bookings</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">For Customers</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/search" className="hover:text-white">Find Salons</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">For Business</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/business" className="hover:text-white">List Your Salon</Link></li>
                  <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 BookBeauty. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
