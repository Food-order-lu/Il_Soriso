import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pizzeria Il Sorriso - L'Authentique Pizza Italienne à Esch",
  description: "Dégustez nos pizzas géantes et nos spécialités italiennes faites maison à Esch-sur-Alzette. Convivialité et qualité au rendez-vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <header className="main-header">
          <div className="container header-container">
            <Link href="/" className="logo-container">
              <img src="/images/logo.png" alt="Il Sorriso Logo" className="logo-img" />
            </Link>
            <nav className="main-nav">
              <ul>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/menu">La Carte</Link></li>
                <li><Link href="/histoire">Notre Histoire</Link></li>
                <li><Link href="/galerie">Galerie</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
            <div className="header-cta">
              <Link href="https://www.miammiam.lu/en/info/pizzeria-il-sorriso-esch" target="_blank" className="cta-button primary-button">
                Commander
              </Link>
            </div>
          </div>
        </header>
        
        <main>{children}</main>

        <footer className="main-footer">
          <div className="footer-container container">
            <div className="footer-brand">
              <img src="/images/logo.png" alt="Il Sorriso Logo" className="footer-logo" />
              <p className="mt-4">L'authentique pizza napolitaine au cœur d'Esch-sur-Alzette.</p>
            </div>
            <div className="footer-links">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/menu">La Carte</Link></li>
                <li><Link href="/histoire">Notre Histoire</Link></li>
                <li><Link href="/galerie">Galerie</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Suivez-nous</h4>
              <div className="social-icons">
                <Link href="https://www.facebook.com/p/Il-Sorriso-Il-Sorriso-100046272836437/" target="_blank">Facebook</Link>
                <Link href="https://www.instagram.com/ilsorriso2013/" target="_blank">Instagram</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Pizzeria Il Sorriso. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
