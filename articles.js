// articles.js
const defaultImg = "assets/articles/default.jpg";

const featuredArticles = [
  {
    category: "Leadership",
    date: "March 15, 2024",
    readTime: "8 min read",
    title: "The Power of Positive Thinking in Leadership",
    description:
      "Great leaders aren’t just skilled decision-makers — they shape the culture of their teams through mindset. This article explores how cultivating optimism can inspire resilience, encourage creativity, and transform setbacks into opportunities. Learn how to lead with a vision that motivates others to believe in possibilities beyond limitations.",
    img: "assets/articles/leadership-positive.jpg",
    link: "#"
  },
  {
    category: "Public Speaking",
    date: "March 10, 2024",
    readTime: "12 min read",
    title: "Overcoming Public Speaking Anxiety: A Complete Guide",
    description:
      "Stage fright is one of the most common fears, but it doesn’t have to control your voice. In this guide, we break down practical strategies — from breathing techniques to mindset shifts — that will help you replace fear with confidence. Discover how to connect with audiences authentically and deliver presentations that linger long after the applause.",
    img: "assets/articles/public-speaking-anxiety.jpg",
    link: "#"
  }
];

const allArticles = [
  {
    category: "Personal Growth",
    title: "Building Resilience in Challenging Times",
    description:
      "Life is full of unexpected storms, but resilience is what helps us rise above them. In this article, you’ll uncover actionable habits for building inner strength, from reframing setbacks as lessons to cultivating gratitude. It’s your roadmap to bouncing back stronger, no matter what challenges come your way.",
    readTime: "10 min read",
    img: "assets/articles/resilience.jpg"
  },
  {
    category: "Communication",
    title: "The Art of Effective Communication",
    description:
      "Words have power — they can inspire, persuade, or divide. Here we explore the principles of effective communication, including active listening, emotional intelligence, and clarity of expression. Whether in personal relationships or professional settings, learn how to speak so people truly listen and respond.",
    readTime: "6 min read",
    img: "assets/articles/communication.jpg"
  },
  {
    category: "Productivity",
    title: "Goal Setting That Actually Works",
    description:
      "Why do so many goals fail? Because they’re built on vague intentions instead of structured systems. This article introduces proven frameworks like SMART goals and accountability tracking, showing you how to turn dreams into measurable progress. Stop wishing — start achieving.",
    readTime: "9 min read",
    img: "assets/articles/goal-setting.jpg"
  },
  {
    category: "Psychology",
    title: "Understanding Human Motivation",
    description:
      "What truly drives people? Beyond money and recognition lies a deeper psychology of purpose, belonging, and growth. Dive into the science of motivation and uncover practical ways to ignite passion in yourself and others, whether you’re leading a team or pursuing personal success.",
    readTime: "11 min read",
    img: "assets/articles/motivation.jpg"
  },
  {
    category: "Wellness",
    title: "Balancing Work and Life in a Busy World",
    description:
      "Modern life often demands more than we can give, leaving many drained and overwhelmed. This article shares strategies for setting boundaries, prioritizing wellness, and finding harmony between ambition and rest. Discover how balance is not about doing less, but about doing what matters most.",
    readTime: "7 min read",
    img: "assets/articles/work-life-balance.jpg"
  },
  {
    category: "Leadership",
    title: "Servant Leadership: Leading by Serving Others",
    description:
      "True leadership is not about authority — it’s about service. Explore how servant leadership shifts the focus from power to empowerment, and why humility, empathy, and selflessness create stronger teams. Learn how to lead in a way that leaves a lasting impact on people and organizations.",
    readTime: "8 min read",
    img: "assets/articles/servant-leadership.jpg"
  },
  {
    category: "Public Speaking",
    title: "Crafting Stories That Captivate Audiences",
    description:
      "Facts tell, but stories sell. This article shows you how to weave narratives that spark emotion, capture attention, and leave audiences inspired. Discover the timeless storytelling techniques that make speeches unforgettable and presentations magnetic.",
    readTime: "9 min read",
    img: "assets/articles/storytelling.jpg"
  },
  {
    category: "Personal Growth",
    title: "Developing a Growth Mindset",
    description:
      "Your mindset determines your future. Learn how to move from fixed thinking — where failure feels permanent — to a growth mindset that embraces challenges as stepping stones. With this shift, you’ll unlock resilience, creativity, and untapped potential in every area of life.",
    readTime: "6 min read",
    img: "assets/articles/growth-mindset.jpg"
  }
];

// Render Featured Articles
function renderFeaturedArticles() {
  const container = document.querySelector("#featured-articles");
  container.innerHTML = featuredArticles
    .map(
      (article) => `
      <div class="col-md-6">
        <div class="card shadow-hover h-100">
          <img src="${article.img || defaultImg}" class="card-img-top" alt="${article.title}" onerror="this.src='${defaultImg}'">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <span class="category-badge">${article.category}</span>
              <small class="text-muted"><i class="bi bi-calendar me-1"></i> ${article.date} • ${article.readTime}</small>
            </div>
            <h5 class="fw-bold">${article.title}</h5>
            <p class="text-muted">${article.description}</p>
            <a href="${article.link}" class="btn btn-link text-primary p-0">Read Full Article <i class="bi bi-arrow-right ms-1"></i></a>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Render All Articles
function renderAllArticles() {
  const container = document.querySelector("#all-articles");
  container.innerHTML = allArticles
    .map(
      (article) => `
      <div class="col-md-4">
        <div class="card shadow-hover h-100">
          <img src="${article.img || defaultImg}" class="card-img-top" alt="${article.title}" onerror="this.src='${defaultImg}'">
          <div class="card-body">
            <span class="category-badge mb-2">${article.category}</span>
            <h6 class="fw-bold">${article.title}</h6>
            <p class="text-muted small">${article.description}</p>
            <small class="text-muted"><i class="bi bi-clock me-1"></i> ${article.readTime}</small>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedArticles();
  renderAllArticles();
});
