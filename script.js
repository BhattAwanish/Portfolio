//* =============================
  

const projects = [
  {
    title: 'Customer Churn Prediction',
    desc: 'A predictive ML model using XGBoost + SHAP for interpretability with FastAPI deployment.',
    tags: ['Machine Learning', 'XGBoost', 'SHAP', 'FastAPI'],
    category: 'Machine Learning',
    icon: '📉',
    link: 'https://github.com/BhattAwanish/churn-prediction-app.git'
  },
  {
    title: 'Plant Disease Detection (CNN)',
    desc: 'Deep learning CNN model with Streamlit web app deployment.',
    tags: ['Deep Learning', 'CNN', 'Streamlit'],
    category: 'Machine Learning',
    icon: '🌿',
    link: '#'
  },
  {
    title: 'Gaming Website',
    desc: 'A modern gaming-themed website built using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    icon: '🎮',
    link: 'https://github.com/BhattAwanish/Gaming-website.git'
  },
  {
    title: 'Portfolio Website',
    desc: 'Complete personal animated portfolio with modern UI.',
    tags: ['HTML', 'Tailwind', 'Animations'],
    category: 'Web Development',
    icon: '💼',
    link: 'https://github.com/BhattAwanish/tourism.git'
  },
  {
    title: 'Spam Detection System',
    desc: 'Email/SMS spam classifier using NLP and ML models.',
    tags: ['NLP', 'Machine Learning', 'Text Processing'],
    category: 'Machine Learning',
    icon: '📨',
    link: 'https://github.com/BhattAwanish/spaim-detection.git'
  },
  {
    title: 'Disease Detection System',
    desc: 'AI-powered disease prediction using medical datasets.',
    tags: ['AI', 'Healthcare', 'Python'],
    category: 'Machine Learning',
    icon: '🧬',
    link: 'https://github.com/BhattAwanish/Diabeties-detaction-.git'
  },
  {
    title: 'Restaurant Waste Prediction',
    desc: 'Predicting food waste using ML forecasting models.',
    tags: ['Forecasting', 'ML', 'Data Analysis'],
    category: 'Machine Learning',
    icon: '🍽️',
    link: '#'
  }
];

// SKILLS LIST
const skills = ['Python', 'Machine Learning', 'Power BI', 'SQL','Web Development'];

/* =============================
   HEADER + HERO + ABOUT + FOOTER INSERTION
============================= */

document.getElementById("header").innerHTML = `
  <div class="max-w-6xl mx-auto p-6 flex items-center justify-between fade-in">
    <div class="flex items-center gap-4">
      <div class="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-semibold">AB</div>
      <div>
        <h1 class="text-xl font-bold">Awanish Bhatt</h1>
        <p class="text-sm text-gray-700">Data Scientist • ML Engineer • Web Developer</p>
      </div>
    </div>

    <nav class="hidden md:flex gap-6 text-sm font-medium">
      <a href="#projects" class="hover:text-indigo-600">Projects</a>
      <a href="#skills" class="hover:text-indigo-600">Skills</a>
      <a href="#about" class="hover:text-indigo-600">About</a>
      <a href="#contact" class="hover:text-indigo-600">Contact</a>
      <a href="resume.pdf" class="ml-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Resume</a>
    </nav>

    <div class="flex gap-4 text-2xl md:ml-4">
      <a href="https://github.com/BhattAwanish" target="_blank" class="text-gray-700 hover:text-indigo-600">🐙</a>
      <a href="https://www.linkedin.com/in/awanish-bhatt" target="_blank" class="text-gray-700 hover:text-indigo-600">🔗</a>
    </div>
  </div>
`;

document.getElementById("hero").innerHTML = `
  <section class="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center fade-in">
    <div>
      <h2 class="text-5xl font-extrabold leading-tight text-gray-900">Building Smart Data Solutions & Modern Web Experiences.</h2>
      <p class="mt-4 text-gray-700 text-lg">A Data Scientist and Machine Learning Engineer with a strong interest in data-driven technologies and automation</p>

      <div class="mt-6 flex gap-4">
        <a href="#projects" class="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition">View Projects</a>
        <a href="mailto:awanishbhatt807@gmail.com" class="bg-white border border-gray-300 px-5 py-3 rounded-lg shadow hover:shadow-md transition">Contact</a>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="w-72 h-72 rounded-full shadow-xl bg-gradient-to-br from-indigo-200 to-cyan-200 p-2 float-animation">
        <img src="photo.jpg" class="hero-photo" />

      </div>
    </div>
  </section>
`;

