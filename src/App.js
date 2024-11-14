import React, { useEffect, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePost } from './hooks/usePost'
import PostService from './API/PostServece'
import Loader from './components/UI/loader/Loader'
import { useFetching } from './hooks/useFetching'

export default function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalCount, setTotalCount] = useState(0)

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll()
    setPosts(response.data)
    console.log(response.headers['x-total-count'])

    setTotalCount(response.headers['x-total-count'])
  })

  const sortedAndSearchadPost = usePost(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPost()
  }, [])

  function createPost(newPo) {
    setPosts([...posts, newPo])
    setModal(false)
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>Произошла ошибка {postError} </h1>}

      {isPostLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchadPost}
          title="Список постов про JS"
        />
      )}
    </div>
  )
}
