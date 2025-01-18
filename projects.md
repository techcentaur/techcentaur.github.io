---
layout: page
title: Projects
permalink: /projects/
---

<div class="toc">
  <nav class="toc-nav">
    <a href="#education" class="toc-link">Education</a>
    <span class="separator">•</span>
    <a href="#mystartups" class="toc-link">My Startups (Founder)</a>
    <span class="separator">•</span>
    <a href="#startups" class="toc-link">Startups I've Worked At</a>
    <span class="separator">•</span>
    <a href="#opensource" class="toc-link">Open Source</a>
  </nav>
</div>

<style>
.toc {
  margin-bottom: 2rem;
  text-align: center;
}

.toc-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.toc-link {
  color: #1a365d;
  text-decoration: none;
  font-size: 0.95em;
  font-weight: 500;
  transition: color 0.2s;
}

.toc-link:hover {
  color: #00bfff;
}

.separator {
  color: #666;
  font-size: 0.8em;
}

.projects-section {
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.projects-section h2 {
  text-align: center;
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0.5rem 0;
}

.project-title {
  font-size: 0.95em;
  font-weight: 500;
  color: #1a365d;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  text-align: left;
}

.project-title a {
  text-decoration: none;
  color: inherit;
}

.project-desc {
  font-size: 0.9em;
  color: #666;
  margin: 0;
  padding: 0;
  line-height: 1.2;
  text-align: left;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: left;
}

@media (max-width: 768px) {
  .project-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>

<!-- Education Section -->
<section id="education" class="projects-section">
  <h2>Education</h2>
  <div class="project-list">
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">IIT Delhi</h3>
        <p class="project-desc">B.Tech & M.Tech in Computer Science (2016 - 2021)</p>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Master's Thesis</h3>
        <p class="project-desc">Benchmarking Auto-Scaling Capability of OpenFaaS</p>
      </div>
    </div>

    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Research Project @ Bharti School</h3>
        <p class="project-desc">Music Generation Using GAN - Implemented hybrid-GAN for polyphonic music</p>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">System Admin @ IIT Delhi</h3>
        <p class="project-desc">OAuth system and infrastructure management (Sep 2017 - Jul 2021)</p>
      </div>
    </div>

    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">SDE Intern @ Flipkart</h3>
        <p class="project-desc">Developed Hive Logic signal generator for hadoop clusters (Summer 2020)</p>
      </div>
    </div>

    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Data Science Intern @ Nokia</h3>
        <p class="project-desc">Real-time customer complaints analysis and network congestion prediction (Summer 2019)</p>
      </div>
    </div>
  </div>
</section>

<!-- My Startups Section -->
<section id="mystartups" class="projects-section">
  <h2>My Startups (Founder)</h2>
  <div class="project-list">
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://garudinsights.com">Garud Insights</a></h3>
        <p class="project-desc">AI-powered market intelligence platform for Indian traders [Bootstrapped, Early Revenue]</p>
      </div>
    </div>
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Reply.AI</h3>
        <p class="project-desc">AI-Powered Reddit Marketing That Actually Works [Bootstrapped, Just launched]</p>
      </div>
    </div>
  </div>
</section>

<!-- Startups I've Worked At Section -->
<section id="startups" class="projects-section">
  <h2>Startups I've Worked At</h2>
  <div class="project-list">
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">PolymerSearch</h3>
        <div class="project-positions" style="margin-left: 1rem;">
          <div class="position">
            <p class="project-desc" style="margin-bottom: 0.2rem;">AI Software Engineer</p>
            <p class="project-desc" style="margin-left: 1rem;">Created PolyAI (LLM based Gen-AI system) with custom agentic system and complex tooling architecture for dynamic user data handling (Aug 2023 - Nov 2024)</p>
          </div>

          <div class="position">
            <p class="project-desc" style="margin-bottom: 0.2rem;">Software Engineer II</p>
            <p class="project-desc" style="margin-left: 1rem;">Core server development focusing on performance optimization, maintenance, and combinatorial algorithms (Oct 2021 - Aug 2023)</p>
          </div>

          <div class="position">
            <p class="project-desc" style="margin-bottom: 0.2rem;">Founding Engineer</p>
            <p class="project-desc" style="margin-left: 1rem;">Implemented data and NLP applications for traffic optimization through auto-tagging and SEO (Jul 2021 - Sep 2021)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- Open Source Section -->
<section id="opensource" class="projects-section">
  <h2>Open Source</h2>
  <div class="project-list">
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/gobatch">gobatch</a></h3>
        <p class="project-desc">Golang package for efficient batch processing</p>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/batsync">batsync</a></h3>
        <p class="project-desc">Python async manager for rate-limited operations</p>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/Bitcoin-Simulation">Bitcoin Simulation</a></h3>
        <p class="project-desc">Complete Bitcoin system implementation</p>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/PyLex">PyLex</a></h3>
        <p class="project-desc">Perform lexical analysis on words, one word at a time.</p>
      </div>
    </div>
  </div>
</section>
