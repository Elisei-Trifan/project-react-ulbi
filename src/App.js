import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Decription' },
    { id: 2, title: 'JavaScript 2', body: 'Decription' },
    { id: 3, title: 'JavaScript 3', body: 'Decription' },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  function createPost(newPo) {
    setPosts([...posts, newPo])
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  function sortPosts(sort) {
    setSelectedSort(sort)
    console.log(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка:"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
      {posts.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      ) : (
        <PostList
          remove={removePost}
          posts={posts}
          title="Список постов про JS"
        />
      )}
    </div>
  )
}
