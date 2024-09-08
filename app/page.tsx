import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
import ImgCards from '@/Components/ImgCards'
import Menu from '@/Components/Menu'
import Paragraph from '@/Components/Paragraph'
import React from 'react'

const page = () => {
  return (
    <div>
      <Menu/>
      <Cards/>
      <Paragraph/>
      <ImgCards/>
      <Footer/>
    </div>
  )
}

export default page
