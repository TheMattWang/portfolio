"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/TheMattWang",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Link href="/" className="text-lg font-semibold">
              Matt Wang
            </Link>
            <p className="text-sm text-muted-foreground">
              Building digital experiences with code and creativity
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Matt Wang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 