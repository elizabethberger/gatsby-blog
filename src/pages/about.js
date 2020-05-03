import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { Button, Card, CardText, CardBody, CardTitle, Row } from "reactstrap"
import MyImage from "../images/ja_2.jpg"
import { slugify } from "../util/utilityFunctions"

const AboutPage = () => (
  <Layout pageTitle="Who Am I?">
    <SEO title="Author" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-5">
        <img src={MyImage} style={{ maxWidth: "100%" }} alt="Ela profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button
              classname="text-uppercase"
              color="primary"
              href={`/author/${slugify(authors[0].name)}`}
            >
              Zobacz posty
            </Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default AboutPage
