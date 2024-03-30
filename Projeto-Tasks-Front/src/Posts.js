import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
query NewQuery {
    posts {
      nodes {
        title
        content
        status
        date
      }
    }
  }
`

const Posts = () => {
    const { loading, error, data } = useQuery(POSTS_QUERY);
    const posts = data?.posts.nodes;

    if(loading) return <p>Loading Posts...</p>
    if(error) return <p>Error</p>;

    return (
        posts.map(({content, date, status, title}, index) =>  {
            return (
                <div key={index}>
                    <h3>{title}</h3>
                    <div>
                        <span>{date}</span>
                        <div dangerouslySetInnerHTML={{__html: content}}></div>
                        <div>{status}</div>
                    </div>
                </div>
            )
        })
    )
}

export default Posts;