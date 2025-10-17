"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/coffee-shop-interior-1760696268622-ab1973bc.jpg","alt":"coffee shop interior"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/coffee-cup-with-beans-1760696273410-78e3a196.jpg","alt":"coffee cup with beans"},{"id":"product-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/espresso-1760696275984-3a808547.jpg","alt":"espresso"},{"id":"product-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/cappuccino-1760696282577-e3f992fa.jpg","alt":"cappuccino"},{"id":"product-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/latte-art-1760696293096-446bca55.jpg","alt":"latte art"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Coffee Shop"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Coffee Shop"
            description="Relax and enjoy the finest blends in town."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[
              { text: "Explore", href: "menu" },
              { text: "Visit Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Our Story", description: "Brewed with passion" },
              { title: "Sustainability", description: "Ethically sourced beans" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              { id: "1", brand: "Coffee Shop", name: "Espresso", price: "$2.50", rating: 5, reviewCount: "1.2k", imageSrc: assetMap.find(a => a.id === 'product-1')?.url },
              { id: "2", brand: "Coffee Shop", name: "Cappuccino", price: "$3.00", rating: 4, reviewCount: "2.3k", imageSrc: assetMap.find(a => a.id === 'product-2')?.url },
              { id: "3", brand: "Coffee Shop", name: "Latte Art", price: "$3.50", rating: 5, reviewCount: "1.5k", imageSrc: assetMap.find(a => a.id === 'product-3')?.url }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Let’s Chat Over Coffee"
            description="We want to hear from you! Reach out with any questions."
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url}
            mediaPosition="right"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Info", items: [{ label: "About Us", href: "about" }, { label: "Menu", href: "menu" }] },
              { title: "Help", items: [{ label: "Contact", href: "contact" }, { label: "Privacy Policy", href: "privacy" }] }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}