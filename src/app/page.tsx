import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import ContactSection from "./_components/Contact";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";

const getLandingPageData = async () => {
  //const version = "draft";
  //const token = "QtmemeMe71WUxtxw1vrMCAtt";
  const version = process.env.NEXT_PUBLIC_SB_DATA_VERSION;
  const token = process.env.NEXT_PUBLIC_SB_TOKEN;
  const url = `https://api-us.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(url, { next: { revalidate: 10 } });

  const storyData = await req.json();
  const {
    nav_section,
    hero_section,
    services_section,
    testimonial_section,
    contact_section,
    faq_section,
    footer_section,
  } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonial_section: testimonial_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer_section: footer_section[0],
  };
};

export default async function Home() {
  const storyData = await getLandingPageData();

  return (
    <>
      <Navbar data={storyData.nav_section} />
      <HeroSection data={storyData.hero_section} />
      <Services data={storyData.services_section} />
      <Testimonials data={storyData.testimonial_section} />
      <ContactSection data={storyData.contact_section} />
      <Faq data={storyData.faq_section} />
      <Footer data={storyData.footer_section} />
    </>
  );
}
