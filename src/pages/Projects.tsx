import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';

const projects = [
  {
    id: 1,
    title: 'PagedAttention for LLM Serving',
    description: 'Memory-efficient attention mechanism for serving large language models',
    longDescription: `PagedAttention is a novel attention mechanism designed to dramatically reduce memory consumption when serving large language models. By managing attention key-value cache in a paged manner (similar to virtual memory in operating systems), we achieve near-zero memory waste and enable serving larger models on limited GPU memory.

This project has been adopted by major LLM serving frameworks and has become a standard technique in the industry.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    duration: '2023 - Present',
    team: ['Prof. Kim', 'Sehyun Lee', 'Hyunwoo Park'],
    status: 'Active',
    link: '#',
  },
  {
    id: 2,
    title: 'HBM-PIM Architecture',
    description: 'Processing-in-memory architecture leveraging High Bandwidth Memory',
    longDescription: `This project explores the integration of processing capabilities directly within High Bandwidth Memory (HBM) stacks. By placing compute units close to memory, we can dramatically reduce data movement and energy consumption for memory-intensive workloads.

Our architecture targets graph analytics, recommendation systems, and neural network inference applications.`,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    duration: '2022 - Present',
    team: ['Prof. Kim', 'Hyunwoo Park', 'Minjae Choi'],
    status: 'Active',
  },
  {
    id: 3,
    title: 'Neural Network Compiler',
    description: 'Optimizing compiler for diverse ML accelerator targets',
    longDescription: `We are developing a neural network compiler that can generate optimized code for various ML accelerator architectures. The compiler performs graph-level and operator-level optimizations, memory scheduling, and target-specific code generation.

Key features include automatic kernel fusion, memory optimization, and multi-target compilation support.`,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    duration: '2021 - Present',
    team: ['Prof. Kim', 'Sehyun Lee', 'Yuna Jung'],
    status: 'Active',
  },
  {
    id: 4,
    title: 'Secure Memory Encryption',
    description: 'Hardware-based memory encryption for cloud computing',
    longDescription: `This project develops efficient memory encryption techniques to protect sensitive data in cloud computing environments. We design low-latency encryption engines that can be integrated into memory controllers without significant performance overhead.

Our approach combines AES encryption with integrity verification to provide comprehensive memory protection.`,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    duration: '2022 - 2024',
    team: ['Prof. Kim', 'Yuna Jung', 'Donghyun Kim'],
    status: 'Completed',
  },
  {
    id: 5,
    title: 'Smart SSD Architecture',
    description: 'Computational storage for database acceleration',
    longDescription: `Smart SSDs integrate processing capabilities directly into storage devices, enabling near-data processing for database operations. This project develops the architecture, programming model, and software stack for computational storage devices.

Applications include database query acceleration, data filtering, and compression/decompression offloading.`,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=400&fit=crop',
    duration: '2020 - 2023',
    team: ['Prof. Kim', 'Minjae Choi'],
    status: 'Completed',
  },
  {
    id: 6,
    title: 'RISC-V Accelerator Platform',
    description: 'Open-source RISC-V based accelerator development platform',
    longDescription: `We are developing an open-source platform for prototyping and evaluating domain-specific accelerators based on the RISC-V ISA. The platform includes RTL generators, simulation frameworks, and FPGA prototyping support.

This enables rapid iteration on accelerator designs and facilitates hardware-software co-design research.`,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop',
    duration: '2023 - Present',
    team: ['Prof. Kim', 'Donghyun Kim', 'Soojin Park'],
    status: 'Active',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Hero showScrollIndicator={false} />

      <section className="section-container">
        <SectionHeader
          title="Coming Soon...!"
          // subtitle="Ongoing and completed research projects"
        />

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="card-academic overflow-hidden cursor-pointer group p-0"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <span
                  className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl overflow-hidden max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-64">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <div className="p-6 md:p-8 -mt-16 relative">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    selectedProject.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {selectedProject.status}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {selectedProject.team.join(', ')}
                  </div>
                </div>

                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {selectedProject.longDescription}
                </div>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-6 inline-flex gap-2"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
