use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Lightbulb } from "lucide-react";

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Two women working together on software programming indoors, focusing on code." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/6804084/pexels-photo-6804084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Group of professionals discussing a project at a computer in a modern office environment." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/9588205/pexels-photo-9588205.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A desk with tablet displaying blockchain, laptop, book, and camera lens, symbolizing tech and innovation." },
  { "id": "team-image-1", "url": "https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A cheerful woman organizing envelopes in a modern mailroom setting." },
  { "id": "testimonial-image", "url": "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Woman enjoying remote work at a café, using a laptop and smartphone." },
  { "id": "contact-media", "url": "https://images.pexels.com/photos/236164/pexels-photo-236164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up of a child and parent holding hands in a park, symbolizing love and trust." }
];

export default function Page() {
  return (
    <ThemeProvider defaultButtonVariant="icon-arrow" defaultTextAnimation="entrance-slide" borderRadius="pill">
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ITCompany"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Leading IT Solutions"
            description="Transforming your business through innovative technology"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "hero-image")?.alt || "Decorative image"}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and values at ITCompany. We aim to drive your success with top-notch IT solutions."
            bulletPoints={[
              { title: "Innovation", description: "Leading industry advancements.", icon: Lightbulb },
              { title: "Reliability", description: "Dependable IT services." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "about-image")?.alt || "Decorative image"}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            title="Our Services"
            description="Explore the services we offer to enhance your IT infrastructure."
            features={[
              { id: "01", title: "Cloud Solutions", description: "Secure and scalable cloud services.", imageSrc: assetMap.find(a => a.id === "feature-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "feature-image")?.alt || "Decorative image" },
              { id: "02", title: "Cybersecurity", description: "Advanced protection strategies for your data.", imageSrc: assetMap.find(a => a.id === "feature-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "feature-image")?.alt || "Decorative image" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            description="Our dedicated team is here to support your IT needs."
            members={[
              { id: "1", name: "Sophie P.", role: "Digital Nomad", imageSrc: assetMap.find(a => a.id === "team-image-1")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "team-image-1")?.alt || "Decorative image" },
              { id: "2", name: "John D.", role: "Tech Specialist", imageSrc: assetMap.find(a => a.id === "team-image-1")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "team-image-1")?.alt || "Decorative image" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Valued feedback from our partnering businesses."
            testimonials={[
              { id: "1", name: "Alisa Hester", role: "PM, Hourglass", company: "Web Design Agency", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "testimonial-image")?.alt || "Decorative image" },
              { id: "2", name: "Greg H.", role: "CEO", company: "Tech Innovators", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-image")?.url ?? "/public/images/placeholder.webp", imageAlt: assetMap.find(a => a.id === "testimonial-image")?.alt || "Decorative image" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="Reach out to us for any queries or support."
            imageSrc={assetMap.find(a => a.id === "contact-media")?.url ?? "/public/images/placeholder.webp"}
            imageAlt={assetMap.find(a => a.id === "contact-media")?.alt || "Decorative image"}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Services", items: [{ label: "Cloud Solutions", href: "https://example.com" }, { label: "Cybersecurity", href: "https://example.com" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 ITCompany"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
