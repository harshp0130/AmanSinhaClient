import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Server, Brain, Zap, Shield, Database, ChevronRight, X } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';

const researchAreas = [
  {
    id: 1,
    icon: Cpu,
    title: 'Computer Architecture',
    shortDesc: 'Next-generation processor and accelerator design',
    fullDesc: `Our computer architecture research focuses on designing high-performance, energy-efficient processors for emerging workloads. We explore novel microarchitectural techniques including out-of-order execution optimizations, branch prediction improvements, and specialized compute units.

Key research directions include:
• Domain-specific accelerator architectures
• Reconfigurable computing systems
• Hardware-software co-design methodologies
• Performance modeling and simulation frameworks`,
    projects: ['Custom RISC-V Processor Design', 'GPU Microarchitecture Optimization', 'Systolic Array Accelerators'],
  },
  {
    id: 2,
    icon: Server,
    title: 'Memory Systems',
    shortDesc: 'Innovative memory hierarchy and management',
    fullDesc: `Memory systems research at SAL addresses the growing memory wall problem through innovative hierarchy designs, emerging memory technologies, and intelligent data management techniques.

Key research directions include:
• Processing-in-Memory (PIM) architectures
• Hybrid memory system design (DRAM + NVM)
• Memory compression and deduplication
• Cache replacement and prefetching policies`,
    projects: ['HBM-PIM Architecture', 'Intelligent Cache Management', 'CXL Memory Pooling'],
  },
  {
    id: 3,
    icon: Brain,
    title: 'Machine Learning Systems',
    shortDesc: 'Efficient AI/ML infrastructure and accelerators',
    fullDesc: `We design and build efficient systems for training and inference of machine learning models, with a focus on large language models and neural networks.

Key research directions include:
• LLM serving optimization (memory, compute, latency)
• Neural network compiler optimizations
• Quantization and model compression
• Distributed training systems`,
    projects: ['PagedAttention for LLM Serving', 'Neural Network Quantization', 'Transformer Accelerators'],
  },
  {
    id: 4,
    icon: Zap,
    title: 'High-Performance Computing',
    shortDesc: 'Scalable systems for scientific computing',
    fullDesc: `Our HPC research enables scientific breakthroughs by developing scalable, efficient computing systems for simulation, data analytics, and computational science.

Key research directions include:
• Parallel algorithm design and optimization
• GPU computing and CUDA optimization
• Interconnect and communication optimization
• Power-efficient supercomputing`,
    projects: ['MPI Optimization Framework', 'GPU Cluster Management', 'Scientific Workflow Systems'],
  },
  {
    id: 5,
    icon: Shield,
    title: 'Hardware Security',
    shortDesc: 'Secure processor and memory architectures',
    fullDesc: `We investigate security vulnerabilities in modern computer systems and develop architectural solutions to protect against emerging threats.

Key research directions include:
• Side-channel attack detection and mitigation
• Secure memory encryption
• Trusted execution environments
• Hardware-based isolation mechanisms`,
    projects: ['Cache Side-Channel Defense', 'Memory Encryption Engine', 'Secure Enclave Design'],
  },
  {
    id: 6,
    icon: Database,
    title: 'Storage Systems',
    shortDesc: 'Next-generation storage architectures',
    fullDesc: `Our storage research addresses the performance and capacity demands of modern data-intensive applications through novel storage architectures and I/O optimizations.

Key research directions include:
• Computational storage devices
• Key-value store optimization
• Flash storage management
• Distributed storage systems`,
    projects: ['Smart SSD Architecture', 'LSM-Tree Optimization', 'Disaggregated Storage'],
  },
];

const Research = () => {
  const [selectedArea, setSelectedArea] = useState<typeof researchAreas[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Hero showScrollIndicator={false} />

      <section className="section-container">
        <SectionHeader
          title="Coming Soon...!"
          // subtitle="Exploring the frontiers of computer systems and architecture"
        />

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedArea(area)}
              className="card-academic cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <area.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{area.shortDesc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div> */}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedArea && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setSelectedArea(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <selectedArea.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedArea.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedArea(null)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="prose prose-sm max-w-none">
                <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {selectedArea.fullDesc}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">Related Projects</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedArea.projects.map((project) => (
                    <span
                      key={project}
                      className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Research;
