// Component
import Card from '../components/Card'

// Assets
import backgroundImage from '../assets/background.jpg'

// Import styles
import './login.css'


function Login() {

  return (
    <>
      <div className='login-container'>
        <section>
            <Card/>
        </section>
        <section>
            <img
                className='login-backgroud-image'
                src={backgroundImage} 
                alt='image-login'
            />
        </section>
      </div>
    </>
  )
}

export default Login