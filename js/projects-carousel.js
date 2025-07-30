function renderProjects() {
  const projects = [
    {
      title: "Eatery - Food delivery app",
      description:
        "A full-stack food ordering platform where users can view menus, place orders with Stripe payments, and leave reviews. Includes search filters, admin dashboard, and secure authentication.",
      techStack: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Stripe",
        "React Router",
      ],
      image: "eatery.png",
      github: "https://github.com/Renu-telugu/Eatery",
    },
    {
      title: "Podpal - Your Personalised podcast manager",
      description:
        "A full-featured podcast web app where users can create channels, upload and listen to podcasts, follow creators, and get real-time notifications, with admin moderation, analytics, and offline support.",
      techStack: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Node.js",
        "JWT",
        "Multer",
        "Listen Notes API",
      ],
      image: "podpal.jpg",
      github: "https://github.com/Renu-telugu/PodPal-Project",
    },
    {
      title: "Heavnly",
      description:
        "A full-stack web application for browsing and managing property listings, featuring secure authentication, dynamic image uploads, user reviews, and a sleek, responsive interface.",
      techStack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Passport.js",
        "EJS",
        "Bootstrap",
        "Cloudinary",
        "Multer",
        "connect-mongo",
        "Joi",
        "connect-flash",
      ],
      image: "heavnly.jpg",
      github: "https://github.com/Renu-telugu/Heavnly",
    },
    {
      title: "Online Mentoring Management System",
      description:
        "A web-based platform that streamlines mentor-mentee coordination through admin control, mentor reporting, and student query management.",
      techStack: [
        "Java",
        "JDBC",
        "Servlets (Tomcat)",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image: "mentoring.jpg",
      github:
        "https://github.com/Renu-telugu/Online-Mentoring-Management-System",
    },
    {
      title: "Blue Chat",
      description:
        "A lightweight and responsive chat app that allows users to send, edit, and delete messages in real-time with a clean UI.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "CSS"],
      image: "bluechat.jpg",
      github: "https://github.com/Renu-telugu/BlueChat",
    },
    {
      title: "EchoSync",
      description:
        "A visually engaging memory game with smooth transitions, sound effects, score tracking, and offline support using local storage.",
      techStack: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Local Storage API",
        "Web Audio API",
      ],
      image: "echosync.jpg",
      github: "https://github.com/Renu-telugu/EchoSync",
    },
    {
      title: "AskHub - A Quora-Style Q&A App",
      description:
        "A Quora-like web application where users can view, create, edit, and delete question-style posts using RESTful APIs.",
      techStack: [
        "Node.js",
        "Express.js",
        "EJS",
        "HTML",
        "CSS",
        "JavaScript",
        "RESTful API",
      ],
      image: "quora.webp",
      github: "https://github.com/Renu-telugu/quora-posts-app",
    },
    {
      title: "UserHub",
      description:
        "A responsive user management app with secure authentication, CRUD operations, and search functionality.",
      techStack: ["Node.js", "MySQL", "Express", "EJS", "CSS"],
      image: "userhub.jpeg",
      github: "https://github.com/Renu-telugu/user-management-app",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "A classic Rock-Paper-Scissors game with beautiful animations and responsive design, where players compete against the computer with persistent score tracking.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "rps.jpg",
      github: "https://github.com/Renu-telugu/Rock-Paper-Scissors",
    },
    {
      title: "Beatify",
      description:
        "A responsive Spotify-inspired music player UI built with smooth animations and clean design to mimic the Spotify web experience.",
      techStack: ["HTML", "CSS", "JavaScript", "FontAwesome"],
      image: "beatify.jpg",
      github: "https://github.com/Renu-telugu/Beatify",
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
      "min-w-full max-w-3xl mx-auto snap-center rounded-2xl shadow-2xl overflow-hidden transition duration-300 h-[470px] border border-[rgba(2,132,199,0.2)] bg-[rgba(17,24,39,0.6)]";

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
            <i class="fab fa-github"></i> View
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
