import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <Heading as="h2" className={styles.sectionTitle}>
            Sobre Mim
          </Heading>
          <p className={styles.introText}>
            Desenvolvedor de Software com mais de <strong>10 anos de experiência</strong>, apaixonado por transformar desafios de negócio em soluções tecnológicas eficientes e escaláveis.
          </p>
          <p className={styles.storyText}>
            Minha jornada na tecnologia começou muito antes de 2012, movida pela curiosidade de criar um simples controle de compras em Access. Foi ali que descobri o poder do software para otimizar processos e tornar ideias úteis. Desde então, venho acumulando experiência em diversas linguagens e tecnologias. Hoje, essa mesma paixão me impulsiona a continuar contribuindo com sistemas robustos.
          </p>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    {
      category: 'Linguagens',
      items: ['Java', 'xHarbour', 'Go', 'C#', 'Elixir', 'PHP'],
      icon: '💻'
    },
    {
      category: 'APIs & Backend',
      items: ['Spring Framework', 'REST', 'SOAP', 'DotNet (.Net)'],
      icon: '⚙️'
    },
    {
      category: 'Desenvolvimento Mobile',
      items: ['Android Nativo'],
      icon: '📱'
    },
    {
      category: 'Bancos de Dados',
      items: ['Oracle', 'Firebird', 'MySQL', 'Microsoft SQL Server', 'PostgreSQL'],
      icon: '🗄️'
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Principais Competências
        </Heading>
        <div className={styles.skillsGrid}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillCard}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <Heading as="h3" className={styles.skillCategory}>
                {skill.category}
              </Heading>
              <ul className={styles.skillList}>
                {skill.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.skillItem}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className={styles.philosophySection}>
      <div className="container">
        <div className={styles.philosophyContent}>
          <Heading as="h2" className={styles.sectionTitle}>
            Filosofia
          </Heading>
          <p className={styles.philosophyText}>
            Sou um <strong>eterno aprendiz</strong>: <em>"Ensine ao justo, e ele aumentará em saber"</em> (Provérbios 9:9b). Continuarei explorando para aprender cada vez mais.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Desenvolvedor de Software`}
      description="Desenvolvedor de Software com mais de 10 anos de experiência em transformar desafios de negócio em soluções tecnológicas eficientes e escaláveis.">
      <HomepageHeader />
      <main>
        <AboutSection />
        <SkillsSection />
        <PhilosophySection />
      </main>
    </Layout>
  );
}
