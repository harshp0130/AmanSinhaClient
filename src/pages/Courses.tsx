import { motion } from 'framer-motion';
import { BookOpen, Calendar, FileText, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';



const Courses = () => {
  return (
    <div className="min-h-screen">
      <Hero showScrollIndicator={false} />

      <section className="section-container">
        <SectionHeader
          title="Courses"
          // subtitle="Courses taught by Prof. Kim and lab members"
        />

        <div className="flex flex-col items-start mt-8">
          <ul className="list-disc pl-8">
            <li className="text-3xl font-bold mb-6" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
              2025 Spring:
              <ul className="list-[circle] pl-10 mt-4 space-y-4">
                <li className="text-2xl" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
                  Computer Architecture (IICD503)
                </li>
                <li className="text-2xl" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
                  Open Source Prototype Systems and Applications (IICD532)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Courses;
