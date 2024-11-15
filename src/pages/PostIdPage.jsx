/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostServece'
import Loader from '../components/UI/loader/Loader'

const PostIdPage = () => {
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])

  const [fetchPost, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComm, isCommLoading, commError] = useFetching(async (id) => {
    const response = await PostService.getCommById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPost(params.id)
    fetchComm(params.id)
  }, [])

  const params = useParams()

  return (
    <div>
      <h1>Вы открыли страницу поста с ID = {params.id}</h1>

      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}

      <h1>Комментарии</h1>
      {isCommLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((item) => (
            <div key={item.body} style={{ marginTop: '15px' }}>
              <h5> {item.email} </h5>
              <div>{item.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
