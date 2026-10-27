import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./footer.module.css";

function Footer() {
  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/netflix/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/netflix/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/netflix",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/user/NewOnNetflix",
    },
  ];

  // Footer links arranged into four columns
  const footerColumns = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social media icons */}
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={styles.socialIcon}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer navigation columns */}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerColumns.map((column, index) => (
            <ul className={styles.footerColumn} key={index}>
              {column.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/* Copyright */}
        <p className={styles.copyright}>© 1997–2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
