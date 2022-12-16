import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'
import styles from '../styles/Home.module.css'

const Page: NextPageWithLayout = () => {
  return(
    <div className="content">
      <div className={styles.headline}>
        <div className={styles.headlineContent}>
        <h1>
            Hi there! I’m a Vegan Anteater.
          </h1>
          <p>
            <br></br>
            I’m a student studying Computer Science at Brown University.
            <br></br>I believe in building accessible products to place the user-first.
            <br></br>I’m a  <b className={styles.primaryBold}>designer</b> and <b className={styles.primaryBold}>researcher</b>.
            <br></br><br></br> <b>Take a look at some of my work below: </b>
          </p>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page