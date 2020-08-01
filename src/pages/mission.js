import React from "react"
import { Card, CardBody } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MissionPage = () => (
  <Layout pageTitle="Misja">
    <SEO
      title="Dlaczego piszę?"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Card style={{ minHeight: "10%" }}>
      <CardBody>
        My goal is to create a place for programming enthusiasts. I can to focus
        on javascript language tricks and basis.
      </CardBody>
    </Card>
  </Layout>
)

export default MissionPage
