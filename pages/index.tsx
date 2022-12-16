import styles from '../styles/Home.module.css'
import NavigationBar from '../components/NavigationBar'
import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snazzy Portfolio</title>
      </Head>
      <NavigationBar/>
      <div className={styles.pageWrapper}>
        <div className={styles.headline}>
          <div className={styles.headlineContent}>
          <img className={styles.portrait} src="portrait.png"/>
          <h1>
              Hi there! I’m a Vegan Anteater.
            </h1>
            <p>
              <br></br>
              I’m a student studying Computer Science at Brown University.
              <br></br>I believe in building accessible products to place the user-first.
              <br></br>I’m a  <b className={styles.primaryBold}>designer</b> and <b className={styles.primaryBold}>researcher</b>.
              <br></br><br></br> <h3>Take a look at some of my work below ↓ </h3>
            </p>

          </div>
        </div>

        <div className={styles.gallery}>

          <div className={styles.project}>
            <Link href="/exploreri">
              <img className={styles.projectImage} src="images/exploreri-card.jpg"/>
              <div className={styles.projectInfo}>
                <div className={styles.projectInfoContent}>

                  <div className={styles.badges}>
                    <span className={styles.badge}>UI/UX Design</span>
                    <span className={styles.badge}>User Research</span>
                    <span className={styles.badge}>HTML/CSS</span>
                  </div>

                  <h2>Explore Rhode Island</h2>
                  <p>Redesigning public park information in Providence, RI</p>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.project}>
            <Link href="/circular">
              <img className={styles.projectImage} src="images/circular-card.jpg"/>
              <div className={styles.projectInfo}>
                <div className={styles.projectInfoContent}>
                  <div className={styles.badges}>
                    <span className={styles.badge}>UI/UX Design</span>
                    <span className={styles.badge}>User Research</span>
                    <span className={styles.badge}>User Testing</span>
                  </div>
                  <h2>Circular</h2>
                  <p>Designing for accessible technology rentals</p>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.project}>
            <Link href="/pokemon-ranch">
              <img className={styles.projectImage} src="images/pokemon-card.jpg"/>
              <div className={styles.projectInfo}>
                <div className={styles.projectInfoContent}>
                  <div className={styles.badges}>
                    <span className={styles.badge}>UI/UX Design</span>
                    <span className={styles.badge}>Web App</span>
                    <span className={styles.badge}>React/CSS/JS</span>
                  </div>
                  <h2>Honeydew Pokemon Ranch</h2>
                  <p>Interactive React web app to browse and make a team from certified cute pokemon</p>
                </div>
              </div>
            </Link>
          </div>

          <div className={styles.project}>
            <Link href="/checkin">
              <img className={styles.projectImage} src="images/checkin-card.jpg"/>
              <div className={styles.projectInfo}>
                <div className={styles.projectInfoContent}>
                <div className={styles.badges}>
                    <span className={styles.badge}>User Research</span>
                    <span className={styles.badge}>Storyboarding</span>
                    <span className={styles.badge}>Persona Mapping</span>
                  </div>
                  <h2>Health Services Check In</h2>
                  <p>Studying the state of clinical care from a UX perspective at Brown University</p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
