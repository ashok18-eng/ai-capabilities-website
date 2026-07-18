export type ConceptLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Emerging'

export interface AtlasConcept {
  name: string
  level: ConceptLevel
}

export interface LearningDomain {
  id: string
  title: string
  promise: string
  enterpriseLens: string
  concepts: AtlasConcept[]
}

export interface GuidedPath {
  id: string
  title: string
  role: string
  outcome: string
  modules: string[]
  capstone: string
}

export interface DeepDive {
  id: string
  title: string
  level: ConceptLevel
  domain: string
  short: string
  intuition: string
  enterpriseExample: string
  mechanics: string[]
  productionLens: string[]
  failureModes: string[]
  practice: string
  lab: 'vector-db' | 'context-window' | 'memory' | 'api' | 'rag' | 'agent' | 'security' | 'evals'
}

const basic = 'Basic' as const
const intermediate = 'Intermediate' as const
const advanced = 'Advanced' as const
const emerging = 'Emerging' as const

export const learningDomains: LearningDomain[] = [
  {
    id: 'model-foundations',
    title: 'Model Foundations',
    promise: 'Understand how LLMs behave before wiring them into business systems.',
    enterpriseLens:
      'Learners connect model behavior to cost, latency, context limits, routing, fallback, and model selection decisions.',
    concepts: [
      { name: 'Foundation models', level: basic },
      { name: 'LLMs', level: basic },
      { name: 'Reasoning models', level: intermediate },
      { name: 'Multimodal models', level: intermediate },
      { name: 'Embedding models', level: basic },
      { name: 'Reranker models', level: intermediate },
      { name: 'Small language models', level: intermediate },
      { name: 'Model selection', level: basic },
      { name: 'Model routing', level: advanced },
      { name: 'Model fallback', level: intermediate },
      { name: 'Tokens', level: basic },
      { name: 'Context window', level: basic },
      { name: 'Sampling and temperature', level: basic },
      { name: 'Context engineering', level: intermediate },
      { name: 'Context compaction', level: advanced },
      { name: 'Latency budget', level: intermediate },
      { name: 'Cost budget', level: intermediate },
      { name: 'Inference optimization', level: advanced },
    ],
  },
  {
    id: 'prompting-structured-output',
    title: 'Prompting and Structured Outputs',
    promise: 'Turn prompts from ad hoc text into reusable, testable application assets.',
    enterpriseLens:
      'Learners practice instruction hierarchy, output contracts, JSON schema, validation, repair loops, and prompt testing.',
    concepts: [
      { name: 'System prompt', level: basic },
      { name: 'Developer instruction', level: intermediate },
      { name: 'Prompt templates', level: basic },
      { name: 'Few-shot prompting', level: basic },
      { name: 'Chain-of-thought', level: intermediate },
      { name: 'Self-consistency', level: advanced },
      { name: 'Prompt decomposition', level: intermediate },
      { name: 'Prompt versioning', level: intermediate },
      { name: 'Prompt testing', level: intermediate },
      { name: 'Prompt injection defense', level: intermediate },
      { name: 'Prompt optimization', level: advanced },
      { name: 'JSON output', level: basic },
      { name: 'JSON schema', level: intermediate },
      { name: 'Structured extraction', level: basic },
      { name: 'Output validation', level: intermediate },
      { name: 'Repair loops', level: intermediate },
      { name: 'Constrained decoding', level: advanced },
    ],
  },
  {
    id: 'rag-retrieval',
    title: 'RAG, Search, and Knowledge Engineering',
    promise: 'Build reliable knowledge systems instead of simple demos that retrieve random chunks.',
    enterpriseLens:
      'Learners see documents become parsed content, chunks, embeddings, metadata, searchable indexes, citations, and eval traces.',
    concepts: [
      { name: 'RAG', level: basic },
      { name: 'RAG vs learning', level: basic },
      { name: 'Naive RAG', level: basic },
      { name: 'Enterprise RAG', level: intermediate },
      { name: 'Contextual retrieval', level: intermediate },
      { name: 'Agentic RAG', level: advanced },
      { name: 'Graph RAG', level: advanced },
      { name: 'Multimodal RAG', level: advanced },
      { name: 'Document loading', level: basic },
      { name: 'Parsing', level: basic },
      { name: 'Layout-aware parsing', level: intermediate },
      { name: 'Metadata extraction', level: basic },
      { name: 'Incremental indexing', level: intermediate },
      { name: 'Data lineage', level: intermediate },
      { name: 'Fixed-size chunking', level: basic },
      { name: 'Sliding-window chunking', level: basic },
      { name: 'Sentence chunking', level: basic },
      { name: 'Paragraph chunking', level: basic },
      { name: 'Recursive chunking', level: basic },
      { name: 'Semantic chunking', level: intermediate },
      { name: 'Structure-aware chunking', level: intermediate },
      { name: 'Parent-child chunking', level: intermediate },
      { name: 'Small-to-big chunking', level: intermediate },
      { name: 'Table-aware chunking', level: advanced },
      { name: 'Proposition chunking', level: advanced },
      { name: 'Adaptive chunking', level: advanced },
      { name: 'Dense embeddings', level: basic },
      { name: 'Sparse retrieval', level: basic },
      { name: 'Hybrid search', level: intermediate },
      { name: 'Metadata filtering', level: basic },
      { name: 'Indexing and ANN', level: intermediate },
      { name: 'Query rewriting', level: intermediate },
      { name: 'Multi-query retrieval', level: intermediate },
      { name: 'HyDE', level: advanced },
      { name: 'MMR retrieval', level: intermediate },
      { name: 'Reranking', level: intermediate },
      { name: 'Access-aware retrieval', level: intermediate },
      { name: 'Grounded generation', level: basic },
      { name: 'Citation generation', level: basic },
      { name: 'Answer abstention', level: intermediate },
      { name: 'Conflict handling', level: advanced },
      { name: 'Context precision', level: basic },
      { name: 'Context recall', level: basic },
      { name: 'Faithfulness and groundedness', level: intermediate },
      { name: 'Citation accuracy', level: intermediate },
      { name: 'RAG regression testing', level: intermediate },
    ],
  },
  {
    id: 'adaptation',
    title: 'Model Adaptation',
    promise: 'Choose the right lever: prompt, retrieve, fine-tune, distill, or do nothing.',
    enterpriseLens:
      'Learners diagnose whether a failure is a knowledge gap, behavior gap, formatting gap, policy gap, or workflow gap.',
    concepts: [
      { name: 'Prompting and context', level: basic },
      { name: 'RAG as adaptation', level: basic },
      { name: 'Fine-tuning', level: advanced },
      { name: 'Adaptation rule of thumb', level: intermediate },
      { name: 'Supervised fine-tuning', level: advanced },
      { name: 'LoRA and PEFT', level: advanced },
      { name: 'Preference tuning', level: advanced },
      { name: 'Distillation', level: advanced },
      { name: 'When not to fine-tune', level: intermediate },
    ],
  },
  {
    id: 'memory-tools-api',
    title: 'Memory, Tools, APIs, MCP, and Skills',
    promise: 'Connect models to state and systems safely, not magically.',
    enterpriseLens:
      'Learners see the difference between context, RAG, memory, API calls, tool schemas, permissions, and audit trails.',
    concepts: [
      { name: 'Conversation memory', level: basic },
      { name: 'Short-term working memory', level: basic },
      { name: 'Long-term memory', level: intermediate },
      { name: 'Semantic memory', level: intermediate },
      { name: 'Episodic memory', level: advanced },
      { name: 'Procedural memory', level: advanced },
      { name: 'Hierarchical memory', level: advanced },
      { name: 'Multi-scope memory', level: advanced },
      { name: 'Memory write policy', level: advanced },
      { name: 'Memory read policy and precedence', level: advanced },
      { name: 'Memory consolidation', level: advanced },
      { name: 'Memory governance', level: advanced },
      { name: 'API fundamentals', level: basic },
      { name: 'HTTP methods', level: basic },
      { name: 'Request and response', level: basic },
      { name: 'Headers and JSON payloads', level: basic },
      { name: 'Status codes', level: basic },
      { name: 'API keys', level: basic },
      { name: 'OAuth basics', level: intermediate },
      { name: 'Rate limits and retries', level: intermediate },
      { name: 'Timeout handling', level: intermediate },
      { name: 'Webhooks', level: intermediate },
      { name: 'Streaming APIs', level: intermediate },
      { name: 'REST vs GraphQL', level: intermediate },
      { name: 'Function calling', level: basic },
      { name: 'Tool calling', level: basic },
      { name: 'Tool schema', level: basic },
      { name: 'Tool execution loop', level: basic },
      { name: 'Tool validation', level: intermediate },
      { name: 'Tool permissioning', level: advanced },
      { name: 'Tool audit', level: advanced },
      { name: 'Tool sandboxing', level: advanced },
      { name: 'MCP', level: intermediate },
      { name: 'MCP server', level: intermediate },
      { name: 'MCP resources', level: intermediate },
      { name: 'MCP Tool Search', level: advanced },
      { name: 'MCP security', level: advanced },
      { name: 'A2A', level: emerging },
      { name: 'Agent card', level: emerging },
      { name: 'Agent interoperability', level: emerging },
      { name: 'Skills', level: intermediate },
      { name: 'Progressive disclosure', level: advanced },
      { name: 'Skill registry', level: emerging },
    ],
  },
  {
    id: 'agents-hitl',
    title: 'Agents, Reasoning, and Human Review',
    promise: 'Separate assistants, copilots, and agents, then control autonomy with evidence and approvals.',
    enterpriseLens:
      'Learners inspect agent traces, planning loops, tool decisions, state transitions, approval gates, and replay.',
    concepts: [
      { name: 'Assistant', level: basic },
      { name: 'Copilot', level: basic },
      { name: 'Agent', level: intermediate },
      { name: 'Agent loop', level: intermediate },
      { name: 'ReAct', level: intermediate },
      { name: 'Planner-executor', level: intermediate },
      { name: 'Reflection', level: advanced },
      { name: 'Router agent', level: intermediate },
      { name: 'Supervisor agent', level: advanced },
      { name: 'Specialist agent', level: advanced },
      { name: 'Multi-agent system', level: advanced },
      { name: 'Agent state', level: intermediate },
      { name: 'Agent reliability engineering', level: advanced },
      { name: 'AgentOps', level: advanced },
      { name: 'Single-step reasoning', level: basic },
      { name: 'Multi-step reasoning', level: intermediate },
      { name: 'Planning', level: intermediate },
      { name: 'Plan validation', level: advanced },
      { name: 'Tool-augmented reasoning', level: intermediate },
      { name: 'Program-aided reasoning', level: intermediate },
      { name: 'Verifier models', level: advanced },
      { name: 'Reasoning budget', level: advanced },
      { name: 'Human approval gate', level: basic },
      { name: 'Human review', level: basic },
      { name: 'Human escalation', level: intermediate },
      { name: 'Human correction', level: intermediate },
      { name: 'Interruptible agents', level: advanced },
      { name: 'Replay and time travel', level: advanced },
    ],
  },
  {
    id: 'safety-governance',
    title: 'Guardrails, Security, and Governance',
    promise: 'Teach safety as system design, not a policy appendix.',
    enterpriseLens:
      'Learners understand prompt injection, data leakage, tool abuse, identity boundaries, governance evidence, and auditability.',
    concepts: [
      { name: 'Input guardrails', level: basic },
      { name: 'Output guardrails', level: basic },
      { name: 'Tool guardrails', level: intermediate },
      { name: 'RAG guardrails', level: intermediate },
      { name: 'Agent guardrails', level: advanced },
      { name: 'PII guardrails', level: basic },
      { name: 'Grounding guardrails', level: intermediate },
      { name: 'Policy-as-code', level: advanced },
      { name: 'Defense-in-depth', level: advanced },
      { name: 'Prompt injection', level: basic },
      { name: 'Indirect prompt injection', level: intermediate },
      { name: 'Trust-tiered architecture', level: advanced },
      { name: 'Data leakage', level: basic },
      { name: 'System prompt leakage', level: intermediate },
      { name: 'Tool poisoning', level: advanced },
      { name: 'Excessive agency', level: advanced },
      { name: 'Insecure output handling', level: intermediate },
      { name: 'Vector DB leakage', level: intermediate },
      { name: 'Identity propagation', level: advanced },
      { name: 'Red teaming', level: advanced },
      { name: 'AI risk classification', level: basic },
      { name: 'Human oversight', level: basic },
      { name: 'Explainability', level: intermediate },
      { name: 'Transparency', level: basic },
      { name: 'Model cards', level: intermediate },
      { name: 'System cards', level: intermediate },
      { name: 'AI inventory and registry', level: intermediate },
      { name: 'Auditability', level: advanced },
      { name: 'EU AI Act', level: advanced },
      { name: 'ISO/IEC 42001', level: advanced },
      { name: 'NIST AI RMF', level: advanced },
      { name: 'Policy mapping', level: advanced },
    ],
  },
  {
    id: 'evals-ops',
    title: 'Evals, Observability, LLMOps, and FinOps',
    promise: 'Make quality measurable and operations debuggable.',
    enterpriseLens:
      'Learners inspect golden datasets, traces, retrieval scores, model changes, eval gates, cost spikes, and failure clusters.',
    concepts: [
      { name: 'Golden dataset', level: basic },
      { name: 'Unit evals', level: basic },
      { name: 'End-to-end evals', level: intermediate },
      { name: 'RAG evals', level: intermediate },
      { name: 'Agent evals', level: advanced },
      { name: 'LLM-as-judge', level: intermediate },
      { name: 'Human eval', level: intermediate },
      { name: 'Regression evals', level: intermediate },
      { name: 'Safety evals', level: intermediate },
      { name: 'Adversarial evals', level: advanced },
      { name: 'Business evals', level: basic },
      { name: 'LLM tracing', level: basic },
      { name: 'Agent tracing', level: intermediate },
      { name: 'Retrieval tracing', level: intermediate },
      { name: 'Tool-call tracing', level: intermediate },
      { name: 'Token and cost monitoring', level: basic },
      { name: 'Latency monitoring', level: basic },
      { name: 'Quality monitoring', level: intermediate },
      { name: 'Failure clustering', level: advanced },
      { name: 'Incident management', level: advanced },
      { name: 'Prompt registry', level: intermediate },
      { name: 'Model registry', level: intermediate },
      { name: 'Eval gates', level: intermediate },
      { name: 'RAG pipeline versioning', level: advanced },
      { name: 'Provider abstraction', level: intermediate },
      { name: 'Environment management', level: basic },
      { name: 'Feedback loop', level: intermediate },
      { name: 'AI FinOps', level: advanced },
    ],
  },
  {
    id: 'architecture-integration',
    title: 'Application Architecture and Enterprise Integration',
    promise: 'Move from notebooks to production services, interfaces, and systems.',
    enterpriseLens:
      'Learners design AI backends, review UIs, integrations, identity boundaries, cloud deployments, and failure handling.',
    concepts: [
      { name: 'AI backend service', level: basic },
      { name: 'AI frontend UX', level: basic },
      { name: 'Streaming', level: basic },
      { name: 'Async workflows', level: intermediate },
      { name: 'State management', level: intermediate },
      { name: 'Multi-tenant architecture', level: advanced },
      { name: 'Rate limiting', level: basic },
      { name: 'Prompt and semantic caching', level: advanced },
      { name: 'Fallback architecture', level: intermediate },
      { name: 'API integration', level: basic },
      { name: 'ERP integration', level: intermediate },
      { name: 'CRM integration', level: intermediate },
      { name: 'ITSM integration', level: intermediate },
      { name: 'Workflow integration', level: intermediate },
      { name: 'Event-driven AI', level: advanced },
      { name: 'Database tooling', level: intermediate },
      { name: 'Document repository integration', level: basic },
      { name: 'Identity and access management', level: intermediate },
      { name: 'Azure AI Foundry', level: basic },
      { name: 'AWS Bedrock', level: basic },
      { name: 'Google Vertex AI', level: basic },
      { name: 'Docker', level: basic },
      { name: 'Kubernetes', level: intermediate },
      { name: 'Model serving', level: intermediate },
      { name: 'GPU infrastructure', level: advanced },
      { name: 'vLLM', level: advanced },
      { name: 'Ray', level: advanced },
    ],
  },
  {
    id: 'frameworks-emerging',
    title: 'Frameworks and Emerging Patterns',
    promise: 'Know what frameworks do, when to use them, and what they hide.',
    enterpriseLens:
      'Learners map frameworks to architecture roles instead of memorizing brand names.',
    concepts: [
      { name: 'LangChain', level: basic },
      { name: 'LangGraph', level: intermediate },
      { name: 'LlamaIndex', level: basic },
      { name: 'CrewAI', level: intermediate },
      { name: 'AutoGen', level: intermediate },
      { name: 'Microsoft Agent Framework and Semantic Kernel', level: intermediate },
      { name: 'OpenAI Agents SDK and Pydantic AI', level: intermediate },
      { name: 'DSPy', level: advanced },
      { name: 'Haystack', level: intermediate },
      { name: 'Federated RAG', level: advanced },
      { name: 'Policy-aware agents', level: advanced },
      { name: 'Agent identity', level: emerging },
      { name: 'Agent registry', level: emerging },
      { name: 'Agent gateway', level: emerging },
      { name: 'MCP gateway', level: emerging },
      { name: 'AI control tower', level: emerging },
      { name: 'Continuous AI assurance', level: emerging },
      { name: 'Semantic layer for AI', level: advanced },
      { name: 'Ontology-driven AI', level: advanced },
    ],
  },
]

