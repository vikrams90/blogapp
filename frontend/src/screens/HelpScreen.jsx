import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is a blog?',
    answer:
      'A blog is a type of text content, usually in the form of articles or posts. Blogs can be used for various purposes, such as sharing personal stories, opinions, news, information, tips, or reviews.',
  },
  {
    question: 'How do I create a blog?',
    answer:
      'To create a blog, you need to login or register then navigate to create blog, then write your article, click create blog button. Done, Happy Blogging.',
  },
  {
    question: 'What are some popular blogging platforms?',
    answer:
      'Some of the most popular blogging platforms are WordPress, Blogger, Medium, Wix, and Squarespace. Each platform has its own features, advantages, and disadvantages. You can compare them and choose the one that suits your needs and preferences.',
  },
  {
    question: 'How do I write a good blog post?',
    answer:
      'A good blog post should have a clear and catchy title, an engaging introduction, a well-structured body, and a strong conclusion. It should also use relevant keywords, images, links, and headings to optimize it for search engines and readers. Additionally, it should be original, informative, and useful for your target audience.',
  },
  {
    question: 'How do I get more traffic to my blog?',
    answer:
      'There are many ways to get more traffic to your blog, such as promoting it on social media, email marketing, guest posting, commenting on other blogs, participating in online communities, and using paid advertising. However, the most important factor is to create high-quality content that attracts and retains your visitors.',
  },
  {
    question: 'How do I make money from my blog?',
    answer:
      'There are several ways to make money from your blog, such as displaying ads, selling products or services, accepting donations, offering sponsored posts, or joining affiliate programs. However, you need to have a large and loyal audience, a niche topic, and a monetization strategy to succeed in blogging as a business.',
  },
  {
    question: 'How do I measure the performance of my blog?',
    answer:
      'You can use various tools and metrics to measure the performance of your blog, such as Google Analytics, Google Search Console, social media insights, email marketing reports, and revenue reports. Some of the key indicators are traffic, engagement, conversion, and revenue.',
  },
  {
    question: 'How do I improve the design of my blog?',
    answer:
      'You can improve the design of your blog by choosing a suitable theme, layout, color scheme, font, and logo. You can also customize your blog by adding widgets, plugins, menus, and other elements. You should aim for a design that is simple, elegant, responsive, and user-friendly.',
  },
  {
    question: 'How do I grow my blog audience and community?',
    answer:
      'You can grow your blog audience and community by creating valuable content, interacting with your readers, encouraging feedback, offering incentives, building an email list, collaborating with other bloggers, and joining relevant networks. You should also be consistent, authentic, and passionate about your blog topic.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleOpen}>
        <h3 className="text-lg font-medium dark:text-white text-gray-700">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-gray-500 dark:text-white" />
        ) : (
          <FaChevronDown className="text-gray-500 dark:text-white" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          <p className="text-gray-600 dark:text-white">{answer}</p>
        </div>
      )}
    </div>
  );
};

const HelpScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-neutral-700 w-full min-h-screen">
      <div className="w-10/12 my-5 p-8 bg-white dark:bg-stone-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Help/FAQ</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;
