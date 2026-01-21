import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Cpu, Server, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';

const researchAreas = [
  {
    icon: Cpu,
    title: 'Computer Architecture',
    description: 'Designing next-generation processors and accelerators for emerging workloads.',
  },
  {
    icon: Server,
    title: 'Memory Systems',
    description: 'Innovating memory hierarchy designs for improved performance and efficiency.',
  },
  {
    icon: BookOpen,
    title: 'Machine Learning Systems',
    description: 'Building efficient hardware and software systems for AI/ML applications.',
  },
];

const recentPublications = [
  {
    title: 'Efficient Memory Management for Large Language Model Serving',
    venue: 'ISCA 2024',
    authors: 'J. Kim, S. Lee, H. Park',
  },
  {
    title: 'Scalable Architecture for Processing-in-Memory Systems',
    venue: 'MICRO 2024',
    authors: 'H. Park, J. Kim, M. Choi',
  },
  {
    title: 'Energy-Efficient Neural Network Accelerator Design',
    venue: 'HPCA 2024',
    authors: 'S. Lee, J. Kim, Y. Jung',
  },
];

const highlights = [
  { icon: Award, label: 'Best Paper Awards', value: '5+' },
  { icon: Users, label: 'Lab Members', value: '20+' },
  { icon: BookOpen, label: 'Publications', value: '100+' },
  { icon: Calendar, label: 'Years of Research', value: '10+' },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Lab Introduction */}
      <section className="section-container">
        <div className=" items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title=""
              
            />
            <p className="text-2xl font-serif text-foreground mb-1">
              Our lab conducts research at the intersection of software systems, computer architecture, and hardware accelerators, with a focus on end-to-end co-design for data-centric computing. Our work targets the fundamental performance, energy-efficiency, and scalability challenges arising in modern big data and AI-driven applications.
            </p>
            <br />
            <p className="text-2xl font-serif text-foreground mb-1">
             We emphasize cross-layer optimization, spanning algorithms, runtimes, memory systems, and reconfigurable/custom hardware, to bridge the gap between application demands and system capabilities. A key application domain of the lab is bioinformatics, bio-signals analysis, and drug discovery, where massive, irregular data workloads demand novel co-designed solutions beyond conventional CPU/GPU platforms.
            </p>
            <br />
            <p className="text-2xl font-serif text-foreground mb-1">
              Our research integrates open-source hardware and software ecosystems, including FPGA-based acceleration, domain-specific architectures, and system-level evaluation, to deliver practical, reproducible, and high-impact systems research.
            </p>
            
            {/* <Link to="/research" className="btn-primary gap-2 inline-flex">
              Explore Our Research
              <ArrowRight className="w-4 h-4" />
            </Link> */}
          </motion.div>

          {/* Recruitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 bg-accent/10 rounded-xl p-8 shadow-md text-center"
          >
            <h3 className="text-3xl font-bold text-accent mb-3">Recruitment</h3>
            <p className="text-lg text-foreground mb-4">
              The System Co-Design Lab is actively seeking highly motivated Master’s and PhD students interested in research at the interface of software systems, computer architecture, and hardware design. We welcome students with backgrounds or strong interests in systems software, performance modeling, architectural simulation, RTL/HDL design, FPGA prototyping, and EDA-related sub-domains.
            </p>
            <p className="text-lg text-foreground mb-4">
              Students in the lab gain hands-on experience across the full research stack, from algorithm and system-level analysis to hardware implementation and evaluation, and are encouraged to pursue publishable, open, and impactful research in data-centric computing and bioinformatics-driven workloads.
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Research Areas
      <section className="bg-secondary/50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Research Areas"
            subtitle="Exploring the frontiers of computer systems"
            align="center"
          /> */}

          {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-academic group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <area.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/research" className="btn-outline inline-flex gap-2">
              View All Research
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div> */}
      {/* </section> */}

      {/* Recent Publications */}
      {/* <section className="section-container">
        <SectionHeader
          title="Recent Publications"
          subtitle="Our latest contributions to the research community"
        />

        <div className="space-y-4">
          {recentPublications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="publication-item group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{pub.authors}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium shrink-0">
                  {pub.venue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/publications" className="btn-primary inline-flex gap-2">
            View All Publications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section> */}

      {/* CTA Section
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 hero-pattern opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Join Our Research Team
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for motivated students and researchers to join our team.
              Explore exciting opportunities in cutting-edge computer architecture research.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/people" className="btn-primary bg-accent hover:bg-accent/90">
                Meet Our Team
              </Link>
              <a
                href="mailto:sal@skku.edu"
                className="btn-outline border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Index;
