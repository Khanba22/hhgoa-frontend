import React from 'react'

const teamMembers = [
  { name: 'Holden Caulfield', role: 'UI Designer', imgSrc: 'https://dummyimage.com/80x80/edf2f7/a5afbd' },
  { name: 'Henry Letham', role: 'CTO', imgSrc: 'https://dummyimage.com/84x84/edf2f7/a5afbd' },
  { name: 'Oskar Blinde', role: 'Founder', imgSrc: 'https://dummyimage.com/88x88/edf2f7/a5afbd' },
  { name: 'John Doe', role: 'DevOps', imgSrc: 'https://dummyimage.com/90x90/edf2f7/a5afbd' },
  { name: 'Martin Eden', role: 'Software Engineer', imgSrc: 'https://dummyimage.com/94x94/edf2f7/a5afbd' },
  { name: 'Boris Kitua', role: 'UX Researcher', imgSrc: 'https://dummyimage.com/98x98/edf2f7/a5afbd' },
  { name: 'Atticus Finch', role: 'QA Engineer', imgSrc: 'https://dummyimage.com/100x90/edf2f7/a5afbd' },
  { name: 'Alper Kamu', role: 'System', imgSrc: 'https://dummyimage.com/104x94/edf2f7/a5afbd' },
  { name: 'Rodrigo Monchi', role: 'Product Manager', imgSrc: 'https://dummyimage.com/108x98/edf2f7/a5afbd' },
];

const Team: React.FC = () => {
  return (
    <section className="text-white body-font border-t border-gray-700 bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-700 border p-4 rounded-lg bg-gray-800">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={member.imgSrc} />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">{member.name}</h2>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
