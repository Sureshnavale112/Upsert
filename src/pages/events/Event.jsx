import React from 'react'
import EventCountdown from '../../components/EventCountdown/EventCountdown'
import Testimonials from '../../components/Testimonial/Testimonials'
import FeaturedEvents from '../../components/FeaturedEvents/FeaturedEvents'
import UpcomingEvent from '../../components/UpcomingEvent/UpcomingEvent'
import OurSpeakers from '../../components/OurSpeakers/OurSpeakers'


const Event = () => {
  return (
    <div>
      <EventCountdown/>
      <UpcomingEvent/>
      <FeaturedEvents/>
      <OurSpeakers/>
      <Testimonials/>
    </div>
  )
}

export default Event