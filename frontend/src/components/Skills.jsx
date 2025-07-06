
// import React, { useState } from 'react';
// import { Code, Server, Database, Globe, Wrench, Brain } from 'lucide-react';

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState(0);

//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       icon: <Code className="w-6 h-6" />,
//       color: 'from-blue-400 to-blue-600',
//       skills: [
//         { name: 'JavaScript', level: 85, experience: '2+ years' },
//         { name: 'Java', level: 90, experience: '2+ years' },
//         { name: 'C++', level: 75, experience: '3+ years' },
//         { name: 'C', level: 75, experience: '3+ years' }
//       ]
//     },
//     {
//       title: 'Frontend Development',
//       icon: <Globe className="w-6 h-6" />,
//       color: 'from-cyan-400 to-cyan-600',
//       skills: [
//         { name: 'React.js', level: 85, experience: '1+ years' },
//         { name: 'HTML5', level: 70, experience: '2+ years' },
//         { name: 'CSS3', level: 70, experience: '2+ years' },
//         { name: 'Tailwind CSS', level: 75, experience: '1+ years' },
//       ]
//     },
//     {
//       title: 'Backend Development',
//       icon: <Server className="w-6 h-6" />,  
//       color: 'from-green-400 to-green-600',
//       skills: [
//         { name: 'Node.js', level: 95, experience: '2+ years' },
//         { name: 'Express.js', level: 95, experience: '2+ years' },
//         { name: 'REST APIs', level: 90, experience: '2+ years' },
//         { name: 'MongoDB', level: 85, experience: '2+ years' },
//         { name: 'MySQL', level: 90, experience: '2+ years' }
//       ]
//     },
//     {
//       title: 'Tools & Technologies',
//       icon: <Wrench className="w-6 h-6" />,
//       color: 'from-orange-400 to-orange-600',
//       skills: [
//         { name: 'Git & GitHub', level: 85, experience: '2+ years' },
//         { name: 'Postman', level: 80, experience: '2+ years' },
//         { name: 'Linux CLI', level: 80, experience: '1+ years' },
//         { name: 'VS Code', level: 80, experience: '1+ years' },
//         { name: 'Jupyter Notebook', level: 70, experience: '1+ years' }
//       ]
//     },
//     {
//       title: 'Concepts & Theory',
//       icon: <Brain className="w-6 h-6" />,
//       color: 'from-pink-400 to-pink-600',
//       skills: [
//         { name: 'OOPS', level: 95, experience: '2+ years' },
//         { name: 'Data Structure and Algorithms', level: 80, experience: '2+ years' },
//         { name: 'DBMS', level: 75, experience: '2+ years' },
//         { name: 'Operating Systems', level: 70, experience: '2+ years' },
//         { name: 'Computer Networks', level: 80, experience: '1+ years' }
//       ]
//     }
//   ];

//   const getSkillColor = (level) => {
//     if (level >= 80) return 'from-green-400 to-green-600';
//     if (level >= 70) return 'from-yellow-400 to-yellow-600';
//     if (level >= 60) return 'from-orange-400 to-orange-600';
//     return 'from-red-400 to-red-600';
//   };

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
//             Skills & Expertise
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4"></div>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Here's a comprehensive overview of my technical skills and proficiency levels across different domains.
//           </p>
//         </div>

//         {/* Skill Tabs */}
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-wrap justify-center mb-12 gap-2">
//             {skillCategories.map((category, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveCategory(index)}
//                 className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
//                   activeCategory === index
//                     ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
//                     : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
//                 }`}
//               >
//                 {category.icon}
//                 <span className="hidden sm:inline">{category.title}</span>
//               </button>
//             ))}
//           </div>

