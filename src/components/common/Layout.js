import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link, StaticQuery, graphql } from "gatsby";
import { Navigation } from ".";
import { useLocation } from "@reach/router";

// Styles
import "../../styles/app.css";
import { PostCard } from "./PostCard";
import { About } from "./about";


/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node;
    const location = useLocation();
    return <>
        <Helmet>
            <html lang={site.lang} />
            <style type="text/css">{`${site.codeinjection_styles}`}</style>
            <body className={bodyClass} />
        </Helmet>

        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <header
                    className="site-head"
                    style={{
                        backgroundImage: `url(https://raw.githubusercontent.com/gonzalezvar/Imagenes/main/banner.png)`,
                        backgroundSize: "contain",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: "black",

                    }}
                >
                    <div className="container">
                        <div className="site-mast">
                            <div className="site-mast-left">
                                <Link to="/">
                                    <img
                                        className="site-logo"
                                        src="https://raw.githubusercontent.com/gonzalezvar/Imagenes/main/icon.png"
                                        style={{
                                            transform: "scale(2)"
                                        }}
                                    />
                                </Link>
                            </div>
                        </div>
                        {isHome ? (
                            <div className="site-banner">
                                <h1 className="site-banner-title">
                                    DopeCity
                                </h1>
                            </div>
                        ) : null}
                        <nav className="site-nav">
                            <div className="site-nav-lef" style={{marginTop:"10px",marginLeft:"-10px"}}>
                                <Link
                                    className="site-nav-button"
                                    to={location.pathname == "/about/" ? "/": "/about"} 
                                >
                                    {location.pathname !== '/about/' ? "Sobre nosotros": "Inicio"}
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                <main style={{display:"flex",flexDirection:"column",alignContent:"center",justifyContent:"center"}}>
                {location.pathname === '/about/' ? <About/>: <PostCard/>}
                </main>
            </div>

            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    
                </footer>
            </div>
        </div>
    </>;
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
};

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`query GhostSettings {
  allGhostSettings {
    edges {
      node {
        ...GhostSettingsFields
      }
    }
  }
  file(relativePath: {eq: "ghost-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 30, height: 30, layout: FIXED)
    }
  }
}
`}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
);

export default DefaultLayoutSettingsQuery;
