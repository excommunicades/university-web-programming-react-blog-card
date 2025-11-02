import '../Card.css';

export default function BlogCard({ image, category, title, description, author, avatar }) {
  return (
    <article className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-category">{category}</p>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <div className="blog-author">
          <img src={avatar} alt={author} className="author-avatar" />
          <span className="author-name">{author}</span>
        </div>
      </div>
    </article>
  );
}
