import React from 'react';
import Image from 'next/image';
import Projects from '../components/Projects';
import Container from '../components/Container';
import type { Metadata } from 'next';

// ✅ SEO Metadata for Projects Page
export const metadata: Metadata = {
  title: "Projects | Deepak Singh | Web Developer & Designer",
  description: "Explore the portfolio of Deepak Singh, a freelance web developer based in Greater Noida. See custom websites, responsive designs, e-commerce platforms, and more.",
  keywords: [
    "website development services in noida",
    "website developer in greater noida",
    "web development in noida",
    "freelance web development and designing services in india",
    "website development in noida",
    "freelance web developer in india.",
    "freelance web designer in india.",
    "professiona UI/UX Designer in india.",
    "professiona website Designer in greater noida.",
    "professiona web devlopment services in india.",
    "professiona web designing services in india.",
    "professiona web devlopment services in greater noida.",
    "professiona web designing services in greater noida.",
    "Web Developer Deepak",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Custom Web Development",
    "Responsive web designing services in india.",
    "best digital marketing services in India.",
    "freelance MERN-Stack Developer in India.",
    "seo services in greater noida open now.",
    "online appointments seo services in greater noida.",
    "top rated seo services in greater noida."
  ],
  openGraph: {
    title: "Projects | Deepak Singh | Web Developer & Designer",
    description:
      "A showcase of web development projects by Deepak Singh — including responsive sites, full-stack applications, and modern UI/UX implementations.",
    url: "https://www.webdeveloperdeepak.com/projects",
    siteName: "Deepak Singh | Web Developer & Designer",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        width: 1200,
        height: 630,
        alt: "Deepak Singh Web Developer Project Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Deepak Singh | Freelance Web Developer",
    description:
      "Browse real-world web projects created by Deepak Singh, freelance developer from Greater Noida, India.",
    creator: "@deepak_singh_",
    site: "@deepak_singh_",
    images: [
      {
        url: "https://www.webdeveloperdeepak.com/images/inrBnr.png",
        alt: "Web Development Projects by Deepak Singh",
      },
    ],
  },
  alternates: {
    canonical: "https://www.webdeveloperdeepak.com/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const MyProjects: React.FC = () => {
  return (
    <div>
      <Image
        alt="web-development-services in Greater Noida"
        src="/images/inrBnr.png"
        width={1520}
        height={350}
      />
      <Container>
        <Projects />
      </Container>
    </div>
  );
};

export default MyProjects;
