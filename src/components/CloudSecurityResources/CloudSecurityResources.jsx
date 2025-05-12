import React from "react";
import Rect from "../../../public/assets/resorces/Ebooksa/Rect.png";

const resourceData = [
  {
    image: "/assets/resorces/Ebooksa/Rect.png",
    title: "Cloud Security – eBook",
    author: "John Doe",
    role: "Writer",
    contentTitle: "Exploring the Security Module in the Google Cloud Course",
    description: `According to IBM, 82 percent of data breaches involve information stored in cloud environments (IBM, 2023). Moreover, 80 percent of organizations experienced a major public cloud security incident in 2021, indicating a breakthrough from traditional security approaches. (Snyk, 2022).

Many discussions of cloud security have focused on the “Big Three” public cloud providers: Microsoft Azure, Amazon Web Services (AWS), and Google Cloud Platform (GCP). As of this writing, major companies such as Target, UPS, PayPal, and Goldman Sachs trust GCP with their public cloud resources.`,
  },
];

const sections = [
  {
    title: "Overview of Cloud Security and the Google Cloud Course",
    paragraphs: [
      `“Cloud security” refers to the various practices, tools, methodologies, and best practices to protect cloud data, software applications, and infrastructure. It includes fields such as network security, data encryption, identity and access management (IAM), and more.`,
      `Public cloud providers such as Azure, AWS, and GCP typically implement a number of security features to protect customers’ cloud environments. However, public cloud customers are also responsible for securing their own IT assets and resources by adopting measures such as multi-factor authentication, logging and monitoring, vulnerability scanning, and access control. This arrangement, in which the provider and customer share responsibility for cloud security, is known as the shared responsibility model (Alvarenga, 2022).`,
      `As such, organizations must be familiar with cloud security issues in their choice of public cloud provider. For businesses that use the Google Cloud Platform, this may come in the form of Google Cloud training that emphasizes cloud security topics and techniques.`,
      `EC-Council offers a course called Google Cloud Platform Essentials. This GCP course discusses the fundamentals of Google Cloud for those new to the platform. The modules of EC-Council’s Google Cloud course discuss the various computing services available on the platform, including:`
    ],
    listItems: [
      "Compute services",
      "Storage and database services",
      "Networking services",
      "Security services",
      "Data integration and analytics services",
      "Management tools and monitoring services",
      "Other services (AI, IoT, cloud migration)"
    ]
  },
  {
    title: "Exploring the Security Module in the Google Cloud Course",
    paragraphs: [
      `Cloud security engineers leverage their expertise in designing and implementing secure workloads and infrastructure specifically tailored for Google Cloud environments. The security service module in the Google Cloud Platform Essentials course focuses on crucial aspects of securing data and resources within the Google Cloud ecosystem.`,
      `Students will gain an overview of the key Google Cloud Security services, namely Google Cloud IAM, Google Cloud SSL Policies, Google Cloud Armor, and Google Cloud Security Scanner, and learn how to integrate them into an organization’s cloud application.`,
      `This program offers a comprehensive training experience covering all essential security considerations. From access management to communication security, data protection to operational security, and compliance adherence, students will gain a thorough understanding of securing cloud environments.`
    ]
  },
  {
    title: "Explore EC-Council’s Cloud Security Certification",
    paragraphs: [
      `EC-Council’s Google Cloud Platform Essentials course is an excellent introduction to using GCP. However, it is usually wise for IT professionals to have expertise in multiple cloud platforms, such as AWS and Azure, in addition to Google Cloud.`,
      `EC-Council’s Certified Cloud Security Engineer (CCSE) program is the only certification that delivers a mix of vendor-neutral and vendor-specific cloud security concepts.`
    ]
  },
  {
    title: "About the Author",
    paragraphs: [
      `David Tidmarsh is a programmer and writer. He’s worked as a software developer at MIT, has a B.A. in history from Yale, and is currently a graduate student in computer science at UT Austin.`
    ]
  }
];




const CloudSecurityResources = () => {
  return (
    <>
      <div className="p-4 md:p-10 bg-white max-w-7xl mx-auto">
        {resourceData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-6  pb-10"
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-[250px] md:w-[300px] rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {item.title}
              </h2>
              <div className="flex items-center mt-2 mb-4">
                <img
                  src={Rect}
                  alt="author"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-600">
                  {item.author}{" "}
                  <span className="text-gray-400">– {item.role}</span>
                </span>
              </div>
              <h3 className="text-md font-semibold mb-2 text-gray-700">
                {item.contentTitle}
              </h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="max-w-5xl mx-auto p-4 md:p-10 space-y-10 bg-white">
      {sections.map((section, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
          {section.listItems && (
            <ul className="list-disc list-inside ml-4">
              {section.listItems.map((item, lIndex) => (
                <li key={lIndex}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
    </>
  );
};

export default CloudSecurityResources;
