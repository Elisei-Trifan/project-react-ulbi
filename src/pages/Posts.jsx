/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { usePost } from '../hooks/usePost'
import PostService from '../API/PostServece'
import Loader from '../components/UI/loader/Loader'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import Pagination from '../components/UI/pagination/Pagination'

export default function Posts() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPost, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count']

      setTotalPage(getPageCount(totalCount, limit))
    }
  )

  const sortedAndSearchadPost = usePost(posts, filter.sort, filter.query)

  useEffect(() => {}, [])

  useEffect(() => {
    fetchPost(limit, page)
  }, [page])

  function createPost(newPo) {
    setPosts([...posts, newPo])
    setModal(false)
  }

  function removePost(removePo) {
    setPosts(posts.filter((item) => item.id !== removePo.id))
  }

  const changePageMemo = useMemo(() => {
    function changePage(page) {
      setPage(page)
    }
    return changePage
  }, [page])

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

      <PostList
        remove={removePost}
        posts={sortedAndSearchadPost}
        title="Список постов про JS"
      />

      {isPostLoading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      )}

      <Pagination
        page={page}
        changePageMemo={changePageMemo}
        totalPage={totalPage}
      />
    </div>
  )
}
