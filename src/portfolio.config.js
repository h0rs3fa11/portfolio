export default {
  hero: {
    name: "Your name",
    description: "short description",
    socials: [
      // Only supports github, linkedin, and email now
      { type: "github", url: "https://github.com/yourname" },
      { type: "linkedin", url: "https://linkedin.com/in/yourname" },
      { type: "email", url: "mailto:your@email.com" },
    ],
  },
  about: {
    avatar: "/images/me.JPG",
    title: "About me",
    paragraphs: [
      "lorem ipsum dolor sit amet",
      "2. lorem ipsum dolor sit amet",
      // ...
    ],
  },
  skills: [
    {
      category: "Programming Languages",
      tags: [
        { label: "C++", color: "bg-blue-800", textColor: "text-white" },
        {
          label: "TypeScript",
          color: "bg-blue-200",
          textColor: "text-gray-800",
        },
      ],
    },
    {
      category: "Frameworks",
      tags: [
        { label: "Express", color: "bg-blue-800", textColor: "text-white" },
        {
          label: "Flask",
          color: "bg-blue-200",
          textColor: "text-gray-800",
        },
      ],
    },
    {
      category: "Other",
      tags: [
        { label: "Docker", color: "bg-blue-800", textColor: "text-white" },
        {
          label: "Kubernetes",
          color: "bg-blue-200",
          textColor: "text-gray-800",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Project 1",
      description: "Install the plugin and convert your designs...",
      github: "https://github.com/yourname/project1",
      image: "/images/img.jpg",
      // ...
    },
    {
      title: "Project 2",
      description: "Install the plugin and convert your designs...",
      github: "https://github.com/yourname/project2",
      image: "/images/img.jpg",
      // ...
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      subtitle: "University Name",
      description:
        "Graduated in 202X. Relevant coursework, achievements, or a short description can go here.",
      date: "Sep 2020 – June 2024", // optional
      tags: [{ label: "Linux", color: "bg-gray-800", textColor: "text-white" }],
      image: "/images/img.jpg",
      url: "https://www.google.com",
    },
    // ...
  ],
  experience: [
    {
      title: "Software Engineer",
      subtitle: "Company Name",
      description: "lorem ipsum dolor sit amet",
      date: "Sep 2020 – June 2024",
      tags: [{ label: "Linux", color: "bg-gray-800", textColor: "text-white" }],
      image: "/images/img.jpg",
    },
    {
      title: "Software Engineer",
      subtitle: "Company Name",
      description: "lorem ipsum dolor sit amet",
      date: "Sep 2020 – June 2024",
      tags: [{ label: "Linux", color: "bg-gray-800", textColor: "text-white" }],
      url: "https://www.google.com",
      image: "/images/img.jpg",
    },
  ],
};
