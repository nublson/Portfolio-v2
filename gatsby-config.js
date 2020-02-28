module.exports = {
    siteMetadata: {
        title: `Nubelson | Full-Stack Developer`,
        description: `I’m Nubelson, a 22 years old Ful-Stack Developer, from Angola, living in Portugal.`,
        keywords: `Nubelson Fernandes, Nubelson, Fernandes, Nubel, nubelsondev, full-stack developer, javascript, node, react, react native, front-end developer, web developer, mobile developer, designer`,
        author: `Nubelson Fernandes`,
        siteUrl: `https://www.nubelson.dev/`,
        googleVerification: `eRPme2Wzm2_bDtofxz7nq-JW-wFm2QL07QhIzJC6Xtk`,
        social: {
            username: "nubelsondev",
            email: "nubelsondev@hotmail.com",
        },
        // name of the image for social website share, should be in static folder
        imageShare: `share.jpg`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nubelson | Full-Stack Developer`,
                short_name: `Nubelson Fernandes`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#828282`,
                display: `minimal-ui`,
                icon: `src/images/icon.svg`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                // Setting a color is optional.
                color: `#F9D342`,
                // Disable the loading spinner.
                showSpinner: false,
            },
        },
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
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Roboto`,
                        variants: [`300`, `300i`, `400`, `400i`, `500`, `700`],
                    },
                ],
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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-158868946-1",
            },
        },
    ],
}
