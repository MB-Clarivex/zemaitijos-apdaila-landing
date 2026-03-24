
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard.jsx';
import ProjectModal from '@/components/ProjectModal.jsx';

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Visi');

  const projects = [
    {
      image: '/images/portfolio-gipso.png',
      title: 'Gipso darbai',
      category: 'Vidaus apdaila',
      description: 'Profesionalus gipso kartono plokščių montavimas, užtikrinantis lygias sienas ir lubas bei paruošiantis paviršius tolesniems apdailos etapams.'
    },
    {
      image: '/images/portfolio-dazymas.png',
      title: 'Sienų dažymas',
      category: 'Dažymo darbai',
      description: 'Aukštos kokybės sienų dažymas naudojant patvarius ir ekologiškus dažus. Kruopštus paviršių paruošimas ir tolygus padengimas.'
    },
    {
      image: '/images/portfolio-gipskartono.png',
      title: 'Gipskartono montavimas',
      category: 'Vidaus apdaila',
      description: 'Sudėtingų gipskartono konstrukcijų ir pertvarų montavimas komercinėse bei gyvenamosiose patalpose, formuojant naujas erdves.'
    },
    {
      image: '/images/portfolio-grindu-klojimas.png',
      title: 'Grindų klojimas',
      category: 'Grindų įrengimas',
      description: 'Įvairių tipų grindų dangos klojimas, užtikrinant ilgaamžiškumą, estetiką ir atsparumą kasdieniam dėvėjimuisi.'
    },
    {
      image: '/images/portfolio-plyteliu.png',
      title: 'Plytelių klojimas',
      category: 'Apdailos darbai',
      description: 'Kruopštus keraminių ir akmens masės plytelių klojimas vonios kambariuose, virtuvėse ir kitose drėgnose patalpose.'
    },
    {
      image: '/images/portfolio-grindu-apdaila.png',
      title: 'Grindų apdaila',
      category: 'Grindų įrengimas',
      description: 'Galutinė grindų apdaila ir paruošimas eksploatacijai, atkreipiant dėmesį į kiekvieną detalę ir užtikrinant nepriekaištingą rezultatą.'
    },
    {
      image: '/images/portfolio-renovacija.jpg',
      title: 'Pastato renovacija',
      category: 'Kompleksinė renovacija',
      description: 'Pilna pastato renovacija, apimanti tiek vidaus, tiek išorės apdailos darbus, atnaujinant ir modernizuojant senas erdves.'
    }
  ];

  const allCategories = ['Visi', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = activeCategory === 'Visi'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleProjectClick = (project, index) => {
    const originalIndex = projects.findIndex(p => p.title === project.title);
    setSelectedProject({ ...project, index: originalIndex });
    setIsModalOpen(true);
  };

  const handleNext = () => {
    const nextIndex = (selectedProject.index + 1) % projects.length;
    setSelectedProject({ ...projects[nextIndex], index: nextIndex });
  };

  const handlePrev = () => {
    const prevIndex = (selectedProject.index - 1 + projects.length) % projects.length;
    setSelectedProject({ ...projects[prevIndex], index: prevIndex });
  };

  return (
    <>
      <Helmet>
        <title>Portfolis — UAB Žemaitijos apdaila</title>
        <meta name="description" content="Atliktų statybų ir apdailos projektų pavyzdžiai: vidaus apdaila, plytelės, grindys, renovacija. UAB „Žemaitijos apdaila“." />
      </Helmet>

      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
              Mūsų portfolis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tyrinėkite mūsų atliktus projektus ir įsitikinkite mūsų meistriškumo kokybe. Kiekvienas projektas atspindi mūsų įsipareigojimą tobulumui.
            </p>
          </motion.div>

          {/* Kategorijų filtras */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={project.title}
                image={project.image}
                title={project.title}
                category={project.category}
                onClick={() => handleProjectClick(project, index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
};

export default PortfolioPage;
