import { Article } from '../models/article';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'The Future of Web Development',
    thumbnail: 'https://loremflickr.com/300/200/web,development',
    datePosted: new Date('2024-11-15'),
    content: 'Web development is evolving rapidly with new frameworks and technologies emerging constantly. This article explores the latest trends and what they mean for developers.',
    image: 'https://loremflickr.com/800/400/web,development'
  },
  {
    id: 2,
    title: 'Angular 20: What\'s New',
    thumbnail: 'https://loremflickr.com/300/200/angular,framework',
    datePosted: new Date('2024-11-14'),
    content: 'Angular 20 brings significant improvements in performance, developer experience, and new features. Learn about the key changes and how to migrate your applications.',
    image: 'https://loremflickr.com/800/400/angular,framework'
  },
  {
    id: 3,
    title: 'Building Responsive UIs',
    thumbnail: 'https://loremflickr.com/300/200/ui,responsive',
    datePosted: new Date('2024-11-13'),
    content: 'Creating user interfaces that work seamlessly across all devices is crucial in modern web development. This guide covers best practices for responsive design.',
    image: 'https://loremflickr.com/800/400/ui,responsive'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    thumbnail: 'https://loremflickr.com/300/200/typescript,code',
    datePosted: new Date('2024-11-12'),
    content: 'TypeScript offers powerful type checking capabilities. Discover the best practices for writing maintainable and type-safe code in your projects.',
    image: 'https://loremflickr.com/800/400/typescript,code'
  },
  {
    id: 5,
    title: 'State Management in Modern Apps',
    thumbnail: 'https://loremflickr.com/300/200/state,management',
    datePosted: new Date('2024-11-11'),
    content: 'Managing application state effectively is key to building scalable applications. Explore different state management patterns and when to use them.',
    image: 'https://loremflickr.com/800/400/state,management'
  },
  {
    id: 6,
    title: 'Performance Optimization Techniques',
    thumbnail: 'https://loremflickr.com/300/200/performance,optimization',
    datePosted: new Date('2024-11-10'),
    content: 'Slow applications frustrate users. Learn proven techniques to optimize your web applications for better performance and user experience.',
    image: 'https://loremflickr.com/800/400/performance,optimization'
  },
  {
    id: 7,
    title: 'Testing Strategies for Angular',
    thumbnail: 'https://loremflickr.com/300/200/testing,quality',
    datePosted: new Date('2024-11-09'),
    content: 'Comprehensive testing ensures code quality and prevents bugs. This article covers unit testing, integration testing, and end-to-end testing strategies.',
    image: 'https://loremflickr.com/800/400/testing,quality'
  },
  {
    id: 8,
    title: 'CSS Grid vs Flexbox',
    thumbnail: 'https://loremflickr.com/300/200/css,layout',
    datePosted: new Date('2024-11-08'),
    content: 'Both CSS Grid and Flexbox are powerful layout systems. Understand when to use each one and how they can work together for complex layouts.',
    image: 'https://loremflickr.com/800/400/css,layout'
  },
  {
    id: 9,
    title: 'Server-Side Rendering Benefits',
    thumbnail: 'https://loremflickr.com/300/200/server,rendering',
    datePosted: new Date('2024-11-07'),
    content: 'Server-side rendering improves SEO, performance, and user experience. Learn how to implement SSR in your Angular applications.',
    image: 'https://loremflickr.com/800/400/server,rendering'
  },
  {
    id: 10,
    title: 'Component Design Patterns',
    thumbnail: 'https://loremflickr.com/300/200/component,design',
    datePosted: new Date('2024-11-06'),
    content: 'Reusable and maintainable components are essential for scalable applications. Explore common design patterns for building better Angular components.',
    image: 'https://loremflickr.com/800/400/component,design'
  }
];