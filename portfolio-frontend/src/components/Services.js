import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { Section, ServiceCenter, Service } from "../elements"
const Services = () => {
  return (
    <Section>
      <Title title="Tjänster" />
      <ServiceCenter>
        {services.map(service => {
          //  destructure
          const { id, icon, title, text } = service

          return (
            <Service>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </Service>
          )
        })}
      </ServiceCenter>
    </Section>
  )
}

export default Services
