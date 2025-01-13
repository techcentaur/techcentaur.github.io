---
layout: page
title: Self Mentorship Program
permalink: /mentor/
---
<p>This mentorship program is <span style="background-color: #e0e0e0;">completely free</span>. I <span style="background-color: #e0e0e0;">dedicate a few hours</span> every week to help the developer community (more so to those who might not have access to quality mentorship otherwise, but not limited to them). <a href="/projects">Check my qualifications here.</a></p>

<div class="mentor-philosophy">
  <h3>My Approach</h3>
  <p>My goal is to build a bond, where we have a weekly meeting of about an hour, over the course of multiple weeks or even months. I'm less interested in one-off meetings where I answer one specific question but if it is related to discussing big architecture or design decisions, that works.</p>
</div>

<div class="mentor-container">
  <div class="mentor-left">
    <h2>For Developers</h2>
    <h3>What We Can Work On</h3>
    <!-- <p>One-on-one video calls, pair programming sessions, Machine Learning, and Software Engineering.</p> -->
    <ul>
      <li>Debug problems you're stuck on</li>
      <li>Discuss architecture of your web app or API</li>
      <li>Explore testing strategies</li>
      <li>Any other technical challenges you face or testing strategies</li>
    </ul>
    <h3>What You Need</h3>
    <ul>
      <li>Basic programming knowledge</li>
      <li>Stable internet for video calls</li>
      <li>Ability to communicate in English or Hindi</li>
    </ul>
  </div>

  <div class="mentor-right">
    <h2>For Startups</h2>
    <h3>What We Can Work On</h3>
    <ul>
      <li>Your Startup's AI requirements, Gen-AI Architecture</li>
      <li>Infrastructure, AI Costs from Business Perspective</li>
      <li>Parallelism and Concurrency
        <p style="margin-left: 2rem; font-size: 0.85em; font-weight: 500;">I gave a talk in Golang on this topic.</p>
      </li>
    </ul>
    <h3>What You Need</h3>
    <ul>
      <li>Clearly defined problems (I'm ok with vague problems but not necessarily vague solutions)</li>
    </ul>
  </div>
</div>

<div class="schedule-note">
  <h3>Availability</h3>
  <p>My preferred "hours" are between 12pm and 8pm IST (Indian Standard Time). Please consider timezone differences.</p>
</div>

<div class="contact-section">
  <p>If this resonates with you, let's chat:</p>
  <div class="contact-center">
    <a href="mailto:ankit@solanki.dev" class="contact-button">Email Me — with all your questions & requirements</a>
  </div>
</div>

<div class="notes-container">
  <div class="note pull-left" style="width: 50%;">
    <p>I'm not an expert in literally every aspect of development (you can never know everything even with years of experience), but I'll try my best to help where I can.</p>
  </div>
  <div class="note pull-right" style="width: 50%;">
    <p>The goal is to help you solve problems that Google, ChatGPT, and the Internet couldn't.</p>
  </div>
</div>

<style>
.mentor-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
}

.mentor-left, .mentor-right {
  font-size: 1.05rem;
  line-height: 1.6;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #111;
}

h3 {
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
  color: #333;
}

p {
  margin-bottom: 1.2rem;
  color: #444;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
}

li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #2b5a8c;
}

.note {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #2b5a8c;
}

.note p {
  margin: 0;
}

.contact-section {
  margin-top: 3rem;
  text-align: center;
}

.contact-center {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.contact-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #111;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.2s ease;
}

.contact-button:hover {
  background: #333;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .mentor-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.mentor-philosophy {
  max-width: 800px;
  margin: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.mentor-philosophy h2 {
  color: #111;
  margin-bottom: 1rem;
}

.mentor-philosophy h3 {
  color: #333;
  margin: 1.5rem 0 1rem;
}

.mentor-philosophy ul {
  list-style-type: none;
  padding: 0;
}

.mentor-philosophy li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.mentor-philosophy li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #2b5a8c;
}

.schedule-note {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff8dc;
  border-radius: 8px;
  border-left: 4px solid #ffd700;
}

.schedule-note h3 {
  color: #333;
  margin: 0 0 1rem;
}

.schedule-note p {
  margin: 0;
  color: #555;
}

.notes-container {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
}

.note.pull-left, .note.pull-right {
  flex: 1;
  margin: 0;
}
</style> 