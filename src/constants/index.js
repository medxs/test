import web from "../assets/web.png"
import mobile from "../assets/mobile.png"
import backend from "../assets/backend.png"
import creator from "../assets/creator.png"

import html from "../assets/tech/html.png"
import css from "../assets/tech/css.png"
import javascript from "../assets/tech/javascript.png"
import typescript from "../assets/tech/typescript.png"
import reactjs from "../assets/tech/reactjs.png"
import redux from "../assets/tech/redux.png"
import tailwind from "../assets/tech/tailwind.png"
import nodejs from "../assets/tech/nodejs.png"
import mongodb from "../assets/tech/mongodb.png"
import threejs from "../assets/tech/threejs.svg"
import git from "../assets/tech/git.png"
import figma from "../assets/tech/figma.png"
import docker from "../assets/tech/docker.png"

import tripguide from '../assets/tripguide.png'
import jobit from '../assets/jobit.png'
import carrent from '../assets/carrent.png'


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    fun:"fade-right",
  },
  {
    name: "CSS 3",
    icon: css,
    fun:"fade-right",
  },
  {
    name: "JavaScript",
    icon: javascript,
    fun:"fade-right",
  },
  {
    name: "TypeScript",
    icon: typescript,
    fun:"fade-right",
  },
  {
    name: "React JS",
    icon: reactjs,
    fun:"fade-left",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    fun:"fade-left",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    fun:"fade-left",
  },
  {
    name: "Node JS",
    icon: nodejs,
    fun:"fade-left",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    fun:"fade-right",
  },
  {
    name: "Three JS",
    icon: threejs,
    fun:"fade-right",
  },
  {
    name: "git",
    icon: git,
    fun:"fade-right",
  },
  {
    name: "figma",
    icon: figma,
    fun:"fade-right",
  },
  {
    name: "docker",
    icon: docker,
    fun:"zoom-in",
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, projects, testimonials };
