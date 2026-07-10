import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AlternatingFeaturesSection from "@/components/ui/AlternatingFeaturesSection";
import CallToActionSection from "@/components/ui/CallToActionSection";
import ContactSection from "@/components/ui/ContactSection";
import DistrettoHero from "@/components/ui/DistrettoHero";
import FeatureImageSection from "@/components/ui/FeatureImageSection";
import TextWithGallerySection from "@/components/ui/TextWithGallerySection";
import type { DistrictSlug } from "@/data/districts";
import { getDistrict } from "@/data/districts";

export default function DistrictDetailPage({ slug }: { slug: DistrictSlug }) {
  const district = getDistrict(slug);

  if (!district) {
    return null;
  }

  return (
    <main className="relative min-h-screen bg-polo-dark">
      <Header />

      <DistrettoHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Distretti", href: "/#distretti" },
          { label: district.menuLabel, href: `/distretti/${district.slug}` },
        ]}
        title={district.title}
        description={district.description}
        imageSrc={district.heroImage}
        hideBottomBar={true}
        links={[
          { label: "DIVENTA MANAGER", href: "/diventa-manager" },
          { label: "PROPONI IL TUO PROGETTO", href: "/entra-nel-polo" },
        ]}
      />

      <TextWithGallerySection
        title={district.introTitle}
        description={district.introDescription}
        images={district.introImages}
      />

      <FeatureImageSection
        title={district.featureTitle}
        description={district.featureDescription}
        imageSrc={district.featureImage}
        links={[
          { label: "DIVENTA MANAGER", href: "/diventa-manager" },
          { label: "PROPONI IL TUO PROGETTO", href: "/entra-nel-polo" },
        ]}
      />

      <AlternatingFeaturesSection
        features={district.alternating.map((feature) => ({
          ...feature,
          mediaType: "image",
        }))}
      />

      <CallToActionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
