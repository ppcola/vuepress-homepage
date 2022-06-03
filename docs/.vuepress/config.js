module.exports = {
    title: "双喜",
    description: "双喜的个人主页。",
    head: [
        ["link", { rel: "icon", href: `/logo.jpg` }]
    ],
    base: "/",
    dest: "./dist",

    themeConfig: {
        search: false,
        nav: [
            { text: "主页", link: "/" },
            { text: "关于", link: "/about/" },
            { text: "项目", link: "/projects/" },
            { text: "GitHub", link: "https://github.com/mtobeiyf/vuepress-homepage" }
        ],
        sidebar: {
            '/guide/': genSidebarConfig('Guide')
        },
        lastUpdated: 'Last Updated'
    },

    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"));
        }
    }
};

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'customize',
            'advanced',
        ]
    }]
}