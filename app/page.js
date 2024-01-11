"use client"

import { useState } from "react"

export default function Home() {
  const [text, setText] = useState("Sample")
  return (
    <main className="bg-black pt-4 pr-4 pb-4 pl-10 text-white">
      <div className="mb-5">
        <b>Email&#58;</b> softwareprotips@gmail.com<br/> 
      </div>
    <div>
      <div className="mb-4 flex justify-center underline decoration-gray-500">
        <h1 className="text-orange-500 text-center text-xl md:text-2xl font-bold">E-Commerce Systems</h1>
      </div>
      <p className=" mb-4">
        You can get our business system for <span className="text-green-500">$3,000</span>. It has a lifetime warranty. Downpayment is $500. The system has a Yearly maintenance cost of $100.
      </p>
      <p className=" mb-4">
        Some of the features of this System includes:
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
        Bellow is a Sample of the System.
      </p>
      <div className="flex justify-center">
        <a onClick={() => setText("processing...")} className="no-underline bg-purple-900 hover:bg-purple-600 py-2 px-4 rounded-md cursor-pointer" target="_blank" href="https://business-website-pied.vercel.app/">{text}</a>
      </div>
    </div>
    </main>
  )
}
