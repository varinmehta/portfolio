import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: "Varin",
    lastName: "Mehta",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Third year Computer Engineering student",
    avatar: "/images/avatar.jpg",
    location: "Asia/Calcutta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "Gujarati", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on
            the intersection of creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/varinmehta",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/varinmehta/",
    },
    {
        name: "X",
        icon: "x",
        link: "https://www.x.com/vrnmht",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:varin.mehta22@spit.ac.in",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web developer and Competitive programmer</>,
    subline: (
        <>
            I'm Varin, a third-year Computer Engineering student at{" "}
            <InlineCode>Sardar Patel Institute of Technology</InlineCode>.
            Outside of academics, I focus on problem-solving and working on my
            projects.
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: false,
    },
    calendar: {
        display: true,
        link: "https://cal.com/varinmehta",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Varin is a Mumbai based engineering student with deep interests
                in the fields of technology, finance and current-affairs. In the
                technology domain, he expertises in full stack web development
                and problem solving. In the finance domain, he is interested in
                stock analysis and long term investing.
            </>
        ),
    },
    work: {
        display: false, // set to false to hide this section
        title: "Work Experience",
        experiences: [
            {
                company: "FLY",
                timeframe: "2022 - Present",
                role: "Senior Design Engineer",
                achievements: [
                    <>
                        Redesigned the UI/UX for the FLY platform, resulting in
                        a 20% increase in user engagement and 30% faster load
                        times.
                    </>,
                    <>
                        Spearheaded the integration of AI tools into design
                        workflows, enabling designers to iterate 50% faster.
                    </>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/projects/project-01/cover-01.jpg",
                        alt: "Once UI Project",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Creativ3",
                timeframe: "2018 - 2022",
                role: "Lead Designer",
                achievements: [
                    <>
                        Developed a design system that unified the brand across
                        multiple platforms, improving design consistency by 40%.
                    </>,
                    <>
                        Led a cross-functional team to launch a new product
                        line, contributing to a 15% increase in overall company
                        revenue.
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Education",
        institutions: [
            {
                name: "Sardar Patel Institute of Technology - University of Mumbai",
                cgpa: "8.61",
                description: <>Computer Engineering.</>,
                extra: (
                    <>
                        Part of the Forum for Aspirig Computer Engineers (FACE)
                        subcomittee
                    </>
                ),
            },
            {
                name: "Swami Vivekanand International School - ICSE",
                percent: "97.67%",
                achievements: <>Class Prefect.Ranked 3rd in School</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        
    },
};

const blog = {
    label: "Blog",
    title: "Writing about finance and spirituality...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
