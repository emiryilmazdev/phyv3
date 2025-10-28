import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaUser, FaClock, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

// Blog post verileri (gerçek uygulamada API'den gelecek)
const blogPosts = {
  'fizyoterapi-ile-agri-yonetimi': {
    title: 'Fizyoterapi ile Ağrı Yönetimi: Etkili Yöntemler',
    image: '/images/post-1.jpg',
    date: '15 Ocak, 2025',
    author: 'Şimal Ongun',
    content: `
      <p>Kronik ağrı, günümüzde milyonlarca insanı etkileyen önemli bir sağlık sorunudur. Fizyoterapi, ağrı yönetiminde ilaçsız ve etkili çözümler sunan bir tedavi yöntemidir.</p>
      
      <p>Modern fizyoterapi yaklaşımları, ağrının sadece semptomlarını değil, temel nedenlerini de hedefler. Bu holistik yaklaşım, hastaların uzun vadeli rahatlama elde etmelerine yardımcı olur.</p>
      
      <h2>Fizyoterapide Kullanılan Ağrı Yönetimi Teknikleri</h2>
      
      <p>Fizyoterapistler, ağrı yönetimi için çeşitli teknikler kullanır. Bu teknikler arasında manuel terapi, egzersiz terapisi, elektroterapi ve eğitim yer alır.</p>
      
      <ul>
        <li>Manuel terapi teknikleri ile kas gerginliklerinin azaltılması</li>
        <li>Hedefli egzersizlerle güçlendirme ve esneklik artırma</li>
        <li>Postür düzeltme ve ergonomik eğitim</li>
        <li>Nefes teknikleri ve gevşeme egzersizleri</li>
        <li>Günlük yaşam aktivitelerinde modifikasyonlar</li>
      </ul>
      
      <p>Her hastanın ağrı deneyimi benzersizdir. Bu nedenle, kişiselleştirilmiş tedavi planları oluşturmak kritik önem taşır. Detaylı değerlendirme sonrasında, hastanın yaşam tarzı, mesleği ve kişisel hedefleri göz önünde bulundurularak en uygun tedavi yaklaşımı belirlenir.</p>
    `,
    tags: ['Ağrı Yönetimi', 'Fizyoterapi', 'Kronik Ağrı', 'Rehabilitasyon']
  },
  'spor-yaralanmalarindan-korunma': {
    title: 'Spor Yaralanmalarından Korunma Rehberi',
    image: '/images/post-2.jpg',
    date: '12 Ocak, 2025',
    author: 'Şimal Ongun',
    content: `
      <p>Spor yaralanmaları, aktif yaşam tarzını benimseyen bireyler için önemli bir risk faktörüdür. Doğru önlemler alarak bu riskleri önemli ölçüde azaltmak mümkündür.</p>
      
      <p>Yaralanma önleme, sadece spor sırasında değil, antrenman öncesi hazırlık, doğru teknik kullanımı ve toparlanma süreçlerini de kapsar.</p>
      
      <h2>Etkili Yaralanma Önleme Stratejileri</h2>
      
      <p>Spor yaralanmalarından korunmak için sistematik bir yaklaşım benimsenmelidir. Bu yaklaşım, fiziksel hazırlık, teknik eğitim ve zihinsel hazırlığı içerir.</p>
      
      <ul>
        <li>Düzenli ve progresif ısınma rutinleri</li>
        <li>Spor dalına özgü kondisyon geliştirme</li>
        <li>Doğru ekipman kullanımı ve bakımı</li>
        <li>Teknik eğitim ve form düzeltme</li>
        <li>Yeterli dinlenme ve toparlanma süreleri</li>
      </ul>
      
      <p>Yaralanma sonrası doğru rehabilitasyon süreci, gelecekteki yaralanma riskini azaltmada kritik rol oynar. Acele etmeden, aşamalı olarak spora dönüş planlanmalıdır.</p>
    `,
    tags: ['Spor Yaralanmaları', 'Önleme', 'Antrenman', 'Güvenlik']
  },
  'evde-rehabilitasyon-egzersizleri': {
    title: 'Evde Yapabileceğiniz Rehabilitasyon Egzersizleri',
    image: '/images/post-3.jpg',
    date: '10 Ocak, 2025',
    author: 'Şimal Ongun',
    content: `
      <p>Evde yapılan rehabilitasyon egzersizleri, tedavi sürecinin ayrılmaz bir parçasıdır. Doğru uygulanan ev programları, klinik tedavilerin etkinliğini artırır ve iyileşme sürecini hızlandırır.</p>
      
      <p>Ev egzersiz programları, hastanın günlük rutinine kolayca entegre edilebilecek şekilde tasarlanmalıdır. Bu sayede sürdürülebilirlik sağlanır ve uzun vadeli başarı elde edilir.</p>
      
      <h2>Temel Ev Rehabilitasyon Egzersizleri</h2>
      
      <p>Evde güvenle yapılabilecek egzersizler, minimal ekipman gerektiren ve etkili sonuçlar veren hareketlerdir. Bu egzersizler, farklı kas gruplarını hedefler ve fonksiyonel iyileşmeyi destekler.</p>
      
      <ul>
        <li>Denge ve propriosepsiyon egzersizleri</li>
        <li>Güçlendirme egzersizleri (vücut ağırlığı ile)</li>
        <li>Esneklik ve mobilite egzersizleri</li>
        <li>Postür düzeltme egzersizleri</li>
        <li>Nefes ve gevşeme teknikleri</li>
      </ul>
      
      <p>Ev egzersiz programının başarısı, düzenli uygulama ve doğru teknikle doğrudan ilişkilidir. Fizyoterapistinizle düzenli iletişim halinde kalarak programınızı güncellemek önemlidir.</p>
    `,
    tags: ['Ev Egzersizleri', 'Rehabilitasyon', 'Kendi Kendine Bakım', 'Egzersiz']
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

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
                  {post.title}
                </h1>
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li>
                      <FaUser /> {post.author}
                    </li>
                    <li>
                      <FaClock /> {post.date}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Single Post Start */}
      <div className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Post Featured Image Start */}
              <div className="post-image">
                <figure className="image-anime reveal">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={600}
                  />
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Single Content Start */}
              <div className="post-content">
                {/* Post Entry Start */}
                <div
                  className="post-entry"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                {/* Post Entry End */}

                {/* Post Tag Links Start */}
                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      {/* Post Tags Start */}
                      <div className="post-tags wow fadeInUp" data-wow-delay="0.5s">
                        <span className="tag-links">
                          Etiketler:
                          {post.tags.map((tag, index) => (
                            <a key={index} href="#">{tag}</a>
                          ))}
                        </span>
                      </div>
                      {/* Post Tags End */}
                    </div>

                    <div className="col-lg-4">
                      {/* Post Social Links Start */}
                      <div className="post-social-sharing wow fadeInUp" data-wow-delay="0.5s">
                        <ul>
                          <li>
                            <a href="#" aria-label="Facebook'ta Paylaş">
                              <FaFacebookF />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="LinkedIn'de Paylaş">
                              <FaLinkedinIn />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Instagram'da Paylaş">
                              <FaInstagram />
                            </a>
                          </li>
                          <li>
                            <a href="#" aria-label="Twitter'da Paylaş">
                              <FaXTwitter />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Post Social Links End */}
                    </div>
                  </div>
                </div>
                {/* Post Tag Links End */}

                {/* Navigation to other posts */}
                <div className="post-navigation">
                  <div className="row">
                    <div className="col-lg-6">
                      <Link href="/blog" className="btn-default border-btn">
                        ← Bloga Dön
                      </Link>
                    </div>
                    <div className="col-lg-6 text-right">
                      <Link href="/iletisim" className="btn-default btn-highlighted">
                        Randevu Al →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Post Single Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Single Post End */}

      <Footer />
    </>
  )
}

// Generate static params for known blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}