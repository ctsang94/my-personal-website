"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "iContract",
    description: "The i-Contract website offers a platform for managing and streamlining home renovation contract creation and management.",
    image: "/icontract.png",
    details: "It includes a login interface and sections for users to upload, edit, and sign contracts, making the process more efficient and organized.",
    url: 'https://icontract1.netlify.app/'
  },
  {
    id: 2,
    title: "BrainFlix",
    description: "A prototype for a new video streaming platform called BrainFlix.",
    image: "/brainflix.png",
    details: "Built with React, utilizing functional components. Site functional with comments and shows data retrieved from the server via API call.",
    url: 'https://startling-eclair-df59af.netlify.app/'
  },
  {
    id: 3,
    title: "Travel Site",
    description: "A basic travel destination website, leveraging HTML, CSS, and component thinking.",
    image: "/Travelsite.png",
    details: "Built with HTML, CSS and using BEM methodolgy for my class names. Layout built using the Box Model, CSS display property and CSS positioning including Flexbox.",
    url: 'https://dashing-ganache-c8ecd1.netlify.app/'
  },
]

export default function PersonalWebsite() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-white">
      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animate-float-delay-2"></div>
      </div>

      <div className="relative z-10">
        <header className="container mx-auto py-12 text-center">
          <div
            className="relative inline-block mb-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src='/kelvinpfp_500x500.jpg'
              alt="Kelvin Tsang"
              width={160}
              height={160}
              className="h-40 w-40 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">Hello!</span>
              </div>
            )}
          </div>
          <h1 className="mb-2 text-4xl font-bold">Kelvin Tsang</h1>
          <p className="text-xl text-gray-200">Full Stack Developer</p>
        </header>

        <main className="container mx-auto px-4">
          <section className="mb-12 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6">
            <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
            <p className="text-gray-200">
              I'm a passionate web developer with 5 years of experience in Desktop Support.
              My expertise includes React, Next.js, and Tailwind CSS. I love turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
               <Link href={project.url} key={project.id} passHref target="_blank" rel="noopener noreferrer">
               <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white hover:bg-opacity-20 transition-all duration-300 flex flex-col cursor-pointer">
                 <CardHeader className="flex-grow">
                   <CardTitle>{project.title}</CardTitle>
                   <CardDescription className="text-gray-200">{project.description}</CardDescription>
                 </CardHeader>
                 <CardContent className="flex-shrink-0">
                   <div className="h-48 relative mb-4">
                     <Image
                       src={project.image}
                       alt={project.title}
                       fill
                       style={{ objectFit: 'cover' }}
                       className="rounded-md"
                     />
                   </div>
                 </CardContent>
                 <CardFooter className="flex-shrink-0">
                   <p className="text-sm text-gray-200">
                     {project.details}
                   </p>
                 </CardFooter>
               </Card>
             </Link>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Contact Me</h2>
            <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white">
              <CardContent className="p-6">
                <form className="space-y-4" action="https://formspree.io/f/meojgllo" method="POST">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your Name" className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Your message here..." className="bg-white bg-opacity-20 text-white placeholder-gray-300" />
                  </div>
                  <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-200">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="py-6 text-center">
          <div className="container mx-auto flex justify-center space-x-4">
            <a href="https://github.com/ctsang94" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/kelvincktsang" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:amazon11373@gmail.com" className="text-white hover:text-gray-300 transition-colors duration-300">
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-200">© 2024 Kelvin Tsang. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
