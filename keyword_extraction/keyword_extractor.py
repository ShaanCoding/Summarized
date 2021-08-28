import pandas as pd
import numpy as np
import itertools
import json
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer

"""
    NEEDS TO BE DONE BEFORE RUNNING:
        You need to have run the text_preproc.py file

    EXPECTED TO BE RUN LINE THIS:
        python keyword_extractor.py

    OUTPUTS:
        keywords.json in text_data folder
"""

def file_to_list(filename):
    with open(filename) as f:
        lines = [line.strip() for line in f]
    return lines

def json_to_list(filename):
    json_obj = {}
    with open(filename) as f:
        json_obj = json.load(f)
    return json_obj
        


def bag_of_words(corpus, ngram = (1,1), min_df = 2, max_df = 0.7, stop_words = "english"):
    vectorizer = TfidfVectorizer(analyzer='word', 
                             min_df = min_df, 
                             max_df = max_df,
                             ngram_range=ngram, 
                             stop_words=stop_words)
    fitted = vectorizer.fit_transform(corpus)
    return vectorizer

def max_sum_sim(doc_embedding, word_embeddings, words, top_n, nr_candidates):
    # Calculate distances and extract keywords
    distances = cosine_similarity(doc_embedding, candidate_embeddings)
    distances_candidates = cosine_similarity(candidate_embeddings, 
                                            candidate_embeddings)

    # Get top_n words as candidates based on cosine similarity
    words_idx = list(distances.argsort()[0][-nr_candidates:])
    words_vals = [candidates[index] for index in words_idx]
    distances_candidates = distances_candidates[np.ix_(words_idx, words_idx)]

    # Calculate the combination of words that are the least similar to each other
    min_sim = np.inf
    candidate = None
    for combination in itertools.combinations(range(len(words_idx)), top_n):
        sim = sum([distances_candidates[i][j] for i in combination for j in combination if i != j])
        if sim < min_sim:
            candidate = combination
            min_sim = sim

    return [words_vals[idx] for idx in candidate]


directory = "../text_data/"
in_filename = "processed_transcript.json"
in_path = directory + in_filename
out_filename = "keywords.json"
out_path = directory + out_filename

corpus = json_to_list(in_path)
ng = 1
top_n = 10
nr_candidates = 20
model = SentenceTransformer('stsb-distilbert-base')
stop_words = "english"
try:
    bow = bag_of_words(corpus, ngram = (ng,ng), max_df = .9, stop_words = stop_words)
except ValueError:
    bow = bag_of_words(corpus, ngram = (ng,ng), min_df = 0, max_df = 1, stop_words = stop_words)

doc_embedding = model.encode(corpus, show_progress_bar=True)
candidates = bow.get_feature_names()
candidate_embeddings = model.encode(candidates, show_progress_bar=True)
mss = max_sum_sim(doc_embedding, candidate_embeddings, candidates, top_n, nr_candidates)


with open(out_path, "w") as f:
    json.dump(mss, f)