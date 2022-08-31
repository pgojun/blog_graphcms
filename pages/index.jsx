//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/PostCard'
import PostWidget from '../components/PostWidget'
import Categories from '../components/Categories'
import { getPosts } from "../services"
import { FeaturedPosts } from '../sections';

/* const posts = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing'
  },
  {
    title: 'React Tailwind',
    excerpt: 'Learn Tailwind Testing'
  }
] */

/* type Post = {
  title:string,
  excerpt:string
}; */

const Home = ({posts}) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>pgojun / Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts/>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {
          posts.map((post, index) => (
            <div>
              <PostCard post={post.node} key={post.title}/>
            </div>
          ))
        }
        </div>


        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
          <PostWidget/>
          <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  console.log(posts)
  return {
    props: {posts}
  }
}


export default Home


