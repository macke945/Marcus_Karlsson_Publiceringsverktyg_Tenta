import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { ButtonWrapper, JobSection, JobCenter, JobButtonContainer, JobInfo, JobDate, JobDesc } from "../elements"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  console.log(data)
  // destructering
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  console.log(jobs)
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log(company, position, date, desc)

  return (
    <JobSection>
      <Title title="erfarenhet" />
      <JobCenter>
        {/* btn container */}
        <JobButtonContainer>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </JobButtonContainer>
        {/* job info */}
        <JobInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobDate>{date}</JobDate>
          {desc.map(item => {
            return (
              <JobDesc key={item.id}>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </JobDesc>
            )
          })}
        </JobInfo>
      </JobCenter>
      <ButtonWrapper>
        Mitt CV
      </ButtonWrapper>
    </JobSection>
  )
}

export default Jobs
