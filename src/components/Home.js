import React, { useState } from 'react'
import { images } from '../data'
import { Menu, X, ChevronRight, Code, Server, Smartphone, Users, Mail, Phone, MapPin, CheckCircle, Globe, BookOpen } from 'lucide-react'
export default function Home() {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    subject: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { firstname, lastname, email, message, subject, phone } = formData;
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 pt-4">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Empowering Global Innovation</span> 
              <span className="block text-blue-200">in Cloud and DevOps</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
             Unlock the power of cloud with tailored training, consulting, and cutting-edge solutions from CloudGenius
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                 Discover Our Solutions
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                 Start Learning Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* Key Highlights Section */}
 <section id="highlights" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Key Highlights</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose CloudGenius
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Certified Experts</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our team comprises certified cloud engineers and DevOps specialists with hands-on experience in AWS, Azure, and more, designing secure, scalable architectures.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Globe className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Global Impact</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Serving clients and students globally, we excel in hybrid cloud, automation, and network security, driving digital transformation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <BookOpen  className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Hands-on Training</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our courses offer project-based learning led by industry experts, equipping you with real-world skills to excel immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Intro Section
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Welcome to CloudGenius</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Businesses Worldwide
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With expertise in cloud engineering, DevOps, security, and governance, we empower businesses and professionals worldwide to thrive in a digital-first world. From Canada to Dubai, our international team delivers robust, secure, and scalable solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section id="services" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Cloud Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a wide range of services to meet your cloud technology needs.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Code className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Cloud Consulting</h3>
                  <p className="mt-2 text-base text-gray-500">
                    We provide end-to-end cloud consulting solutions in Azure and AWS, empowering businesses with secure, scalable,
                    and tailored cloud infrastructures to achieve their strategic goals. 
                  </p>
                </div>
              </div>

              <div className="flex">
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
              </div>

              <div className="flex">
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
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-200 lg:pr-16">
            {/* <div className="md:flex-shrink-0">
              <img className="h-12" src="/placeholder.svg?height=48&width=48" alt="Client logo" />
            </div> */}
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-gray-800 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  CloudGenius transformed our workflow. Their expertise saved us time and money, bringing us closer to our clients.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={`${images.bulent.url}`}
                      alt={`${images.bulent.alt}`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">Bulent Korkmaz</div>
                    <div className="text-base font-medium text-gray-500">Senior Cybersecurity Engineer, Flair Airlines</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-gray-200 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            {/* <div className="md:flex-shrink-0">
              <img className="h-12" src="/placeholder.svg?height=48&width=48" alt="Client logo" />
            </div> */}
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-gray-800 md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  The hands-on training helped me land a job and gave me the confidence to excel in my cloud engineering role.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={`${images.melford.url}`}
                      alt={`${images.melford.alt}`}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">Melford Don-Pedro</div>
                    <div className="text-base font-medium text-gray-500">Cloud Specialist, CloudTech</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
      

      {/* Contact Form */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-blue-700 sm:px-10 xl:p-12">
                <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
                  <svg className="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fillOpacity=".1" />
                    <defs>
                      <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">Contact information</h3>
                <p className="mt-6 text-base text-blue-50 max-w-3xl">
                  Get in touch with us for any inquiries or to discuss how we can help your business.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt><span className="sr-only">Phone number</span></dt>
                  <dd className="flex text-base text-blue-50">
                    <Phone className="flex-shrink-0 w-6 h-6 text-blue-200" aria-hidden="true" />
                    <span className="ml-3">+1 (437) 673-4833</span>
                  </dd>
                  <dt><span className="sr-only">Email</span></dt>
                  <dd className="flex text-base text-blue-50">
                    <Mail className="flex-shrink-0 w-6 h-6 text-blue-200" aria-hidden="true" />
                    <span className="ml-3">support@cloudgenius.com</span>
                  </dd>
                  {/* <dt><span className="sr-only">Address</span></dt>
                  <dd className="flex text-base text-blue-50">
                    <MapPin className="flex-shrink-0 w-6 h-6 text-blue-200" aria-hidden="true" />
                    <span className="ml-3">123 Tech Street, San Francisco, CA 94107</span>
                  </dd> */}
                </dl>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                <form action={`mailto:support@cloudgenius.com?subject=${subject} ${firstname} ${lastname}&body=${encodeURIComponent(
                  `Name: ${firstname} ${lastname} \nEmail: ${email}\n \nPhone: ${phone}\n \nMessage:\n${message}`
                )}`}
                method="POST"
                encType="text/plain"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-900">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-900">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                        Phone
                      </label>
                      <span id="phone-optional" className="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={handleChange}
                        id="subject"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                        Message
                      </label>
                      <span id="message-max" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                        aria-describedby="message-max"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}