import React from "react"
import { Card, CardBody } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = () => (
  <Layout pageTitle="Wszystkie tematy">
    <SEO title="Tags page" keywords={[`gatsby`, `application`, `react`]} />
    <Card style={{ minHeight: "10%" }}>
      <CardBody></CardBody>
    </Card>
  </Layout>
)

export default Tags