export const guidedPaths: GuidedPath[] = [
  {
    id: 'rag-engineer',
    title: 'RAG and Knowledge Engineer',
    role: 'For data scientists moving into enterprise knowledge systems.',
    outcome:
      'Design a grounded assistant that retrieves the right evidence, respects permissions, cites sources, and can be evaluated.',
    modules: [
      'Tokens, context windows, and why context quality matters',
      'Parsing, metadata, chunking, embeddings, and vector storage',
      'Hybrid search, reranking, filters, access-aware retrieval, and citations',
      'RAG failure diagnosis with traces and component evals',
    ],
    capstone:
      'Build the architecture for a policy assistant over SharePoint documents with metadata filters, citations, no-answer logic, and retrieval evals.',
  },
  {
    id: 'ai-app-engineer',
    title: 'AI App and API Engineer',
    role: 'For notebook-first builders learning production app integration.',
    outcome:
      'Wrap models, prompts, tools, APIs, auth, retries, and streaming into a safe application backend.',
    modules: [
      'HTTP, JSON, endpoints, headers, auth, status codes, retries, and timeouts',
      'Function calling, tool schemas, validation, execution loops, and audit',
      'Frontend trust patterns: citations, source preview, approvals, feedback, and streaming',
      'Enterprise integration with CRM, ITSM, ERP, document repositories, and databases',
    ],
    capstone:
      'Design a customer-service copilot that reads CRM cases, calls an ITSM API, drafts a response, and pauses before sending.',
  },
  {
    id: 'memory-context-engineer',
    title: 'Memory and Context Engineer',
    role: 'For builders who need to stop confusing memory, RAG, and context windows.',
    outcome:
      'Decide what belongs in the prompt now, what should be retrieved, and what can be remembered safely over time.',
    modules: [
      'Context window mechanics, token budgets, lost-in-the-middle, and compaction',
      'Conversation, working, semantic, episodic, procedural, and long-term memory',
      'Memory write policies, read precedence, consolidation, scope, and governance',
      'Personalization versus privacy and enterprise audit expectations',
    ],
    capstone:
      'Design memory for a procurement assistant that remembers user preferences but retrieves current supplier policies from governed sources.',
  },
  {
    id: 'agent-engineer',
    title: 'Agent and Workflow Engineer',
    role: 'For professionals building controlled autonomy, not uncontrolled demos.',
    outcome:
      'Design agent loops, planning, tools, state, approvals, replay, and reliability checks.',
    modules: [
      'Assistant versus copilot versus agent and the autonomy spectrum',
      'ReAct, planner-executor, router, supervisor, specialist, and multi-agent patterns',
      'Human approval, escalation, interruption, replay, and state checkpoints',
      'Agent reliability engineering, AgentOps, and failure analysis',
    ],
    capstone:
      'Design a finance close agent that gathers evidence, proposes journal-entry support, and requires human approval before action.',
  },
  {
    id: 'secure-ai-architect',
    title: 'Secure Enterprise AI Architect',
    role: 'For senior engineers and leads responsible for production readiness.',
    outcome:
      'Assess security, governance, observability, cost, deployment, and operational risk before pilot or production.',
    modules: [
      'Prompt injection, indirect injection, tool poisoning, data leakage, and vector DB leakage',
      'Guardrails for input, output, tools, RAG, agents, PII, grounding, and policies',
      'Evals, tracing, monitoring, registries, eval gates, incidents, and FinOps',
      'Cloud platforms, model serving, multi-tenancy, identity, and governance frameworks',
    ],
    capstone:
      'Run a production-readiness review for an enterprise RAG and agent system, including risk classification and control evidence.',
  },
]

