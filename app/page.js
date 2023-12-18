"use client"

import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("Sample")
  return (
    <main className="bg-black pt-4 pr-4 pb-4 pl-10 text-white">
      <div className="mb-5">
        Blue Tech <br/> 
        Juja, Opposite Carnation House <br/> 
        <b>Email&#58;</b> softwareprotips@gmail.com<br/> 
      </div>
    <div className="mb-4 flex justify-center underline decoration-gray-500">
      <h1 className="text-orange-500 text-xl md:text-2xl font-bold">Coding Program</h1>
    </div>
    <div>
      <p className="indent-10 mb-4">
        If you are interested in learning how to code, then you are at the right place. If you join our program, you will have an opportunity to learn coding for as long as you want and only pay for the bootcamp which will be a duration of 6 Months. The total lessons will be 120, and each lesson will be <span className="text-green-500">500 Ksh for Kenyan Citizens</span> and <span className="text-green-500">$10 for foreigners</span>. After the 6 months, we will be meeting twice a week to learn more about coding and evaluate projects that we will be working on.
      </p>
      <p className="indent-10 mb-4">
        We will be operating online using Zoom and enrolments will be at the beginning of every month. For those who prefer physical classes, we can be meeting in Juja. Always remember that to be good at any skill, the learning process should never end. By joining our program, we will teach you how to use: 
      </p>
      <div className="flex justify-center text-green-500 mb-6">
        <div>
          <span>&#8226; HTML - &#123;markup language&#125;</span> <br/>
          <span>&#8226; CSS  - &#123;styling language&#125;</span> <br/>
          <span>&#8226; Tailwind - &#123;CSS library&#125;</span> <br/>
          <span>&#8226; JavaScript - &#123;programming language&#125;</span> <br/>
          <span>&#8226; Reactjs - &#123;JavaScript library&#125;</span> <br/>
          <span>&#8226; Nextjs - &#123;Reactjs framework&#125;</span> <br/>
          <span>&#8226; Managing database using MongoDB</span> <br/>
          <span>&#8226; How to create Mobile Applications</span> <br/>
          <span>&#8226; How to create Websites</span> <br/>
          <span>&#8226; How to secure websites and applications</span> <br/>
        </div>
      </div>
      <div className="mb-4 flex justify-center underline decoration-gray-500">
        <h1 className="text-orange-500 text-center text-xl md:text-2xl font-bold">E-Commerce Websites Available</h1>
      </div>
      <p className="indent-10 mb-4">
        You can get a warranty to use any of our business systems for a maximum of <span className="text-green-500">50 years!</span>. The price tag for the warranty depends with your location&#58;
      </p>
      <div className="flex justify-center mb-4">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Kenya</th>
              <th>Rest of Africa</th>
              <th>Outside Africa</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Warranty</td>
              <td>250,000 Ksh</td>
              <td>$3000</td>
              <td>$3500</td>
              <td>50 Years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className=" mb-4">
        Some of the features of our E-Commerce Website includes:
      </p>
      <div className="flex justify-center text-green-500 mb-6">
        <div>
          <span>&#8226; Supports Visa Cards transactions</span> <br/>
          <span>&#8226; Supports Master Cards transactions</span> <br/>
          <span>&#8226; Supports M-Pesa transactions</span> <br/>
          <span>&#8226; You can add unlimited number of products</span> <br/>
          <span>&#8226; The website has multiple Themes</span> <br/>
          <span>&#8226; The website comes with its own Administation Panel</span> <br/>
          <span>&#8226; There is a separate section for inquiries</span> <br/>
          <span>&#8226; There is a separate section for updates</span> <br/>
          <span>&#8226; You can filter products in the category section</span> <br/>
        </div>
      </div>
      <p className="mb-4">
        Click the button bellow to test the E-Commerce website.
      </p>
      <div className="flex justify-center">
        <a onClick={() => setText("processing...")} className="no-underline bg-purple-900 hover:bg-purple-600 py-2 px-4 rounded-md cursor-pointer" target="_blank" href="https://business-website-pied.vercel.app/">{text}</a>
      </div>
      <div className="mt-10">
        <span>Yours Sincerely,</span> <br/>
        <span>Moses Maina Mathai</span> <br/>
        <span>Senior Full Stack Developer</span> <br/>
      </div>
    </div>
    </main>
  )
}
