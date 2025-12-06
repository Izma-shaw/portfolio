import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-32">
      <section aria-label="Présentation">
        <Header />
      </section>

      <section aria-label="Compétences clés">
        <Features />
      </section>

      <section aria-label="Parcours & expériences">
        <Resume />
      </section>

      {/* <section aria-label="Services proposés">
        <Services />
      </section> */}

      <section aria-label="Contact">
        <Contact />
      </section>
    </div>
  );
}
