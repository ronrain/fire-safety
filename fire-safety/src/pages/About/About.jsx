//import
//component
import ServiceList from "../../components/ServiceList/ServiceList"
//data
import { serviceData } from "../../data/data"

const About = () => {
  return ( 
    <main>
      <h1>What We Do</h1>
      <ServiceList title="Services We Will Provide You:" service={serviceData} />
    </main>
  )
}

export default About