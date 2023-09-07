import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi im Jhenno!</p>
        <p>Hello, I'm Jhenno, a 22-year-old with a love for playing basketball, hitting the gym, and listening to rap, phonk, and lo-fi </p> 
        <p> I dove into the world of esports at 18 and currently play as a professional Valorant player for NAOS ESPORTS. But right now, I took break and am here to take my remaining dropped subjects because of my interfering schedule. My passion merges with my job. Beyond esports, I do a bit of game development and 3D modeling, and I have studied sound engineering online. Though I'll admit, numbers and math are not really my thing.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}