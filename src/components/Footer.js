import React from 'react'

import logo from '../img/svg/OpenInfraFoundation-logo-RGB-horiz-w.svg'

import content from '../content/footer-nav.json'
import LinkComponent from './LinkComponent'

const Footer = class extends React.Component {  
  render() {

    const {sections, footerBar} = content;
    
    return (
    <React.Fragment>
      <footer className="footer is-dark">
        <div className="footer-container1">
          <div className="footer-container-child1">
            <div className="footer-container">
              {sections.map((s, index) => {
                return (
                  <div className="footer-container-child" key={index}>
                    <h6 className="footer-title">{s.title}</h6> 
                    <hr /> 
                    <ul className="footer-list nobullet">
                      {s.nav.map((li, index) => {
                        return (
                          <li className="item-no-bullet" key={index}>
                            <LinkComponent href={li.link}>{li.text}</LinkComponent>
                          </li>
                        )
                      })}                                            
                    </ul>                            
                  </div>
                )
              })}              
            </div>
          </div> 
          <div className="footer-container-child1 footer-container1-child-right">
            <div className="nav-brand">
              <LinkComponent href="/" className="router-link-active">
                <div className="logo-containter">
                  <div className="logo-containter-child logo-containter-child-img">
                    <img src={logo} alt="Open Infrastructure Foundation" />
                  </div>
                </div>
              </LinkComponent>
            </div>
          </div>
        </div>
      </footer>
      { footerBar &&
      <div className="bar-footer is-dark-gray">
        <div className="container">
          <div className="bar-footer-inner">
            <div className="bar-footer-entry">
              <LinkComponent href={footerBar.privacy.url}>{footerBar.privacy.text}</LinkComponent> | <LinkComponent href={footerBar.legal.url}>{footerBar.legal.text}</LinkComponent>
            </div> 
            <div className="bar-footer-entry bar-footer-entry-right">
              {footerBar.text}
            </div>
          </div>
        </div>
      </div>
      } 
    </React.Fragment>
    )
  }
}

export default Footer
