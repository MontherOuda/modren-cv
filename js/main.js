const { createApp } = Vue;

createApp({
    data() {
        return {
            isDark: false,
            showBackToTop: false,
            currentYear: new Date().getFullYear(),
            profile: {
                name: "Monther Ouda | منذر عودة",
                role: "Front-End Developer",
                location: "Palestine",
                email: "monmohoda44@gmail.com",
                phone: "00970568826030",
                summary: "Front-end developer focused on clean UI, responsive layouts, and high-performance web experiences.",
                about: "I build maintainable user interfaces and transform ideas into practical products that work smoothly on mobile and desktop.",
                socials: [
                    { name: "GitHub", icon: "fa-brands fa-github", url: "#" },
                    { name: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "#" },
                    { name: "Twitter", icon: "fa-brands fa-x-twitter", url: "#" }
                ]
            },
            skills: [
                { name: "HTML5", level: 95 },
                { name: "CSS3", level: 90 },
                { name: "Bootstrap 5", level: 88 },
                { name: "JavaScript", level: 86 },
                { name: "Vue.js", level: 80 },
                { name: "Git & GitHub", level: 78 }
            ],
            experiences: [
                {
                    title: "Front-End Developer",
                    company: "Freelance",
                    period: "2024 - Present",
                    description: "Built landing pages and dashboard UIs, improved performance, and organized code for scalability."
                },
                {
                    title: "Web Trainee",
                    company: "Training Program",
                    period: "2023 - 2024",
                    description: "Delivered training projects with HTML/CSS/JS and collaborated on responsive interfaces using Bootstrap."
                }
            ],
            projects: [
                {
                    name: "Personal Portfolio",
                    description: "Personal website to showcase skills and projects with responsive design.",
                    stack: ["HTML5", "CSS3", "Bootstrap"],
                    url: "#"
                },
                {
                    name: "Task Manager UI",
                    description: "Task management interface with clear UX and reusable components.",
                    stack: ["JavaScript", "Vue", "Bootstrap"],
                    url: "#"
                },
                {
                    name: "Landing Page",
                    description: "Fast marketing landing page with lightweight interactive sections.",
                    stack: ["HTML5", "CSS3", "Font Awesome"],
                    url: "#"
                }
            ]
        };
    },
    methods: {
        toggleTheme() {
            this.isDark = !this.isDark;
            document.body.classList.toggle("dark-mode", this.isDark);
        },
        handleScroll() {
            this.showBackToTop = window.scrollY > 280;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}).mount("#app");
