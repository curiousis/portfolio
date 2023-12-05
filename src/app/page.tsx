
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
      <h3 className="font-size-2 font-bold text-xl text-slate-50 py-10">My Projects</h3>
      <Projects/>
      <Contact/>
    </main>
  )
}
