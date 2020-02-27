import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ meta, lang, title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                        author
                        siteUrl
                        googleVerification
                        social {
                            username
                        }
                        imageShare
                    }
                }
            }
        `
    )

    const metaDescription = site.siteMetadata.description
    const metaImage = `${site.siteMetadata.siteUrl}/${site.siteMetadata.imageShare}`

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title || site.siteMetadata.title}
            link={{ rel: "canonical", href: site.siteMetadata.siteUrl }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: site.siteMetadata.keywords.join(",").trim(),
                },
                {
                    name: `google-site-verification`,
                    content: site.siteMetadata.googleVerification,
                },
                {
                    property: "og:url",
                    content: site.siteMetadata.siteUrl,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `@${site.siteMetadata.social.username}`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    metaImage && [
                        {
                            property: "og:image",
                            content: metaImage,
                        },
                        {
                            name: "twitter:image",
                            content: metaImage,
                        },
                    ]
                )
                .concat(meta)}
        >
            <link rel="canonical" href={site.siteMetadata.siteUrl} />
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
}

export default SEO
