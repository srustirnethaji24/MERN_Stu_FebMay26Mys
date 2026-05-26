import { useState, useEffect } from 'react';
import { getFeed, createPost, likePost, commentOnPost } from '../services/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [commentText, setCommentText] = useState('');
  const [activeComment, setActiveComment] = useState(null);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    try {
      const res = await getFeed();
      setPosts(res.data.posts);
    } catch (err) {
      console.error('Error fetching feed:', err);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    try {
      await createPost({ content: newPost });
      setNewPost('');
      fetchFeed();
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  const handleLike = async (postId) => {
    try {
      await likePost(postId);
      fetchFeed();
    } catch (err) {
      console.error('Error liking post:', err);
    }
  };

  const handleComment = async (postId) => {
    if (!commentText.trim()) return;
    try {
      await commentOnPost(postId, commentText);
      setCommentText('');
      setActiveComment(null);
      fetchFeed();
    } catch (err) {
      console.error('Error commenting:', err);
    }
  };

  return (
    <div style={styles.container}>
      {/* Create Post */}
      <div style={styles.createCard}>
        <form onSubmit={handleCreatePost}>
          <textarea
            placeholder="What do you want to talk about?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            style={styles.textarea}
            rows="3"
          />
          <button type="submit" style={styles.postBtn}>Post</button>
        </form>
      </div>

      {/* Posts Feed */}
      {posts.length === 0 ? (
        <p style={styles.empty}>No posts yet. Connect with people to see their posts!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} style={styles.postCard}>
            <div style={styles.postHeader}>
              <div style={styles.avatar}>{post.author?.name?.charAt(0).toUpperCase()}</div>
              <div>
                <strong>{post.author?.name}</strong>
                <p style={styles.headline}>{post.author?.headline}</p>
                <p style={styles.time}>{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
            
            <p style={styles.content}>{post.content}</p>
            
            <div style={styles.actions}>
              <button onClick={() => handleLike(post._id)} style={styles.likeBtn}>
                👍 {post.likes?.length || 0}
              </button>
              <button onClick={() => setActiveComment(activeComment === post._id ? null : post._id)} style={styles.commentBtn}>
                💬 {post.comments?.length || 0}
              </button>
            </div>

            {/* Comments */}
            {post.comments?.length > 0 && (
              <div style={styles.comments}>
                {post.comments.map((comment, i) => (
                  <div key={i} style={styles.comment}>
                    <strong>{comment.user?.name}</strong>: {comment.text}
                  </div>
                ))}
              </div>
            )}

            {/* Add Comment */}
            {activeComment === post._id && (
              <div style={styles.commentInput}>
                <input
                  type="text"
                  placeholder="Write a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => handleComment(post._id)} style={styles.sendBtn}>Send</button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '0 20px'
  },
  createCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    resize: 'vertical',
    fontSize: '14px',
    marginBottom: '8px'
  },
  postBtn: {
    backgroundColor: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '16px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  postHeader: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px'
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#0077b5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  headline: {
    color: '#666',
    fontSize: '13px',
    margin: '2px 0'
  },
  time: {
    color: '#999',
    fontSize: '12px'
  },
  content: {
    fontSize: '15px',
    lineHeight: '1.5',
    marginBottom: '12px'
  },
  actions: {
    display: 'flex',
    gap: '16px',
    borderTop: '1px solid #eee',
    paddingTop: '12px'
  },
  likeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666'
  },
  commentBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#666'
  },
  comments: {
    marginTop: '12px',
    paddingTop: '12px',
    borderTop: '1px solid #eee'
  },
  comment: {
    padding: '8px 0',
    fontSize: '14px'
  },
  commentInput: {
    display: 'flex',
    gap: '8px',
    marginTop: '12px'
  },
  input: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '16px',
    fontSize: '14px'
  },
  sendBtn: {
    backgroundColor: '#0077b5',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '16px',
    cursor: 'pointer'
  },
  empty: {
    textAlign: 'center',
    color: '#666',
    padding: '40px'
  }
};

export default Feed;