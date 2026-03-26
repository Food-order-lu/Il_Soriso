import Image from "next/image";

export default function HistoirePage() {
  return (
    <div className="histoire-page">
      <section className="story-hero">
        <div className="container text-center">
          <h1 className="section-title">Notre Histoire</h1>
          <p className="subtitle">La passion d'un métier, le goût du partage.</p>
        </div>
      </section>

      <section className="story-content">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2>L'Aventure Massimo</h2>
              <p>Tout a commencé par un rêve : celui d'apporter le véritable esprit de la pizzeria italienne à Belval. Massimo, fort de son expérience acquise dans les cuisines de "Pizza Smile", a décidé de se lancer dans sa propre aventure entrepreneuriale en créant <strong>Il Sorriso</strong>.</p>
              
              <p>Le nom n'a pas été choisi au hasard. En italien, <em>Il Sorriso</em> signifie "Le Sourire". C'est notre philosophie quotidienne : cuisiner avec le sourire pour offrir du bonheur à nos clients. Chaque pizza qui sort de notre four est une invitation à la convivialité.</p>

              <h3>La Qualité au-dessus de tout</h3>
              <p>Pour Massimo, pas question de tricher avec le goût. La qualité commence par les fondamentaux : une farine de blé sélectionnée en Italie, une fermentation lente de la pâte pour une digestion parfaite, et une huile d'olive extra vierge pressée à froid.</p>
              
              <p>Nos pizzas rectangulaires géantes de 48x50cm sont devenues notre signature. Elles incarnent la générosité de notre cuisine et le plaisir de partager un repas en famille ou entre amis.</p>
            </div>
            <div className="story-images">
            <div className="image-stack">
                <Image src="/images/chef-real.png" alt="Massimo préparant une pizza" width={450} height={600} className="story-img-1" />
                <Image src="/images/prep-real.png" alt="Préparation de la pizza" width={350} height={250} className="story-img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote>
            "On ne vient pas chez Il Sorriso uniquement pour manger une pizza, on vient pour passer un moment authentique, entouré d'une équipe qui aime ce qu'elle fait."
            <cite>— Massimo, Fondateur</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
