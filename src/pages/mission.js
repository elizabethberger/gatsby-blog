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
        Strona powstała aby dzielić się wiedzą, inspirować ludzi, który chcą rozwijać swoją wiedzę z zakresu testowania.
      </CardBody>
    </Card>
  </Layout>
)

export default MissionPage
