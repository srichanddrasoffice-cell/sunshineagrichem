import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/types/dictionary";

interface FooterProps {
  dictionary: Dictionary;
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="border-t border-sunshine-green/20 bg-sunshine-greenDeep text-sunshine-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white">{company.name}</h3>
          <p className="mt-4 text-sm leading-7 text-sunshine-cream/75">{company.description}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{dictionary.footer.company}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/en/about" className="transition hover:text-sunshine-yellow">{dictionary.navbar.about}</Link></li>
            <li><Link href="/en/products" className="transition hover:text-sunshine-yellow">{dictionary.navbar.products}</Link></li>
            <li><Link href="/en/blogs" className="transition hover:text-sunshine-yellow">{dictionary.navbar.blogs}</Link></li>
            <li><Link href="/en/contact" className="transition hover:text-sunshine-yellow">{dictionary.navbar.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{dictionary.footer.products}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/en/products" className="transition hover:text-sunshine-yellow">Bio Nutrient Pro</Link></li>
            <li><Link href="/en/products" className="transition hover:text-sunshine-yellow">Pest Shield</Link></li>
            <li><Link href="/en/products" className="transition hover:text-sunshine-yellow">Soil Vital</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">{dictionary.footer.newsletter}</h4>
          <p className="mt-4 text-sm leading-7 text-sunshine-cream/75">{dictionary.footer.newsletterPlaceholder}</p>
          <div className="mt-4 flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-2">
            <Mail size={16} className="text-sunshine-yellow" />
            <input className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-sunshine-cream/60" placeholder={dictionary.footer.newsletterPlaceholder} />
          </div>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-sunshine-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e58f00]">{dictionary.footer.newsletterButton}<ArrowRight size={16} /></button>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-sunshine-cream/70 lg:px-8">
        {dictionary.footer.copyright}
      </div>
    </footer>
  );
}

export default Footer;