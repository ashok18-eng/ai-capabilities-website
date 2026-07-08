import { ReactNode } from 'react'
import { Callout } from './Callout'

interface ContentProps {
  sectionNum: number
}

export function SectionContent({ sectionNum }: ContentProps) {
  switch (sectionNum) {
    case 1:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Computers are excellent at exact instructions — add two numbers, sort a table, check whether a field is empty. Human language is different. It isn&apos;t always exact. It depends on context, culture, domain, tone, history, and intent.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Take the word <em>cold</em>. In "the customer is cold" it may mean emotionally distant; in "cold-chain logistics" it means temperature-controlled supply chains; in "the deal went cold" it means an opportunity stopped progressing. A human infers meaning from context. A machine needs a <strong>representation</strong> and a <strong>learning mechanism</strong> to do the same.
          </p>
          <Callout variant="example" label="Example — one word, many meanings">
            <p className="m-0">
              "The bank approved the loan." Here <em>bank</em> is a financial institution. "The truck stopped near the river bank." Here <em>bank</em> is the land beside a river. Same word — the meaning flips because the surrounding words differ.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 mt-6">
            Language is also sequential; word order carries meaning. "The customer rejected the offer" and "The offer rejected the customer" share almost every word but mean different things. "The delivery was not delayed" and "The delivery was delayed" are one word apart and opposite. A machine must model not just <em>which</em> words appear but <em>how</em> they&apos;re arranged and how they depend on each other.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            And language has long-range dependencies: a word near the end of a sentence can hinge on something mentioned much earlier. Humans hold that context naturally. Traditional methods struggled because they looked at small local windows or treated words as independent features.
          </p>
          <Callout variant="insight" label="The mental model to keep">
            <p className="m-0">
              Most of NLP&apos;s evolution is repeated attempts to solve four problems: <strong>representation</strong> (how do we turn words into numbers?), <strong>context</strong> (what does a word mean in <em>this</em> sentence?), <strong>sequence</strong> (how do we use word order?), and <strong>generalization</strong> (how do we handle things we&apos;ve never seen?).
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Enterprise language is harder still — abbreviations, process names, contract clauses, product codes, exception rules. "Late delivery," "missed SLA," "DIFOT failure," "service failure," and "delivery non-compliance" may all point at the same operational issue, but a keyword system treats them as unrelated. This is exactly why language AI evolved over so many stages: each generation tried to represent language better and use context more effectively.
          </p>
        </>
      )
    case 2:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            A language model estimates how likely a piece of language is. Given some text, it predicts what should come next, what word is missing, or how likely one sentence is versus another.
          </p>
          <Callout variant="example" label="Example — next-word prediction">
            <p className="m-0">
              For "I want to drink a cup of ___," a language model assigns high probability to <em>tea</em> or <em>coffee</em> and low probability to <em>warehouse</em>. It doesn&apos;t understand tea like a human — it has learned which words are likely in that context.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Language modeling matters because so many tasks can be reframed as prediction or transformation: translation predicts a sentence in another language; summarization predicts a shorter version; question answering predicts an answer from a question and context; a chatbot predicts a useful reply; code generation predicts code from an instruction. Even classification becomes "predict the right label."
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Before deep learning, language modeling was mostly statistical — counting how often words co-occurred and predicting from those counts. That worked for narrow tasks but struggled with meaning, context, and unseen combinations. Neural models later learned dense representations and patterns from data. <strong>Modern LLMs are still language models at their core</strong> — just trained at vastly larger scale with far more powerful architectures.
          </p>
          <Callout variant="insight" label="A practical way to remember it">
            <p className="m-0">
              A language model is not a database of facts — it&apos;s a <strong>probability model over language</strong>. That single distinction explains both the power and the risk of LLMs: they generate fluent language, but they can also produce confident text that isn&apos;t grounded in a trusted source.
            </p>
          </Callout>
        </>
      )
    case 3:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The earliest practical NLP systems were rule-based: engineers and linguists wrote explicit grammar rules, keyword patterns, regular expressions, dictionaries, and decision trees telling the system how to process text.
          </p>
          <Callout variant="example" label="Example — support ticket routing">
            <p className="m-0">
              If a ticket contains "password," "login," or "access," route it to access management. If it contains "invoice," "payment," or "billing," route it to finance support.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Rules were valuable because they were <strong>transparent</strong>: when a rule fired, you could inspect it and know exactly why the system decided what it did. That mattered in controlled settings with predictable language and few categories.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            But human language has too many variations. "I can&apos;t log in," "my account is locked," "the portal rejects my credentials," "SSO is failing," "I&apos;m unable to access the application" — a human sees these as the same problem; a rule-based system needs a hand-written pattern for each. Every new phrasing demands another rule. Worse, rules miss context: a keyword search for "approved" treats "not approved" as a match, and "do not escalate" and "please escalate" both contain "escalate."
          </p>
          <Callout variant="insight" label="Why rules didn't scale">
            <p className="m-0">
              Rules are brittle. They work when language is predictable and break on synonyms, negation, context, abbreviations, typos, and domain phrasing. Maintaining thousands of them becomes expensive and error-prone.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Rule-based NLP still exists — for deterministic validation, compliance filters, regex extraction, known identifiers, and simple guardrails. But it isn&apos;t enough for broad understanding or generation, which pushed the field toward statistical methods.
          </p>
        </>
      )
    case 4:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The next step was to stop writing every rule by hand and instead represent text as numbers that ML algorithms could process. <strong>Bag-of-Words</strong> represents a document by counting how often each word appears — ignoring grammar and order.
          </p>
          <Callout variant="example" label="Example — Bag-of-Words intuition">
            <p className="m-0">
              Document A: "delivery delayed customer unhappy." Document B: "delivery completed customer happy." Bag-of-Words records which words appear and how often. It notices both mention "delivery" and "customer" — but doesn&apos;t grasp that "delayed" and "completed" are opposite outcomes.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            This made text classification practical: if many historical tickets containing "password" were labeled as access issues, a classifier could learn that "password" is a strong signal — a big improvement over hand-written rules.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            <strong>TF-IDF</strong> improved on this by not treating every word equally. <em>Term frequency</em> is how often a word appears in a document; <em>inverse document frequency</em> is how rare it is across all documents. A word frequent in one document but rare across the corpus is treated as more informative.
          </p>
          <Callout variant="example" label="Example — why TF-IDF helps">
            <p className="m-0">
              Across many tickets, "the," "issue," "please," and "help" appear everywhere, so they&apos;re uninformative. "Invoice," "refund," "VPN," or "shipment" are far more useful for identifying a topic. TF-IDF weights those distinguishing words higher.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            TF-IDF became a workhorse for search, classification, recommendation, and retrieval — and it&apos;s still relevant. Many modern RAG systems <strong>combine semantic search with keyword or BM25-style search</strong>, because exact terms, IDs, product codes, and legal references often matter.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            But counting words is shallow. Bag-of-Words and TF-IDF ignore order and grammar, treat synonyms as unrelated, and struggle with negation. "The customer approved the refund" and "The customer rejected the refund" look similar to a keyword model — yet mean the opposite. Counting captures topical signal, not deep meaning.
          </p>
          <Callout variant="ds" label="For the data scientist">
            <p className="m-0">
              You already use this — it&apos;s <code className="font-mono text-[0.9em]">TfidfVectorizer</code> in scikit-learn. The conceptual jump for AI engineering is that <em>everything after this stage replaces sparse count features with learned, dense representations.</em>
            </p>
          </Callout>
        </>
      )
    case 5:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Models need numbers, not raw words. Early systems used sparse <strong>one-hot</strong> vectors: every word in the vocabulary gets its own position. With a 100,000-word vocabulary, each word is a vector of length 100,000 — one value set to 1, the rest 0.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            One-hot vectors are simple but broken in an important way: every word is equally unrelated to every other. The vector for "car" is no closer to "automobile" than to "banana." There&apos;s no built-in semantic similarity.
          </p>
          <Callout variant="example" label="Example — the sparse limitation">
            <p className="m-0">
              In one-hot space, "truck," "lorry," "vehicle," and "shipment" have no meaningful relationships. The model must learn everything from labeled data — expensive and often insufficient.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 mt-6">
            This created the need for <strong>dense representations</strong> — embeddings. An embedding represents a word as a vector of real numbers, far smaller than the vocabulary: 100, 300, or 768 dimensions instead of 100,000. The values are learned so that words used in similar contexts get similar vectors.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The intuition is the <strong>distributional hypothesis</strong>: words that occur in similar contexts tend to have similar meanings. If "doctor" and "nurse" both appear near "patient," "hospital," and "treatment," their vectors should end up close together.
          </p>
          <Callout variant="insight" label="Why embeddings were a breakthrough">
            <p className="m-0">
              They gave machines a way to represent meaning <strong>geometrically</strong>. Words became points in a vector space; similar words sit closer together. This let models generalize beyond exact keywords.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            This shift — from sparse symbolic to dense learned representation — is one of the most important steps in NLP history. The embeddings in modern RAG systems and vector databases are direct descendants.
          </p>
          <Callout variant="ds" label="For the data scientist">
            <p className="m-0">
              This is the ancestor of the vectors in your vector store — FAISS, pgvector, Pinecone. Modern models embed whole passages, but the "geometry of meaning" idea is identical.
            </p>
          </Callout>
        </>
      )
    case 6:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            <strong>Word2Vec</strong> popularized efficient ways to learn embeddings from large corpora, in two styles. <em>CBOW</em> (Continuous Bag of Words) predicts a target word from its surrounding context. <em>Skip-gram</em> does the reverse — predict the surrounding context from a target word.
          </p>
          <Callout variant="example" label="Example — Skip-gram intuition">
            <p className="m-0">
              In "The warehouse received the shipment," the model takes "received" as the target and learns to predict nearby words like "warehouse" and "shipment."
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            <strong>GloVe</strong> learned vectors from global co-occurrence statistics — aggregate counts of how often words appear together across the whole corpus. <strong>FastText</strong> represented words using <strong>subword units</strong>, which helped with rare words and morphologically rich languages.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Embeddings improved many tasks at once: classifiers got better, search improved, clustering and recommendation became more practical.
          </p>
          <Callout variant="insight" label="The critical limitation of static embeddings">
            <p className="m-0">
              Early embeddings were <strong>context-independent</strong>: each word had one main vector regardless of the sentence. "Bank" had essentially one representation, whether it meant a financial institution or a riverbank.
            </p>
          </Callout>
        </>
      )
    case 7:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Embeddings solved representation, but not the full understanding problem. A sentence isn&apos;t just a bag of meaningful words — its meaning depends on order, grammar, dependencies, negation, and context.
          </p>
          <Callout variant="example" label="Example — same words, different meaning">
            <p className="m-0">
              "The supplier failed to deliver the product" versus "The product failed to deliver the supplier." Similar words, but only the first makes business sense.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            There&apos;s also <strong>compositional meaning</strong>. "Not good" isn&apos;t the average of "not" and "good" — "not" flips the phrase. Static embeddings alone don&apos;t model these interactions.
          </p>
          <Callout variant="insight" label="The transition">
            <p className="m-0">
              Embeddings answered: <em>how do we represent words meaningfully?</em> Sequence models asked the next question: <em>how do we represent a sentence as it unfolds over time?</em>
            </p>
          </Callout>
        </>
      )
    case 8:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Recurrent Neural Networks process sequences — data where order matters: text, speech, time series. The core idea is simple: read one token at a time, and at each step update a <strong>hidden state</strong> that acts as a memory of everything seen so far.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 font-mono text-[16px] bg-[var(--accent-soft)] p-4 rounded">
            Word 1 → Hidden state 1<br/>
            Word 2 + Hidden 1 → Hidden state 2<br/>
            Word 3 + Hidden 2 → Hidden state 3<br/>
            ... → Final hidden state → Prediction
          </p>
          <Callout variant="example" label="Example — sentiment with an RNN">
            <p className="m-0">
              "The product looked good at first, but it failed after one day." An RNN reads in order and can learn that the later "but it failed" changes the final sentiment.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            RNNs improved on Bag-of-Words because they cared about <strong>order</strong>, and on static embeddings because they could combine words over time.
          </p>
          <Callout variant="insight" label="The main RNN weakness">
            <p className="m-0">
              RNNs struggled with <strong>long-range dependencies</strong>. They compressed the past into a single hidden state, making it hard to preserve information from far earlier in the sequence.
            </p>
          </Callout>
        </>
      )
    case 9:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Neural networks learn by adjusting weights using <strong>gradients</strong>. Training an RNN across a sequence is called <em>backpropagation through time</em>, because the error signal must travel backward through many time steps.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Across a long sentence, that signal passes through many repeated transformations. If it shrinks at each step, it eventually vanishes — the <strong>vanishing-gradient problem</strong>. If it grows, training becomes unstable — the <strong>exploding-gradient problem</strong>.
          </p>
          <Callout variant="example" label="Example — the vanishing-gradient intuition">
            <p className="m-0">
              "The contract, after months of negotiation and several legal revisions, was finally approved." To learn that "contract" relates to "approved," the signal must travel across many words.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Vanishing gradients make long-term dependencies hard to learn. Engineers used <em>gradient clipping</em> to tame exploding gradients, but vanishing gradients stayed a core limitation.
          </p>
        </>
      )
    case 10:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            <strong>LSTM</strong> — Long Short-Term Memory — was designed to fix the long-term memory problem. The key idea: don&apos;t update memory blindly at every step. Instead, learn <strong>gates</strong> that decide what to forget, what to store, and what to output.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            A useful analogy is a working notebook. Reading a long document, you don&apos;t remember every word equally — you keep the important points, drop the irrelevant, and revise your understanding when new information arrives. LSTMs use two states: a <strong>cell state</strong> (longer-term memory) and a <strong>hidden state</strong> (current working representation).
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 font-mono text-[16px] bg-[var(--accent-soft)] p-4 rounded">
            At each step, the gates decide:<br/>
            Forget gate → what old information to drop<br/>
            Input gate → what new information to store<br/>
            Output gate → what to expose as output
          </p>
          <Callout variant="example" label="Example — LSTM memory">
            <p className="m-0">
              "The supplier, despite earlier quality concerns, passed the final inspection." The model must remember "quality concerns" but revise its interpretation at "passed."
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            <strong>GRUs</strong> (Gated Recurrent Units) simplified the idea with fewer gates, often training faster and performing comparably with fewer parameters.
          </p>
          <Callout variant="ds" label="For the data scientist">
            <p className="m-0">
              If you&apos;ve done time-series forecasting, you&apos;ve met LSTMs already. The same architecture powered NLP for years before Transformers.
            </p>
          </Callout>
        </>
      )
    case 11:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Sequence-to-sequence models were built for tasks where input <em>and</em> output are sequences. Machine translation is the classic case — an English sentence becomes a French one; summarization turns long text into a short summary.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            A Seq2Seq model has two parts. The <strong>encoder</strong> reads the input and converts it into a representation. The <strong>decoder</strong> uses that representation to generate the output one token at a time.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 font-mono text-[16px] bg-[var(--accent-soft)] p-4 rounded">
            Input sentence<br/>
            → Encoder (RNN/LSTM) reads the sentence<br/>
            → Context vector represents the whole input<br/>
            → Decoder (RNN/LSTM) generates output tokens
          </p>
          <Callout variant="insight" label="The Seq2Seq bottleneck">
            <p className="m-0">
              The biggest issue was the <strong>fixed-context bottleneck</strong>. Early encoders compressed the entire input into a single vector, and the decoder had to generate the full output from that compressed representation.
            </p>
          </Callout>
        </>
      )
    case 12:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Imagine reading a long legal clause, then being allowed to keep just one short note before answering questions about it. You&apos;d catch the gist but lose the details. Early Seq2Seq models had exactly this problem.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            In an encoder–decoder LSTM, the encoder produces a hidden state at each step — but in the simplest version, the decoder mainly receives the <strong>final</strong> encoder state as a summary. That one state has to hold everything: subject, object, tense, cause, conditions, exceptions, and order.
          </p>
          <Callout variant="example" label="Example — why one vector isn't enough">
            <p className="m-0">
              Input: "The customer cancelled the order because the replacement parts were not available before the promised installation date." A good translation must preserve several facts at once — who cancelled, the reason, the unavailability, and the timing.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The bottleneck worsens as input grows. Long, multi-clause statements carry many details, and the decoder tends to focus on the most recent information — losing earlier facts. Early neural machine translation performed worse on longer sentences.
          </p>
          <Callout variant="insight" label="The question that leads to attention">
            <p className="m-0">
              Why should the decoder rely on a single compressed vector? Why can&apos;t it look back at <em>all</em> the encoder states and decide which input words are relevant at each output step?
            </p>
          </Callout>
        </>
      )
    case 13:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Attention solved the fixed-context bottleneck. Instead of forcing the encoder to compress everything into one vector, it lets the decoder look back at all the encoder&apos;s hidden states at <em>every</em> output step — and dynamically decide which input words matter most right now.
          </p>
          <Callout variant="example" label="Example — the human intuition">
            <p className="m-0">
              Translating "The warehouse manager approved the urgent shipment": when writing the word for "warehouse," you focus on "warehouse"; for "approved," you focus on "approved." Attention gives a model that same ability.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The encoder still produces a hidden state per input token. At each decoding step, the decoder compares its current state with all encoder states and computes <strong>attention weights</strong> — how relevant each input position is to the current output. Those weights build a <strong>context vector</strong> that changes at every step.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            In modern terms, attention is explained with <strong>Query, Key, and Value</strong>. The query is what the current position is looking for; the keys describe what each position offers; the values hold the information to combine.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6 font-mono text-[16px] bg-[var(--accent-soft)] p-4 rounded">
            Query → what am I looking for right now?<br/>
            Key → what does each token represent?<br/>
            Value → what information should I take?<br/><br/>
            score = similarity(Query, Key)<br/>
            weights = softmax(scores)<br/>
            context = weighted sum of Values
          </p>
          <Callout variant="insight" label="What attention solved">
            <p className="m-0">
              It removed the fixed-context bottleneck, improved long-sentence handling, improved alignment in translation, and added interpretability — you can inspect which tokens the model focused on.
            </p>
          </Callout>
          <Callout variant="objective" label="Why this is the bridge to Transformers">
            <p className="m-0">
              Once researchers saw that attention could directly connect any two positions in a sequence, the next question wrote itself: <strong>can we build the whole model out of attention, without recurrence?</strong> The answer was the Transformer.
            </p>
          </Callout>
          <Callout variant="ds" label="For the data scientist">
            <p className="m-0">
              This is the single idea to internalize before Transformers. "Query / Key / Value" is the exact vocabulary in every attention diagram and LLM paper.
            </p>
          </Callout>
        </>
      )
    case 14:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The journey from early NLP to attention is a chain of limitations and solutions. Rule-based systems were transparent but brittle. Bag-of-Words and TF-IDF made text usable for ML but ignored meaning and order. N-grams modeled local prediction but couldn&apos;t handle long context. Embeddings introduced semantic similarity but were mostly context-independent. RNNs added sequence processing but struggled with long-range memory. LSTMs improved memory with gates but stayed sequential. Seq2Seq enabled translation but hit a fixed-context bottleneck. Attention broke that bottleneck by allowing dynamic focus over input states.
          </p>
          <Callout variant="objective" label="The final takeaway">
            <p className="m-0">
              Before attention, sequence models relied on <strong>memory</strong>. Attention introduced <strong>selective access</strong>. That shift changed the direction of NLP: selective access made it possible to model relationships between distant tokens directly — which became the foundation of Transformer self-attention, and Transformers became the foundation of modern LLMs.
            </p>
          </Callout>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            This connects straight to modern enterprise AI. RAG, tool use, memory, and agents all reuse one broad principle: don&apos;t force the model to know everything internally — give it mechanisms to access the right information at the right time. Attention solved this <em>inside</em> a sequence. RAG solves it at the application level. Tool calling reaches external systems. Memory retrieves relevant past state.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            So attention isn&apos;t just a historical model component — it&apos;s a conceptual pattern: <strong>dynamic, relevance-based selection</strong>. Once you see that pattern, the rest of modern AI engineering gets much easier to reason about.
          </p>
        </>
      )
    case 15:
      return (
        <>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            The journey from rules to attention shows one pattern: each solution solved real problems but introduced new constraints. Attention broke the fixed-context bottleneck by enabling any token to directly access any other token&apos;s information at any layer.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            What came next was inevitable: if attention can connect anything to anything, why keep recurrence? Why not let every token attend to every other token in parallel? That shift — from sequential LSTM processing to parallel attention — is the Transformer. And Transformers are the foundation of every major language model today.
          </p>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            But this guide stops at attention, because understanding the problem attention solved is the key to understanding why Transformers work the way they do.
          </p>
        </>
      )
    case 16:
      return (
        <>
          <h3 className="font-display font-medium text-[22px] mt-8 mb-6">Glossary & References</h3>
          <p className="text-[18px] text-[var(--text)] leading-relaxed mb-6">
            Foundational works behind the evolution above:
          </p>
          <ol className="text-[18px] text-[var(--text)] leading-relaxed space-y-3">
            <li><strong>Jurafsky &amp; Martin, Speech and Language Processing</strong> — the foundational textbook for NLP, language modeling, n-grams, and statistical NLP.</li>
            <li><strong>Bengio et al. (2003), A Neural Probabilistic Language Model</strong> — early neural language modeling.</li>
            <li><strong>Mikolov et al. (2013), Efficient Estimation of Word Representations in Vector Space</strong> — Word2Vec.</li>
            <li><strong>Pennington, Socher &amp; Manning (2014), GloVe</strong> — Global Vectors for Word Representation.</li>
            <li><strong>Hochreiter &amp; Schmidhuber (1997), Long Short-Term Memory</strong> — foundational LSTM paper.</li>
            <li><strong>Cho et al. (2014), Learning Phrase Representations using RNN Encoder–Decoder</strong> — GRU and encoder–decoder ideas.</li>
            <li><strong>Sutskever, Vinyals &amp; Le (2014), Sequence to Sequence Learning with Neural Networks</strong> — Seq2Seq.</li>
            <li><strong>Bahdanau, Cho &amp; Bengio (2015), Neural Machine Translation by Jointly Learning to Align and Translate</strong> — attention for neural machine translation.</li>
          </ol>
        </>
      )
    default:
      return <p className="text-[var(--text-2)]">Content for section {sectionNum} coming soon.</p>
  }
}
