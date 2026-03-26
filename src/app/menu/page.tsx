import menuData from "@/data/menu.json";

export default function MenuPage() {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="container text-center">
          <h1 className="section-title">La Carte Il Sorriso</h1>
          <p className="subtitle">Des produits frais, une pâte artisanale et le sourire de l'Italie.</p>
        </div>
      </section>

      <section className="menu-categories">
        <div className="container">
          {menuData.categories.map((category) => (
            <div key={category.id} className="menu-category-block">
              <div className="category-header">
                <h2>{category.name}</h2>
                <p className="category-desc">{category.description}</p>
              </div>
              <div className="menu-items-grid">
                {category.items.map((item, index) => (
                  <div key={index} className="menu-item">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="dots"></span>
                      <div className="item-prices">
                        <span className="price-main">{item.price.toFixed(2)}€</span>
                        {('slice' in item) && <span className="price-slice">{(item as any).slice.toFixed(2)}€ / part</span>}
                      </div>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
