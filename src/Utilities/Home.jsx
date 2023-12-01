import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
      </div>
    </div>
    </>
  )
}
