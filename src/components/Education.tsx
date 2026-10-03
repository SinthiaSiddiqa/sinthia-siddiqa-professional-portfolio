import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

export default function Education() {
  const degrees = [
    {
      degree: "MSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "Fall 2026 · Enrolled / Advanced Research",
      status: "Advanced Postgraduate Study",
      highlights: [
        "Specialized focus on scalable software systems & web architectures",
        "Graduate research in intelligent computing and machine learning",
        "Advanced software engineering methodologies",
      ],
    },
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "Completed 2026",
      status: "Undergraduate Degree",
      highlights: [
        "Rigorous foundation in computer science, algorithms & data structures",
        "Full-stack web application development & database systems",
        "Final Year Research Project on ML-driven health risk prediction",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Formal Education &amp; Credentials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/70 leading-relaxed font-normal">
            Solid theoretical and practical academic preparation from Daffodil International University.
          </p>
        </div>

        {/* Education Degree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degrees.map((item, index) => (
            <div
              key={item.degree}
              className="editorial-card p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#6E1423]/30"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6E1423]/8 border border-[#6E1423]/20 flex items-center justify-center text-[#6E1423]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#FAF7F4] text-[#6E1423] border border-[#171717]/8">
                    {index === 0 ? "POSTGRADUATE" : "UNDERGRADUATE"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#B08D57] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] mb-1 group-hover:text-[#6E1423] transition-colors">
                  {item.degree}
                </h3>

                <p className="font-['Space_Grotesk'] text-sm font-semibold text-[#171717]/70 mb-6">
                  {item.institution}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#171717]/6 text-xs sm:text-sm text-[#171717]/70">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#6E1423] font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
