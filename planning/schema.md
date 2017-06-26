# Data Schemas

## Website

Contains data about the website. Has multiple `page_static` and `page_blog`.

```sql
CREATE TABLE IF NOT EXISTS website (
  id          SERIAL PRIMARY KEY NOT NULL,
  description TEXT NOT NULL,
  name        TEXT NOT NULL
);
```

## Page Static

Very simple static page to be used for homepage or about page. Belongs to a `website`.

```sql
CREATE TABLE IF NOT EXISTS page_static (
  id         SERIAL PRIMARY KEY NOT NULL,
  website_id INTEGET NOT NULL,
  title      TEXT NOT NULL,
  content    TEXT
);
```

## Page Blog

Represents a blog. Belongs to a `website`. Has multiple `blog_post`.

```sql
CREATE TABLE IF NOT EXISTS page_blog (
  id         SERIAL PRIMARY KEY NOT NULL,
  website_id INTEGER NOT NULL,
  title      TEXT NOT NULL,
  subtitle   TEXT NOT NULL
)
```

## Blog Post

A single blog posts. Belongs to a `page_blog`.

```sql
CREATE TABLE IF NOT EXISTS blog_post (
  id           SERIAL PRIMARY KEY NOT NULL,
  blog_id      INTEGER NOT NULL,
  title        TEXT NOT NULL,
  author       TEXT NOT NULL,
  content      TEXT NOT NULL,
  created_at   TIMESTAMP DEFAULT now(),
  published_at TIMESTAMP,
  tags         TEXT[],
  published    BOOLEAN DEFAULT false
)
```
