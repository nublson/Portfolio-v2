module.exports = {
    siteMetadata: {
        title: `Nubelson | Full-Stack Developer`,
        description: `I’m Nubelson, a 22 years old self-taught Ful-Stack Developer, from Angola, living in Portugal.`,
        author: `Nubelson Fernandes`,
        siteUrl: "https://www.nubelson.dev",
        social: {
            username: "nubelsondev",
            email: "nubelsondev@hotmail.com",
        },
        // name of the image for social website share, should be in static folder
        imageShare: `share.svg`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                useMozJpeg: false,
                stripMetadata: true,
                defaultQuality: 80,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nubelson | Full-Stack Developer`,
                short_name: `Nubelsondev`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#F9D342`,
                display: `minimal-ui`,
                icon: `src/images/icon.svg`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
    ],
}
