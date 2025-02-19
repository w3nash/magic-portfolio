import { InlineCode } from "@/once-ui/components";
import { Arrow } from "@/once-ui/components/Arrow";
import { Button } from "@/once-ui/components/Button";
import { Flex } from "@/once-ui/components/Flex";
import Image from "next/image";

const person = {
  firstName: "Jonash",
  lastName: "Marcelino",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring Software/Cloud Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Manila",
  languages: ["English", "Filipino"],
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/w3nash",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/w3nash",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@w3nash.dev",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Jonash (w3nash) Marcelino</>,
  subline: (
    <>
      I'm {person.firstName} (w3nash), a student software engineer at {""}
      <InlineCode>Gordon College</InlineCode>, dedicated to supporting local
      communities and nearby businesses by leveraging technology to create
      solutions and drive positive impact. After hours, I build my own projects.
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
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/w3nash",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Jonash, also known as w3nash, is a student software engineer at Gordon
        College. He is passionate about technology and innovation, with a focus
        on programming, cloud computing, advanced tech developments, and green
        computing. He is currently pursuing a Bachelor's degree in Computer
        Science, expected to graduate in 2026. Jonash is dedicated to supporting
        local communities and nearby businesses by leveraging technology to
        create solutions and drive positive impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "AWS Learning Club - Gordon College CCS",
        timeframe: "2024 - Present",
        role: "Vice Chief Finance Officer",
        achievements: [
          <>
            Assisting the Chief Finance Officer in managing the club's finances.
          </>,
          <>
            Inspiring students to learn more about cloud computing and AWS
            services.
          </>,
          <>
            Organizing events and workshops to help students gain hands-on
            experience.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/experience/experience-01.jpg",
          //   alt: "Experience image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Gordon College",
        timeframe: "2022 - Present",
        role: "Student Software Engineer",
        achievements: [
          <>
            Developing software solutions for local communities and nearby
            businesses.
          </>,
          <>
            Building web applications, mobile apps, and cloud-based solutions.
          </>,
          <>
            Collaborating with cross-functional teams to deliver high-quality
            projects.
          </>,
        ],
        images: [],
      },
      {
        company: "Dunbrae Subic Inc.",
        timeframe: "June 2023 - July 2023",
        role: "IT Support Intern",
        achievements: [
          <>
            Assisted the IT team in managing the company's network and systems.
          </>,
          <>
            Provided technical support to employees and resolved IT-related
            issues.
          </>,
          <>
            Assisted in the implementation of new software and hardware
            solutions.
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
        name: "Gordon College (BSc Computer Science)",
        timeframe: "2022 - Present",
        place: "Olongapo City, Philippines",
        description: (
          <>
            Currently pursuing a Bachelor's degree in Computer Science, expected
            to graduate in 2026. Passionate about technology and innovation,
            with a focus on programming, advanced tech developments, and green
            computing.
          </>
        ),
      },
      {
        name: "HardvardX (edX.org)",
        timeframe: "2022 - 2023",
        place: "Online",
        description: (
          <>
            Completed the CS50x course, an introduction to the intellectual
            enterprises of computer science and the art of programming.
            <Button
              id='edX-certificate'
              variant='primary'
              size='s'
              className='mt-8'
              href='https://courses.edx.org/certificates/401bfd17837e473ebbd506287044430e'
            >
              <Flex>
                View certificate
                <Arrow trigger='#edX-certificate' color='onSolid' />
              </Flex>
            </Button>
          </>
        ),
      },
      {
        name: "Other online platforms",
        timeframe: "2022 - Present",
        place: "Online",
        description: (
          <>
            Continuously learning new technologies and skills through online.
            <Button
              id='linkedin-profile'
              variant='primary'
              size='s'
              className='mt-8'
              href='https://www.linkedin.com/in/w3nash'
            >
              <Flex>
                View in LinkedIn
                <Arrow trigger='#linkedin-profile' color='onSolid' />
              </Flex>
            </Button>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Github",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/github.svg'
              alt='Github logo'
              width={64}
              height={64}
            />
            Proficient in using Github for version control, collaboration, and
            open-source projects.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Docker",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/docker.svg'
              alt='Docker logo'
              width={64}
              height={64}
            />
            Building, shipping, and running applications in containers with
            Docker.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/figma.svg'
              alt='Figma logo'
              width={64}
              height={64}
            />
            Designing and prototyping user interfaces with Figma and proficient
            in converting designs to code.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "MySQL",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/mysql.svg'
              alt='MySQL logo'
              width={64}
              height={64}
            />
            Designing and managing databases with MySQL and other relational
            database management systems.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Postman",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/postman.svg'
              alt='Postman logo'
              width={64}
              height={64}
            />
            Testing APIs and building workflows with Postman.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Node JS",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/nodejs.svg'
              alt='Node JS logo'
              width={64}
              height={64}
            />
            Building scalable and efficient server-side applications with Node
            JS.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/nextjs.svg'
              alt='Next.js logo'
              width={64}
              height={64}
            />
            Building next gen applications with Next.js.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Django",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/django.svg'
              alt='Django logo'
              width={64}
              height={64}
            />
            Building web applications with Django, a high-level Python web
            framework.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Firebase",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/firebase.svg'
              alt='Firebase logo'
              width={64}
              height={64}
            />
            Building web and mobile applications with Firebase, a platform
            developed by Google for creating mobile and web applications.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Electron",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/electron.svg'
              alt='Electron logo'
              width={64}
              height={64}
            />
            Building cross-platform desktop applications with Electron.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React JS",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/reactjs.svg'
              alt='React JS logo'
              width={64}
              height={64}
            />
            Building user interfaces with React JS, a JavaScript library for
            building user interfaces.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Angular",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/angular.svg'
              alt='Angular logo'
              width={64}
              height={64}
            />
            Building web applications with Angular, a platform developed by
            Google for creating frond-end applications.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tailwind CSS",
        description: (
          <Flex gap='12' vertical='center'>
            <Image
              src='images/tech/tailwind.svg'
              alt='Tailwind CSS logo'
              width={64}
              height={64}
            />
            Building responsive and modern user interfaces with Tailwind CSS, a
            utility-first CSS framework.
          </Flex>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      // {
      //   title: "Next.js",
      //   description: (
      //     <>Building next gen apps with Next.js + Once UI + Supabase.</>
      //   ),
      //   // optional: leave the array empty if you don't want to display images
      //   images: [
      //     {
      //       src: "/images/projects/project-01/cover-04.jpg",
      //       alt: "Project image",
      //       width: 16,
      //       height: 9,
      //     },
      //   ],
      // },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
