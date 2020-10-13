import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="Something went wrong">
    <SEO title="404: Not found" /> Coś poszło nie tak :( <br></br><br></br>
    <Link className="btn btn-primary text-uppercase" to={"/"}>
      Strona główna
    </Link>
  </Layout>
)

export default NotFoundPage
