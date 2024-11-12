import React, { useRef, useState } from 'react'
import MyButton from './components/UI/button/MyButton'
import './styles/App.css'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Decription' },
    { id: 2, title: 'JavaScript 2', body: 'Decription' },
    { id: 3, title: 'JavaScript 3', body: 'Decription' },
  ])
  const [post, setPost] = useState({ title: '', body: '' })

  // const bodyInputRef = useRef()

  function addNewPost(e) {
    e.preventDefault()
    const newPost = {
      title: post.title,
      body: post.body,
      id: Date.now(),
    }
    setPosts([...posts, newPost])
    setPost((prev) => ({
      ...prev,
      title: '',
      body: '',
    }))
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={(e) =>
            setPost((prev) => ({
              ...prev,
              title: e.target.value,
            }))
          }
        />

        {/* Неуправляемый компонент
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" /> */}

        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) =>
            setPost((prev) => ({
              ...prev,
              body: e.target.value,
            }))
          }
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов про JS" />
    </div>
  )
}
