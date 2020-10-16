import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { Underline, HeroHeader, HeroImage, HeroCenter, HeroButton, HeroInfo, HeroWrapper } from "../elements"
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
    <HeroHeader>
      <HeroWrapper>
        <HeroInfo>
          <HeroCenter>
            <h1>I'm Marcus</h1>
            <Underline></Underline>
            <h4>Student inom TUC Linköping</h4>
            - Arbetar just nu på en social media sida
            <br />
            - Har programmerat sedan 2017
            <br />
            - framtida mål är att bli en frontend programmerare
            <br />
            - Kontakta mig med knappen nedan
            <br />
            <HeroButton to="/contact">
              kontakta mig
            </HeroButton>
            <SocialLinks />
          </HeroCenter>
        </HeroInfo>
        <HeroImage fluid={fluid}/>
      </HeroWrapper>
    </HeroHeader>
  )
}
export default Hero
