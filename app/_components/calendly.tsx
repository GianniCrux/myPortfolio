"use client";

import { InlineWidget } from "react-calendly"

export const Calendly = () => {
    return (
        <div className="gap-8">
        <h3 data-aos="slide-up" className="text-xl font-semibold mb-4">Schedule a Call</h3>
        <InlineWidget
          data-aos="zoom-up"
          url="https://calendly.com/gianni-disti"
          styles={{ height: '650px' }}
        />
      </div>
    )
}