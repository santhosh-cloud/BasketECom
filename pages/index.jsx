import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import axios from 'axios'

const Home = ({ data }) => {
  const { data: session, status } = useSession()
  console.log(data)
  if (status === 'loading') {
    return <div>loading</div>
  }
  if (status === 'unauthenticated') {
    return (
      <div>
        <Login />
      </div>
    )
  } else {
    return (
      <div>
        <div className="bg-gray-50 px-4 py-4">
          <Header />
          <div className="mt-4">
            <Searchbar />
          </div>
          <div className="mt-4">
            <Banner />
          </div>
          <div className="mt-4">
            <Categories />
          </div>
          <div className="mt-4">
            <BestSellers data={data} />
          </div>
        </div>
        {/* <div className="sticky bottom-0 bg-gray-50">
          <Navbar />
        </div> */}
      </div>
    )
  }
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://basket-git-dev-santhosh-cloud.vercel.app/api/products`
  )

  const data = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
