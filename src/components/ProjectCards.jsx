const ProjectCards = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className='h-full flex flex-col bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer
    '>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='flex flex-1 flex-col p-6'>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index)=>(
                <span key={index} className="px-3 bg-dark-400 rounded-full text-small">
                    {item}
                </span>
            ))}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-2">
          <a href={demo} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-purple px-4 py-2 text-center font-medium transition-colors hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple">
                View Demo
            </a>
          <a href={code} className="inline-flex min-h-11 items-center justify-center rounded-lg border border-purple px-4 py-2 text-center font-medium transition-colors hover:bg-purple/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple">Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
