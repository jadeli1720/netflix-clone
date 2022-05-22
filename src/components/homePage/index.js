import React from 'react'
import jumboData from '../../json/jumbo.json';
import Jumbotron from './jumbotron';
import Footer from './footer';
import "./styles/index.scss";

const HomePage = () => {
  return (
    <div>
      {jumboData.map((item) => (
				<Jumbotron key={item.id} title={item.title} subTitle={item.subTitle} image={item.image} alt={item.alt} direction={item.direction}></Jumbotron>
			))}

      <Footer/>
    </div>
  )
}

export default HomePage