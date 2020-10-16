import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import { Section, SectionCenter, BlogButton } from "../elements"
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
        <BlogButton to="/blog">
          Alla artiklar
        </BlogButton>
      )}
    </Section>
  )
}
export default Blogs
