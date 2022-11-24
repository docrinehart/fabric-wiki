import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

const links = [
  {
    title: "Learn to create Fabric mods.",
    description: "Get a headstart modding with Fabric by checking out the developer tutorials. These tutorials will guide you through the creation of a mod all the way to complex topics such as mixins and more.",
    buttonTitle: "Get Started",
    buttonLink: "/docs/"
  },
  {
    title: "Player Help",
    description: "If you wish to use Fabric as a player, server administrator or modpack developer, you should checkout the player guides - these pages will help you install fabric, troubleshoot issues and more.",
    buttonTitle: "Player Guides",
    buttonLink: "/docs/"
  },
  {
    title: "Documentation",
    description: "If you're a developer looking for information on the Fabric toolchain, how it works and how to contribute you should checkout the documentation pages.",
    buttonTitle: "Toolchain Documentation",
    buttonLink: "/docs/"
  }
]

function Feature({ title, description, buttonTitle, buttonLink }) {
  return (
      <div class="col card shadow--md margin-horiz--md">
        <div class="card__header">
          <h3>{title}</h3>
        </div>
        <div class="card__body">
          <p>
            {description}
          </p>
        </div>
        <div class="card__footer">
          <Link to={buttonLink} className="button button--secondary button--block">{ buttonTitle }</Link>
        </div>
      </div>
    //   <div className={clsx('col col--4')}>
    //   <div className="text--center padding-horiz--md">
    //     <Link
    //         className="button button--secondary button--lg"
    //         to={buttonLink}>
    //         {buttonTitle}
    //       </Link>
    //   </div>  
    // </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {links.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
