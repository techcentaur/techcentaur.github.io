---
layout: page
title: Projects
permalink: /projects/
---

<style>
.tag {
  display: inline-block;
  padding: 2px 6px;
  margin: 0 6px 6px 0;
  border-radius: 15px;
  background-color: white;
  color: #666;
  font-size: 0.7em;
  font-weight: 500;
  letter-spacing: 0.3px;
  transition: all 0.1s ease;
  border: 1px solid black;
}

.tag:hover {
  background-color: #eeeeee;
  color: #444;
  transform: translateY(-1px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 2rem -1rem;
}

.project-column {
  background: #fafafa;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.project-column h2 {
  margin: 0 0 1.5rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
  font-size: 1.1em;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.2px;
}

.project-item {
  margin-bottom: 1rem;
  padding-left: 0.5rem;
}

.project-item h3 {
  font-size: 1em;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: #00bfff;
}

.project-item h3 a {
  text-decoration: none;
  color: #00bfff;
  transition: color 0.2s;
}

.project-item h3 a:hover {
  color: #008cc6;
}

.project-item p {
  font-size: 0.9em;
  line-height: 1.5;
  color: #666;
  margin: 0.4rem 0;
}

.project-item .tech-tags {
  margin-top: 0.75rem;
}

.project-item:last-child {
  margin-bottom: 0;
}

.note {
  font-size: 0.85em;
  color: #888;
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    margin: 1rem 0;
    gap: 1.5rem;
  }
  
  .project-column {
    margin-bottom: 1rem;
  }
}
</style>

<div class="projects-grid">
  <!-- Startups Column (Keep Original) -->
  <div class="project-column">
    <h2>My Startups</h2>
    
    <div class="project-item">
      <h3><a href="https://garudinsights.com">Garud Insights</a></h3>
      <p>AI-powered market intelligence platform for Indian traders.</p>
      <div class="tech-tags">
        <span class="tag">fintech</span>
        <span class="tag">ai</span>
      </div>
    </div>

    <div class="project-item">
      <p><em>3 more SaaS products in pipeline</em></p>
    </div>
  </div>

  <!-- Open Source Column (Keep Original) -->
  <div class="project-column">
    <h2>Open Source</h2>
    
    <div class="project-item">
      <h3><a href="https://github.com/techcentaur/gobatch">gobatch</a></h3>
      <p>Golang package for efficient batch processing.</p>
      <div class="tech-tags">
        <span class="tag">golang</span>
        <span class="tag">concurrency</span>
      </div>
    </div>

    <div class="project-item">
      <h3><a href="https://github.com/techcentaur/batsync">batsync</a></h3>
      <p>Python async manager for rate-limited operations.</p>
      <div class="tech-tags">
        <span class="tag">python</span>
        <span class="tag">async</span>
      </div>
    </div>

    <div class="project-item">
      <h3><a href="https://github.com/techcentaur/Bitcoin-Simulation">Bitcoin Simulation</a></h3>
      <p>Complete Bitcoin system implementation.</p>
      <div class="tech-tags">
        <span class="tag">blockchain</span>
        <span class="tag">crypto</span>
      </div>
    </div>
  </div>

  <!-- Updated Work Experience Column -->
  <div class="project-column">
    <h2>Work Experience</h2>
    
    <div class="project-item">
      <h3>Software Engineer @ PolymerSearch</h3>
      <p>Oct 2021 - Present</p>
      <p>Core server development, AI insights, and NLP implementations</p>
      <div class="tech-tags">
        <span class="tag">golang</span>
        <span class="tag">redis</span>
        <span class="tag">mongodb</span>
      </div>
    </div>

    <div class="project-item">
      <h3>System Admin @ IIT Delhi</h3>
      <p>Sep 2017 - Jul 2021</p>
      <p>OAuth system and infrastructure management</p>
      <div class="tech-tags">
        <span class="tag">linux</span>
        <span class="tag">apache</span>
        <span class="tag">oauth</span>
      </div>
    </div>

    <div class="project-item">
      <h3>Internships</h3>
      <p>Nokia (Summer 2019) - Data Science</p>
      <p>Flipkart (Summer 2020) - Software Engineering</p>
      <div class="tech-tags">
        <span class="tag">hadoop</span>
        <span class="tag">data science</span>
      </div>
    </div>
  </div>

  <!-- Updated Education Column -->
  <div class="project-column">
    <h2>Education</h2>
    
    <div class="project-item">
      <h3>IIT Delhi</h3>
      <p>B.Tech & M.Tech in Computer Science</p>
      <p>2016 - 2021</p>
      <div class="tech-tags">
        <span class="tag">CSE</span>
        <span class="tag">Dual Degree</span>
      </div>
    </div>

    <div class="project-item">
      <h3>Master's Thesis</h3>
      <p>Benchmarking Auto-Scaling Capability of OpenFaaS</p>
      <div class="tech-tags">
        <span class="tag">FaaS</span>
        <span class="tag">benchmarking</span>
      </div>
    </div>

    <div class="project-item">
      <h3>Research Project</h3>
      <p>Music Generation Using GAN @ Bharti School</p>
      <div class="tech-tags">
        <span class="tag">ML</span>
        <span class="tag">GAN</span>
      </div>
    </div>
  </div>
</div>

<p class="note" style="font-style: italic; margin-top: 2rem;">More projects being added as they move from private to public repositories.</p>
