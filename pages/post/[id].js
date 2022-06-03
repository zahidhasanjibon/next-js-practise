
import React from 'react';
import Meta from '../../components/layout/Meta';
function BlogPostDetails({post}) {
  return (
    <div className='container'>
      <Meta title={post.title} descr={post.body} key={post.title} />
      <div className='row'>
      <div className='col-md-10 mt-5'>
      {
             <div key={post.id}>
             <h4>{post.title}</h4>
             <p>{post.body}</p>
   
         </div>
      }

      </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = async (context) => {

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id)
//   const post = await res.json()
//   return {
//     props:{
//       post
//     }
//   }
// }

export const getStaticProps = async (context) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id)
  const post = await res.json()
  return {
    props:{
      post
    }
  }

}
export const getStaticPaths =async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const postList = await res.json()
      const ids = postList.map((post) => post.id)
    const paths = ids.map((id) => ({params:{id:id.toString()}} ))

      return {
        paths,
        fallback:false
      }
}


export default BlogPostDetails