import service1 from "../images/service-1.jpg";
import service3 from "../images/service-2.jpg";
import service2 from "../images/service-4.jpg";
import service4 from "../images/service-3.jpg";
import { useEffect, useState } from "react";
export const Services = () => {
  const services = [
    {
      id: 1,
      image: service1,
      title: "Cloud Computing",
      description:
        "We help you implement DevOps practices to streamline your development and operations processes.",
    },
    {
      id: 2,
      image: service2,
      title: "DevOps Implementation",
      description:
        "We help you implement DevOps practices to streamline your development and operations processes.",
    },
    {
      id: 3,
      image: service3,
      title: "Cloud Security",
      description:
        "CloudGenius offers expert cloud security consulting on Azure and AWS, delivering resilient, compliant, and multi-layered protection for your digital assets.",
    },
    {
      id: 4,
      image: service4,
      title: "Cloud Training",
      description:
        "We offer hands-on training to equip your team with the latest cloud technologies and best practices.",
    },
    {
      id: 5,
      image: service2,
      title: "Software Development",
      description:
        "Unlock your business potential with our custom-built software, web, and mobile apps, powered by the latest technology. Tailored solutions that drive results!",
    },
  ];
  const services2 = [
    { title: "Cloud Computing", action: () => setCurrentService(0) },
    { title: "DevOps Implementation", action: () => setCurrentService(1) },
    { title: "Cloud Security", action: () => setCurrentService(2) },
    { title: "Cloud Training", action: () => setCurrentService(3) },
    { title: "Software Development", action: () => setCurrentService(4) },
  ];
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prevService) => (prevService + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Cloud Solutions
          </p>
          <p className="mt-4 max-w-2xl text-lg font-lato text-gray-500 lg:mx-auto">
            We offer a wide range of services to meet your cloud technology
            needs.
          </p>
          <span className="block mt-3">
            {services2.map((item, index) => (
              <span
                className="text-sm text-gray-700 font-semibold cursor-pointer"
                onClick={item.action}
              >
                {item.title}
                {index !== services2.length - 1 && (
                  <span className="mx-2 text-gray-500">|</span>
                )}
              </span>
            ))}
          </span>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="flex items-center gap-5">
              <span className="font-roboto text-[150px] ">
                {services[currentService].id}{" "}
              </span>{" "}
              <sub className="text-center block mb-2 text-yellow-600  text-4xl tracking-tighter">
                {services[currentService].title}{" "}
              </sub>
            </div>
            <div className="text-lg  text-yellow-600 font-bold">
              <img
                src={services[currentService].image}
                className="h-[300px] w-full object-cover"
                alt=""
              />
            </div>
            <div className="flex">
              <div className="ml-4">
                <p className="mt-2 text-3xl text-gray-900 font-roboto">
                  {services[currentService].description}
                </p>
              </div>
            </div>

            {/* <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Server className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">DevOps Implementation</h3>
              <p className="mt-2 text-base text-gray-500">
                We help you implement DevOps practices to streamline your development and operations processes.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Smartphone className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Cloud Security</h3>
              <p className="mt-2 text-base text-gray-500">
                CloudGenius offers expert cloud security consulting on Azure and AWS, delivering resilient, compliant, and multi-layered protection for your digital assets.
              </p>
            </div>
          </div> */}

            {/* <div className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Cloud Training</h3>
              <p className="mt-2 text-base text-gray-500">
                We offer hands-on training to equip your team with the latest cloud technologies and best practices.
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
