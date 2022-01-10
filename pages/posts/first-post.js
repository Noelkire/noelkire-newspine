import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const ProfileImage = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
)

export default function ProjectPage() {
    return (
      <>
      <Head>
        <title>First Post</title>
      </Head>
      <ProfileImage></ProfileImage>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </>
    )
  }