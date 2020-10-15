import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { Section, SectionCenter } from "../elements"
export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <Section>
      <Title title={title} />
      <SectionCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </SectionCenter>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          Alla artiklar
        </Link>
      )}
    </Section>
  )
}
export default Blogs
