import React from 'react'
import ContacCard from './ContactCard.js'

function App() {
  return (
    <div className="contacts">
      <ContacCard 
        contact={{name: "Max", imgUrl: "https://www.dogster.com/wp-content/uploads/2019/01/Yellow-Labrador-Retriever-happy-in-grass-.jpg", breed: "Labrador", age: "2 years"}}
        />

      <ContacCard
        contact={{name: "Sara", imgUrl: "https://kucniljubimac.com/wp-content/uploads/2018/01/engleski-koker-spanijel-stenci-cena.jpg", breed: "Cocker Spaniel", age: "2 months"}}
        /> 

      <ContacCard 
        contact={{name: "Arthur", imgUrl: "https://i.pinimg.com/736x/21/63/16/216316f5ff080e85b8e6df496b266f7d.jpg", breed: "French Bulldog", age: "3 months"}}
        /> 
    </div>
  )
}

export default App
