'use client'
import Project from './project';

export default function Home() {

  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg"
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg"
    }
  ]

  return (
    <main className='h-screen flex items-center justify-center bg-blue-velt-50 text-blue-950'>
      <div className='w-[70%]'>
        <p className='text-center text-3xl py-10'>Nuestros Trabajos</p>
          {
            projects.map( project => {
              return <Project project={project}/>
            })
          }
      </div>
    </main>
  )
}
