import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allNodePage {
      nodes {
        title
      }
    }
  }
`

export default ComponentName