import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`


function Notes() {
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
}

export default Notes;
