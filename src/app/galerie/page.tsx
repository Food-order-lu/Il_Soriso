import Image from "next/image";

export default function GaleriePage() {
  const images = [
    { src: "/Il_Soriso/images/hero_pizza.png", alt: "Notre célèbre Pizza Géante" },
    { src: "/Il_Soriso/images/chef-real.png", alt: "Massimo à l'œuvre" },
    { src: "/Il_Soriso/images/dishes-real.png", alt: "Nos pizzas fraîches" },
    { src: "/Il_Soriso/images/prep-real.png", alt: "Savoir-faire artisanal" },
    { src: "/Il_Soriso/images/interior-real.png", alt: "Cadre convivial" },
    { src: "/Il_Soriso/images/panzerotto.png", alt: "Spécialité Panzerotto" },
  ];

  return (
    <div className="galerie-page">
      <section className="galerie-hero">
        <div className="container text-center">
          <h1 className="section-title">Galerie Photos</h1>
          <p className="subtitle">Un aperçu visuel de notre passion pour la pizza.</p>
        </div>
      </section>

      <section className="galerie-grid-section">
        <div className="container">
          <div className="galerie-grid">
            {images.map((img, index) => (
              <div key={index} className="galerie-item">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  width={400} 
                  height={300} 
                  className="galerie-img"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <div className="overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
