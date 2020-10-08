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
        Moją misją jest stworzenie przestrzeni, która będzie inspirowała młodych adeptów testowania ale równiez ekspertów w tej dziedzinie.
      </CardBody>
    </Card>
  </Layout>
)

export default MissionPage
