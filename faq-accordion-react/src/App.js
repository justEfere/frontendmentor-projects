import { useState } from "react";

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    content: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    title: "Is Frontend Mentor free?",
    content: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    title: "  Can I use Frontend Mentor projects in my portfolio?",
    content: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    title: "  How can I get help if I'm stuck on a Frontend Mentor challenge?",
    content: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  },

]


function App() {

  const [faq, setFaq] = useState(faqs);
  const [activeFaq, setActiveFaq] = useState(0)

  function handleActiveFaq(index) {
    setActiveFaq((currActiveFaq) => currActiveFaq === index ? null : index)
  }

  return (
    <div>
      <ResponsiveBg />

      <div className="faq">
        <FaqHeader />

        <div className="faq__content">
          {
            faq.map((faqContent, index) => <FaqItem key={index} faq={faqContent} index={index} activefaq={activeFaq} onActiveFaqUpdate={handleActiveFaq} />)
          }

        </div>
      </div>
    </div>
  )
}

function ResponsiveBg() {
  return (
    <div className="background_img">
      <picture>
        <source media="(max-width: 500px)" srcSet="assets/images/background-pattern-mobile.svg" />
        <img src="assets/images/background-pattern-desktop.svg" alt="responsive" />
      </picture>
    </div>
  )
}

function FaqHeader() {
  return (
    <div className="faq__header">
      <span className="faq__header--img">
        <img src="assets/images/icon-star.svg" alt="" className="faq__header-img" />
      </span>
      <h1>FAQs</h1>
    </div>
  )
}

function FaqItem({ faq, index, activefaq, onActiveFaqUpdate }) {
  return (
    <div className="faq__content--item">

      <div className="faq__content--item-header">
        <p className="faq__content--item-title">
          {faq.title}
        </p>
        <button className="faq__button" onClick={() => onActiveFaqUpdate(index)}>
          <img src={activefaq === index ? 'assets/images/icon-minus.svg' : 'assets/images/icon-plus.svg'} alt="" className="faq_button" />
        </button>
      </div>


      {activefaq === index && <div className="faq__content--content">
        <p className="faq__content-text">
          {faq.content}
        </p>
      </div>}
    </div>
  )
}

export default App;
