// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => {
  const add = 10
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent,
          onToggleShowLeftNavbar,
          onToggleShowRightNavbar,
        } = value
        const onClickContent = () => {
          onToggleShowContent()
        }
        const onClickLeft = () => {
          onToggleShowLeftNavbar()
        }
        const onClickRight = () => {
          onToggleShowRightNavbar()
        }
        return (
          <div className="top-container">
            <div className="top-body">
              <h1>Layout</h1>
              <form>
                <div className="checkbox-div">
                  <input
                    type="checkbox"
                    name="1"
                    value="content"
                    id="content"
                    onClick={onClickContent}
                  />
                  <label htmlFor="content">Content</label>
                </div>
                <div className="checkbox-div">
                  <input
                    type="checkbox"
                    id="left-navbar"
                    onClick={onClickLeft}
                  />
                  <label htmlFor="left-navbar">Left Navbar</label>
                </div>
                <div className="checkbox-div">
                  <input
                    type="checkbox"
                    id="right-navbar"
                    onClick={onClickRight}
                  />
                  <label htmlFor="right-navbar">Right Navbar</label>
                </div>
              </form>
            </div>
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
    /* <div className="top-container">
      <div className="top-body">
        <h1>Layout</h1>
        <div className="checkbox-div">
          <input type="checkbox" id="content" onClick={onClickContent} />
          <label htmlFor="content">Content</label>
        </div>
        <div className="checkbox-div">
          <input type="checkbox" id="left-navbar" onClick={onClickContent} />
          <label htmlFor="left-navbar">Left Navbar</label>
        </div>
        <div className="checkbox-div">
          <input type="checkbox" id="right-navbar" onClick={onClickContent} />
          <label htmlFor="right-navbar">Right Navbar</label>
        </div>
      </div>
    </div> */
  )
}

export default ConfigurationController
