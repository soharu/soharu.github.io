---
title: 내집마련 해커톤 작업노트 1편
layout: post
date: 2019-09-25 00:15:00+0900
tags:
  - housekeeping
  - Hackathon
  - GatsbyJS
  - GraphQL
---

지난 [후기](https://soharu.github.io/posts/2019-09-22-Hackathon-for-My-Own-Blog/)에 이어서 내집마련 해커톤에서 무엇을 했고, 어떤 삽질을 했는지 정리해보겠다.

[내집마련 해커톤](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5)에 참여하는 사람들은

- 내집마련
- 내집수리
- 해비타트 (팀 블로그 만들기)
- 기타 (블로그 관련 개발 등)

중에서 선택할 수 있는데 내 경우에는 **내집수리**가 목표였다.

작업 환경은 이미 설정되어 있었고 TDL 미리 정해오기가 있어서 전에 따로 정리해둔 할 일 목록 중에서 시간 안에 할 수 있을만한 것들을 몇 개 골랐다.

- 태그 수정
- 포스트 많은 순으로 태그 정렬
- 포스트에 이전, 다음 링크 달기
- 이미지 보드 만들기

앞선 세 가지 작업은 준비 운동이고, 이미지 보드를 만드는 것이 이번 해커톤의 주된 목표였다. 그리고 숨겨진 목표가 하나 더 있었는데 그것은 바로 GraphQL 데이터에서 페이지를 생성하는 방식에 대해 좀 더 깊게 이해하는 것이었다.

최근에 포스팅 하고 있는 DocPad to Gatsby 시리즈(?)의 다음 편이 바로 **마크다운에서 포스트 생성하기**인데 튜토리얼에 나온 방법을 그대로 따라 했기 때문에 글로 쓸 수 있을 정도로 머리 속이 정리된 상태가 아니기 때문이다. 그래서 관련된 작업을 하면서 기존에 적당히 읽었던 문서들을 좀 더 꼼꼼히 살펴볼 요량이었다.

하지만 **포스트에 이전, 다음 링크 달기**가 의외의 복병이라 이미지 보드 근처에는 가보지도 못했다. 삽질하면서 `gatsby-node.js`에서 page 생성에 사용하는 `context` 전달해 대한 부분은 좀 더 이해할 수 있었지만 대부분의 시간은 JavaScript 객체의 `null` 처리와 씨름해야 했다. 이 부분에 대해서는 두번째 작업로그에서 다루기로 하겠다.

초반 두 작업은 비교적 순조로웠다.

### 태그 수정

기존 포스트에 달아둔 `blogging` 태그에 더 적합한 이름을 찾아 수정해주는 작업이었다.

처음 정적 사이트로 블로그를 만들었을 때 블로그 관리와 관련된 포스트에 `blog gardening`이라는 태그를 붙였는데 정원 가꾸는 것에 대한 비유가 적절한가? 하는 생각이 들어서 Gatsby로 포스트를 옮기면서 `blogging`으로 바꿨다.

헌데 `blogging`은 말그대로 블로그를 쓰는 행위라 원래 나타내고자 했던 의미가 사라져 버렸다는 것을 뒤늦게 알아챘다. 열심히 사전을 뒤지다가 문득 이번 해커톤에서 블로그를 집에 비유한 것이 맘에 들어서 `housekeeping`(살림, 집안 돌보는 일)으로 바꿨다.

이름을 정한 후에는 단순한 문자열 치환만 해주면 끝!

자, 이제 본격적인 집안일을 시작해보자!

### 포스트 많은 순으로 태그 정렬

마크다운 문서에 포함된 모든 태그 목록을 얻으려면 `allMarkdownRemark`에서 `tags`를 추출한 다음 이를 `group`으로 묶어서 고유한 값으로 이루어진 태그 목록을 추출하면 된다.

> 참고 문서: [Make a tags index page (/tags) that renders a list of all tags](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#make-a-tags-index-page-tags-that-renders-a-list-of-all-tags)

```graphql
query {
  allPosts: allMarkdownRemark(limit: 2000) {
    tagGroup: group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }
}
```

이 Query 문을 GraphQL in-browser IDE에서 실행해 보면 `allMarkdownRemark`에 대해서는 `sort`로 정렬 조건을 걸 수 있지만 `group`에 대해서는 `sort`가 지원되지 않는다는 사실을 알 수 있다. 다시 말해 GraphQL 자체만으로는 `totalCount`가 많은 순으로 정렬된 태그 목록을 얻을 수 없다는 것이다.

때문에 Javascript에서 기본으로 제공하는 [`Array.prototype.sort()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)의 힘을 빌릴 수 밖에 없었다.

이번에도 역시 `sort()` 함수의 인자로 들어가는 `compareFunction`은 그 반환값이 형태가 C의 [`strcmp`](https://en.cppreference.com/w/c/string/byte/strcmp)와 동일하다는 것을 잊고, boolean을 반환하도록 만드는 삽질을 했다가 레퍼런스를 다시 찾아봐야 했다. (`sort()`의 더 놀라운 점은 `number` 배열을 정렬할 때, `compareFunction`을 생략하면 기본 정렬 순서가 문자열의 유니코드 코드 포인트가 적용된다는 점이겠지만...)

이런 함정을 잘 피해 코드를 작성하면 원하는 결과를 얻을 수 있다.

```javascript
// sort tags in descending order by totalCount
const sortedTags = data.allPosts.tagGroup.sort(
  (a, b) => b.totalCount - a.totalCount
)
```

이제 [Tags](http://localhost:8000/tags/) 페이지에서 내가 어떤 내용의 글을 가장 많이 썼는지 쉽게 알 수 있게 되었다. 👏

(언제 쓸지 모르는 2편에 계속...)
