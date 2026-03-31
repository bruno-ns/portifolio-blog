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
            Breve Resumo (coloca resumo nisso)
          </Heading>
          <p className={styles.introText}>
          Sou desenvolvedor de software desde 2012 e, desde então, venho lidando com problemas reais — daqueles que não têm resposta pronta no Google.
          </p>
          <p className={styles.storyText}>
          Já trabalhei com Java, sistemas para varejo e distribuição, apps mobile, integrações com APIs e bancos de dados diversos. Mas foi quando entrei no mundo de sistemas legados (xHarbour) que o jogo mudou: precisei ir além do "funciona ou não funciona" e começar a entender profundamente como as coisas realmente operam por trás.
          </p>
          <p className={styles.storyText}>
          Atuei diretamente em sistemas críticos, envolvendo ERP, integrações com ATM, Internet Banking, motores de crédito e migração de dados entre plataformas. Cenários complexos, regras de negócio pesadas e responsabilidade alta — exatamente onde eu gosto de estar.
          </p>
          <p className={styles.storyText}>
          Não sou o tipo de desenvolvedor que só executa tarefa. Eu questiono, analiso, entendo o contexto e busco a melhor solução possível — muitas vezes simplificando o que já existe e evitando problema antes mesmo de acontecer.
          </p>
          <p className={styles.storyText}>
          Pra mim, desenvolver é isso: pegar algo complexo, quebrar em partes, entender cada detalhe e transformar em uma solução funcional, eficiente e que realmente resolve o problema.
          </p>
          <p className={styles.storyText}>
          E sigo nesse processo todos os dias — aprendendo, evoluindo e construindo coisas cada vez melhores.
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
      icon: 'code',
      items: [
        { name: 'Java', icon: 'code' },
        { name: 'xHarbour', icon: 'terminal' },
        { name: 'C#', icon: 'code' },
        { name: 'Go', icon: 'code' },
        { name: 'PHP', icon: 'code' },
        { name: 'Elixir', icon: 'code' },
        { name: 'SQL/PL-SQL', icon: 'storage' }
      ]
    },
    {
      category: 'Frameworks e Tecnologias',
      icon: 'settings',
      items: [
        { name: 'Spring Boot', icon: 'settings' },
        { name: 'Spring MVC', icon: 'settings' },
        { name: 'Spring Security', icon: 'security' },
        { name: 'Spring Web Services', icon: 'web' },
        { name: 'JPA (Hibernate)', icon: 'storage' },
        { name: 'Phoenix', icon: 'local_fire_department' },
        { name: 'DotNet (.Net)', icon: 'developer_board' },
        { name: 'NPM', icon: 'inventory_2' }
      ]
    },
    {
      category: 'Banco de Dados',
      icon: 'storage',
      items: [
        { name: 'MySQL', icon: 'storage' },
        { name: 'PostgreSQL', icon: 'storage' },
        { name: 'Firebird', icon: 'local_fire_department' },
        { name: 'Oracle', icon: 'storage' }
      ]
    },
    {
      category: 'Integrações e APIs',
      icon: 'api',
      items: [
        { name: 'APIs REST e SOAP', icon: 'api' },
        { name: 'Integração com sistemas bancários (ATM, Internet Banking)', icon: 'account_balance' },
        { name: 'Integração com motores de crédito', icon: 'credit_card' },
        { name: 'Comunicação entre sistemas distribuídos', icon: 'sync' },
        { name: 'Integração entre sistemas heterogêneos', icon: 'sync' }
      ]
    },
    {
      category: 'Testes e Qualidade',
      icon: 'bug_report',
      items: [
        { name: 'Testes unitários com JUnit', icon: 'check_circle' },
        { name: 'Revisão de código', icon: 'rate_review' },
        { name: 'Aplicação de boas práticas de desenvolvimento', icon: 'verified' }
      ]
    },
    {
      category: 'DevOps e Ferramentas',
      icon: 'build',
      items: [
        { name: 'Git', icon: 'merge' },
        { name: 'GitHub', icon: 'code' },
        { name: 'Bitbucket', icon: 'cloud' },
        { name: 'CI/CD', icon: 'autorenew' },
        { name: 'Docker', icon: 'developer_board' },
        { name: 'Linux/WSL', icon: 'computer' },
        { name: 'Maven', icon: 'inventory' }
      ]
    },
    {
      category: 'Dados, ETL e Migração',
      icon: 'analytics',
      items: [
        { name: 'Pentaho Data Integration (ETL)', icon: 'data_usage' },
        { name: 'Extração, transformação e carga de dados', icon: 'transform' },
        { name: 'Migração de dados entre sistemas', icon: 'swap_horiz' },
        { name: 'Validação e consistência de dados', icon: 'fact_check' }
      ]
    },
    {
      category: 'Metodologias e Gestão',
      icon: 'groups',
      items: [
        { name: 'Metodologia Ágil (Kanban)', icon: 'view_kanban' },
        { name: 'Jira', icon: 'assignment' },
        { name: 'Atuação em times/squads', icon: 'diversity_3' }
      ]
    },
    {
      category: 'Competências',
      icon: 'psychology',
      items: [
        { name: 'Facilidade de aprendizado', icon: 'school' },
        { name: 'Organização', icon: 'checklist' },
        { name: 'Foco em resolução de problemas complexos', icon: 'troubleshoot' },
        { name: 'Boa comunicação técnica', icon: 'forum' },
        { name: 'Compartilhamento de conhecimento', icon: 'share' },
        { name: 'Visão analítica de processos', icon: 'insights' },
        { name: 'Adaptabilidade a diferentes cenários', icon: 'tune' }
      ]
    }
  ];

  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Habilidades & Competências
        </Heading>
        <p className={styles.skillsIntroText}>
          Ao longo da minha trajetória, trabalhei com diferentes tecnologias, linguagens e contextos — desde sistemas legados até integrações complexas e migração de dados. Abaixo estão as principais áreas em que já atuei e atuo:
        </p>
        <div className={styles.skillsCategories}>
          {skills.map((skill, idx) => (
            <div key={idx} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <span className="material-icons-outlined">{skill.icon}</span>
                <Heading as="h3" className={styles.categoryTitle}>
                  {skill.category}
                </Heading>
              </div>
              <div className={styles.categoryItems}>
                {skill.items.map((item, itemIdx) => (
                  <div key={itemIdx} className={styles.skillItem}>
                    <span className="material-icons-outlined">{item.icon}</span>
                    <span className={styles.skillName}>{item.name}</span>
                  </div>
                ))}
              </div>
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
