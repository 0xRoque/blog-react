import { Container } from "reactstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDetails } from "../../components/postdetails";
interface PostProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
}

function PostPage() {
  const [post, setPost] = useState<PostProps | undefined>();
  const { id } = useParams();

  useEffect(() => {
    fetch("/posts.json")
      .then((resp) => resp.json())
      .then((resp: PostProps[]) => {
        const currentPost = resp.find((item) => item.id === id);
        setPost(currentPost);
      });
  }, [id]);

  if (!post) {
    return <div>Post não existe</div>;
  }

  return (
    <Container>
      <PostDetails
        imgUrl={post.imageUrl}
        title={post.title}
        description={post.description}
      />
    </Container>
  );
}

export default PostPage;
