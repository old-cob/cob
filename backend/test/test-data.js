const faker = require('faker');

module.exports = function() {
  const data = {
    website: [],
    page_static: [],
    page_blog: [],
    blog_post: [],
  };

  // Create fake websites
  for (let i = 1; i <= 10; i++) {
    data.website.push({
      id: i,
      name: faker.lorem.slug(),
      description: faker.lorem.sentence(),
    });
  }

  // Create fake static pages
  for (let i = 1; i <= 100; i++) {
    data.page_static.push({
      id: i,
      website_id: faker.random.number(10),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(10),
    });
  }

  // Create fake blog pages
  for (let i = 1; i <= 10; i++) {
    data.page_blog.push({
      id: i,
      website_id: faker.random.number(10),
      title: faker.lorem.sentence(),
      subtitle: faker.lorem.sentence(),
    });
  }

  // Create fake blog posts
  for (let i = 1; i <= 1000; i++) {
    data.blog_post.push({
      id: i,
      blog_id: faker.random.number(100),
      title: faker.lorem.sentence(),
      author: faker.name.findName(),
      content: faker.lorem.paragraphs(10),
      created_at: faker.date.past(),
      published_at: faker.date.future(),
      tags: [faker.lorem.slug(), faker.lorem.slug()],
      published: faker.random.boolean(),
    });
  }

  return data;
};
