export interface Section {
  id: string
  num: number
  title: string
  subtitle?: string
  era: string
  content: React.ReactNode
}

export const sections = [
  {
    id: 's1',
    num: 1,
    title: 'Why language is hard for machines',
    era: 'Foundations',
  },
  {
    id: 's2',
    num: 2,
    title: 'What a language model is',
    era: 'Foundations',
  },
  {
    id: 's3',
    num: 3,
    title: 'Rule-based NLP',
    era: 'Symbolic & statistical',
  },
  {
    id: 's4',
    num: 4,
    title: 'Bag-of-Words & TF-IDF',
    era: 'Symbolic & statistical',
  },
  {
    id: 's5',
    num: 5,
    title: 'N-gram language models',
    era: 'Symbolic & statistical',
  },
  {
    id: 's6',
    num: 6,
    title: 'From sparse vectors to embeddings',
    era: 'Representation',
  },
  {
    id: 's7',
    num: 7,
    title: 'Word2Vec, GloVe, FastText',
    era: 'Representation',
  },
  {
    id: 's8',
    num: 8,
    title: 'Why embeddings weren\'t enough',
    era: 'Representation',
  },
  {
    id: 's9',
    num: 9,
    title: 'RNNs',
    era: 'Sequence',
  },
  {
    id: 's10',
    num: 10,
    title: 'Vanishing gradients',
    era: 'Sequence',
  },
  {
    id: 's11',
    num: 11,
    title: 'LSTM & GRU',
    era: 'Sequence',
  },
  {
    id: 's12',
    num: 12,
    title: 'Seq2Seq',
    era: 'Transformation',
  },
  {
    id: 's13',
    num: 13,
    title: 'The fixed-context bottleneck',
    era: 'Transformation',
  },
  {
    id: 's14',
    num: 14,
    title: 'Attention',
    era: 'Breakthrough',
  },
  {
    id: 's15',
    num: 15,
    title: 'The evolution, summarized',
    era: 'Synthesis',
  },
  {
    id: 's16',
    num: 16,
    title: 'Glossary & references',
    era: 'Synthesis',
  },
]

export const navigationStructure = [
  {
    era: 'Foundations',
    sections: [
      { num: 1, title: 'Why language is hard for machines', id: 's1' },
      { num: 2, title: 'What a language model is', id: 's2' },
    ],
  },
  {
    era: 'Symbolic & statistical',
    sections: [
      { num: 3, title: 'Rule-based NLP', id: 's3' },
      { num: 4, title: 'Bag-of-Words & TF-IDF', id: 's4' },
      { num: 5, title: 'N-gram language models', id: 's5' },
    ],
  },
  {
    era: 'Representation',
    sections: [
      { num: 6, title: 'From sparse vectors to embeddings', id: 's6' },
      { num: 7, title: 'Word2Vec, GloVe, FastText', id: 's7' },
      { num: 8, title: 'Why embeddings weren\'t enough', id: 's8' },
    ],
  },
  {
    era: 'Sequence',
    sections: [
      { num: 9, title: 'RNNs', id: 's9' },
      { num: 10, title: 'Vanishing gradients', id: 's10' },
      { num: 11, title: 'LSTM & GRU', id: 's11' },
    ],
  },
  {
    era: 'Transformation',
    sections: [
      { num: 12, title: 'Seq2Seq', id: 's12' },
      { num: 13, title: 'The fixed-context bottleneck', id: 's13' },
    ],
  },
  {
    era: 'Breakthrough',
    sections: [
      { num: 14, title: 'Attention', id: 's14' },
    ],
  },
  {
    era: 'Synthesis',
    sections: [
      { num: 15, title: 'The evolution, summarized', id: 's15' },
      { num: 16, title: 'Glossary & references', id: 's16' },
    ],
  },
]
