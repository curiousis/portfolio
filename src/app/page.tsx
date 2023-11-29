
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Projects from "@/Components/Projects";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header/>
      <Hero/>
      <About/>
      <Projects></Projects>
      <Contact/>
    </main>
  )
}
