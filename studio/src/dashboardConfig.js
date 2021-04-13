export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607561e37f0875899957deab",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-o9dfbib7",
                  apiId: "8826df18-8366-4d34-a6c5-5624b92192c3",
                },
                {
                  buildHookId: "607561e31fa930931121971a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-33yqhasa",
                  apiId: "8ce5da43-856b-45a5-bde1-7bef3679ef03",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aanton-g/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-33yqhasa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