export const deepDives: DeepDive[] = [
  {
    id: 'vector-database',
    title: 'Vector Database',
    level: basic,
    domain: 'RAG, Search, and Knowledge Engineering',
    short:
      'A search store where chunks are indexed by semantic vectors plus enterprise metadata, not rows alone.',
    intuition:
      'A normal database asks, "which row matches this filter?" A vector database asks, "which stored meaning is closest to this query?"',
    enterpriseExample:
      'A policy assistant stores chunks from HR, travel, finance, and procurement documents. Each chunk has an embedding plus metadata such as source, page, department, access group, version, and effective date.',
    mechanics: [
      'Parse enterprise documents into clean text and structure.',
      'Split content into chunks that preserve meaning and source boundaries.',
      'Embed each chunk into a vector using an embedding model.',
      'Store the vector, chunk text, source identifiers, and metadata together.',
      'Embed the user query, search nearest vectors, apply metadata and permission filters, then rerank.',
    ],
    productionLens: [
      'Metadata is what makes retrieval governable: source, owner, version, access group, freshness, language, and document type.',
      'Vector-only search misses exact IDs, policy numbers, SKUs, and legal references, so enterprise systems often use hybrid search.',
      'Chunk IDs and source mapping are required for citations and audit.',
    ],
    failureModes: [
      'Bad chunks retrieve partial facts without the surrounding exception.',
      'Missing metadata prevents filtering by department, region, version, or permission.',
      'Embedding-only search finds semantically similar but legally wrong content.',
      'No lineage makes it impossible to explain where an answer came from.',
    ],
    practice:
      'Given a policy document, decide what metadata must be stored before it enters the vector index.',
    lab: 'vector-db',
  },
  {
    id: 'context-window',
    title: 'Context Window',
    level: basic,
    domain: 'Model Foundations',
    short:
      'The finite token workspace the model can attend to during one request, including instructions, user text, retrieved context, tools, and output.',
    intuition:
      'The context window is the model desk. If you pile irrelevant papers on it, the model may miss the important one.',
    enterpriseExample:
      'A legal assistant receives a user question, a system policy, chat history, ten retrieved clauses, and a required answer format. All of that must fit before the model can answer.',
    mechanics: [
      'Tokenize instructions, conversation history, retrieved documents, tool results, and the expected output.',
      'Reserve output budget so the model has room to respond.',
      'Rank and pack context by relevance, authority, freshness, and task need.',
      'Compress or drop low-value context when the window is crowded.',
    ],
    productionLens: [
      'Bigger windows do not fix bad context ordering.',
      'Lost-in-the-middle happens when relevant evidence is buried among too much text.',
      'Embedding dimensions such as 1024 or 3072 describe vector size, not context length.',
    ],
    failureModes: [
      'The prompt silently truncates important evidence.',
      'Too much retrieved text crowds out instructions or output budget.',
      'The learner confuses token capacity with embedding vector dimensions.',
      'Old chat history overrides the current business question.',
    ],
    practice:
      'Pack a prompt budget for a contract review assistant without dropping the governing clause.',
    lab: 'context-window',
  },
  {
    id: 'memory-rag-context',
    title: 'Memory vs RAG vs Context',
    level: intermediate,
    domain: 'Memory, Tools, APIs, MCP, and Skills',
    short:
      'Three different ways an AI system gets information: what it sees now, what it retrieves, and what it remembers.',
    intuition:
      'Context is the current desk, RAG is the library lookup, and memory is the notebook the assistant may keep between tasks.',
    enterpriseExample:
      'A procurement assistant remembers that a manager prefers supplier-risk summaries, retrieves the latest supplier policy, and packs both into the current prompt.',
    mechanics: [
      'Context window holds the request-time prompt and evidence.',
      'RAG retrieves governed enterprise knowledge at inference time.',
      'Memory stores selected user, task, or workflow state for later use.',
      'Read and write policies decide what memory can be saved, recalled, or ignored.',
    ],
    productionLens: [
      'Memory can improve continuity but creates privacy, scope, and audit questions.',
      'RAG is better for facts that change, require citations, or need access control.',
      'Context engineering decides how retrieved facts and memories are assembled for one request.',
    ],
    failureModes: [
      'A personal memory leaks into a shared workflow.',
      'Memory stores a temporary preference as a permanent fact.',
      'RAG is used for personalization when memory would be cleaner.',
      'Memory conflicts with current source-of-truth documents.',
    ],
    practice:
      'Classify each piece of information as current context, RAG source, short-term state, or long-term memory.',
    lab: 'memory',
  },
  {
    id: 'api-tool-calling',
    title: 'APIs and Tool Calling',
    level: basic,
    domain: 'Memory, Tools, APIs, MCP, and Skills',
    short:
      'How AI apps safely call external systems through structured requests instead of free-text wishes.',
    intuition:
      'The model chooses the tool and arguments; the application validates and executes the API call.',
    enterpriseExample:
      'A support copilot reads a customer issue, calls a CRM API for account history, calls an ITSM API for open incidents, then drafts a response.',
    mechanics: [
      'Define a tool schema with name, description, inputs, and constraints.',
      'The model returns structured arguments instead of directly touching the system.',
      'The app validates auth, permissions, required fields, and business rules.',
      'The app sends an HTTP request and receives JSON, status codes, errors, or streaming data.',
      'The result returns to the model for final explanation or next action.',
    ],
    productionLens: [
      'API reliability depends on retries, timeouts, idempotency, rate limits, and error handling.',
      'Consequential actions need human approval gates.',
      'Tool calls must be logged because the model is part of the control flow.',
    ],
    failureModes: [
      'The model chooses the right tool with invalid arguments.',
      'A 401, 403, 429, or 500 response is treated as normal data.',
      'The app lets the model execute a write action without approval.',
      'Tool output contains untrusted instructions and triggers indirect prompt injection.',
    ],
    practice:
      'Design the JSON schema and approval policy for a tool that creates a ServiceNow ticket.',
    lab: 'api',
  },
  {
    id: 'rag-pipeline',
    title: 'Enterprise RAG Pipeline',
    level: intermediate,
    domain: 'RAG, Search, and Knowledge Engineering',
    short:
      'The full retrieve, rank, inject, answer, cite, and evaluate workflow behind grounded AI answers.',
    intuition:
      'RAG quality is a pipeline property. If parsing, chunking, retrieval, ranking, or prompting fails, the answer fails.',
    enterpriseExample:
      'An HR assistant answers policy questions across global handbooks while respecting country, employee type, document version, and access group.',
    mechanics: [
      'Ingest and parse source documents with stable IDs.',
      'Chunk text using boundaries that preserve meaning.',
      'Create embeddings and sparse indexes, then store metadata.',
      'Retrieve candidates, filter by permissions, rerank evidence, and assemble context.',
      'Generate an answer with citations and evaluate retrieval plus answer quality.',
    ],
    productionLens: [
      'Component-level evals are needed because the final answer hides where the failure started.',
      'Access-aware retrieval must happen before evidence reaches the model.',
      'No-answer behavior is a product feature, not a failure.',
    ],
    failureModes: [
      'Retriever returns plausible but unauthorized chunks.',
      'Reranker promotes outdated documents.',
      'The generator answers beyond retrieved evidence.',
      'Citation points to the right document but wrong chunk.',
    ],
    practice:
      'Diagnose a wrong policy answer by inspecting parsing, chunking, retrieval, reranking, prompt, and citation traces.',
    lab: 'rag',
  },
  {
    id: 'agent-workflow',
    title: 'Agent Workflow',
    level: intermediate,
    domain: 'Agents, Reasoning, and Human Review',
    short:
      'A controlled loop where a system plans, calls tools, updates state, checks policies, and asks for approval when needed.',
    intuition:
      'An agent is not just a chatbot. It has a goal, state, tools, decision points, and boundaries.',
    enterpriseExample:
      'A finance close agent gathers invoice evidence, checks policy, drafts journal-entry support, and pauses for human approval before any system write.',
    mechanics: [
      'Classify whether the task needs an assistant, copilot, or agent.',
      'Create an explicit plan and validate it before tool execution.',
      'Run tool calls through schemas, permission checks, and guardrails.',
      'Persist state, checkpoints, and trace events for replay.',
      'Escalate or pause when confidence is low or the action is consequential.',
    ],
    productionLens: [
      'Autonomy should be earned by reliability, not added for excitement.',
      'Agent traces are the debugging surface.',
      'Human-in-the-loop design is a core architecture choice.',
    ],
    failureModes: [
      'The agent loops without a stop condition.',
      'Planning ignores a policy constraint.',
      'A tool call succeeds technically but violates business process.',
      'No replay exists after a bad action.',
    ],
    practice:
      'Place approval gates in an agent workflow and explain why each gate exists.',
    lab: 'agent',
  },
  {
    id: 'security-guardrails',
    title: 'Security and Guardrails',
    level: intermediate,
    domain: 'Guardrails, Security, and Governance',
    short:
      'Controls that keep model input, output, retrieval, tools, and agent actions inside enterprise boundaries.',
    intuition:
      'A guardrail is not a single filter. It is a chain of checks around every place the AI system reads, writes, or acts.',
    enterpriseExample:
      'A contract assistant blocks PII exposure, ignores malicious instructions inside retrieved documents, and prevents unauthorized contract updates.',
    mechanics: [
      'Check user input for unsafe or out-of-scope requests.',
      'Isolate retrieved content and tool outputs from trusted instructions.',
      'Validate generated JSON, citations, PII, and policy compliance.',
      'Restrict tool arguments, write actions, and agent autonomy.',
      'Log decisions for audit and red-team review.',
    ],
    productionLens: [
      'Indirect prompt injection is the signature enterprise RAG and agent risk.',
      'Identity propagation prevents the model from seeing content the user cannot access.',
      'Defense-in-depth means every layer assumes the previous layer can fail.',
    ],
    failureModes: [
      'A retrieved document tells the model to ignore the system prompt.',
      'A vector index returns data from a restricted department.',
      'A tool accepts unvalidated arguments from the model.',
      'An answer leaks sensitive data through a citation snippet.',
    ],
    practice:
      'Mark every trust boundary in a RAG plus tool-calling architecture.',
    lab: 'security',
  },
  {
    id: 'evals-observability',
    title: 'Evals and Observability',
    level: intermediate,
    domain: 'Evals, Observability, LLMOps, and FinOps',
    short:
      'The quality and debugging system that turns AI behavior into testable, traceable engineering evidence.',
    intuition:
      'If you cannot see prompts, retrieved chunks, tool calls, latency, cost, and outcomes, you cannot operate the app.',
    enterpriseExample:
      'A claims assistant ships only if golden test cases pass for extraction accuracy, citation accuracy, no-answer behavior, latency, and PII handling.',
    mechanics: [
      'Create a golden dataset of representative, edge, and adversarial cases.',
      'Run unit evals for prompts, schemas, retrieval, tools, and safety.',
      'Run end-to-end evals for complete workflows.',
      'Trace prompt, retrieval, reranking, generation, tool calls, and agent state.',
      'Monitor quality, cost, latency, drift, and incidents in production.',
    ],
    productionLens: [
      'AI changes require regression gates, not vibe checks.',
      'Retrieval traces are as important as model logs.',
      'Business evals connect technical quality to adoption and value.',
    ],
    failureModes: [
      'A model upgrade silently breaks structured output.',
      'Retrieval quality drops after new documents are indexed.',
      'Token costs spike because context packing changed.',
      'A human reports a bad answer but no trace can reproduce it.',
    ],
    practice:
      'Design five golden test cases for an enterprise document assistant before release.',
    lab: 'evals',
  },
]

export const levelOrder: ConceptLevel[] = [basic, intermediate, advanced, emerging]

export function getAllConcepts() {
  return learningDomains.flatMap((domain) =>
    domain.concepts.map((concept) => ({
      ...concept,
      domainId: domain.id,
      domainTitle: domain.title,
    })),
  )
}
