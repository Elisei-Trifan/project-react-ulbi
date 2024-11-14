import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePost } from './hooks/usePost'
import axios from 'axios'

export default function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchadPost = usePost(posts, filter.sort, filter.query)

  function createPost(newPo) {
    setPosts([...posts, newPo])
    setModal(false)
  }

  async function fetchPost() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    console.log(response.data)
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPost}>Get post</button>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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
