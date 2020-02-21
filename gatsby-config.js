module.exports = {
    siteMetadata: {
        title: `Nubelson | Full-Stack Developer`,
        description: `I’m Nubelson, a 22 years old Ful-Stack Developer, from Angola, living in Portugal.`,
        author: `Nubelson Fernandes`,
        siteUrl: "https://nubelson.dev",
        social: {
            username: "nubelsondev",
            email: "nubelsondev@hotmail.com",
        },
        // name of the image for social website share, should be in static folder
        imageShare: `share.png`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-158868946-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nubelson | Full-Stack Developer`,
                short_name: `Nubelson`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#828282`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        `gatsby-plugin-offline`,
    ],
}
