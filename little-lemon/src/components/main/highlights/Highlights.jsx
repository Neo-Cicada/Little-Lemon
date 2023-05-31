import React from 'react'
import './highlights-styles/highlights.css'
import Card from './highlights-components/Card'
import Salad from '../main-assets/greek salad.jpg'
import Brucheta from '../main-assets/bruchetta.svg'
import Lemon from '../main-assets/lemon dessert.jpg'
export default function Highlights() {
  const item1 = {
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic. ',
     name: 'Greek Salad',
    price: '$12.99'
  }
  const item2 = {
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    name: 'Bruchetta',
    price: '$ 5.99'
  }
  const item3 = {
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic.',
    name: 'Lemon Dessert',
    price: '$ 5.00'
  }
  return (
    <>
      <div className='highContainer'>
        <div className='headContainer'>
          <h1>Specials</h1>
          <button>Online Menu</button>
        </div>
        <div className='bodyLights'>
          <div className='item'>
            <Card
              description={item1.description}
              image={Salad}
              name={item1.name}
              price={item1.price}
            />
          </div>
          <div className='item'>
            <Card
              image={Salad}
              name={item2.name}
              price={item2.price}
              description={item2.description}
            />
          </div>
          <div className="item">
            <Card
              image={Lemon}
              name={item3.name}
              price={item3.price}
              description={item3.description}
            />
          </div>

        </div>
      </div>
    </>
  )
}
