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
    <a href="#work" class="toc-link">Work Experience</a>
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

.tag {
  display: inline-block;
  padding: 3px 8px;
  margin: 0 4px;
  border-radius: 4px;
  background-color: #f5f5f5;
  color: #666;
  font-size: 0.75em;
  font-weight: 400;
  letter-spacing: 0.3px;
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

.tech-tags {
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}

.project-stage {
  font-size: 0.85em;
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
  
  .tech-tags {
    justify-content: flex-start;
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
      <div class="tech-tags">
        <span class="tag">CSE</span>
        <span class="tag">Dual Degree</span>
      </div>
    </div>

    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Master's Thesis</h3>
        <p class="project-desc">Benchmarking Auto-Scaling Capability of OpenFaaS</p>
      </div>
      <div class="tech-tags">
        <span class="tag">FaaS</span>
        <span class="tag">benchmarking</span>
      </div>
    </div>

    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Research Project @ Bharti School</h3>
        <p class="project-desc">Music Generation Using GAN - Implemented hybrid-GAN for polyphonic music</p>
      </div>
      <div class="tech-tags">
        <span class="tag">ML</span>
        <span class="tag">GAN</span>
        <span class="tag">Music</span>
      </div>
    </div>

        
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">System Admin @ IIT Delhi</h3>
        <p class="project-desc">OAuth system and infrastructure management (Sep 2017 - Jul 2021)</p>
      </div>
      <div class="tech-tags">
        <span class="tag">linux</span>
        <span class="tag">apache</span>
      </div>
    </div>


    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">SDE Intern @ Flipkart</h3>
        <p class="project-desc">Developed Hive Logic signal generator for hadoop clusters (Summer 2020)</p>
      </div>
      <div class="tech-tags">
        <span class="tag">hadoop</span>
        <span class="tag">hive</span>
        <span class="tag">java</span>
      </div>
    </div>

    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Data Science Intern @ Nokia</h3>
        <p class="project-desc">Real-time customer complaints analysis and network congestion prediction (Summer 2019)</p>
      </div>
      <div class="tech-tags">
        <span class="tag">data science</span>
        <span class="tag">ml</span>
        <span class="tag">python</span>
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
      <div class="tech-tags">
        <span class="tag">fintech</span>
        <span class="tag">ai</span>
      </div>
    </div>
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title">Launching 2 Soon...</h3>
        <!-- <p class="project-desc">Stay tuned for more updates on my startup ventures.</p> -->
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
        <h3 class="project-title">Software Engineer @ PolymerSearch</h3>
        <p class="project-desc">Core server development, AI insights, and NLP implementations (Oct 2021 - Present)[Seed Funding, Early Revenue]</p>
      </div>
      <div class="tech-tags">
        <span class="tag">golang</span>
        <span class="tag">redis</span>
        <span class="tag">mongodb</span>
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
      <div class="tech-tags">
        <span class="tag">golang</span>
        <span class="tag">concurrency</span>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/batsync">batsync</a></h3>
        <p class="project-desc">Python async manager for rate-limited operations</p>
      </div>
      <div class="tech-tags">
        <span class="tag">python</span>
        <span class="tag">async</span>
      </div>
    </div>
    
    <div class="project-item">
      <div class="project-info">
        <h3 class="project-title"><a href="https://github.com/techcentaur/Bitcoin-Simulation">Bitcoin Simulation</a></h3>
        <p class="project-desc">Complete Bitcoin system implementation</p>
      </div>
      <div class="tech-tags">
        <span class="tag">blockchain</span>
        <span class="tag">crypto</span>
      </div>
    </div>
  </div>
</section>
