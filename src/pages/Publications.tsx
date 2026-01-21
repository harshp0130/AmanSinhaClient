
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';


const Publications = () => {
  return (
    <div className="min-h-screen">
      <Hero showScrollIndicator={false} />
      <section className="section-container">
        <SectionHeader
          title="Publications"
          subtitle="Our research contributions to top-tier venues"
        />

        {/* Journals */}
        <h2 className="text-xl font-bold mt-10 mb-4 underline">Journals</h2>
        <ol className="ml-4 space-y-6">
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Huei-Chun Yang, Pei-Yi-Liu, Yen-Shi Kuo, Yuhao Fang, Tien-Shuo Chang, Ke-Han Li and Bo-Cheng Lai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"DSIM: Distributed Sequence Matching on Near-DRAM Accelerator for Genome Assembly"</a>.<br />
            In: <span className="font-bold">IEEE Journal on Emerging and Selected Topics in Circuits and Systems</span>, 12.2 (June 2023), pages 486-499. (<span className="font-bold">Impact Factor: 3.7</span>)
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Bo-Cheng Lai, and Jhih-Yong Mai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"A Bin-Based Indexing for <span class='underline'>Scalable Range Join on Genomic Data</span>"</a>.<br />
            In: <span className="font-bold">IEEE/ACM Transactions on Computational Biology and <span className='underline'>Bioinformatics</span></span>, 20.3 (Jan 2023), pages 2210-2222. (<span className="font-bold">Impact Factor: 3.6</span>)
          </li>
        </ol>

        {/* Conference Papers */}
        <h2 className="text-xl font-bold mt-10 mb-4 underline">Conference Papers</h2>
        <ol className="ml-4 space-y-6 list-decimal">
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Shih-Chen Lo, and Bo-Cheng Lai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"Multi-Dimensional Range Joins on <span class='underline'>HBM-Enabled FPGAs</span>"</a>.<br />
            Accepted: <span className="font-bold">International Symposium on Circuits and Systems (ISCAS)</span>.<br />London, United Kingdom, May 2025.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span> and Bo-Cheng Lai.<br />
            "Near-DRAM Accelerated Matrix Multiplications."<br />
            In: <span className="font-bold">Proceedings of the 17<sup>th</sup> International Symposium on Embedded <span class='underline'>Multicore</span>/Many-core System-on-Chip (MCSoC)</span>.<br />Kuala Lumpur, Malaysia, December 2024.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Pei-Yi Liu, Yuhao Fang, Jhih-Yong Mai, and Bo-Cheng Lai.<br />
            "GRONA: A Framework for Gather-and-Reduce on Near-Memory Accelerators".<br />
            In: <span className="font-bold">Proceedings of the 16<sup>th</sup> International Symposium on Embedded <span class='underline'>Multicore</span>/Many-core System-on-Chip (MCSoC)</span>.<br />Singapore, December 2023.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Yuhao Fang, and Bo-Cheng Lai.<br />
            "REGAL: <span class='underline'>Reprogrammable</span> Engines for Genome Analysis on LPDDR4x-based Stacked DRAM".<br />
            In: <span className="font-bold">Proceedings of the International Symposium on Circuits and Systems (ISCAS)</span>.<br />Monterey, California, USA, May 2023.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Jhih-Yong Mai, and Bo-Cheng Lai.<br />
            "MSIM: A Highly Parallel Near-Memory Accelerator for <span class='underline'>MinHash Sketch</span>".<br />
            In: <span className="font-bold">Proceedings of the 35<sup>th</sup> International System-on-Chip Conference (SOCC)</span>.<br />Belfast, United Kingdom, September 2022.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span> and Bo-Cheng Lai.<br />
            "DP2: A Highly Parallel Range Join for Genome Analysis on Distributed Computing Platform".<br />
            In: <span className="font-bold">Proceedings of the International Conference on High Performance Computing & Simulation (HPCS)</span>.<br />Dublin, Ireland, July 2019.
          </li>
        </ol>

        {/* Poster and Workshop Presentations */}
        <h2 className="text-xl font-bold mt-10 mb-4 underline">Poster and Workshop Presentations</h2>
        <ol className="ml-4 space-y-6 list-decimal">
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span>, Shih-Chen Lo, and Bo-Cheng Lai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"Accelerating Range-Joins for Big Data <span class='underline'>Genomic</span> Variant Annotation on <span class='underline'>HBM-enabled FPGAs</span>"</a>.<br />
            At the <span className="font-bold">Design Automation Conference (DAC 2024)</span>.<br />San Francisco, USA, June 2024.
          </li>
          <li className="pl-2">
            Yuhao Fang, <span className="italic font-semibold">Aman Sinha</span>, and Bo-Cheng Lai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"REAL-GSM: Re-programmable Engines for Acceleration on LPDDR4x-based Stacked DRAM to support Genomic String Matching"</a>.<br />
            At the 4<sup>th</sup> HPCA Workshop on Accelerator Architecture in Computational Biology and Bioinformatics (AACBB 2022).<br />New York, USA, June 2022.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Aman Sinha</span> and Bo-Cheng Lai.<br />
            <a className="text-purple-600 underline" href="#" target="_blank">"A Bin-based Indexing for Scalable Range Join on <span class='underline'>Genomic Data</span>"</a>.<br />
            At the <span className="font-bold">Design Automation Conference (DAC 2020)</span>.<br />San Francisco, USA, June 2020.
          </li>
        </ol>

        {/* Patents */}
        <h2 className="text-xl font-bold mt-10 mb-4 underline">Patents</h2>
        <ol className="ml-4 space-y-6 list-decimal">
          <li className="pl-2">
            翁伯丞, 辛安, 等. “執行局部對齊的方法、變異點判別方法、及用於促進變異點偵測的處理裝置和系統.” 台灣發明專利, 2025.
          </li>
          <li className="pl-2">
            <span className="italic font-semibold">Bo-Cheng Lai</span>, <span className="italic font-semibold">Aman Sinha</span>. "Method for performing Local Alignment, Method of Variant Calling, and Processing Device and System for facilitating Variant Calling"<br />
            <span className="font-bold">US Invention Patent, 2025.</span>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Publications;
