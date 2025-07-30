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

  if (!carousel) {
    console.error("Carousel container not found.");
    return;
  }

  // Clear carousel content
  carousel.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className =
      "min-w-full max-w-3xl mx-auto snap-center bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300";

    card.innerHTML = `
      <img src="public/images/${project.image}" alt="${
      project.title
    }" class="w-full h-48 object-cover">
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
              (tech) =>
                `<span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">${tech}</span>`
            )
            .join("")}
        </div>
        <div class="flex justify-end">
          <a href="${
            project.github
          }" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
        </div>
      </div>
    `;

    carousel.appendChild(card);
  });

  // Add scroll buttons functionality
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
    });
  } else {
    console.error("Scroll buttons not found.");
  }
}
