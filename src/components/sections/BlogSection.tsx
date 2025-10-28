import Link from 'next/link'
import Image from 'next/image'
import AnimatedDiv from '@/components/ui/AnimatedDiv'

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Fizyoterapi ile Ağrı Yönetimi: Etkili Yöntemler',
      image: '/images/post-1.jpg',
      slug: 'fizyoterapi-ile-agri-yonetimi'
    },
    {
      id: 2,
      title: 'Spor Yaralanmalarından Korunma Rehberi',
      image: '/images/post-2.jpg',
      slug: 'spor-yaralanmalarindan-korunma'
    },
    {
      id: 3,
      title: 'Evde Yapabileceğiniz Rehabilitasyon Egzersizleri',
      image: '/images/post-3.jpg',
      slug: 'evde-rehabilitasyon-egzersizleri'
    }
  ]

  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <AnimatedDiv delay={0}>
                <h3>Son Blog Yazıları</h3>
              </AnimatedDiv>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Sağlık ve fizyoterapi alanında <span>uzman görüşleri</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Button Start */}
            <AnimatedDiv className="section-btn" delay={0.2}>
              <Link href="/blog" className="btn-default">
                Tüm Blog Yazıları
              </Link>
            </AnimatedDiv>
            {/* Section Button End */}
          </div>
        </div>

        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              {/* Post Item Start */}
              <AnimatedDiv className="post-item" delay={index * 0.2}>
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <Link href={`/blog/${post.slug}`} data-cursor-text="View">
                    <figure className="image-anime">
                      <Image src={post.image} alt={post.title} width={400} height={300} />
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
                  </div>
                  {/* Post Item Content End */}

                  {/* Post Item Readmore Button Start */}
                  <div className="post-item-btn">
                    <Link href={`/blog/${post.slug}`} className="readmore-btn">
                      Devamını Oku
                    </Link>
                  </div>
                  {/* Post Item Readmore Button End */}
                </div>
                {/* Post Item Body End */}
              </AnimatedDiv>
              {/* Post Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}