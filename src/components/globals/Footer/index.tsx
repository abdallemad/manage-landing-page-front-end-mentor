import { Button } from "@/components/ui/button"
import Image from "next/image"
import {FaFacebook, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <>
      <SimplifySection />
      <footer className="bg-neutral-950 text-neutral-50 py-12">
        <div className="container grid items-center gap-8 lg:grid-cols-4">
          <div className="self-stretch flex flex-col justify-between">
            <Image src={'/images/logo.svg'} alt="Logo" width={100} height={100} 
            style={{
              filter:"invert(1)"
            }}
            />
            <ul className="flex items-center gap-3 text-xl">
              <li className="hover:text-neutral-300 transition-colors cursor-pointer"><FaFacebook /></li>
              <li className="hover:text-neutral-300 transition-colors cursor-pointer"><FaTwitter /></li>
              <li className="hover:text-neutral-300 transition-colors cursor-pointer"><FaLinkedin /></li>
              <li className="hover:text-neutral-300 transition-colors cursor-pointer"><FaYoutube /></li>
            </ul>
          </div>
          <ul className="space-y-2">
            {['Company', 'Locations', 'Contact', 'Blog'].map((item, index) => (
              <li key={index} className="hover:text-neutral-300 transition-colors">{item}</li>
            ))}
          </ul>
          <ul className="space-y-2">
            {['Product', 'Pricing', 'Resources'].map((item, index) => (
              <li key={index} className="hover:text-neutral-300 transition-colors">{item}</li>
            ))}
          </ul>
          <div className="flex self-stretch justify-between flex-col">
            <form className="flex items-center justify-between gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white rounded-full grow px-2 py-2 text-neutral-700 placeholder:text-neutral-400 focus:outline-none" />
              <Button className="">GO</Button>
            </form>
            <p className="text-center text-sm text-neutral-400">Manage © 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

function SimplifySection() {
  return (
    <section className=" py-12 bg-primary text-primary-foreground">
      <div className="flex items-center justify-between container">
        <h2 className="h2">
          Simplify how your team <br />
          works today.
        </h2>
        <Button variant={'secondary'}>Get Started</Button>
      </div>
    </section>
  )
}

export default Footer
