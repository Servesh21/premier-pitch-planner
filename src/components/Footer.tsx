
import React from "react";
import { Cricket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Cricket className="h-6 w-6" />
              <h2 className="text-xl font-bold">IT Premier League</h2>
            </div>
            <p className="text-primary-foreground/80">
              The most exciting cricket tournament for IT professionals.
              First season of the IT Premier League (IPL).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#teams" className="hover:underline">Teams</a>
              </li>
              <li>
                <a href="#fixtures" className="hover:underline">Fixtures</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Email: info@itpremierleague.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} IT Premier League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
