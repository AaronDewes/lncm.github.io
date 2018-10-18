import { graphql } from "gatsby"

// used in individual articles (template)
export const markdownItemFormatter = graphql`
  fragment MarkdownItemFormatter on MarkdownRemark  {
    html
    frontmatter {
      title
      author
      date(formatString: "YYYY.MM.DD")
    }
  }
`

// used in list of items (page)
export const markdownItemsFormatter = graphql`
  fragment MarkdownItemsFormatter on MarkdownRemarkConnection  {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          author
          date(formatString: "YYYY.MM.DD")
        }
        fields {
          slug
        }
      }
    }
  }
`

export const blogItemsQuery = graphql`
  fragment BlogItemsQuery on Query {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "blog" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...MarkdownItemsFormatter
    }
  }
`

export const projectItemsQuery = graphql`
  fragment ProjectItemsQuery on Query {
    allMarkdownRemark(
      filter: { fields: { template: { eq: "project" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...MarkdownItemsFormatter
    }
  }
`
