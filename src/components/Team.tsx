const Teamlist = [
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
  {
    name: "Mohammad Ariffansyah",
    role: "Front-end and Back-end Dev",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*wATbQ49jziZTyhZH.jpg",
  },
];

export default function Team() {
  return (
    <main>
      {/* Team Section */}
      <section className="flex justify-center mt-5 mx-5 lg:mx-48">
        <div className="Animated-Slideup flex flex-wrap justify-around">
          {Teamlist.map((item) => (
            <div className="w-64 m-3 bg-gray-950 rounded-md p-4 drop-shadow-xl">
              <div className="flex justify-center items-center mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-48 object-cover object-center" />
              </div>
              <h1 className="text-md lg:text-md text-white">{item.name}</h1>
              <h1 className="text-sm lg:text-sm text-white">{item.role}</h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}