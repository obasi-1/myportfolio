import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [selectedCert, setSelectedCert] = useState(() => {
    const saved = sessionStorage.getItem('portfolioCert');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (selectedCert) sessionStorage.setItem('portfolioCert', JSON.stringify(selectedCert));
    else sessionStorage.removeItem('portfolioCert');
  }, [selectedCert]);

  const experience = [
    {
      id: 0, 
      role: "Full Stack Development Intern",
      company: "CodeAlpha",
      date: "2026",
      description: "Completed an intensive virtual full-stack development internship. Leveraged analytical skills to rapidly adapt to emerging technologies and build robust web applications.",
      skills: ["Full Stack", "Web Development", "Analytical Skills"]
    },
    {
      id: 1, role: "Backend Engineering Specialization", company: "ALX Africa", date: "2025",
      description: "Completed an intensive software engineering program focused on server-side architecture. Architected relational database schemas, developed secure RESTful APIs, and containerized applications for deployment.",
      skills: ["Python", "Django", "PostgreSQL", "REST APIs"]
    },
    {
      id: 2, role: "Industrial Process Trainee", company: "Marian Table Water", date: "2025",
      description: "Analyzed and documented the complete industrial fluid purification and production workflow. Bridged theoretical chemical engineering concepts with real-world physical systems and quality control.",
      skills: ["Process Flow", "Technical Documentation", "Industrial Systems"]
    }
  ];

  const education = [
    {
      id: 1, degree: "B.Eng in Chemical Engineering", school: "University of Calabar", date: "In Progress",
      description: "Studying core engineering principles, unit operations, and thermodynamics. Utilizing simulation tools like UniSim to model complex industrial reactors, heat exchangers, and physical data flows.",
      skills: ["Process Simulation", "Quantitative Analysis", "System Modeling"]
    }
  ];

 const certs = [
    {
      id: 0, title: "Full Stack Development Virtual Internship", issuer: "CodeAlpha", dateIssued: "October 2026",
      image: "/codealpha.jpg", skills: ["Full Stack Development", "Adaptability", "Collaboration"], verified: true
    },
    {
      id: 1, title: "Software Engineering: ProDev Backend", issuer: "ALX Africa", dateIssued: "October 2025",
      image: "/alx-prodev.png", skills: ["Backend Architecture", "Python", "Django", "PostgreSQL"], verified: true
    },
    {
      id: 2, title: "Professional Foundations", issuer: "ALX Africa", dateIssued: "June 2025",
      image: "/alx-foundations.png", skills: ["Communication", "Problem Solving", "Professionalism", "Soft Skills"], verified: true
    }
  ];

  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      <section className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-20 pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
          <div className="w-full md:w-1/3 max-w-[320px] mx-auto md:max-w-none">
            <div className="relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] aspect-[4/5] shadow-2xl">
              <img src="/profile.jpg" alt="Obasi-sam" className="w-full h-full object-cover opacity-90" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'} />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">About Me</h1>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-6">Backend Software Engineer</p>
            
            <div className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 mb-8">
              <p>
                I am a Backend Software Engineer focused on designing and building reliable software systems that solve real-world problems. With a background in Chemical Engineering, I bring an analytical, first-principles approach to problem-solving and system development.
              </p>
              <p>
                Through practical projects like Buildora and my internship experience at Enrollaa, I am continuously developing my ability to build functional, scalable backend solutions.
              </p>
              <p>
                My long-term ambition is to become a highly capable backend engineer working on complex systems and impactful technology solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['Python', 'Django', 'REST APIs', 'PostgreSQL', 'Systems Thinking', 'Exploring AI Engineering'].map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 text-[10px] sm:text-xs font-bold rounded-lg shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-500 mb-8">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Calabar, Nigeria
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Backend Systems Engineer
              </span>
            </div>

            <div className="flex gap-4">
              <Link to="/resume" onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-10 md:mb-12">Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-12 pb-10">
          {experience.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-8 group">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-gray-50 dark:ring-[#0a0a0a] group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all"></span>
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 p-6 md:p-8 rounded-2xl group-hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <span className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20 w-max">{exp.date}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 mt-8 pt-8">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-10 md:mb-12">Education</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-12 pb-10">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-6 md:pl-8 group">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-gray-50 dark:ring-[#0a0a0a] group-hover:bg-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all"></span>
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 p-6 md:p-8 rounded-2xl group-hover:border-blue-500/50 transition-all duration-300 shadow-sm dark:shadow-none">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="text-[10px] md:text-xs font-bold text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20 w-max">{edu.date}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">{edu.school}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, index) => (
                    <span key={index} className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg uppercase tracking-wider">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-8 mt-16 border-t border-gray-200 dark:border-gray-800 pt-16 pb-20">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight mb-10 md:mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certs.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden group shadow-sm dark:shadow-none">
              <div className="h-40 md:h-48 bg-gray-100 dark:bg-[#1a1a1a] overflow-hidden relative border-b border-gray-200 dark:border-gray-800">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1589330694653-061a8f7fba01?auto=format&fit=crop&w=600&q=80'} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-[#111] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button onClick={() => setSelectedCert(cert)} className="bg-blue-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-lg hover:bg-blue-700 shadow-lg">View Details</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{cert.title}</h3>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs md:text-sm text-gray-500">{cert.issuer} {cert.dateIssued}</p>
                  {cert.verified && (
                    <div className="flex items-center text-green-600 dark:text-green-500 text-[10px] md:text-xs font-bold bg-green-50 dark:bg-green-500/10 px-2 py-1 rounded-md border border-green-200 dark:border-green-500/20">
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      Verified
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-[fadeIn_0.2s_ease-in-out]">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer" onClick={() => setSelectedCert(null)}></div>
          <div className="relative w-full max-w-5xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl z-10 max-h-[90vh] overflow-y-auto md:overflow-hidden">
            <button onClick={() => setSelectedCert(null)} className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-gray-100 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-full md:w-3/5 bg-gray-50 dark:bg-[#111] p-4 flex items-center justify-center min-h-[250px]">
              <img src={selectedCert.image} alt={selectedCert.title} className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-lg border border-gray-200 dark:border-gray-800/50" />
            </div>
            <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col justify-center">
              <span className="text-blue-600 dark:text-blue-500 text-[10px] font-bold tracking-widest uppercase mb-3">Professional</span>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{selectedCert.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Issuer</p>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">{selectedCert.issuer}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">Date Issued</p>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">{selectedCert.dateIssued}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">Targeted Skills</p>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 text-[10px] font-medium px-3 py-1.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;