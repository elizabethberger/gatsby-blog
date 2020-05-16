import React from "react"
import { Card, CardBody } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MissionPage = () => (
  <Layout pageTitle="Misja">
    <SEO title="Dlaczego piszę?" keywords={[`gatsby`, `application`, `react`]} />
    <Card style={{ minHeight: "10%" }}>
        <CardBody>
          Moją misją jest stworzenie miejsca, w którym opisuję swoje początki w świecie IT i postępy swojej nauki. Chciałabym, aby kazdy czytelnik znalezazł tu coś dla siebie.
        </CardBody>
    </Card>
  </Layout>
)

export default MissionPage