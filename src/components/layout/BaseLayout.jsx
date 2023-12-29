import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import { PageWrapper } from "../../styles/global/default"
import Footer from "../footer/Footer"

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </PageWrapper>
  )
}

export default BaseLayout
