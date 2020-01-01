---
title: Github Pages로 블로그 배포하기
layout: post
date: 2019-09-18 22:30:00+0900
tags:
- housekeeping
- GatsbyJS
---

[처음 Jekyll로 블로그를 만들었을 때는](https://soharu.github.io/posts/2014-01-25-first-step/) 공개 저장소인 [soharu.github.io](https://github.com/soharu/soharu.github.io)로 블로그를 호스팅했다.

[DocPad로 이전했을 때는](https://soharu.github.io/posts/2017-10-03-jekyll-to-docpad/) 별도 저장소를 두고 [gh-pages](https://www.npmjs.com/package/gh-pages)를 이용하여 생성된 파일을 [soharu.github.io](https://github.com/soharu/soharu.github.io)로 배포하였다. Jekyll 처럼 정적 페이지를 생성하는데 GitHub의 직접적인 지원을 받을 수 없기 때문에 별도 배포 과정이 필요했던 것 같다.

때문에 자연스럽게 블로그의 소스 저장소와 배포 저장소를 분리하게 되었는데 이때 블로그의 소스 저장소는 비공개로 두었다. 덕분에 비공개 저장소에서 맘 편하게 블로그 디자인을 개선하거나 블로그 초안을 작성하고 내용을 다듬어 적절한 시점에 배포하는 것이 가능했다

물론 초안 기능을 [Jekyll도 제공](https://jekyllrb-ko.github.io/docs/drafts/)하지만 공개 저장소에 있으면 저장소로 직접 들어와서 볼 수 있다. 비공개 저장소를 GitHub Pages로 퍼블리싱하는 것도 가능하지만 [돈이 든다](https://help.github.com/en/articles/githubs-products#github-pro).

Gatsby에서도 DocPad와 마찬가지로 gh-pages를 이용하여 사이트를 배포하기 때문에 분리된 저장소로 관리하는 이점을 누릴 수 있다.

[How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)를 보면 GitHub Pages 옵션에 따라 deploy 명령을 설정하는 방법이 나와있다.

다만 해당 문서에서는 블로그 소스와 생성된 데이터가 같은 저장소에 있는 것을 가정하고 있는데 나는 앞서 말한 바와 같이 소스 저장소(비공개)와 배포 저장소(공개)가 분리되어 있는 상황이었다.

다행히 gh-pages에서 관련 옵션을 제공하고 있다.

```sh
$ gh-pages --help
Usage: gh-pages [options]

Options:
  -V, --version            output the version number
  -d, --dist <dist>        Base directory for all source files
  -s, --src <src>          Pattern used to select which files to publish (default: "**/*")
  -b, --branch <branch>    Name of the branch you are pushing to (default: "gh-pages")
  -e, --dest <dest>        Target directory within the destination branch (relative to the root) (default: ".")
  -a, --add                Only add, and never remove existing files
  -x, --silent             Do not output the repository url
  -m, --message <message>  commit message (default: "Updates")
  -g, --tag <tag>          add tag to commit
  --git <git>              Path to git executable (default: "git")
  -t, --dotfiles           Include dotfiles
  -r, --repo <repo>        URL of the repository you are pushing to
  -p, --depth <depth>      depth for clone (default: 1)
  -o, --remote <name>      The name of the remote (default: "origin")
  -u, --user <address>     The name and email of the user (defaults to the git config).  Format is "Your Name <email@example.com>".
  -v, --remove <pattern>   Remove files that match the given pattern (ignored if used together with --add). (default: ".")
  -n, --no-push            Commit only (with no push)
  -h, --help               output usage information
```

`-r` 옵션을 이용하여 사이트를 호스팅할 저장소를 지정할 수 있다.

다음과 같이 `deploy` 명령을 설정하면 원하는 저장소로 블로그 배포가 가능하다.

```json:title=package.json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -r git@github.com:soharu/soharu.github.io.git -b master"
  }
}
```
