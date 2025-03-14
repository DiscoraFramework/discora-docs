/** @format */

import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function Introduction() {
  return (
    <section className={styles.intro}>
      <h1 className={styles.necord}>Discora</h1>
      <p>
        🤖 The best <strong>open-source</strong> framework for building{" "}
        <strong>scalable</strong> Discord bots in <strong>Node.js</strong>, designed for
        flexibility and ease of use.
      </p>

      <div className={styles.links}>
        <Link to="/docs">📖 Documentation</Link> •
        <Link to="https://github.com/DiscoraFramework/discora">🔗 Source code</Link> •
        <Link to="#">🛠 Examples</Link> •
        <Link to="https://github.com/DiscoraFramework">💬 Community</Link>
      </div>
      <div className={styles.badges}>
        <img src="https://img.shields.io/badge/npm-v6.8.8-blue" alt="npm version" />
        <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT License" />
        <img
          src="https://img.shields.io/badge/downloads-12k/month-brightgreen"
          alt="Downloads"
        />
        <img
          src="https://img.shields.io/badge/last_commit-today-success"
          alt="Last commit"
        />
      </div>
    </section>
  );
}
