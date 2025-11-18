import { Article } from '../models/article';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 1,
    title: 'The Future of Web Development',
    thumbnail: 'https://picsum.photos/300/200?random=1',
    datePosted: new Date('2024-11-15'),
    content: 'Web development is evolving rapidly with new frameworks and technologies emerging constantly. This article explores the latest trends and what they mean for developers.',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: 2,
    title: 'Angular 20: What\'s New',
    thumbnail: 'https://picsum.photos/300/200?random=2',
    datePosted: new Date('2024-11-14'),
    content: 'Angular 20 brings significant improvements in performance, developer experience, and new features. Learn about the key changes and how to migrate your applications.',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: 3,
    title: 'Building Responsive UIs',
    thumbnail: 'https://picsum.photos/300/200?random=3',
    datePosted: new Date('2024-11-13'),
    content: 'Creating user interfaces that work seamlessly across all devices is crucial in modern web development. This guide covers best practices for responsive design.',
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices',
    thumbnail: 'https://picsum.photos/300/200?random=4',
    datePosted: new Date('2024-11-12'),
    content: 'TypeScript offers powerful type checking capabilities. Discover the best practices for writing maintainable and type-safe code in your projects.',
    image: 'https://picsum.photos/800/400?random=4'
  },
  {
    id: 5,
    title: 'State Management in Modern Apps',
    thumbnail: 'https://picsum.photos/300/200?random=5',
    datePosted: new Date('2024-11-11'),
    content: 'Managing application state effectively is key to building scalable applications. Explore different state management patterns and when to use them.',
    image: 'https://picsum.photos/800/400?random=5'
  },
  {
    id: 6,
    title: 'Performance Optimization Techniques',
    thumbnail: 'https://picsum.photos/300/200?random=6',
    datePosted: new Date('2024-11-10'),
    content: 'Slow applications frustrate users. Learn proven techniques to optimize your web applications for better performance and user experience.',
    image: 'https://picsum.photos/800/400?random=6'
  },
  {
    id: 7,
    title: 'Testing Strategies for Angular',
    thumbnail: 'https://picsum.photos/300/200?random=7',
    datePosted: new Date('2024-11-09'),
    content: 'Comprehensive testing ensures code quality and prevents bugs. This article covers unit testing, integration testing, and end-to-end testing strategies.',
    image: 'https://picsum.photos/800/400?random=7'
  },
  {
    id: 8,
    title: 'CSS Grid vs Flexbox',
    thumbnail: 'https://picsum.photos/300/200?random=8',
    datePosted: new Date('2024-11-08'),
    content: 'Both CSS Grid and Flexbox are powerful layout systems. Understand when to use each one and how they can work together for complex layouts.',
    image: 'https://picsum.photos/800/400?random=8'
  },
  {
    id: 9,
    title: 'Server-Side Rendering Benefits',
    thumbnail: 'https://picsum.photos/300/200?random=9',
    datePosted: new Date('2024-11-07'),
    content: 'Server-side rendering improves SEO, performance, and user experience. Learn how to implement SSR in your Angular applications.',
    image: 'https://picsum.photos/800/400?random=9'
  },
  {
    id: 10,
    title: 'Component Design Patterns',
    thumbnail: 'https://picsum.photos/300/200?random=10',
    datePosted: new Date('2024-11-06'),
    content: 'Reusable and maintainable components are essential for scalable applications. Explore common design patterns for building better Angular components.',
    image: 'https://picsum.photos/800/400?random=10'
  }
];