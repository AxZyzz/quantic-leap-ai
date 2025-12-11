import ScrollReveal from "@/components/ScrollReveal";

const Newsletters = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-32 bg-gradient-to-br from-muted/40 to-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center text-gray-900 dark:text-white">
              <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white">
                NewsLetters
              </h1>
              <p className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
                Launching January 2026
              </p>
              <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-200">
                We're excited to bring you carefully curated newsletters with product updates,
                case studies, and actionable AI automation insights. Sign up to be the first to
                know when we go live.
              </p>

              <div className="mt-10 flex items-center justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-md hover:opacity-90 transition"
                >
                  Contact Us to Join the Waitlist
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-gray-900 dark:text-white">
            <h2 className="text-2xl font-bold mb-4">What to expect</h2>
            <ul className="text-left list-disc ml-6 text-gray-800 dark:text-white space-y-2">
              <li>Monthly deep dives into AI-driven automation case studies</li>
              <li>Hands-on templates, prompts, and engineering notes</li>
              <li>Early access to product updates and beta features</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletters;
