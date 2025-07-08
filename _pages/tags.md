---
layout: archive
permalink: /tags/
title: "Posts by Tag"
author_profile: true
---

{% assign tags = site.tags | sort %}

<div class="tag-cloud">
  {% for tag in tags %}
    {% assign tag_name = tag[0] %}
    {% assign posts = tag[1] %}
    <a href="#{{ tag_name | slugify }}" class="tag-link">
      <span class="tag-name">{{ tag_name }}</span>
      <span class="tag-count">({{ posts | size }})</span>
    </a>
  {% endfor %}
</div>

<div class="tag-sections">
  {% for tag in tags %}
    {% assign tag_name = tag[0] %}
    {% assign posts = tag[1] %}
    <div id="{{ tag_name | slugify }}" class="tag-section">
      <h2 class="tag-heading">{{ tag_name }}</h2>
      {% for post in posts %}
        {% include archive-single.html %}
      {% endfor %}
    </div>
  {% endfor %}
</div>

<style>
.tag-cloud {
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-link {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.tag-link:hover {
  background-color: #e0e0e0;
  transform: translateY(-1px);
}

.tag-count {
  margin-left: 0.25rem;
  opacity: 0.7;
}

.tag-section {
  margin-bottom: 3rem;
  display: none;
}

.tag-section.active {
  display: block;
}

.tag-heading {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}
</style>

<script>
function showTagSection(tagId) {
  // Hide all sections first
  document.querySelectorAll('.tag-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the selected section
  const section = document.getElementById(tagId);
  if (section) {
    section.classList.add('active');
  }
  
  // Update active state of tag links
  document.querySelectorAll('.tag-link').forEach(link => {
    if (link.getAttribute('href') === '#' + tagId) {
      link.style.backgroundColor = '#e0e0e0';
    } else {
      link.style.backgroundColor = '#f0f0f0';
    }
  });
}

// Handle initial load and hash changes
function handleHashChange() {
  const hash = window.location.hash.slice(1); // Remove the # symbol
  if (hash) {
    showTagSection(hash);
  } else {
    // If no hash, show all sections
    document.querySelectorAll('.tag-section').forEach(section => {
      section.classList.add('active');
    });
  }
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Handle initial page load
document.addEventListener('DOMContentLoaded', handleHashChange);
</script> 