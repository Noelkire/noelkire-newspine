import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>i like working in 3d</p>
        <ul>
          <li>iOS and macOS Development</li>
          <li>3D AR</li>
          <li>DIY</li>
        </ul>
        <p>
          Twitter:
          GitHub:
          LinkedIn:
          Instagram:
        </p>
      </section>
    </Layout>
  )
}