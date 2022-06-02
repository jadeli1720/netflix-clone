import React from 'react'
import Header from './header';
import Jumbotron from './jumboTron';
import Faq from './faq';
import faqData from '../../json/faqs.json'
import OptForm from './optForm';
import Footer from './footer';
import "./styles/index.scss";

//TODO:overall need to make things big or small based on screen size. 

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Jumbotron/>
      <div className="accordionContainer">
        <div className="inner">
          <h1 className="title">Frequently Asked Questions</h1>
          {faqData.map((item) => (
            <Faq key={item.id} header={item.header} body={item.body} />
          ))}
          <OptForm/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage