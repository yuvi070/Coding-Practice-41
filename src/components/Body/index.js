// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="body-div2">
              <h1>Left Navbar Menu</h1>
              <p>Item 1</p>
              <p>Item 2</p>
              <p>Item 3</p>
              <p>Item 4</p>
            </div>
          )}
          {showContent && (
            <div className="body-div1">
              <h1>Content</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="body-div2">
              <h1>Right Navbar</h1>
              <div>Ad1</div>
              <div>Ad1</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
