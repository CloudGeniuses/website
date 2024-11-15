import { CheckCircle, CheckCircle2 } from "lucide-react";
import { images } from "../data";
import { Services } from "./Services";

export default function AboutUs() {
  const values = [
    "Integrity",
    "Innovation",
    "Excellence",
    "Customer-Centricity",
    "Continuous Learning",
  ];

  const services = [
    {
      title: "Cloud Adoption, Management, and Migration",
      description: "Seamless transitions to the cloud with minimal downtime.",
    },
    {
      title: "DevOps and Automation",
      description: "Enhance workflows through CI/CD pipelines and automation.",
    },
    {
      title: "Security and Compliance",
      description:
        "Protect your data with robust frameworks to meet regulatory standards.",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Maximize cloud investments with efficient architectures and proactive monitoring.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow mt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
              About CloudGenius
            </h1>
          </div>

          <div className="mt-16 grid grid-cols-12 gap-10">
            <div className="bg-gray-800 rounded-md text-white col-span-6 p-8">
              <h2 className="text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Empowering businesses and professionals to innovate through the
                cloud, delivering solutions that drive digital transformation,
                security, and efficiency.
              </p>
            </div>

            <div className="bg-gray-100 col-span-6 p-8 rounded-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                To be a global leader in cloud consulting and education,
                fostering a future where cloud technology is accessible, secure,
                and a catalyst for growth.
              </p>
            </div>
            <div className="col-span-6 bg-gray-100 p-8 rounded-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-600 font-bold mr-2" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>


          
              <div className="bg-gray-800 p-8 rounded-md text-white col-span-6">
              <h2 className="text-3xl font-bold mb-4">
                Founder's Message
              </h2>
                <p className="text-xl text-gray-400 italic">
                  "I'm Isaac Obaro, and I started CloudGenius to empower
                  individuals and organizations to harness cloud technology.
                  With our dedicated team and extensive experience, we guide
                  your journey through the cloud and beyond, ensuring
                  sustainable growth and digital resilience. Join us, and let's
                  shape the future together."
                </p>
              </div>

            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
            {/* <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our hands-on, multi-cloud expertise, systems-thinking approach,
              and commitment to security and compliance set us apart as your
              trusted partner in cloud transformation.
            </p>
          </div> */}
          </div>
       <div className="mt-10">
       <Services />
       </div>
          <section id="team" className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
              <div className="space-y-12">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Meet Our Team
                  </h2>
                  <p className="text-lg font-lato text-gray-500">
                    Our diverse team of experts is dedicated to delivering
                    innovative solutions.
                  </p>
                </div>
                <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
                  {[
                    {
                      name: "Isaac Emeteveke",
                      role: "Co-Founder / CEO",
                      image: images.isaac.url,
                      alt: images.isaac.alt,
                    },
                    {
                      name: "David Ezeakudolu",
                      role: "Co-Founder",
                      image: images.david.url,
                      alt: images.david.alt,
                    },
                  ].map((person) => (
                    <li
                      key={person.name}
                      className="bg-gray-100 p-10 border-y-[3px] border-yellow-600 rounded-md"
                    >
                      <div className="space-y-6">
                        <img
                          className="mx-auto h-40 w-40 object-cover  rounded-full xl:w-56 xl:h-56"
                          src={person.image}
                          alt={person.alt}
                        />
                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{person.name}</h3>
                            <p className="text-blue-600">{person.role}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
