import Link from "next/link";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <h1 className="footer-logo">H.N.I</h1>
            <p>Copyright ©  {new Date().getFullYear()}  Humaiza Naz Institute Organization. All rights reserved.</p>
          </div>

   

          {/* Social Media Section */}
          <div className="social-section">
            <p className="social-title">Follow us</p>
            <Link href="https://linkedin.com/" className="footer-link">
              LinkedIn
            </Link>  <Link href="https://linkedin.com/" className="footer-link">
             Facebook
            </Link>  <Link href="https://linkedin.com/" className="footer-link">
              Youtube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
