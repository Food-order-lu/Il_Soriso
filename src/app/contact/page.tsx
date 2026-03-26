export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container text-center">
          <h1 className="section-title">Contact & Accès</h1>
          <p className="subtitle">Nous avons hâte de vous accueillir.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info">
              <div className="info-item">
                <h3 className="text-orange">📍 Adresse</h3>
                <p>53, Rue Victor Hugo<br />4141 Esch-sur-Alzette, Luxembourg</p>
              </div>

              <div className="info-item">
                <h3 className="text-orange">📞 Téléphone</h3>
                <p><a href="tel:+352621702469">+352 621 702 469</a></p>
              </div>

              <div className="info-item">
                <h3 className="text-orange">✉️ Email</h3>
                <p><a href="mailto:alessiomassimo88@hotmail.it">alessiomassimo88@hotmail.it</a></p>
              </div>

              <div className="info-item">
                <h3 className="text-orange">🕒 Horaires</h3>
                <ul>
                  <li><strong>Lundi - Dimanche :</strong> 18:00 – 22:00</li>
                  <li className="note">* Horaires susceptibles de varier selon les événements régionaux.</li>
                </ul>
              </div>

              <div className="social-box">
                <h4>Rejoignez la communauté</h4>
                <div className="social-links">
                  <a href="https://www.facebook.com/p/Il-Sorriso-Il-Sorriso-100046272836437/" target="_blank" className="social-btn fb">Facebook</a>
                  <a href="https://www.instagram.com/ilsorriso2013/" target="_blank" className="social-btn ig">Instagram</a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-container">
              <h3>Envoyez-nous un message</h3>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom Complet</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="votre@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject">
                    <option value="reservation">Réservation de table</option>
                    <option value="order">Question sur une commande</option>
                    <option value="event">Événement privé</option>
                    <option value="other">Autre demande</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Comment pouvons-nous vous aider ?" required></textarea>
                </div>
                <button type="submit" className="cta-button primary-button w-100">Envoyer le message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="map-section">
        <div className="google-map">
          <div className="map-placeholder">
            <p><strong>Pizzeria Il Sorriso</strong></p>
            <p>53, Rue Victor Hugo, Esch-sur-Alzette</p>
            <a href="https://share.google/nJO5Rvd9tIy44g0ZU" target="_blank" className="text-link">Ouvrir dans Google Maps</a>
          </div>
        </div>
      </section>
    </div>
  );
}
