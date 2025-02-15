import React from 'react'

export const Cine = () => {
  return (
    <div>
        <section className="relative h-screen overflow-hidden">
            <video
            loop
            playsInline
            controls
            className="absolute z-10 w-full h-full object-cover"
            >
            <source src="assets/Download.mp4" type="video/mp4" />
            </video>
        </section>
    </div>
  )
}
