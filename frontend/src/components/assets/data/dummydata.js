import { FaFacebookF, FaUsersCog } from "react-icons/fa"
import { BsInstagram, BsTelegram } from "react-icons/bs"
import { SlHandbag } from "react-icons/sl"
import { AiOutlineTwitter } from "react-icons/ai"
import { HiOutlineArrowSmRight, HiOutlineUserGroup } from "react-icons/hi"
import { GiAirplaneDeparture, GiReceiveMoney } from "react-icons/gi"
import { SiAlwaysdata } from "react-icons/si"
import { TbTargetArrow } from "react-icons/tb"

export const icons = [
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/Sprameshwor?mibextid=LQQJ4d",
  },
  { icon: <AiOutlineTwitter /> },
  { icon: <BsInstagram />, path: "https://www.instagram.com/s_prameshwor/" },
  { icon: <BsTelegram /> },
]
export const homeContent = [
  {
    id: 1,
    title: "your business consultant",
    subtitle: "A business consultant provides expert advice and guidance to businesses in order to improve their operations, solve problems, and achieve their goals.",
    image: "../images/slider-2.jpg",
  },
  {
    id: 2,
    title: "Business Strategy and Consulting",
    subtitle: "We specialize in providing comprehensive business strategy and consulting services, enabling organizations to leverage our expertise in crafting and implementing impactful strategies that drive growth, efficiency, and sustainable success.",
    image: "../images/slider-3.jpg",
  },
  {
    id: 3,
    title: "Advance Analytics & Data Management",
    subtitle: "Advanced analytics and data management provide powerful insights and efficient organization of data for informed decision-making and improved business outcomes.",
    image: "../images/slider-1.jpg",
  },
  {
    id: 4,
    title: "Process Involvement & Optimization",
    subtitle: "Process Involvement & Optimization aims to actively engage in and improve processes through analysis, streamlining, and enhancement to enhance efficiency, productivity, and overall performance.",
    image: "../images/slide4.jpeg",
  },
  {
    id: 5,
    title: "Tax Planning & Compliance",
    subtitle: "Tax Planning & Compliance involves strategically managing tax obligations and ensuring adherence to tax laws and regulations to minimize tax liabilities and maintain compliance.",
    image: "../images/slide5.jpg",
  },
  {
    id: 6,
    title: "Financial planning & Analysis",
    subtitle: "Financial planning & Analysis involves assessing financial data, analyzing trends, and providing insights to support strategic decision-making and optimize financial performance",
    image: "../images/slide6.jpeg",
  },
  {
    id: 7,
    title: "Risk Management & Assessment",
    subtitle: "Risk Management & Assessment involves identifying, evaluating, and mitigating potential risks to minimize their impact on an organization's objectives and enhance overall resilience.",
    image: "../images/slide7.jpg",
  },
  {
    id: 8,
    title: "Book Keeping and Accounting",
    subtitle: "Bookkeeping and Accounting involve recording and managing financial transactions and ensuring accurate financial reporting for an organization's operations and compliance.",
    image: "../images/slide8.jpg",
  },
]
export const navBar = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "about us",
    path: "/about",
  },
  {
    id: 3,
    name: "services",
    path: "/services",
  },
  {
    id: 4,
    name: "blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "team",
    path: "/team",
  },
  {
    id: 6,
    name: "price",
    path: "/price",
  },
  {
    id: 7,
    name: "career",
    path: "/career",
  },
  {
    id: 8,
    name: "contact",
    path: "/contact",
  },
]
export const footer1 = [
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Home",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    name: "about us",
    path: "/about",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Car Insurance",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Business Insurance",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Travel Insurance",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Fire Insurance",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Marrige Insurance",
  },
]
export const footer2 = [
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "My Account",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Need A Career?",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "News & Blog",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Team Member",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "Payment Way",
  },
  {
    icon: <HiOutlineArrowSmRight size={22} />,
    path: "/",
    text: "About Us",
  },
]
export const services = [
  {
    id: 1,
    title: "Easy System & Trusted, Save your Money",
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    icon: <GiReceiveMoney />,
    cover: "../images/services/s1.jpg",
  },
  {
    id: 2,
    title: "Dedicated Customer Support Team Member",
    icon: <FaUsersCog />,
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    cover: "../images/services/s2.jpg",
  },
  {
    id: 3,
    title: "Corporate Professional Insurance Liability",
    icon: <SlHandbag />,
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    cover: "../images/services/s3.jpg",
  },
  {
    id: 4,
    title: "Life insurance",
    icon: <GiReceiveMoney />,
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    cover: "../images/services/s4.jpg",
  },
  {
    id: 5,
    title: "Travel Insurance",
    icon: <GiAirplaneDeparture />,
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    cover: "../images/services/s5.jpg",
  },
  {
    id: 6,
    title: "House Insurance",
    icon: <GiReceiveMoney />,
    desc: "Easy System & Trusted, Save your Money Sit amet consectetur adipiscing elites varius montes, massa blandit orci.",
    cover: "../images/services/s6.jpg",
  },
]
export const teams = [
  {
    id: 1,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t1.png",
  },
  {
    id: 2,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t2.png",
  },
  {
    id: 3,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t3.png",
  },
  {
    id: 4,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t4.png",
  },
  {
    id: 5,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t5.png",
  },
  {
    id: 6,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t6.png",
  },
  {
    id: 7,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t7.png",
  },
  {
    id: 8,
    name: "Harry R. Blackston",
    post: "Senior Manager",
    cover: "../images/team/t8.png",
  },
]
export const blog = [
  {
    id: 1,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b1.png",
  },
  {
    id: 2,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b2.png",
  },
  {
    id: 3,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b3.png",
  },
  {
    id: 4,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b4.png",
  },
  {
    id: 5,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b5.png",
  },
  {
    id: 6,
    name: "Harry R. Blackston",
    title: "Former insures only the marine perils",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non dolor reprehenderit, quam aliquid quos dolorem commodi, exercitationem laudantium architecto tenetur, rem consectetur nulla cum consequatur quidem debitis odio officiis.",
    date: "JAN 3, 2023",
    cover: "../images/blog/b6.png",
  },
]
export const contactdata = [
  {
    id: 1,
    title: "Location",
    text: "Lagankhel, Lalitpur",
    cover: "../images/contact/cont-1.png",
  },
  {
    id: 2,
    title: "Email",
    text: "analyticafintax@gmail.com",
    cover: "../images/contact/cont-2.png",
  },
  {
    id: 3,
    title: "Call Us",
    text: "9843702837",
    cover: "../images/contact/cont-3.png",
  },
]
export const price = [
  {
    id: 1,
    name: "Regular Plan",
    price: "1,900",
    tag: "Free",
    list: [
      { text: "Notice and notification related to market", plan: true },
      { text: "News feeds", plan: true },
      { text: "Own profile", plan: true },
      { text: "Business profiles", plan: false },
      { text: "Create task and assign", plan: false },
      { text: "Task status tracking", plan: false },
      { text: "Inventory mangement", plan: false },
    ],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "5,000",
    tag: "Per Year",
    list: [
      { text: "Notice and notification related to market", plan: true },
      { text: "News feeds", plan: true },
      { text: "Own profile", plan: true },
      { text: "Business profiles", plan: true },
      { text: "Create task and assign", plan: true },
      { text: "Task status tracking", plan: true },
      { text: "Inventory mangement", plan: false },
    ],
  },
  {
    id: 3,
    name: "Golden Plan",
    price: "3,500",
    tag: "Per Month",
    list: [
      { text: "Notice and notification related to market", plan: true },
      { text: "News feeds", plan: true },
      { text: "Own profile", plan: true },
      { text: "Business profiles", plan: true },
      { text: "Create task and assign", plan: true },
      { text: "Task status tracking", plan: true },
      { text: "Inventory mangement", plan: true },
    ],
  },
]
export const faqs = [
  {
    id: 1,
    title: "What Is Insurance Services?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
  {
    id: 2,
    title: "How Many Service We Provide ?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
  {
    id: 3,
    title: "How Much Experience Our Team Member ?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
  {
    id: 4,
    title: "Why We Are The Best Company?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
  {
    id: 5,
    title: "Build your Business ?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
  {
    id: 6,
    title: "How Much Experience Our Team Member ?",
    desc: "Serenity Is Multi-Faceted Blockchain Based Ecosystem, Energy Retailer For The People, Focusing On The Promotion Of Sustainable Living, Renewable Energy Production And Smart Energy Grid Utility Services.",
  },
]
export const features = [
  {
    id: 1,
    title: "Client focus",
    icon: <TbTargetArrow size={80} />,
    info: "Our company is highly focused on delivering value to clients by understanding their unique business challenges and offering tailored solutions. We aim to deliver a positive and memorable experience for clients. To achieve this, we have a deep understanding of our client’s needs and expectations which include clear and effective communication with clients, providing timely and regular updates to keep clients informed about project progress and any changes in direction. This will ensure that our services are delivered with the utmost professionalism and integrity.",
  },
  {
    id: 2,
    title: "Problem-solving",
    icon: <HiOutlineUserGroup size={80} />,
    info: "In a constantly evolving and competitive business environment, businesses face numerous complex problems and uncertainties that require effective problem-solving skills to navigate. To help clients overcome business challenges and achieve their objectives we provide you with problem-solving skills. By adopting a problem-solving approach, we can systematically identify the root cause of a problem, develop effective solutions, and implement them to improve the performance of your business.",
  },
  {
    id: 3,
    title: "Analytical approach",
    icon: <SiAlwaysdata size={80} />,
    info: "In a rapidly changing business environment, businesses must be able to analyze and interpret large volumes of data to gain a competitive edge and make informed decisions. We use an analytical approach that enables organizations to make informed decisions based on data insights, optimize their operations, and stay ahead of the competition. Various analytical tools and techniques are used to assess the client's current situation and identify areas for improvement.",
  },
]
