import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">L'Authentique Pizza Italienne <br /><span className="text-orange">à Esch-sur-Alzette</span></h1>
            <p className="hero-subtitle">
              Découvrez nos célèbres pizzas géantes de 48x50cm et l'ambiance chaleureuse de Massimo.
            </p>
            <div className="hero-ctas">
              <Link href="tel:+352621702469" className="cta-button primary-button">Réserver une table</Link>
              <Link href="https://www.miammiam.lu/en/info/pizzeria-il-sorriso-esch" className="cta-button secondary-button">Commander en Ligne</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <Image 
              src="/Il_Soriso/images/hero_pizza.png" 
              alt="Pizza Rectangulaire Géante Il Sorriso" 
              width={600} 
              height={400} 
              className="hero-image"
              priority
            />
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="concept">
        <div className="container concept-container">
          <div className="concept-image">
            <Image 
              src="/Il_Soriso/images/interior-real.png" 
              alt="Intérieur Pizzeria Il Sorriso" 
              width={500} 
              height={500} 
              className="rounded-image"
            />
          </div>
          <div className="concept-content">
            <h2 className="section-title text-left">L'Esprit Il Sorriso</h2>
            <p className="highlight">"Le Sourire est au cœur de notre cuisine."</p>
            <p>
              Fondée par Massimo, un passionné de la gastronomie italienne, la Pizzeria Il Sorriso est bien plus qu'un simple restaurant. C'est un lieu de partage où chaque pizza est préparée avec amour et des ingrédients rigoureusement sélectionnés.
            </p>
            <p>
              De nos farines italiennes à nos huiles d'olive premium, nous ne faisons aucun compromis sur la qualité pour vous offrir une expérience authentique.
            </p>
            <Link href="/histoire" className="text-link">En savoir plus sur notre histoire &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties bg-light">
        <div className="container">
          <h2 className="section-title">Nos Incontournables</h2>
          <div className="specialties-grid">
            <div className="specialty-card">
              <div className="card-image">
                <Image src="/Il_Soriso/images/hero_pizza.png" alt="Pizza Géante" width={400} height={250} />
              </div>
              <div className="card-content">
                <h3>Pizza Géante (48x50cm)</h3>
                <p>Notre format signature, idéal pour partager en famille ou entre amis. Disponible à la part ou entière.</p>
                <p className="price">À partir de 25€</p>
              </div>
            </div>
            <div className="specialty-card">
                <div className="card-image">
                  <Image src="/Il_Soriso/images/dishes-real.png" alt="Nos Spécialités" width={400} height={250} />
                </div>
              <div className="card-content">
                <h3>Panzerotto au Four</h3>
                <p>Une spécialité croustillante fourrée aux meilleurs ingrédients italiens, cuite à la perfection dans notre four.</p>
                <p className="price">6.00€</p>
              </div>
            </div>
            <div className="specialty-card">
              <div className="card-image">
                <Image src="/Il_Soriso/images/interior-real.png" alt="Intérieur Pizzeria" width={400} height={250} />
              </div>
              <div className="card-content">
                <h3>Tiramisu Maison</h3>
                <p>Le dessert italien par excellence, préparé chaque jour selon la recette traditionnelle de Massimo.</p>
                <p className="price">4.00€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-footer">
        <div className="container text-center">
          <h2>Prêt à succomber ?</h2>
          <p>Commandez maintenant ou réservez votre table pour une soirée inoubliable.</p>
          <div className="footer-ctas">
            <Link href="/contact" className="cta-button primary-button">Réserver en Ligne</Link>
            <Link href="https://www.miammiam.lu/en/info/pizzeria-il-sorriso-esch" className="cta-button secondary-button white-btn">Commander en Ligne</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
