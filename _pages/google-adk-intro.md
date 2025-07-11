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
  <h2>Features</h2>
  <img src="/images/events_events.png"
       alt="ADK agent Events Events"
       style="max-width: 90%; height: auto; border: 2px solid #ccc; border-radius: 8px;" />
  <aside class="notes">
    Walk the audience through the arrows—from browser → Codespace → ADK host → Google Cloud → Gemini—while pointing to each section on the image.
  </aside>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>Features</h2>
  <img src="/images/events_diagram.png"
       alt="ADK agent Events Diagram"
       style="max-width: 90%; height: auto; border: 2px solid #ccc; border-radius: 8px;" />
  <aside class="notes">
    Walk the audience through the arrows—from browser → Codespace → ADK host → Google Cloud → Gemini—while pointing to each section on the image.
  </aside>
</section>

<!-- ──────────────────────────── -->
<section>
  <h2>Features</h2>
  <img src="/images/events_trace.png"
       alt="ADK agent Events Trace"
       style="max-width: 90%; height: auto; border: 2px solid #ccc; border-radius: 8px;" />
  <aside class="notes">
    Walk the audience through the arrows—from browser → Codespace → ADK host → Google Cloud → Gemini—while pointing to each section on the image.
  </aside>
</section>


<!-- ──────────────────────────── -->
<<!-- ── Getting Started ① ── -->
<section>
  <h2>Getting Started (1/3)</h2>
  <p>Imports & helper libraries</p>
  <pre><code class="python" data-line-numbers>
import datetime
from zoneinfo import ZoneInfo
from google.adk.agents import Agent
  </code></pre>
  <aside class="notes">
    • <code>ZoneInfo</code> for timezone‑aware timestamps.  
    • <code>Agent</code> comes directly from <code>google.adk.agents</code>.
  </aside>
</section>

<!-- ── Getting Started ② ── -->
<section>
  <h2>Getting Started (2/3)</h2>
  <p>Define your <em>tool functions</em></p>
  <pre><code class="python" data-line-numbers="3-19|22-40">
def get_weather(city: str) -> dict:
    """Return a mock weather report."""
    if city.lower() == "new york":
        return {
            "status": "success",
            "report": (
                "The weather in New York is sunny, 25 °C "
                "(77 °F)."
            ),
        }
    return {
        "status": "error",
        "error_message": f"No weather data for '{city}'.",
    }

def get_current_time(city: str) -> dict:
    """Return the current time in the requested city."""
    if city.lower() != "new york":
        return {
            "status": "error",
            "error_message": (
                f"Sorry, I don't have timezone info for {city}."
            ),
        }
    tz = ZoneInfo("America/New_York")
    now = datetime.datetime.now(tz)
    return {
        "status": "success",
        "report": (
            f"The current time in {city} is "
            f"{now:%Y-%m-%d %H:%M:%S %Z%z}"
        ),
    }
  </code></pre>
  <aside class="notes">
    Each tool returns a dict with <code>status</code> and either
    <code>report</code> or <code>error_message</code>—exactly what ADK expects.
  </aside>
</section>

<!-- ── Getting Started ③ ── -->
<section>
  <h2>Getting Started (3/3)</h2>
  <p>Create the <strong>root agent</strong></p>
  <pre><code class="python" data-line-numbers>
root_agent = Agent(
    name="weather_time_agent",
    model="gemini-2.5-flash",
    description=(
        "Agent that answers questions about time "
        "and weather in a city."
    ),
    instruction=(
        "You are a helpful agent who can answer user "
        "questions about the time and weather."
    ),
    tools=[get_weather, get_current_time],
)
  </code></pre>
  <aside class="notes">
    • Attach the two tools.<br>
    • Swap <code>model</code> to <code>gemini-live-2.5-flash-preview</code> for voice.  
    • That’s a fully functioning ADK agent!
  </aside>
</section>

<!-- ── Live Demo (last slide before Q&A) ── -->
<section>
  <h2>Live Demo</h2>
  <p>Let’s run <code>root_agent.ask("What’s the weather in New York?")</code>!</p>
  <p><em>(Opening Codespace…)</em></p>
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
  <h2>References</h2>
  <div class="contact">
    <ul>
      <li><a href="https://google.github.io/adk-docs/">Google ADK Docs</a></li>
      <li><a href="https://github.com/bhancockio/agent-development-kit-crash-course/">Agent Development Kit Crash Course</a></li>
    </ul>
  </div>
</section>


<!-- ──────────────────────────── -->
<section>
  <h2>Thank You!</h2>
  <p>Questions? Let’s discuss.</p>
  <div class="contact">
    <p>Find me on:</p>
    <ul>
      <li><a href="https://github.com/clarkngo">GitHub</a></li>
      <li><a href="https://linkedin.com/in/clarkngo">LinkedIn</a></li>
    </ul>
  </div>
</section>
