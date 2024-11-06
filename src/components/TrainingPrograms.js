import React, { useState } from 'react';
import { Book, Cloud, Cog } from 'lucide-react'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { scroller  } from 'react-scroll'
import useScrollToSection from '../hooks/useScrollToSection';

export default function TrainingPrograms() {
  const location = useLocation();
  const [scrollTo, setScrollTo] = useState({contact: false, services: false});
  const navigate = useNavigate();

  const handleClick = (section) => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the "contact" section
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    } else {
        setScrollTo(prev => ({ ...prev, [section]: true }));
        navigate("/");
    }
  };

  useScrollToSection("contact", scrollTo.contact);
  const programs = [
    {
      title: "AWS Solutions Architect Training",
      description: "CloudGenius provides hands-on experience and best practices for all skill levels, from non-IT beginners to experienced professionals. Engage in real-world scenarios to master AWS services and design secure, scalable solutions.",
      icon: Cloud,
      curriculum: [
        "Introduction to Cloud Computing and AWS",
        "Core AWS Services",
        "Networking and Content Delivery",
        "Security and Identity Management",
        "High Availability, Resilience, and Disaster Recovery",
        "Monitoring and Logging",
        "Cost Optimization and Billing",
        "Advanced Architecting",
        "Real-World Solution Design and Case Studies"
      ]
    },
    {
      title: "Microsoft Azure Administrator Training",
      description: "Learn to configure networks and virtual machines, manage identities, and ensure optimal performance in Azure.",
      icon: Cloud,
      curriculum: [
        "Introduction to Azure",
        "Azure Networking",
        "Virtual Machines (VMs)",
        "Storage Solutions",
        "Identity and Access Management",
        "Monitoring and Security",
        "Resource Management and Automation",
        "Application Services",
        "Cost Management and Billing",
        "Hands-On Labs and Real-World Scenarios"
      ]
    },
    {
      title: "DevOps Engineer Training",
      description: "Focus on CI/CD pipelines, automating development and operations using essential tools and technologies.",
      icon: Cog,
      curriculum: [
        "Introduction to DevOps",
        "Version Control with Git and GitHub",
        "Linux Fundamentals",
        "Continuous Integration/Continuous Deployment (CI/CD)",
        "Containerization with Docker",
        "Container Orchestration with Kubernetes (EKS)",
        "Infrastructure as Code (IaC) with Terraform Cloud",
        "Configuration Management with Ansible",
        "Image Management with Amazon ECR",
        "Monitoring and Logging",
        "Hands-On Labs and Real-World Scenarios"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Training Programs
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our programs cater to individuals from all walks of life interested in expanding their skills in cloud, DevOps, and security—no prior IT background required. With the right guidance, anyone can thrive in these fields.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements for All Programs:</h2>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>A laptop</li>
              <li>Internet access</li>
              <li>Willingness to practice and engage with course materials</li>
            </ul>
          </div>

          <div className="mt-10">
            {programs.map((program, index) => (
              <div key={index} className="mb-16 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex items-center">
                  <program.icon className="h-8 w-8 text-blue-500 mr-4" />
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">{program.title}</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Description</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{program.description}</dd>
                    </div>
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Curriculum Outline</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc list-inside">
                          {program.curriculum.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button  onClick={()=>handleClick("contact")} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Enroll Now
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}