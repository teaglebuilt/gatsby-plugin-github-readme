

<div align="center">
    <h1>gatsby plugin github readme</h1>
    <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-github-readme/?=gatsby-plugin-github" alt="gatsby plugin homepage">Gatsby Plugin Homepage</a>
    <p>Load github readme card components in jsx, remark, mdx.</p>
    <p>
        <img src="https://img.shields.io/npm/v/gatsby-plugin-github-readme?style=for-the-badge" alt="npm package for gatsby-plugin-github-readme">
    </p>
    <img src="https://raw.githubusercontent.com/teaglebuilt/gatsby-plugin-github-readme/master/assets/card.png" alt="Image of react card component of a github readme generated by gatsby-plugin-github-readme" width="400" height="400">
</div>

```
npm i gatsby-plugin-github-readme
```

# configuration

gatsby-config.js
```js
plugins: [
    {
      resolve: `gatsby-plugin-github-readme`,
      options: {
        key: 'GITHUB API KEY',
        repos: [
          "user/repo",
          "user/repo"
        ]
      }
    }
]
```


```js
import { GithubReadme } from "gatsby-plugin-github-readme";

export default () => {
  <GithubReadme user="user" repo="name of repo" />
}
```


# Support

Emojis are supported and rendered if in scope of what is visible. Currently g-emoji is not supported and I am working on a solution.

