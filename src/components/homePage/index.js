import React from 'react'
import jumboData from '../../json/jumbo.json';
import faqData from '../../json/faqs.json'
import Jumbotron from './jumbotron';
import Faq from './faq';
import Footer from './footer';
import "./styles/index.scss";

const HomePage = () => {
  return (
    <div>
      {jumboData.map((item) => (
				<Jumbotron key={item.id} title={item.title} subTitle={item.subTitle} image={item.image} alt={item.alt} direction={item.direction}></Jumbotron>
			))}

      <div className="accordionContainer">
        <div className="inner">
          <h1 className="title">Frequently Asked Questions</h1>
          {faqData.map((item) => (
            <Faq key={item.id} header={item.header} body={item.body} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage