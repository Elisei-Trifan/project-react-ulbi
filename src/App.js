import React, { useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript ', body: 'JavaScript Decription' },
    { id: 2, title: 'Node.js', body: 'Node Decription' },
    { id: 3, title: 'Python', body: 'Python Decription' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPosts = useMemo(() => {
    console.log('есть')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchadPost = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])

  function createPost(newPo) {
    setPosts([...posts, newPo])
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchadPost}
        title="Список постов про JS"
      />
    </div>
  )
}
