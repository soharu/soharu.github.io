---
title: 글꼴 설정하기
layout: post
date: 2019-09-29 13:00:00+0900
tags:
  - housekeeping
  - GatsbyJS
  - Google Fonts
---

[레이아웃과 스타일링](https://soharu.github.io/posts/2019-09-17-Layout-and-Styling-in-Gatsby/)에서 빠뜨린 글꼴 설정에 대해 다뤄보고자 한다.

### gatsby-plugin-typography

[gatsby-plugin-typography](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/)는 [Typography.js](https://kyleamathews.github.io/typography.js/)를 사용하기 쉽도록 해주는 플러그인이다.

[Typography.js](https://kyleamathews.github.io/typography.js/)에서 각 테마가 적용된 모양을 미리 보고, 맘에 드는 것 하나를 골라서 사이트에 적용하면 끝이다. (참 쉽죠?)

플러그인 설치와 사용 방법은 [gatsby-plugin-typography](https://www.gatsbyjs.org/packages/gatsby-plugin-typography/) 페이지에 자세히 나와 있으므로 생략하고, 이 글에서는 `Typography` 객체를 직접 만들어 사용하는 경우에 대해서 설명하려고 한다.

### Google Fonts 적용하기

처음에는 테마 중에 적당한 것을 골라서 사이트에 적용했는데 아무래도 영문 글꼴 기준이라 그런지 사이트에 적용된 한글 글꼴이 마음에 들지 않았다. 그렇다고 영어로 글을 쓸 수도 없고... 🤦‍♀️

[Google Fonts](https://fonts.google.com/)에서 제공하는 한글 글꼴를 사용하려고 [Using Google Fonts](https://www.gatsbyjs.org/docs/recipes/#using-google-fonts)를 보다가 Typography.js에 Google Fonts를 사용할 수 있는 옵션이 있다는 것을 알게 되었다.

[관련 문서](https://www.gatsbyjs.org/docs/typography-js/)에 나온 예시로는 충분하지 않아서 [다른 테마의 설정](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-alton/src/index.js)을 참고하여 필요한 설정만 추가했다. 글꼴은 구글에서 만든 [Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans+KR)과 [Noto Serif KR](https://fonts.google.com/specimen/Noto+Serif+KR)을 사용했다.

```js:title=src/utils/typography.js
import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Noto Serif KR",
      styles: ["400", "700"],
    },
    {
      name: "Noto Sans KR",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Noto Sans KR", "sans-serif"],
  bodyFontFamily: ["Noto Serif KR", "serif"],
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
```

이제 우리말로 쓴 글이 글이 더욱 보기 좋아졌다.

하지만 사이트 제목이나 메뉴의 글꼴은 좀 심심(?)해진 것 같다. 좀 더 그래픽컬한 글꼴을 사용하고 싶은데 어떻게 할 수 있을까?

간단하다.

Google Fonts에서 멋진 글꼴을 찾아내서, `googleFonts`에 해당 글꼴의 설정을 추가하고, 원하는 요소의 스타일에 직접 `font-family`를 설정해주면 된다.

```js
googleFonts: [
  {
    name: "Lobster",
    styles: ["400"],
  },
  ...
]
```

```js:title=src/components/header.js
const SiteTitle = styled.h1`
  font-family: 'Lobster', cursive;
  ...
`
```

이제 원하는 글꼴을 원하는 곳에 적용할 수 있게 되었다! 🥳
