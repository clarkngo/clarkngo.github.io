---
title: "Demystifying Google ADK: A Simple Guide"
layout: presentation
permalink: /presentations/google-adk-intro/
---

<!-- ──────────────────────────── -->
<section>
  <h1>Demystifying Google ADK</h1>
  <h3>A Simple Guide to the Future of AI Development</h3>
  <p>Understanding Google’s AI Development Kit through a basic agent implementation</p>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>What is Google ADK?</h2>
  <ul>
    <li>AI Development Kit from Google</li>
    <li>Makes AI agents easier to build & deploy</li>
    <li>Works with Gemini <em>and</em> other AI models</li>
    <li>Think of it as <strong>“Lego blocks for AI”</strong></li>
  </ul>
  <aside class="notes">
    Picture a toolbox of AI parts you can snap together—that’s ADK!
  </aside>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>How It Works&nbsp;<span style="font-size:0.7em">(ELI5)</span></h2>
  <ol>
    <li>You type a question in your browser</li>
    <li>Your code in GitHub Codespace gets it</li>
    <li>The ADK agent figures out what you want</li>
    <li>It asks Gemini (via Google Cloud) for help</li>
    <li>Gemini “thinks” and answers</li>
    <li>The reply comes straight back to you!</li>
  </ol>
  <aside class="notes">
    Same flow as texting a smart friend who asks an expert, then relays the answer.
  </aside>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>System Overview</h2>
  <img src="/images/basic_agent_deployment_diagram.png"
       alt="Basic ADK agent deployment diagram"
       style="max-width: 90%; height: auto; border: 2px solid #ccc; border-radius: 8px;" />
  <aside class="notes">
    Walk the audience through the arrows—from browser → Codespace → ADK host → Google Cloud → Gemini—while pointing to each section on the image.
  </aside>
</section>


<!-- ──────────────────────────── -->
<section>
  <h2>Why It’s Important</h2>
  <div class="split">
    <div>
      <h3>For Business</h3>
      <ul>
        <li class="fragment">Faster AI development</li>
        <li class="fragment">Lower operational cost</li>
        <li class="fragment">Smooth integration</li>
        <li class="fragment">Reliable, scalable apps</li>
      </ul>
    </div>
    <div>
      <h3>For Tech Teams</h3>
      <ul>
        <li class="fragment">Standardized building blocks</li>
        <li class="fragment">Cloud‑agnostic deployment</li>
        <li class="fragment">Built‑in security patterns</li>
        <li class="fragment">CI/CD‑friendly workflow</li>
      </ul>
    </div>
  </div>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>Live&nbsp;Demo</h2>
  <p>Let’s build & run our first Google ADK agent.</p>
  <p><em>(Switching to GitHub Codespace…)</em></p>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>Getting Started</h2>
  <pre><code class="python">
# Minimal ADK agent example
from google.cloud import adk

def create_basic_agent():
    agent = adk.Agent()
    agent.add_capability("chat")
    return agent

# Boom! Your first ADK agent is ready
  </code></pre>
  <p>It really is that simple.</p>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>What’s Next?</h2>
  <ul>
    <li class="fragment">Add new capabilities (vision, search, tools)</li>
    <li class="fragment">Connect external APIs & databases</li>
    <li class="fragment">Handle domain‑specific tasks</li>
    <li class="fragment">Orchestrate multi‑agent workflows</li>
  </ul>
  <p>Start small → scale as your needs grow.</p>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>Thank You!</h2>
  <p>Questions? Let’s discuss.</p>
  <div class="contact">
    <p>Find me on:</p>
    <ul>
      <li><a href="https://github.com/your‑handle">GitHub</a></li>
      <li><a href="https://linkedin.com/in/your‑handle">LinkedIn</a></li>
      <li><a href="https://twitter.com/your‑handle">Twitter</a></li>
    </ul>
  </div>
</section>
