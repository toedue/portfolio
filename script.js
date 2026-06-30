/* ── Skills ── */
const skills = {
  row1: [
    { label: "C++", color: "#00599C" },
    { label: "Python", color: "#3776AB" },
    { label: "JavaScript", color: "#F7DF1E" },
    { label: "Java", color: "#ED8B00" },
    { label: "HTML", color: "#E34F26" },
    { label: "CSS", color: "#1572B6" },
    { label: "SQL", color: "#336791" },
    { label: "C", color: "#A8B9CC" },
  ],
  row2: [
    { label: "React", color: "#61DAFB" },
    { label: "Next.js", color: "#ffffff" },
    { label: "Tailwind CSS", color: "#06B6D4" },
    { label: "Node.js", color: "#339933" },
    { label: "Express.js", color: "#aaaaaa" },
    { label: "Flask", color: "#aaaaaa" },
    { label: "Git", color: "#F05032" },
    { label: "GitHub", color: "#ffffff" },
  ],
  row3: [
    { label: "Pandas", color: "#e377c2" },
    { label: "NumPy", color: "#4dabf7" },
    { label: "Scikit-learn", color: "#F7931E" },
    { label: "XGBoost", color: "#0083CA" },
    { label: "LightGBM", color: "#6BC46D" },
    { label: "Jupyter", color: "#F37626" },
    { label: "VS Code", color: "#007ACC" },
    { label: "Conda", color: "#44A833" },
  ],
};
function buildMarquee(id, items) {
  const track = document.getElementById(id);
  const doubled = [...items, ...items, ...items, ...items];
  doubled.forEach(({ label, color }) => {
    const c = document.createElement("div");
    c.className = "skill-chip";
    c.innerHTML = `<span class="skill-dot" style="background:${color}"></span>${label}`;
    track.appendChild(c);
  });
}
buildMarquee("row1", skills.row1);
buildMarquee("row2", skills.row2);
buildMarquee("row3", skills.row3);

/* ── Projects ── */
const projects = [
  {
    name: "SMART CAMPUS",
    desc: "An advanced AI study assistant designed to streamline student life through intelligent chat, document analysis, and academic organization. Features a specialized multi-model parallel generation engine for the highest quality responses.",
    tags: ["AI", "Multi-model", "Document Analysis", "Python"],
    github: "https://github.com/toedue/demo",
    demo: "",
    codeIcon: "github",
    codeText: "Code",
    demoIcon: "",
    demoText: "",
  },
  {
    name: "MERN LIBRARY MANAGEMENT",
    desc: "A full-stack library management system built with the MERN stack as the ASTUMSJ Bootcamp final project. Covers book records, borrowing management, and admin dashboards — built collaboratively by bootcamp graduates.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Full-Stack"],
    github:
      "https://github.com/orgs/ASTUMSJ-Bootcamp-Final-Project/repositories",
    demo: "",
    codeIcon: "github",
    codeText: "Code",
    demoIcon: "",
    demoText: "",
  },
  {
    name: "FINANCIAL INCLUSION — ZINDI",
    desc: "Ensemble ML pipeline (XGBoost, LightGBM, CatBoost) predicting bank account ownership across East Africa. Includes feature engineering, stacking, dual-threshold optimization, and leakage-aware submission strategy.",
    tags: ["Python", "XGBoost", "LightGBM", "Pandas", "Scikit-learn"],
    github:
      "https://github.com/toedue/python-for-ds-bootcamp/tree/main/ASTU%20Community%20Financial%20Inclusion%20Hackathon",
    demo: "",
    codeIcon: "github",
    codeText: "Code",
    demoIcon: "",
    demoText: "",
  },
  {
    name: "COMPETITIVE PROGRAMMING",
    desc: "Curated Codeforces & LeetCode solutions in Python covering BFS/DFS, topological sort, binary tree construction, sliding window, ceiling division, and simulation problems — with documented edge case analysis.",
    tags: ["Python", "Algorithms", "Data Structures", "Codeforces", "LeetCode"],
    github: "https://github.com/toedue/codeforces-solutions-python",
    demo: "https://github.com/toedue/leetcode-solutions-python",
    codeIcon: "codeforces",
    codeText: "Codeforces",
    demoIcon: "leetcode",
    demoText: "LeetCode",
  },
];

const icons = {
  github:
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  codeforces:
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-9c0-.828.672-1.5 1.5-1.5h3z"/></svg>',
  leetcode:
    '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>',
};

const grid = document.getElementById("projects-grid");
projects.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "project-card reveal";
  card.style.transitionDelay = `${i * 0.08}s`;
  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="proj-btn proj-demo">${icons[p.demoIcon]}${p.demoText}</a>`
    : "";
  card.innerHTML = `
    <h3 class="project-name">${p.name}</h3>
    <p class="project-desc">${p.desc}</p>
    <div class="project-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="project-links">
      <a href="${p.github}" target="_blank" rel="noopener" class="proj-btn proj-code">${icons[p.codeIcon]}${p.codeText}</a>
      ${demoBtn}
    </div>
  `;
  grid.appendChild(card);
});

/* ── Scroll reveal ── */
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.1, rootMargin: "-50px" },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* Navbar stays permanently fixed - no hide on scroll */

/* ── Heart ── */
const heart = document.getElementById("heart");
let filled = false;
heart.addEventListener("click", () => {
  filled = !filled;
  heart.textContent = filled ? "❤️" : "♥";
});

/* ── Form submit (mailto fallback) ── */
function handleSubmit(e) {
  e.preventDefault();
  const name = document.querySelector(
    '.form-input[placeholder="Your Name"]',
  ).value;
  const msg = document.querySelector(".form-textarea").value;
  if (!name && !msg) {
    alert("Please fill in at least your name and message.");
    return;
  }
  window.location.href = `mailto:toedue17@gmail.com?subject=Portfolio Contact&body=Name: ${encodeURIComponent(name)}%0A%0A${encodeURIComponent(msg)}`;
}
