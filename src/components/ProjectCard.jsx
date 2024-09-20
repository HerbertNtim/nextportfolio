import Image from "next/image"
import Link from "next/link"

const ProjectCard = () => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-black shadow-2xl bg-transparent p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black"/>
      <Link href=''>
        <Image src="" alt="" className="w-full h-auto"/>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <Link href={''} className="hover:underline underline-offset-2">Demo Link</Link>
        <h2 className="my-2 w-full text-left text-4xl font-bold">Title</h2>
        <p className="my-2 font-medium text-black">Description</p>
        <div className="mt-2 flex items-center">
          <Link href="" className="w-10">Github</Link>
          <Link href="" className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold">Demo</Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
