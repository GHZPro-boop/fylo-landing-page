import { Header } from './Components/Header'
import { Section1 } from './Components/Section1'
import "./index.css"
import { Icons } from './Components/Icons'
import { Section2 } from './Components/Section2'
import { Testimonials } from './Components/TestimonialSection'
import { Subscription } from './Components/SubscriptionSection'
import { Footer } from './Components/FooterSection'

import icon1 from "./assets/icon-access-anywhere.svg"
import icon2 from "./assets/icon-security.svg"
import icon3 from "./assets/icon-collaboration.svg"
import icon4 from "./assets/icon-any-file.svg"

import quoteIcon from "./assets/bg-quotes.png";
import profile1 from "./assets/profile-1.jpg"
import profile2 from "./assets/profile-2.jpg"
import profile3 from "./assets/profile-3.jpg"

function App() {

  return (
    <div className="bg-[#1B2330] pb-5 w-full text-white h-full">
      <Header />
      <Section1 />
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-[70%] lg:mx-auto mt-20 gap-6 px-10'>
        <Icons image={icon1} title="Access your files, anywhere" text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere." />
        <Icons image={icon2} title="Security you can trust" text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." />
        <Icons image={icon3} title="Real-time collaboration" text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required." />
        <Icons image={icon4} title="Store any type of file" text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared." />
      </div>
      <Section2 />
      {/* testimonial Section */}
      <div className="mt-20 lg:mx-10 xl:px-16">
        <img src={quoteIcon} alt="Quotation Icon" className="ml-10 h-6" />
        <div className="flex flex-col lg:flex-row relative -top-1 px-7 pb-7 pt-10 mx-auto items-center gap-8">
          <Testimonials image={profile1} name="Satish Patel" />
          <Testimonials image={profile2} name="Bruce McKenzie" />
          <Testimonials image={profile3} name="Iva Boyd" />
        </div>
      </div>
      {/* Subscription Section */}
      <div className='mt-20 lg:w-[50%] lg:mx-auto relative -bottom-20 mx-[5%]'>
      <Subscription />
      </div>
      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
