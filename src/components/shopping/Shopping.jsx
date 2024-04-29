import'./shopping.scss'
import next from './img/next.png'

const Shopping = () => {
  return (
    <>
        <div className='shopping'>
            <div className='shoppping__container'>
                <div className='shopping__centerText'>
                    <ul>
                        <li>Home <img src={next} alt="" /></li>
                        <li>Shop</li>
                    </ul>
                    <h2>Shop Page</h2>
                    <p>Let’s design the place you always imagined.</p>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Shopping