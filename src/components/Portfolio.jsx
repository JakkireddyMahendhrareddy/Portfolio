import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    image:
      "https://media-hosting.imagekit.io//f6e1d63e2595435c/hostel.PNG?Expires=1835948534&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wSYIkkLBPMDBc7rTOaS9FmufORYzd3haIOVLKtg1KVkMkhkv5oclT3ZSOv1bcKQ~aTuVSRkns5jcJrzNySk3kdSrnNyL7XiwzH9QgjEkhz~NqNtbndnnAnZbW9nJpp1u1BwX~SF0Ty93owBU5PicjHXJy17FjmsAQsQ1s5Jqa4upK7egXNu4b1KNfnC0nn3V43qHDGHJXbjQxvgiNpzWyMq8YkmQM4JK4Q6JZr6R4RNh9735-qM7v1WPyxH0WmEPTSFIFdgEsbIKkwIKMxYAXA6MNUFFUGqnNjCNuWOoN1IhSBlpEfU2C1VkPBZI~6BpGZX9VVYlg~X4XlvRhu3cDw__",
    title: "Hostel Management System",
    description:
      "A web-based hostel management application for students and administrators.",
    technologies: "React.js, Firebase, Tailwind CSS",
  },
  {
    image:
      "https://media-hosting.imagekit.io//53745067ce0747b5/youtube.PNG?Expires=1835948983&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t6NRaEmoPDl04pzUwAXKcBY7L2JlfHLWTJTJEV3k59fulvucHv7nAB0Cw5qaHoTYn0ORB3-~4zy46rlou0BVkdyO7Hwnr7LClBbaGhnMEf7C1JC6PEnZwMSO99PhKbpw9g7oKZVThzGsJS8O7a8AmWIio4DvZL7mzkb9TOCWousU~lQ1UfdVWVJzdPKlSt-vwhfDRlwEg27r4osMt2oF5zLeoLC-EUsxgh6yzH-P32eoIXiuL~WxE9r5~u~McS0SUknyL-o3WXNYEn8rp41qcE687SrjutlUd2jOOhqa~~bdC-WYohGCt78EZb65lbpLiGrv7J2syr05aD1A2cbz2g__",
    title: "YouTube Clone",
    description:
      "A YouTube-like video-sharing platform with search and recommendations.",
    technologies: "React.js, Node.js, PostgreSQL",
  },
  {
    image:
      "https://media-hosting.imagekit.io//1ca7b253b44542db/Capture.PNG?Expires=1835948188&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0piJ3P1Z06H8HjtQ5ZvZWx007yTR8CztOVWqlsGwaWg5mE11UaUT~iEL3EEkYTDwmb~S-JHjk6UV7DNymd8L5e55NwmaNJa6~YCiAAr19WWmSqzb19Xuxf0TMWxehiEzrbEOIyILheVz9aRd4gL-cymRmQt~5D299GucaTYvwQeLWgmJFj8ctH6xuathutowfSIVnl7J8FeIVIHEbv4ieVJuzFfdp72NlGzhjeyzDbB~xQ0SL52WF5eHjEHoVJzJV433ix3JWr-SnJXgvLu-u4XNEEJXBV1RF5A8aHG~FAI4-nxFrpMZwXBqzEpGVB9mBOco6zP4oOp8qR-E4AWJtQ__",
    title: "Admin Dashboard",
    description: "A fully responsive Admin website with CRUD opertaion.",
    technologies: "React.js, Tailwind CSS, Firebase",
  },
  {
    image:
      "https://media-hosting.imagekit.io//8df071ad554c41d8/emoji.PNG?Expires=1835948379&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eC7GY~Eob0YEPpRmmUJkvWVp4vPP~UkQVTT0rYf7gMqY2OzuN2Se5bawVUBJoxHu~qVYYwCEcVG4tPefwgNuZsM1Z00y8nm-A1~cqBnFGfZq3~Jvukzq4b4W~lFexIa8xtMpu31EIYyqH8-AGGq75BrHF7M9ISxBXaKJgsvy~tV2GgDaiFi9dOZmxSLzQySYCbHNqAQ05Woli7amUoIHD4dTTMuxuBjI5ue14UsqS4Chls694FBYqTgRGfYURzhi2HnQ3iQBCbgfyPccTESkb0EUZof5HQqJ2atR7owFgPL2xhONTRbuJUHDzvF-nuS4dD53YGJGthjwTUfriig1Rw__",
    title: "Emoji Chat App",
    description:
      "A real-time chat application featuring custom emoji reactions.",
    technologies: "React js,Html,Tailwind css",
  },
  {
    image:
      "https://media-hosting.imagekit.io//2143f6ce005344b3/fruits.PNG?Expires=1835948122&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aCHPSOXIw-2Pi5u00IbsH-GfFhCdBvTO4INMHYmJCzbNFq-yJcZkXNSKCfkvus37FSMTbuSI-Za9QV7Y4TERBf0o3L3Dab8EKAPumTFBhmYm41cfgU0J23rPyNG2XvGcUkFRSrzFNgU88fOcnCarcl4Kk5DTVjnVgyJ6dGz0BE~vwy~5Tvz2425SC0wFdI24kxmU1QtS9vdJR5pdYIzI85MCBQjXM4sBrMfqg9PIt9iCG3nbUq8zcrtmKA4ghcGCWjvlUQNhYMECbmJGzNY959SFKlSyQU2~cUwKmKUh8QZF6YzGujiYadtsNjeomhX9ZMUzR9jHShRdTgPc64vZ2Q__",
    title: "Fruit Game",
    description: "An interactive Fruit Game.",
    technologies: "React.js",
  },
];

const LatestProject = () => {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProject]);

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black min-h-screen text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Latest <span className="text-green-500">Projects</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {String(currentProject + 1).padStart(2, "0")}
            </h3>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mt-2">
              {projects[currentProject].title}
            </h4>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              {projects[currentProject].description}
            </p>
            <p className="mt-2 text-green-400 text-sm sm:text-base">
              {projects[currentProject].technologies}
            </p>
          </div>

          <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden relative rounded-lg shadow-lg">
              <img
                src={projects[currentProject].image}
                alt={`Project ${currentProject + 1}`}
                className="w-full h-auto object-cover rounded-lg transition-all duration-500"
              />
            </div>

            <button
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-2 sm:p-3 rounded-full hover:bg-green-500 transition shadow-lg"
              onClick={prevProject}
            >
              <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-60 p-2 sm:p-3 rounded-full hover:bg-green-500 transition shadow-lg"
              onClick={nextProject}
            >
              <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
