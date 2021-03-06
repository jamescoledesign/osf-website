import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import ContactInformation from '../components/ContactInformation'
import HeaderStaff from '../components/HeaderStaff'

import metadata from '../content/site-metadata.json'
import LinkComponent from '../components/LinkComponent'

export const StaffPageTemplate = ({
  seo,
  header, 
  banner,
  members,
  support,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content  

  return (
    <div>
      {seo && 
      <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>        
        {seo.description && <meta name="description" content={seo.description} />}
        {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}        
        {seo.url && <meta property="og:url" content={seo.url} />}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.twitterUsername && (
          <meta name="twitter:creator" content={seo.twitterUsername} />
        )}        
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}          
      </Helmet>
      }
      <div className="wrapper project-background">
        <TopBar />
        <Navbar />
        <Header title={header.title} subTitle={header.subTitle} link={header.link}/>
      </div>    
      
      <main className="main">
        <div className="content">
          <HeaderStaff banner={banner}/>
          <section className="aboutstaff-s2-main container">
            {members.map((member, index) => {              
              return (
                <div className="aboutstaff-s2-container" key={index}>
                  <div className="aboutstaff-s2-container-border">
                    <div className="card-social-container-icons">
                      <LinkComponent href={member.openStack}>
                        <img src="/img/symbols/icon-1.svg" alt="icon" className="card-social-icons" />
                      </LinkComponent>
                      {member.twitter &&
                      <LinkComponent href={member.twitter}>
                        <img src="/img/symbols/icon-3.svg" alt="icon" className="card-social-icons" />
                      </LinkComponent> 
                      }
                      {member.linkedin &&
                      <LinkComponent href={member.linkedin}>
                        <img src="/img/symbols/icon-4.svg" alt="icon" className="card-social-icons" />
                      </LinkComponent>
                      }
                    </div> 
                    <div className="card">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-128x128">                              
                              <img src={!!member.picture.childImageSharp? member.picture.childImageSharp.fluid.src: member.picture} alt="" />
                            </figure>
                          </div> 
                          <div className="media-content">
                            <p className="title is-4 card-text-color">{member.name}</p> 
                            <p className="is-6">{member.title}</p> 
                            <p className="is-6" dangerouslySetInnerHTML={{__html: member.description}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}            
          </section>
          <section className="aboutstaff-s2-main container">
            <div className="aboutstaff-s2-container">
              <div className="fix-h3">{support.title}</div>
            </div> 
            {support.members.map((member, index) => {
              return (
                <div className="aboutstaff-s2-container" key={index}>
                  <div className="aboutstaff-s2-container-border">
                    <div className="card-social-container-icons">
                      {member.openStack &&
                        <LinkComponent href={member.openStack}>
                          <img src="/img/symbols/icon-1.svg" alt="icon" className="card-social-icons" />
                        </LinkComponent>
                      }
                    </div> 
                    <div className="card">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-left">
                            <figure className="image is-128x128">
                              <img src={!!member.picture.childImageSharp? member.picture.childImageSharp.fluid.src: member.picture} alt="" />
                            </figure>
                          </div> 
                          <div className="media-content">
                            <p className="title is-4 card-text-color">{member.name}</p> 
                            {member.title &&
                              <p className="is-6">{member.title}</p> 
                            }
                            <p className="is-6" dangerouslySetInnerHTML={{__html: member.description}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              )
            })}            
          </section>
          <ContactInformation />
        </div>
      </main>
    </div>
  )
}

StaffPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  banner: PropTypes.object,
  members: PropTypes.array,
  support: PropTypes.object,
}

const StaffPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <StaffPageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        header={post.frontmatter.header}
        banner={post.frontmatter.banner}
        members={post.frontmatter.members}
        support={post.frontmatter.support}
        content={post.html}
      />
    </Layout>
  )
}

StaffPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default StaffPage

export const staffPageQuery = graphql`
  query StaffPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        header {
          title
          subTitle
          link {
            url
            text
          }
        }
        banner {
          title
          subTitle
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          button {
            text
            url
          }
        }
        members {
          name
          picture {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          description
          openStack
          twitter
          linkedin
        }
        support {
          title
          members {
            name
            picture {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            title
            description
            openStack            
          }
        }
      }
    }
  }
`