document.getElementById("about").innerHTML = `
  <section class="py-20 px-6 md:px-20 fade-in">

    
    <h2 class="text-4xl font-bold text-center mb-12">
     👉 About Me
    </h2>


    <div class="max-w-5xl mx-auto bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-100">

      <!-- INTRO -->
      <p class="text-gray-700 text-lg leading-relaxed mb-10">
        Hello! I'm <span class="font-bold text-indigo-600 text-xl">Awanish Bhatt</span>, a passionate
        <span class="text-purple-600 font-semibold">Data Scientist</span> and
        <span class="text-purple-600 font-semibold">Machine Learning Engineer</span> who loves creating
        intelligent, user-friendly, and impactful digital solutions.
        My work blends AI, data analytics, and modern UI development to build smart products end-to-end.
      </p>

      <!-- WHAT I DO -->
      <h3 class="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
        🚀 What I Do
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div class="p-6 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm hover:shadow-md transition">
          <h4 class="text-xl font-semibold text-indigo-700 mb-2">Machine Learning Development</h4>
          <p class="text-gray-700">Building classification, regression, NLP, and deep learning models.</p>
        </div>

        <div class="p-6 rounded-xl bg-blue-50 border border-blue-100 shadow-sm hover:shadow-md transition">
          <h4 class="text-xl font-semibold text-blue-700 mb-2">Web Development</h4>
          <p class="text-gray-700">Creating modern, responsive, and interactive UIs with clean design.</p>
        </div>

        <div class="p-6 rounded-xl bg-purple-50 border border-purple-100 shadow-sm hover:shadow-md transition">
          <h4 class="text-xl font-semibold text-purple-700 mb-2">Data Analytics</h4>
          <p class="text-gray-700">Using Power BI, SQL, and Python to extract meaningful business insights.</p>
        </div>

        <div class="p-6 rounded-xl bg-emerald-50 border border-emerald-100 shadow-sm hover:shadow-md transition">
          <h4 class="text-xl font-semibold text-emerald-700 mb-2">AI Automation</h4>
          <p class="text-gray-700">Building automated pipelines and smart decision-making systems.</p>
        </div>
      </div>

      <!-- TECH STRENGTHS -->
      <h3 class="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
        🧠 Technical Strengths
      </h3>

      <ul class="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-10">
        <li>Machine Learning, Deep Learning & Data Visualization</li>
        <li>Python, SQL, Streamlit, Power BI</li>
        <li>Frontend: HTML, CSS, JavaScript, Tailwind CSS</li>
        <li>End-to-end project development & deployment</li>
      </ul>

      <!-- PROFESSIONAL APPROACH -->
      <h3 class="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
        🎯 Professional Approach
      </h3>

      <ul class="list-disc pl-8 space-y-3 text-gray-700 text-lg">
        <li>Clean, scalable coding practices</li>
        <li>Strong communication & teamwork</li>
        <li>Always exploring new tools & technologies</li>
        <li>Quality-focused with passion for learning</li>
      </ul>

    </div>

  </section>
`;



/* =============================
   PROJECT RENDER FUNCTION
============================= */

/* =============================
   STYLISH PROJECT RENDER FUNCTION
============================= */

function renderProjects(list) {
  const container = document.getElementById("projects");
  container.innerHTML = `
      <h2 class="text-4xl font-bold mb-10 text-center fade-in">
      🚀  Projects
    </h2>

    <div class="flex flex-wrap justify-center gap-4 mb-10">
    <button class="filter-btn" onclick="filterProjects('Data Science')">Data Science</button>
    <button class="filter-btn" onclick="filterProjects('SQL')">SQL</button>
    <button class="filter-btn" onclick="filterProjects('AI')">Power BI</button>
      <button class="filter-btn" onclick="filterProjects('AI')">AI</button>
      <button class="filter-btn" onclick="filterProjects('Machine Learning')">Machine Learning</button>
      <button class="filter-btn" onclick="filterProjects('Web Development')">Web Dev</button>
    </div>

    <div id="project-list" class="grid grid-cols-1 md:grid-cols-3 gap-10"></div>
  `;

  const projectList = document.getElementById("project-list");

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card glass-card";

    card.innerHTML = `
      <div class="project-icon">${p.icon}</div>

      <h4 class="font-bold text-xl mt-3">${p.title}</h4>
      <p class="mt-2 text-gray-700 text-sm leading-relaxed">${p.desc}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        ${p.tags.map(t => `<span class='tag-chip'>${t}</span>`).join('')}
      </div>

      <a href="${p.link}" target="_blank" class="github-btn mt-5">
        🔗 View on GitHub
      </a>
    `;
    projectList.appendChild(card);
  });
}

function filterProjects(category) {
  if (category === "All") renderProjects(projects);
  else renderProjects(projects.filter(p => p.category === category));
}

renderProjects(projects);



function filterProjects(category) {
  if (category === 'All') renderProjects(projects);
  else renderProjects(projects.filter(p => p.category === category));
}

renderProjects(projects);

/* =============================
   SKILLS RENDER
============================= */

/* =============================
   SKILLS SECTION (CATEGORY STYLE)
============================= */

