function renderProjects() {
  const projects = [
    {
      title: "Podpal",
      description:
        "A personalized podcast manager with speech-to-text and modulation.",
      techStack: ["MERN", "Web Speech API", "Context API"],
      image: "podpal.jpg",
      github: "https://github.com/SreejaReddy414/podpal",
    },
    {
      title: "Heavnly",
      description: "An Airbnb clone with booking, filters, and user auth.",
      techStack: ["MERN", "Tailwind CSS", "JWT"],
      image: "heavnly.jpg",
      github: "https://github.com/SreejaReddy414/heavnly",
    },
    {
      title: "Online Mentoring System",
      description: "Java-based mentoring manager with admin and user panels.",
      techStack: ["Java", "JSP", "MySQL"],
      image: "mentoring.jpg",
      github:
        "https://github.com/SreejaReddy414/OnlineMentoringManagementSystem",
    },
    {
      title: "Blue Chat",
      description: "Real-time responsive chat app with MongoDB backend.",
      techStack: ["Node.js", "MongoDB", "EJS"],
      image: "bluechat.jpg",
      github: "https://github.com/SreejaReddy414/BlueChat",
    },
    {
      title: "EchoSync",
      description: "Memory game using Web Audio API and Local Storage.",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      image: "echosync.jpg",
      github: "https://github.com/SreejaReddy414/EchoSync",
    },
    {
      title: "UserHub",
      description: "A CRUD-based user management dashboard.",
      techStack: ["Node.js", "MySQL", "EJS"],
      image: "userhub.jpeg",
      github: "https://github.com/SreejaReddy414/UserHub",
    },
    {
      title: "Rock Paper Scissors",
      description: "Classic browser game with clean animations.",
      techStack: ["JavaScript", "HTML", "CSS"],
      image: "rps.jpg",
      github: "https://github.com/SreejaReddy414/RockPaperScissors",
    },
    {
      title: "Beatify",
      description: "Spotify-inspired music player clone.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "beatify.jpg",
      github: "https://github.com/SreejaReddy414/Beatify",
    },
  ];

  const carousel = document.getElementById("carousel");
  const dotsContainer = document.getElementById("carouselDots");

  if (!carousel || !dotsContainer) return;

  // Clear previous contents
  carousel.innerHTML = "";
  dotsContainer.innerHTML = "";

  projects.forEach((project, index) => {
    // Create Project Card
    const card = document.createElement("div");
    card.className =
      "min-w-full max-w-3xl mx-auto snap-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition duration-300";

    card.innerHTML = `
      <div class="overflow-hidden">
        <img src="public/images/${project.image}" alt="${
      project.title
    }" class="w-full h-56 object-cover transform hover:scale-105 transition duration-300">
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">${
          project.title
        }</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">${
          project.description
        }</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.techStack
            .map(
              (tech) => `
            <span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              ${tech}
            </span>
          `
            )
            .join("")}
        </div>
        <div class="flex justify-start">
          <a href="${
            project.github
          }" target="_blank" class="inline-flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
            <i class="fab fa-github"></i> View Project
          </a>
        </div>
      </div>
    `;

    carousel.appendChild(card);

    // Create Dot
    const dot = document.createElement("span");
    dot.className =
      "dot w-3 h-3 rounded-full bg-gray-400 inline-block transition-all duration-300";
    dot.setAttribute("data-index", index);
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  // Scroll functionality
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  function scrollToCard(index) {
    carousel.scrollTo({
      left: index * carousel.clientWidth,
      behavior: "smooth",
    });
    updateActiveDot(index);
  }

  function updateActiveDot(index) {
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-gray-800", i === index);
      dot.classList.toggle("bg-gray-400", i !== index);
    });
  }

  let currentIndex = 0;

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + projects.length) % projects.length;
      scrollToCard(currentIndex);
    });

    rightBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % projects.length;
      scrollToCard(currentIndex);
    });
  }

  // Update active dot on scroll
  carousel.addEventListener("scroll", () => {
    const newIndex = Math.round(carousel.scrollLeft / carousel.clientWidth);
    currentIndex = newIndex;
    updateActiveDot(currentIndex);
  });

  // Initialize first active dot
  updateActiveDot(0);
}
