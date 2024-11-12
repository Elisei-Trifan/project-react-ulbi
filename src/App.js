import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Decription' },
    { id: 2, title: 'JavaScript 2', body: 'Decription' },
    { id: 3, title: 'JavaScript 3', body: 'Decription' },
  ])

  function createPost(newPo) {
    setPosts([...posts, newPo])
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  // const bodyInputRef = useRef()

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList
        remove={removePost}
        posts={posts}
        title="Список постов про JS"
      />
    </div>
  )
}