//           {/* Skills Display */}
//           <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
//             <div className={`bg-gradient-to-r ${skillCategories[activeCategory].color} p-6`}>
//               <div className="flex items-center gap-3">
//                 {skillCategories[activeCategory].icon}
//                 <h3 className="text-2xl font-bold text-white">
//                   {skillCategories[activeCategory].title}
//                 </h3>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 {skillCategories[activeCategory].skills.map((skill, index) => (
//                   <div key={index} className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <span className="text-white font-medium">{skill.name}</span>
//                       <div className="flex items-center gap-2">
//                         <span className="text-gray-400 text-sm">{skill.experience}</span>
//                         <span className="text-cyan-400 font-semibold">{skill.level}%</span>
//                       </div>
//                     </div>
//                     <div className="relative">
//                       <div className="w-full bg-gray-700 rounded-full h-2">
//                         <div 
//                           className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
//                           style={{ width: `${skill.level}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Competitive Coding Section */}
//         <section className="mt-20">
//           <h2 className="text-3xl font-bold text-white text-center mb-8">🏆 Competitive Coding & Achievements</h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {/* HackerRank Card */}
//             <div className="bg-gradient-to-br from-gray-800/50 to-green-600/10 rounded-xl p-6 border border-green-400/20 shadow-md">
//               <div className="flex items-center space-x-4 mb-4">
//                 <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" className="w-8 h-8" />
//                 <h3 className="text-xl font-semibold text-green-300">HackerRank Achievements</h3>
//               </div>
//               <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside pl-1">
//                 <li>🥇 <strong>Java:</strong> Gold Badge (5★)</li>
//                 <li>🥈 <strong>C:</strong> Silver Badge (3★)</li>
//                 <li>🥈 <strong>C++:</strong> Silver Badge (3★)</li>
//                 <li>⭐ <strong>SQL:</strong> Silver Badge (3★)</li>
//                 {/* <li>✅ <strong>Certified:</strong> Problem Solving (Basic)</li> */}
//                 <li>
//                   🔗 <a href="https://www.hackerrank.com/profile/omdarshanpatil" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:text-green-200">View HackerRank Profile</a>
//                 </li>
//               </ul>
//             </div>

//             {/* LeetCode Card */}
//             <div className="bg-gradient-to-br from-gray-800/50 to-yellow-500/10 rounded-xl p-6 border border-yellow-400/20 shadow-md">
//               <div className="flex items-center space-x-4 mb-4">
//                 <img src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png" alt="LeetCode" className="w-8 h-8" />
//                 <h3 className="text-xl font-semibold text-yellow-300">LeetCode Journey</h3>
//               </div>
//               <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside pl-1">
//                 <li>💡 Solved <strong>50+ DSA questions</strong></li>
//                 <li>💻 Focused on Arrays, Strings, Recursion, Bit Manipulation</li>
//                 <li>
//                   🔗 <a href="https://leetcode.com/u/omdarshanshindepatil_kitcoek/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-200">View LeetCode Profile</a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Hashtag */}
//           <div className="text-center mt-8">
//             <span className="inline-block bg-white/10 text-sm text-cyan-300 px-4 py-1 rounded-full border border-cyan-500/30">
//               📌 #DirectPlacementSeries — Tracking DSA + Dev Progress
//             </span>
//           </div>
//         </section>
//       </div>

//       {/* Background Blobs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
//       </div>
//     </section>
//   );
// };

// export default Skills;





