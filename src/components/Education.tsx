import { GraduationCap, Calendar, BookOpen, Award, Building2 } from "lucide-react";

export default function Education() {
  const degrees = [
    {
      degree: "MSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "Fall 2026 – Present · Enrolled / Advanced Research",
      status: "POSTGRADUATE DEGREE",
      majorFocus: "Scalable Software Systems & Intelligent Computing",
      highlights: [
        "Advanced graduate specialization in scalable software architectures & distributed web systems",
        "Graduate research in machine learning algorithms, model interpretability & intelligent decision support",
        "Advanced software engineering methodologies, design patterns & cloud architecture",
      ],
    },
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Daffodil International University",
      period: "Completed 2026",
      status: "UNDERGRADUATE DEGREE",
      majorFocus: "Core Computer Science, Full-Stack Development & Applied AI",
      highlights: [
        "Rigorous foundation in computer science theory, algorithms, object-oriented programming & data structures",
        "Full-stack web application development, database management systems (SQL) & RESTful service engineering",
        "Final Year Research Project on ML-driven physical and mental health risk prediction with explainability",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 sm:py-24 bg-white relative overflow-hidden scroll-mt-24"
    >
      {/* Subtle Background Accent */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#6E1423]/3 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="editorial-badge mb-4">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-[1.15]">
            Academic Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#171717]/75 leading-relaxed font-normal">
            Formal university degree programs and scholarly engineering preparation from Daffodil International University.
          </p>
        </div>

        {/* Education Degree Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degrees.map((item, index) => (
            <div
              key={item.degree}
              className="editorial-card p-8 sm:p-10 flex flex-col justify-between relative group hover:border-[#6E1423]/35 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#6E1423]/8 border border-[#6E1423]/20 flex items-center justify-center text-[#6E1423]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FAF7F4] text-[#6E1423] border border-[#6E1423]/20 shadow-2xs">
                    {item.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#B08D57] mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#171717] mb-1.5 group-hover:text-[#6E1423] transition-colors">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#171717]/80 mb-3">
                  <Building2 className="w-4 h-4 text-[#6E1423]" />
                  <span>{item.institution}</span>
                </div>

                <p className="text-xs font-semibold text-[#6E1423] mb-6">
                  {item.majorFocus}
                </p>

                <ul className="space-y-3 pt-5 border-t border-[#171717]/8 text-xs sm:text-sm text-[#171717]/80">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#6E1423] font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">{h}</span>
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
