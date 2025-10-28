import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: 'Fizyoterapi ile Ağrı Yönetimi: Etkili Yöntemler',
    image: '/images/post-1.jpg',
    excerpt: 'Kronik ağrı ile başa çıkmanın modern fizyoterapi yöntemleri ve günlük yaşamda uygulayabileceğiniz pratik çözümler.',
    slug: 'fizyoterapi-ile-agri-yonetimi'
  },
  {
    id: 2,
    title: 'Spor Yaralanmalarından Korunma Rehberi',
    image: '/images/post-2.jpg',
    excerpt: 'Sporcular için yaralanma önleme stratejileri, doğru ısınma teknikleri ve performans artırıcı egzersizler.',
    slug: 'spor-yaralanmalarindan-korunma'
  },
  {
    id: 3,
    title: 'Evde Yapabileceğiniz Rehabilitasyon Egzersizleri',
    image: '/images/post-3.jpg',
    excerpt: 'Günlük rutininize kolayca entegre edebileceğiniz, etkili rehabilitasyon egzersizleri ve doğru uygulama teknikleri.',
    slug: 'evde-rehabilitasyon-egzersizleri'
  },
  {
    id: 4,
    title: 'Kadın Sağlığında Fizyoterapinin Rolü',
    image: '/images/post-1.jpg',
    excerpt: 'Kadınların yaşam döngüsü boyunca karşılaştığı sağlık sorunlarında fizyoterapinin önemi ve çözüm önerileri.',
    slug: 'kadin-sagliginda-fizyoterapi'
  },
  {
    id: 5,
    title: 'Postür Bozukluklarına Modern Yaklaşım',
    image: '/images/post-2.jpg',
    excerpt: 'Masa başı çalışanlar için postür düzeltme teknikleri ve uzun vadeli sağlık için önemli ipuçları.',
    slug: 'postur-bozukluklarina-modern-yaklasim'
  },
  {
    id: 6,
    title: 'Yaşlılarda Düşme Riskini Azaltma Stratejileri',
    image: '/images/post-3.jpg',
    excerpt: 'Yaşlı bireylerde denge ve koordinasyon geliştirme egzersizleri ile düşme riskini minimize etme yöntemleri.',
    slug: 'yaslilik-dusme-riski-azaltma'
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
                  Sağlık <span>Blogu</span>
                </h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Ana Sayfa</Link>
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
                        Devamını Oku
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
                    <a href="#" aria-label="Önceki">
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
                    <a href="#" aria-label="Sonraki">
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