document.getElementById("skills").innerHTML = `
  <section class="py-16 px-6 md:px-20 fade-in">

    <h2 class="text-4xl font-bold text-center mb-12">
      🧠 Skills & Tools
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

      <!-- Programming -->
      <div class="skill-category-card">
        <h3 class="skill-category-title">💻 Programming</h3>
        <ul class="skill-list">
          <li>Python</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <!-- AI / ML -->
      <div class="skill-category-card">
        <h3 class="skill-category-title">🤖 Machine Learning / AI</h3>
        <ul class="skill-list">
          <li>Machine Learning</li>
          <li>Deep Learning (CNN)</li>
          <li>Data Analysis</li>
          <li>Model Deployment</li>
          <li>NLP / Text Processing</li>
        </ul>
      </div>

      <!-- Tools -->
      <div class="skill-category-card">
        <h3 class="skill-category-title">🧰 Tools & Frameworks</h3>
        <ul class="skill-list">
          <li>Power BI</li>
          <li>Streamlit</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>VS Code</li>
        </ul>
      </div>

    </div>

  </section>
`;



/* =============================
   CERTIFICATES RENDER
============================= */

/* =============================
   CERTIFICATES RENDER
============================= */

document.getElementById("certificates").innerHTML = `
  <h2 class="text-4xl font-bold text-center mb-16 flex justify-center items-center gap-3 fade-in-up">
      <span>🎓</span> Certificates
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">

      <!-- Certificate 1 -->
      <div class="certificate-card fade-in-up">
          <img src="certificate1.jpg" alt="Deloitte Certificate" class="cert-img" />
          <h3 class="font-semibold text-lg mt-4">Deloitte – Data Analytics Job Simulation</h3>
          <p class="text-gray-600 text-sm">Certificate of Completion • July 7th, 2025</p>
      </div>

      <!-- Certificate 2 -->
      <div class="certificate-card fade-in-up">
          <img src="certificate2.jpg" alt="TATA GenAI Certificate" class="cert-img" />
          <h3 class="font-semibold text-lg mt-4">TATA – GenAI Data Analytics Job Simulation</h3>
          <p class="text-gray-600 text-sm">Certificate of Completion • July 7th, 2025</p>
      </div>

      <!-- Certificate 3 (NEW) -->
      <div class="certificate-card fade-in-up">
          <img src="certificate3.jpg" alt="Ducat Data Science Certificate" class="cert-img" />
          <h3 class="font-semibold text-lg mt-4">Ducat – Data Science, AI & DSA Training</h3>
          <p class="text-gray-600 text-sm">Completed 90-Hour Professional Training • July–Aug 2025</p>
      </div>

  </div>
  </section>
`;


document.getElementById("contact").innerHTML = `
  <section class="py-20 px-6 md:px-20 fade-in">

    <h2 class="text-4xl font-bold text-center mb-12">
      📬 Contact Me
    </h2>

    <div class="max-w-4xl mx-auto glass-contact-card rounded-2xl shadow-xl p-10">

      <p class="text-gray-700 text-lg text-center mb-10">
        Feel free to reach out for <span class="text-indigo-600 font-semibold">collaborations</span>,  
        <span class="text-indigo-600 font-semibold">opportunities</span> or any questions.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- LEFT SIDE CONTACT DETAILS -->
        <div class="space-y-6">

          <div class="contact-item">
            <span class="contact-icon">📧</span>
            <div>
              <p class="text-sm text-gray-500">Email</p>
              <a href="mailto:awanishbhatt807@gmail.com" class="contact-link">
                awanishbhatt807@gmail.com
              </a>
            </div>
          </div>

          <div class="contact-item">
            <span class="contact-icon">📱</span>
            <div>
              <p class="text-sm text-gray-500">Phone</p>
              <a href="tel:+919554723897" class="contact-link">
                +91 95547 23897
              </a>
            </div>
          </div>

          <div class="contact-item">
            <span class="contact-icon">🐙</span>
            <div>
              <p class="text-sm text-gray-500">GitHub</p>
              <a href="https://github.com/BhattAwanish" target="_blank" class="contact-link">
                github.com/BhattAwanish
              </a>
            </div>
          </div>

          <div class="contact-item">
            <span class="contact-icon">🔗</span>
            <div>
              <p class="text-sm text-gray-500">LinkedIn</p>
              <a href="https://www.linkedin.com/in/awanish-bhatt-153585276" target="_blank" class="contact-link">
                linkedin.com/in/awanish-bhatt
              </a>
            </div>
          </div>

        </div>

        <!-- RIGHT SIDE CONTACT FORM -->
        <form class="space-y-5" onsubmit="sendMail(event)">
          <div>
            <label class="contact-label">Your Name</label>
            <input type="text" name="name" required class="contact-input" />
          </div>

          <div>
            <label class="contact-label">Your Email</label>
            <input type="email" name="email" required class="contact-input" />
          </div>

          <div>
            <label class="contact-label">Message</label>
            <textarea name="message" rows="1" required class="contact-input"></textarea>
          </div>

          <button class="contact-btn" type="submit">
            ✉ Send Message
          </button>
        </form>

      </div>

    </div>

  </section>
`;




/* =============================
   CONTACT FORM HANDLER
============================= */




/* =============================
   HERO PHOTO FIX
============================= */



function sendMail(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Use '\n\n' (escaped newline) inside a normal string — valid and safe.
  window.location.href = `mailto:awanishbhatt807@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`;
}







