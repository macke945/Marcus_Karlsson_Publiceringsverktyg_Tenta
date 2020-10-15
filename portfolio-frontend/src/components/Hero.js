import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>I'm Marcus</h1>
            <div className="underline"></div>
            <h4>Student inom TUC Linköping</h4>
            - Arbetar just nu på en social media sida
            <br />
            - Har programmerat sedan 2017
            <br />
            - framtida mål är att bli en frontend programmerare
            <br />
            - Kontakta mig med knappen nedan
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}
export default Hero