import React, { useState } from 'react';
import { Code, Server, Database, Globe, Wrench, Brain } from 'lucide-react';
import Java_Badge from '../assets/HackerRank_Badges/Java_Badge.png';
import Cpp_Badge from '../assets/HackerRank_Badges/Cpp.png';
import C_Badge from '../assets/HackerRank_Badges/C.png';
import PB_Badge from '../assets/HackerRank_Badges/PB.png';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 85, experience: '2+ years' },
        { name: 'Java', level: 90, experience: '2+ years' },
        { name: 'C++', level: 75, experience: '3+ years' },
        { name: 'C', level: 75, experience: '3+ years' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-cyan-400 to-cyan-600',
      skills: [
        { name: 'React.js', level: 85, experience: '1+ years' },
        { name: 'HTML5', level: 70, experience: '2+ years' },
        { name: 'CSS3', level: 70, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 75, experience: '1+ years' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,  
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Node.js', level: 95, experience: '2+ years' },
        { name: 'Express.js', level: 95, experience: '2+ years' },
        { name: 'REST APIs', level: 90, experience: '2+ years' },
        { name: 'MongoDB', level: 85, experience: '2+ years' },
        { name: 'MySQL', level: 90, experience: '2+ years' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Git & GitHub', level: 85, experience: '2+ years' },
        { name: 'Postman', level: 80, experience: '2+ years' },
        { name: 'Linux CLI', level: 80, experience: '1+ years' },
        { name: 'VS Code', level: 80, experience: '1+ years' },
        { name: 'Jupyter Notebook', level: 70, experience: '1+ years' }
      ]
    },
    {
      title: 'Concepts & Theory',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-pink-400 to-pink-600',
      skills: [
        { name: 'OOPS', level: 95, experience: '2+ years' },
        { name: 'Data Structure and Algorithms', level: 80, experience: '2+ years' },
        { name: 'DBMS', level: 75, experience: '2+ years' },
        { name: 'Operating Systems', level: 70, experience: '2+ years' },
        { name: 'Computer Networks', level: 80, experience: '1+ years' }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 80) return 'from-green-400 to-green-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    if (level >= 60) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>

        {/* Skill Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.icon}
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className={`bg-gradient-to-r ${skillCategories[activeCategory].color} p-6`}>
              <div className="flex items-center gap-3">
                {skillCategories[activeCategory].icon}
                <h3 className="text-2xl font-bold text-white">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">{skill.experience}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Competitive Coding Section */}
        <section className="mt-20">
  <h2 className="text-3xl font-bold text-white text-center mb-8">🏆 Competitive Coding & Achievements</h2>

  <div className="grid md:grid-cols-2 gap-6">

    {/* HackerRank Card with Badge Images */}
    <div className="bg-gradient-to-br from-gray-800/50 to-green-600/10 rounded-xl p-6 border border-green-400/20 shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <img src="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" alt="HackerRank" className="w-8 h-8" />
        <h3 className="text-xl font-semibold text-green-300">HackerRank Achievements</h3>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {/* Problem Solving */}
        <div className="text-center">
          <img src={PB_Badge} alt="Problem Solving Badge" className="h-24 mx-auto object-contain" />
          <p className="text-sm text-gray-300 mt-2">Problem Solving - Silver Badge</p>
        </div>

        {/* C Badge */}
        <div className="text-center">
          <img src={C_Badge} alt="C Badge" className="h-24 mx-auto object-contain" />
          <p className="text-sm text-gray-300 mt-2">C – Silver Badge</p>
        </div>

        {/* C++ Badge */}
        <div className="text-center">
          <img src= {Cpp_Badge} alt="C++ Badge" className="h-24 mx-auto object-contain" />
          <p className="text-sm text-gray-300 mt-2">C++ – Silver Badge</p>
        </div>

        {/* Java Badge */}
        <div className="text-center">
          <img src= {Java_Badge} alt="Java Badge" className="h-24 mx-auto object-contain" />
          <p className="text-sm text-gray-300 mt-2">Java – Gold Badge</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <a
          href="https://www.hackerrank.com/profile/omdarshanpatil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 underline hover:text-green-200 text-sm"
        >
          🔗 View HackerRank Profile
        </a>
      </div>
    </div>

    {/* LeetCode Card */}
    <div className="bg-gradient-to-br from-gray-800/50 to-yellow-500/10 rounded-xl p-6 border border-yellow-400/20 shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <img src="https://cdn.iconscout.com/icon/free/png-256/leetcode-3521542-2944960.png" alt="LeetCode" className="w-8 h-8" />
        <h3 className="text-xl font-semibold text-yellow-300">LeetCode Journey</h3>
      </div>
      
      <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside pl-1">
        <li>💡 Solved <strong>50+ DSA questions</strong></li>
        <li>💻 Focused on Arrays, Strings, Recursion, Bit Manipulation</li>
        <li>
          🔗 <a href="https://leetcode.com/u/omdarshanshindepatil_kitcoek/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-200">View LeetCode Profile</a>
        </li>
      </ul>

      <div className="text-center mt-8">
        <span className="inline-block bg-white/10 text-sm text-cyan-300 px-4 py-1 rounded-full border border-cyan-500/30">
          📌 #DirectPlacementSeries — Tracking DSA + Dev Progress
        </span>
      </div>
    </div>
    
  </div>

  {/* Hashtag
  <div className="text-center mt-8">
    <span className="inline-block bg-white/10 text-sm text-cyan-300 px-4 py-1 rounded-full border border-cyan-500/30">
      📌 #DirectPlacementSeries — Tracking DSA + Dev Progress
    </span>
  </div> */}
</section>

      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Skills;
