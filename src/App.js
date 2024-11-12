import React, { useMemo, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript ', body: 'JavaScript Decription' },
    { id: 2, title: 'Node.js', body: 'Node Decription' },
    { id: 3, title: 'Python', body: 'Python Decription' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [search, setSearch] = useState('')

  const sortedPost = useMemo(() => {
    console.log('есть')
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      )
    } else {
      return posts
    }
  }, [selectedSort, posts])

  function createPost(newPo) {
    setPosts([...posts, newPo])
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  function sortPosts(sort) {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placеholder="Поиск..."
        />
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
            posts={sortedPost}
            title="Список постов про JS"
          />
        )}
      </div>
    </div>
  )
}
