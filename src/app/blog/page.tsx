import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Pain Management with Physiotherapy: Effective Methods',
    image: '/images/post-1.jpg',
    excerpt: 'Modern physiotherapy methods for dealing with chronic pain and practical solutions you can apply in daily life.',
    slug: 'pain-management-with-physiotherapy'
  },
  {
    id: 2,
    title: 'Sports Injury Prevention Guide',
    image: '/images/post-2.jpg',
    excerpt: 'Injury prevention strategies for athletes, proper warm-up techniques and performance-enhancing exercises.',
    slug: 'sports-injury-prevention-guide'
  },
  {
    id: 3,
    title: 'Rehabilitation Exercises You Can Do at Home',
    image: '/images/post-3.jpg',
    excerpt: 'Effective rehabilitation exercises and proper application techniques that you can easily integrate into your daily routine.',
    slug: 'home-rehabilitation-exercises'
  },
  {
    id: 4,
    title: 'The Role of Physiotherapy in Women\'s Health',
    image: '/images/post-1.jpg',
    excerpt: 'The importance of physiotherapy in health problems women face throughout their life cycle and solution suggestions.',
    slug: 'physiotherapy-in-womens-health'
  },
  {
    id: 5,
    title: 'Modern Approach to Posture Disorders',
    image: '/images/post-2.jpg',
    excerpt: 'Posture correction techniques for desk workers and important tips for long-term health.',
    slug: 'modern-approach-to-posture-disorders'
  },
  {
    id: 6,
    title: 'Fall Risk Reduction Strategies in the Elderly',
    image: '/images/post-3.jpg',
    excerpt: 'Methods to minimize fall risk with balance and coordination development exercises in elderly individuals.',
    slug: 'fall-risk-reduction-strategies-elderly'
  }
]

export default function BlogPage() {
  return (
    <>
      <Header />
      
      {/* Page Header Start */}
      <div className="page-header bg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Health <span>Blog</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Blog Start */}
      <div className="page-blog">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <div className="post-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                  {/* Post Featured Image Start */}
                  <div className="post-featured-image">
                    <Link href={`/blog/${post.slug}`} data-cursor-text="View">
                      <figure className="image-anime">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          width={400}
                          height={300}
                        />
                      </figure>
                    </Link>
                  </div>
                  {/* Post Featured Image End */}

                  {/* Post Item Body Start */}
                  <div className="post-item-body">
                    {/* Post Item Content Start */}
                    <div className="post-item-content">
                      <h2>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      <p>{post.excerpt}</p>
                    </div>
                    {/* Post Item Content End */}

                    {/* Post Item Readmore Button Start */}
                    <div className="post-item-btn">
                      <Link href={`/blog/${post.slug}`} className="readmore-btn">
                        Read More
                      </Link>
                    </div>
                    {/* Post Item Readmore Button End */}
                  </div>
                  {/* Post Item Body End */}
                </div>
              </div>
            ))}

            <div className="col-lg-12">
              {/* Page Pagination Start */}
              <div className="page-pagination wow fadeInUp" data-wow-delay="1.2s">
                <ul className="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <FaAngleLeft />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <FaAngleRight />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Page Pagination End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Blog End */}

      <Footer />
    </>
  )
}