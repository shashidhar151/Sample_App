import './index.css'

const NotFound = () => (
        <div className='notFound-container whiteBgColor'>
          <img
            className="notFound-logo"
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h1 className='notFoundHeading blackColor'>Lost Your Way?</h1>
          <p className='para blackColor'>
            we cannot seem to find the page you are looking for.
          </p>
        </div>
      
)

export default NotFound
