export const architectureContent = String.raw`<div class="topbar">
  <div class="topbar-inner">
    <div class="brand">Enterprise AI Engineering Practitioner Series</div>
    <div class="badge">Foundation Module · Capability & Technology Architecture</div>
  </div>
</div>

<div class="layout">
  <aside>
    <h3>Contents</h3>
    <a class="major-link" href="#intro">Executive Context</a>
    <a href="#misconception">1. Why the AI Landscape Is Not a Ladder</a>
    <a href="#problem-types">2. Start With the Problem Type</a>
    <a href="#five-intelligence">3. Five Forms of Enterprise Intelligence</a>
    <a href="#rules">4. Deterministic Systems</a>
    <a href="#ml">5. Machine Learning</a>
    <a href="#deep-learning">6. Deep Learning</a>
    <a href="#foundation-models">7. Foundation Models & GenAI</a>
    <a href="#information-problems">8. Knowledge vs Live Data vs Behavior</a>
    <a href="#rag">9. Retrieval-Augmented Generation</a>
    <a href="#tools">10. Tool-Using AI</a>
    <a href="#workflow-agent">11. Workflows vs Agents</a>
    <a href="#optimization">12. Optimization & Decision Intelligence</a>
    <a href="#hybrid">13. Hybrid Enterprise AI</a>
    <a href="#selection">14. Technology Selection Framework</a>
    <a href="#architecture">15. Enterprise Architecture View</a>
    <a href="#takeaways">Executive Synthesis</a>
  </aside>

  <main>
    <div class="hero" id="intro">
      <h1>Enterprise AI Capability Architecture</h1>
      <p>From deterministic rules and predictive machine learning to RAG, tool-using systems, optimization, and agentic workflows — a practical architecture guide for consultants designing enterprise-grade AI solutions.</p>
      <div class="meta">
        <span>Systems Thinking</span>
        <span>Technology Selection</span>
        <span>Hybrid AI Architecture</span>
        <span>Supply Chain Applications</span>
      </div>
    </div>

    <section>
      <div class="section-kicker">Executive Context</div>
      <h2>Think in Capabilities, Not Buzzwords</h2>
      <p class="lead">The purpose of this module is not to memorize a list of AI technologies. It is to develop the architectural judgment to look at a business problem and determine <strong>what kind of intelligence the problem actually requires</strong>.</p>

      <div class="quote">An experienced AI engineer does not start with “Which model should we use?” They start with “What capability does the business actually need?”</div>

      <pre><code>Business Problem
      ↓
What Capability Is Required?
      ↓
Prediction?
Retrieval?
Optimization?
Generation?
Reasoning?
Execution?
      ↓
Choose the Appropriate Technology
      ↓
Combine Technologies Where Necessary</code></pre>
    </section>

    <section id="misconception">
      <div class="section-kicker">Foundational Principle</div>
      <h2>1. Why the AI Landscape Is Not a Straight Ladder</h2>
      <p>You will often see simplified diagrams such as:</p>
      <pre><code>Rules
  ↓
Machine Learning
  ↓
Deep Learning
  ↓
LLMs
  ↓
RAG
  ↓
Agents</code></pre>

      <p>That is intuitive, but technically incorrect because these concepts exist at different abstraction levels.</p>

      <table>
        <thead><tr><th>Concept</th><th>What It Actually Is</th></tr></thead>
        <tbody>
          <tr><td>Machine Learning</td><td>A modeling paradigm</td></tr>
          <tr><td>Deep Learning</td><td>A subset of machine learning based on neural networks</td></tr>
          <tr><td>LLM</td><td>A type of foundation model</td></tr>
          <tr><td>RAG</td><td>A system architecture pattern</td></tr>
          <tr><td>Agent</td><td>An application / orchestration pattern</td></tr>
          <tr><td>Vector Database</td><td>Infrastructure</td></tr>
          <tr><td>Optimization</td><td>A mathematical decision-making discipline</td></tr>
          <tr><td>Tool Calling</td><td>An interaction mechanism between AI and external systems</td></tr>
        </tbody>
      </table>

      <div class="callout blue"><strong>Practitioner takeaway</strong>These technologies do not replace one another. A mature enterprise AI solution may use rules, XGBoost, forecasting, optimization, RAG, LLMs, and agents in the same business process.</div>
    </section>

    <section id="problem-types">
      <div class="section-kicker">Problem Decomposition</div>
      <h2>2. Start With the Problem Type</h2>
      <p>Suppose a supply-chain leader says:</p>
      <div class="quote">“I want AI to improve order fulfillment.”</div>

      <p>That requirement is too broad. A consultant should decompose it into specific capabilities:</p>

      <table>
        <thead><tr><th>Business Question</th><th>Underlying Problem Type</th></tr></thead>
        <tbody>
          <tr><td>Which orders are likely to be delivered late?</td><td>Prediction / classification</td></tr>
          <tr><td>Why is this order delayed?</td><td>Retrieval + root-cause reasoning</td></tr>
          <tr><td>Which inventory should we move between DCs?</td><td>Optimization</td></tr>
          <tr><td>Explain the recommendation to the planner.</td><td>Generation / reasoning</td></tr>
          <tr><td>Retrieve the customer’s service requirements.</td><td>Knowledge retrieval</td></tr>
          <tr><td>Investigate this disruption across multiple systems.</td><td>Agentic workflow</td></tr>
          <tr><td>Create the approved stock-transfer order in ERP.</td><td>Transactional workflow</td></tr>
        </tbody>
      </table>

      <div class="callout green"><strong>Core principle</strong>One vague “AI” requirement may actually contain several different technical problems, each requiring a different technology.</div>
    </section>

    <section id="five-intelligence">
      <div class="section-kicker">Enterprise Mental Model</div>
      <h2>3. The Five Forms of Enterprise Intelligence</h2>

      <div class="grid-5">
        <div class="card"><h4>Deterministic</h4><p><strong>Question:</strong> What must happen?</p><p>Rules, policies, constraints, business logic.</p></div>
        <div class="card"><h4>Predictive</h4><p><strong>Question:</strong> What is likely to happen?</p><p>Statistics, ML, deep learning, forecasting.</p></div>
        <div class="card"><h4>Prescriptive</h4><p><strong>Question:</strong> What should we do?</p><p>Optimization, simulation, operations research.</p></div>
        <div class="card"><h4>Generative</h4><p><strong>Question:</strong> How should we explain, summarize, or interact?</p><p>Foundation models, LLMs, multimodal AI.</p></div>
        <div class="card"><h4>Agentic</h4><p><strong>Question:</strong> What actions should we dynamically take?</p><p>Tools, planning, state, memory, agents.</p></div>
      </div>

      <div class="formula">Enterprise Intelligence = Deterministic + Predictive + Prescriptive + Generative + Agentic</div>
    </section>

    <section id="rules">
      <div class="section-kicker">Deterministic Intelligence</div>
      <h2>4. Rules and Policy Engines</h2>

      <p>Some problems should remain deterministic.</p>
      <pre><code>IF remaining_shelf_life &lt; customer_min_shelf_life
THEN allocation_allowed = FALSE</code></pre>

      <div class="callout blue"><strong>Intuitive view</strong>If a traffic light is red, the expected action is “stop.” You do not need a probabilistic model to decide whether stopping is probably appropriate.</div>

      <p>Rules are appropriate when:</p>
      <ul>
        <li>behavior must be deterministic,</li>
        <li>regulations explicitly define the outcome,</li>
        <li>transparency is critical,</li>
        <li>exceptions are manageable.</li>
      </ul>

      <div class="sc">
        <div class="label">Supply Chain Application — Pharmaceutical Allocation</div>
        <p>An AI system may recommend a batch, but deterministic rules should enforce:</p>
        <ul>
          <li>quality status = released,</li>
          <li>remaining shelf life meets the customer requirement,</li>
          <li>destination market is approved,</li>
          <li>temperature compliance is valid,</li>
          <li>batch is not under recall.</li>
        </ul>
      </div>

      <div class="quote">Probabilistic intelligence should often operate inside deterministic boundaries.</div>
    </section>

    <section id="ml">
      <div class="section-kicker">Predictive Intelligence</div>
      <h2>5. Classical Machine Learning</h2>

      <p>Rules become difficult when relationships are numerous, nonlinear, and interacting. Instead of writing all relationships manually, machine learning learns them from historical examples.</p>

      <div class="formula">X → f(X) → Y</div>

      <p>For late-delivery prediction:</p>
      <pre><code>Inputs:
Carrier
Origin
Destination
Distance
Shipment mode
Warehouse release delay
Pickup delay
Weather
Port congestion
Customer priority

Target:
Late = 1
On-time = 0</code></pre>

      <p>A model such as LightGBM may output:</p>
      <pre><code>Shipment ID: 7649182
P(Late Delivery) = 0.87</code></pre>

      <p>This means the shipment is estimated to have an 87% probability of being late — not that lateness is guaranteed.</p>

      <h3>Classical ML Still Matters</h3>
      <p>For structured tabular enterprise data, models such as XGBoost, LightGBM, CatBoost, Random Forest, and Logistic Regression remain highly competitive.</p>

      <div class="callout amber"><strong>Architecture lesson</strong>Do not use an LLM merely because it is newer. For high-throughput tabular prediction, classical ML can be cheaper, faster, easier to explain, and more reliable.</div>

      <div class="sc">
        <div class="label">Supply Chain Application — Supplier Delay Prediction</div>
        <p>Predict whether a PO will arrive more than seven days late using supplier history, category, order quantity, factory, country, port, ASN accuracy, seasonality, and transport mode. A gradient-boosted model may be the best production choice.</p>
      </div>

      <h3>Prediction Is Not Decisioning</h3>
      <p>A model may say:</p>
      <pre><code>Late Delivery Probability = 91%</code></pre>
      <p>It does not automatically answer:</p>
      <div class="quote">“What should we do about it?”</div>
      <p>That becomes a decision or optimization problem.</p>
    </section>

    <section id="deep-learning">
      <div class="section-kicker">Representation Learning</div>
      <h2>6. Deep Learning</h2>

      <p>Deep learning is a subset of machine learning built around neural networks that learn increasingly useful internal representations.</p>

      <pre><code>Input
 ↓
Layer 1
 ↓
Layer 2
 ↓
Layer 3
 ↓
...
 ↓
Output</code></pre>

      <div class="callout blue"><strong>Intuitive view</strong>A classical system may require engineers to define image features such as edges, texture, and shapes. A deep network can learn those representations directly from data.</div>

      <pre><code>Pixels
 ↓
Edges
 ↓
Textures
 ↓
Shapes
 ↓
Object Structure
 ↓
Damage Pattern</code></pre>

      <p>Deep learning became particularly powerful for images, speech, text, video, audio, sequences, and graph-like data.</p>

      <div class="pillrow">
        <span class="pill">CNN</span>
        <span class="pill">RNN</span>
        <span class="pill">LSTM</span>
        <span class="pill">GRU</span>
        <span class="pill">Autoencoder</span>
        <span class="pill">GNN</span>
        <span class="pill">Transformer</span>
      </div>

      <div class="sc">
        <div class="label">Supply Chain Application — Visual Quality Inspection</div>
        <pre><code>Production Line
      ↓
Industrial Camera
      ↓
Deep Vision Model
      ↓
Defect Probability
      ↓
Threshold / Rules
      ↓
Accept / Reject / Human Review</code></pre>
        <p>The model detects. The deterministic control system decides what operational action is allowed.</p>
      </div>
    </section>

    <section id="foundation-models">
      <div class="section-kicker">General-Purpose AI</div>
      <h2>7. Foundation Models and Generative AI</h2>

      <p>Traditional ML usually produces specialized models:</p>
      <pre><code>Late-shipment model
Fraud model
Churn model
Demand forecast model
Defect model</code></pre>

      <p>Foundation models are pretrained at massive scale and can support many downstream tasks.</p>

      <div class="callout blue"><strong>Intuitive view</strong>Traditional ML is like hiring a specialist who only predicts late shipments. A foundation model is closer to hiring someone with broad general capability who can read, summarize, classify, extract, reason, translate, and generate code depending on instructions.</div>

      <h3>Large Language Models</h3>
      <pre><code>Text
 ↓
Tokens
 ↓
Embeddings
 ↓
Transformer
 ↓
Probability of Next Token
 ↓
Next Token
 ↓
Repeat</code></pre>

      <div class="formula">P(xₜ₊₁ | x₁, x₂, …, xₜ)</div>

      <p>At scale, this next-token objective gives rise to powerful behaviors such as question answering, summarization, classification, reasoning, translation, code generation, and extraction.</p>

      <h3>Generative AI Is Broader Than LLMs</h3>
      <div class="pillrow">
        <span class="pill">Text</span><span class="pill">Code</span><span class="pill">Images</span>
        <span class="pill">Audio</span><span class="pill">Video</span><span class="pill">Synthetic Data</span>
      </div>

      <div class="sc">
        <div class="label">Enterprise Application — Insurance Claims</div>
        <p>GenAI can summarize claim documents, extract key details, compare claims against policy language, draft correspondence, and explain recommendations. Fraud scoring may still use ML, image damage detection may use vision models, and eligibility may remain rule-based.</p>
      </div>
    </section>

    <section id="information-problems">
      <div class="section-kicker">Architecture Decision</div>
      <h2>8. Knowledge vs Live Data vs Model Behavior</h2>

      <p>When an LLM lacks information, first determine <strong>what kind of information problem you actually have</strong>.</p>

      <table>
        <thead><tr><th>Problem</th><th>Example</th><th>Likely Solution</th></tr></thead>
        <tbody>
          <tr><td>Missing enterprise knowledge</td><td>“What is our returns policy?”</td><td>RAG / search</td></tr>
          <tr><td>Missing live operational data</td><td>“How many units are currently in DC-4?”</td><td>Database / API / tool</td></tr>
          <tr><td>Incorrect or inconsistent model behavior</td><td>“The model does not reliably produce our required JSON format.”</td><td>Prompting, structured outputs, fine-tuning</td></tr>
        </tbody>
      </table>

      <div class="callout green"><strong>Critical distinction</strong>RAG solves a knowledge-access problem. Tools solve a live-system access problem. Fine-tuning primarily changes model behavior. These are not interchangeable.</div>
    </section>

    <section id="rag">
      <div class="section-kicker">Knowledge Intelligence</div>
      <h2>9. Retrieval-Augmented Generation (RAG)</h2>

      <p>Without RAG:</p>
      <pre><code>Question
 ↓
LLM
 ↓
Answer From Model Knowledge</code></pre>

      <p>With RAG:</p>
      <pre><code>Question
 ↓
Retrieve Relevant Enterprise Information
 ↓
Provide Context to LLM
 ↓
LLM Generates Grounded Answer</code></pre>

      <div class="callout blue"><strong>Intuitive view</strong>Without RAG, an intelligent consultant answers from memory. With RAG, the consultant first searches the organization's material, reads the relevant evidence, and then answers.</div>

      <div class="sc">
        <div class="label">Supply Chain Application — Lot Eligibility</div>
        <p>A warehouse manager asks: “Why can’t Lot 4821 be shipped to Customer ABC?” The system may retrieve the customer contract, shelf-life requirement, quality specification, warehouse SOP, and lot release certificate before generating an answer.</p>
      </div>

      <h3>Production RAG Is More Than a Vector Database</h3>
      <pre><code>Source Documents
      ↓
Ingestion
      ↓
Parsing
      ↓
Cleaning
      ↓
Chunking
      ↓
Metadata Extraction
      ↓
Embedding
      ↓
Indexing

User Query
      ↓
Query Understanding
      ↓
Keyword Search
      +
Semantic Search
      +
Metadata Filters
      ↓
Candidate Documents
      ↓
Reranking
      ↓
Context Assembly
      ↓
LLM
      ↓
Answer
      ↓
Citation Validation
      ↓
Evaluation</code></pre>

      <p>RAG is therefore a system architecture pattern, not merely “LLM + vector database.”</p>
    </section>

    <section id="tools">
      <div class="section-kicker">Operational Intelligence</div>
      <h2>10. Tool-Using AI</h2>

      <p>RAG gives a model access to knowledge. Tools give a model access to external capabilities.</p>

      <p>If a user asks:</p>
      <div class="quote">“Where is shipment 882901 right now?”</div>

      <p>The model should query the TMS or carrier system rather than search PDFs.</p>

      <pre><code>User
 ↓
LLM
 ↓
Model Determines Tool Is Required
 ↓
Tool Call
 ↓
TMS / ERP / Database / External API
 ↓
Tool Result
 ↓
LLM
 ↓
Human-Readable Response</code></pre>

      <div class="sc">
        <div class="label">Supply Chain Application — Typical Tools</div>
        <pre><code>get_inventory()
get_order()
get_shipment_status()
get_supplier_status()
query_forecast()
calculate_transport_cost()
run_replenishment_optimizer()
create_transfer_request()</code></pre>
      </div>

      <div class="callout red"><strong>Control principle</strong>Do not give the LLM unrestricted ability to manipulate critical operational systems. Use validation, authorization, policy checks, human approval where needed, and deterministic APIs for execution.</div>
    </section>

    <section id="workflow-agent">
      <div class="section-kicker">Orchestration</div>
      <h2>11. Deterministic Workflows vs Agentic Systems</h2>

      <h3>When the Process Is Known: Use a Workflow</h3>
      <pre><code>Retrieve Order
 ↓
Retrieve Inventory
 ↓
Check Delivery Commitment
 ↓
Calculate Risk
 ↓
Generate Summary</code></pre>

      <p>Advantages:</p>
      <div class="pillrow">
        <span class="pill">Predictable</span><span class="pill">Auditable</span><span class="pill">Lower Cost</span>
        <span class="pill">Lower Latency</span><span class="pill">Easier Testing</span><span class="pill">Easier Compliance</span>
      </div>

      <h3>When the Goal Is Known but the Path Is Not: Consider an Agent</h3>
      <p>Example:</p>
      <div class="quote">“Investigate why this customer order is delayed and identify the best recovery option.”</div>

      <pre><code>Goal
 ↓
Reason
 ↓
Choose Action
 ↓
Execute Tool
 ↓
Observe Result
 ↓
Update State
 ↓
Reason Again
 ↓
Choose Next Action
 ↓
...
 ↓
Goal Achieved / Stop</code></pre>

      <div class="sc">
        <div class="label">Supply Chain Application — Logistics Exception Agent</div>
        <ol>
          <li>Query shipment status.</li>
          <li>Inspect warehouse release events.</li>
          <li>Check carrier pickup status.</li>
          <li>Inspect weather or port disruption.</li>
          <li>Identify root cause.</li>
          <li>Search alternate carriers.</li>
          <li>Calculate service and cost impact.</li>
          <li>Recommend recovery action.</li>
          <li>Request approval.</li>
        </ol>
      </div>

      <h3>Why Production Agents Are Hard</h3>
      <p>Agents can call the wrong tool, loop, spend excessive tokens, misinterpret results, stop too early, fail to stop, or take unsafe actions.</p>

      <div class="pillrow">
        <span class="pill">Step Limits</span>
        <span class="pill">Cost Budgets</span>
        <span class="pill">Timeouts</span>
        <span class="pill">Tool Permissions</span>
        <span class="pill">Approval Gates</span>
        <span class="pill">Tracing</span>
        <span class="pill">Fallbacks</span>
      </div>

      <div class="callout amber"><strong>Rule of thumb</strong>If you already know the sequence of steps, prefer a workflow. If you know the goal but the system must dynamically determine the path, an agent may be appropriate.</div>
    </section>

    <section id="optimization">
      <div class="section-kicker">Prescriptive Intelligence</div>
      <h2>12. Optimization and Decision Intelligence</h2>

      <p>Suppose a model predicts:</p>
      <pre><code>DC-A demand next week = 15,000 units</code></pre>

      <p>Current inventory:</p>
      <pre><code>DC-A = 7,000
DC-B = 18,000
DC-C = 12,000</code></pre>

      <p>Prediction tells us what may happen. Optimization determines what we should do.</p>

      <div class="formula">Prediction → What will happen?</div>
      <div class="formula">Optimization → What should we do?</div>

      <h3>Supply Chain Optimization Example</h3>
      <p>Objective:</p>
      <div class="formula">Minimize Transportation Cost + Expected Stockout Cost + Excess Inventory Cost</div>

      <p>Subject to:</p>
      <ul>
        <li>DC capacity,</li>
        <li>truck capacity,</li>
        <li>inventory availability,</li>
        <li>shelf-life constraints,</li>
        <li>customer priority,</li>
        <li>service-level requirements,</li>
        <li>minimum shipment quantities.</li>
      </ul>

      <div class="callout green"><strong>Important</strong>LLMs can help formulate an optimization problem or explain its results, but large-scale numerical optimization should normally be solved by an actual optimization engine.</div>

      <div class="pillrow">
        <span class="pill">Linear Programming</span>
        <span class="pill">Mixed Integer Programming</span>
        <span class="pill">Constraint Programming</span>
        <span class="pill">Network Optimization</span>
        <span class="pill">Heuristics</span>
      </div>
    </section>

    <section id="hybrid">
      <div class="section-kicker">System Composition</div>
      <h2>13. What Real Hybrid Enterprise AI Looks Like</h2>

      <p>Consider an inventory intelligence platform detecting a stockout risk for SKU 59321 at DC-A.</p>

      <table>
        <thead><tr><th>Capability</th><th>Technology</th><th>Illustrative Output</th></tr></thead>
        <tbody>
          <tr><td>Predict future demand</td><td>Forecasting model</td><td>14-day demand = 12,500</td></tr>
          <tr><td>Predict supplier lead time</td><td>ML model</td><td>Expected lead time = 13.2 days</td></tr>
          <tr><td>Get live inventory</td><td>ERP / API tool</td><td>Available inventory = 4,700</td></tr>
          <tr><td>Retrieve policy</td><td>RAG</td><td>Safety-stock and allocation rules</td></tr>
          <tr><td>Determine transfer quantity</td><td>Optimization</td><td>Move 3,200 units DC-B → DC-A</td></tr>
          <tr><td>Validate constraints</td><td>Rules</td><td>Shelf life, eligibility, transport</td></tr>
          <tr><td>Explain recommendation</td><td>LLM</td><td>Business explanation with evidence</td></tr>
          <tr><td>Investigate abnormal lead time</td><td>Agent</td><td>Multi-system root-cause investigation</td></tr>
          <tr><td>Execute approved transfer</td><td>Workflow + API</td><td>ERP transfer order created</td></tr>
        </tbody>
      </table>

      <div class="quote">One business decision can legitimately require several different AI and software technologies.</div>

      <h3>Think of the Architecture as a Team of Specialists</h3>
      <table>
        <thead><tr><th>Component</th><th>Analogy</th></tr></thead>
        <tbody>
          <tr><td>ML Model</td><td>The predictor</td></tr>
          <tr><td>Optimization Solver</td><td>The mathematician</td></tr>
          <tr><td>Search Engine</td><td>The librarian</td></tr>
          <tr><td>RAG</td><td>The research analyst who retrieves evidence</td></tr>
          <tr><td>LLM</td><td>The communicator / reasoner</td></tr>
          <tr><td>Rules Engine</td><td>The compliance officer</td></tr>
          <tr><td>Agent</td><td>The investigator / coordinator</td></tr>
          <tr><td>API / Workflow</td><td>The operational executor</td></tr>
          <tr><td>Human</td><td>The accountable decision-maker where required</td></tr>
        </tbody>
      </table>
    </section>

    <section id="selection">
      <div class="section-kicker">Consulting Framework</div>
      <h2>14. Technology Selection Framework</h2>

      <p>When a business requirement arrives, work through the questions in this order:</p>

      <ol>
        <li><strong>Is the behavior completely defined?</strong> → Rules / workflow.</li>
        <li><strong>Do we need to predict something from historical data?</strong> → Statistics / ML / deep learning.</li>
        <li><strong>Do we need the best decision under constraints?</strong> → Optimization.</li>
        <li><strong>Do we need organizational knowledge?</strong> → Search / RAG.</li>
        <li><strong>Do we need natural-language understanding, generation, or reasoning?</strong> → LLM / foundation model.</li>
        <li><strong>Do we need current operational data or capabilities?</strong> → Tools / APIs / databases.</li>
        <li><strong>Is the process sequence already known?</strong> → Deterministic workflow.</li>
        <li><strong>Is the goal known but the path varies based on discoveries?</strong> → Consider an agent.</li>
      </ol>

      <table>
        <thead><tr><th>Capability</th><th>Typical Technology Choice</th></tr></thead>
        <tbody>
          <tr><td>Control</td><td>Rules / policies</td></tr>
          <tr><td>Predict</td><td>Machine learning</td></tr>
          <tr><td>Perceive complex data</td><td>Deep learning</td></tr>
          <tr><td>Forecast</td><td>Time-series / ML / DL</td></tr>
          <tr><td>Retrieve</td><td>Search / RAG</td></tr>
          <tr><td>Generate / reason</td><td>LLM / foundation model</td></tr>
          <tr><td>Decide optimally</td><td>Optimization</td></tr>
          <tr><td>Access live systems</td><td>Tools / APIs</td></tr>
          <tr><td>Execute a known process</td><td>Workflow</td></tr>
          <tr><td>Navigate an unknown process</td><td>Agent</td></tr>
          <tr><td>Control enterprise risk</td><td>Security / policy / human approval</td></tr>
        </tbody>
      </table>
    </section>

    <section id="architecture">
      <div class="section-kicker">Enterprise Reference Architecture</div>
      <h2>15. Visualize the Landscape as an Architecture, Not a Ladder</h2>

      <pre><code>                         BUSINESS PROBLEM
                               │
                               ▼
                     AI-ENABLED APPLICATION
                               │
                  Copilot / Assistant / Agent
                               │
                               ▼
                     ORCHESTRATION LAYER
                  ┌────────────┼────────────┐
                  │            │            │
               Workflow      Router       Agent
                  │            │            │
                  └────────────┼────────────┘
                               │

       ┌───────────────────────┼───────────────────────┐
       │                       │                       │
       ▼                       ▼                       ▼

PREDICTIVE LAYER        KNOWLEDGE LAYER        DECISION LAYER

Statistics              Search                 Rules
Classical ML            Embeddings             Optimization
Deep Learning           Vector Search          Simulation
Forecasting             RAG                    Operations Research
                        Knowledge Graphs

       │                       │                       │
       └───────────────────────┼───────────────────────┘
                               │
                               ▼

                        FOUNDATION MODELS
                         LLM / Multimodal
                               │
                               ▼

                           TOOL LAYER
                APIs / Databases / Enterprise Apps
                               │
          ┌────────────────────┼─────────────────────┐
          │                    │                     │
         ERP                  WMS                   TMS
         CRM                  OMS              External APIs
          │                    │                     │
          └────────────────────┼─────────────────────┘
                               │
                               ▼

                        CONTROL LAYER
              IAM / Security / Guardrails / Policies
                Human Approval / Audit / Governance

                               │
                               ▼

                       PLATFORM LAYER
               Serving / MLOps / LLMOps / CI-CD
             Evaluation / Monitoring / Observability
             Reliability / Scaling / Cost Management</code></pre>

      <div class="sc">
        <div class="label">Supply Chain Application — AI-Powered Logistics & Fulfillment Control Tower</div>
        <pre><code>                           CONTROL TOWER UI
                                  │
                                  ▼
                         AI ORCHESTRATION
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
          ▼                       ▼                       ▼

    PREDICTIVE AI           KNOWLEDGE AI          PRESCRIPTIVE AI

    Late Shipment ML        RAG                   Optimization
    ETA Prediction          SOP Search            Reallocation
    Stockout Risk           Contracts             Carrier Selection
    Demand Forecasting      Customer Rules        Recovery Planning

          │                       │                       │
          └───────────────────────┼───────────────────────┘
                                  │
                                  ▼

                            LLM / REASONING
                           Explain / Summarize
                           Understand / Interact
                                  │
                                  ▼

                          AGENTIC ORCHESTRATION
                        Complex Exception Investigation
                                  │
                                  ▼

                              TOOL LAYER
                 ERP │ OMS │ WMS │ TMS │ Carrier APIs
                                  │
                                  ▼

                           CONTROL / POLICY
                     Validation │ Authorization
                    Approval │ Compliance │ Audit
                                  │
                                  ▼

                              EXECUTION
                                  │
                                  ▼

                            OBSERVABILITY
                      Quality │ Cost │ Latency
                    Business Impact │ Feedback</code></pre>
      </div>
    </section>

    <section id="takeaways">
      <div class="section-kicker">Executive Synthesis</div>
      <h2>Key Practitioner Takeaways</h2>

      <div class="grid-2">
        <div class="card">
          <h4>Architecture Principles</h4>
          <ul>
            <li>AI is not synonymous with LLMs.</li>
            <li>Rules, ML, optimization, RAG, LLMs, tools, workflows, and agents operate at different architectural levels.</li>
            <li>Newer technologies do not automatically replace older ones.</li>
            <li>Production AI systems are usually hybrid.</li>
            <li>Use specialized components where they are strongest.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Decision Principles</h4>
          <ul>
            <li>Start with the business problem.</li>
            <li>Decompose it into capabilities.</li>
            <li>Map each capability to the right technology.</li>
            <li>Keep high-impact actions inside deterministic controls.</li>
            <li>Use agentic autonomy only where the unknown path genuinely requires it.</li>
          </ul>
        </div>
      </div>

      <div class="formula">Enterprise AI Engineering = Systems Thinking + Lifecycle Thinking + Capability Thinking</div>

      <div class="quote">The expert question is not “Which AI technology can we use?” It is “What combination of capabilities will reliably produce the desired business outcome under real-world constraints?”</div>

      <div class="callout green"><strong>Next Module</strong>Neural Networks and Deep Learning Foundations — from linear models, neurons, weights, bias, activation functions, forward propagation, loss, gradient descent, and backpropagation to representation learning and the foundations required to understand Transformers.</div>
    </section>

    <div class="footer-note">
      Enterprise AI Engineering Practitioner Series · Capability & Technology Architecture · Designed for consulting capability development and internal knowledge sharing
    </div>
  </main>
</div>`
