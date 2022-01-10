import Head from 'next/head'

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React Testing', excerpt: 'Learn React Testing' }
]


export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {posts.map((post, index) => {
          return (
            <div>
              <div>{post.title}</div>
              <div>{post.excerpt}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
