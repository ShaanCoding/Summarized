import re
import json
from nltk.stem import WordNetLemmatizer

"""
    NEEDS TO BE DONE BEFORE RUNNING:
        You need to have run the video_to_text.py file

    EXPECTED TO BE RUN LINE THIS:
        python text_preproc.py

    OUTPUTS:
        processed_transcript.json in text_data folder
"""

def json_to_list(filename):
    json_obj = {}
    with open(filename) as f:
        json_obj = json.load(f)
    return json_obj

def list_to_json(filename, json_obj):
    with open(filename, "w") as f:
        json.dump(json_obj, f)

def decontracted(phrase):
    """
        Desc:
            decontracted takes text and convert contractions into natural form.
            ref: https://stackoverflow.com/questions/19790188/
            expanding-english-language-contractions-in-python/47091490#47091490
            """
    # specific
    if type(phrase) != type(""):
        return phrase
    phrase = re.sub(r"won\'t", "will not", phrase)
    phrase = re.sub(r"can\'t", "can not", phrase)
    phrase = re.sub(r"won\’t", "will not", phrase)
    phrase = re.sub(r"can\’t", "can not", phrase)
    # general
    phrase = re.sub(r"n\'t", " not", phrase)
    phrase = re.sub(r"\'re", " are", phrase)
    phrase = re.sub(r"\'s", " is", phrase)
    phrase = re.sub(r"\'d", " would", phrase)
    phrase = re.sub(r"\'ll", " will", phrase)
    phrase = re.sub(r"\'t", " not", phrase)
    phrase = re.sub(r"\'ve", " have", phrase)
    phrase = re.sub(r"\'m", " am", phrase)
    phrase = re.sub(r"n\’t", " not", phrase)
    phrase = re.sub(r"\’re", " are", phrase)
    phrase = re.sub(r"\’s", " is", phrase)
    phrase = re.sub(r"\’d", " would", phrase)
    phrase = re.sub(r"\’ll", " will", phrase)
    phrase = re.sub(r"\’t", " not", phrase)
    phrase = re.sub(r"\’ve", " have", phrase)
    phrase = re.sub(r"\’m", " am", phrase)
    return phrase

def lem_text(text_data):
    """
        Desc:
            lem_text takes text and lemmatize it using WordNetLemmatizer.
            ref: https://stackoverflow.com/a/25535348
    """
    if type(text_data) != type(""):
        return text_data
    n_text = []
    for word in text_data.split(" "):
        n_word = lem.lemmatize(word, pos='a')
        n_word = lem.lemmatize(n_word, pos='v')
        n_text.append(n_word)
    return ' '.join(n_text)

def remove_special_character(phrase, remove_number=False):
    """
        Desc:
            remove_special_character takes text and removes special charcters.
            ref: https://stackoverflow.com/a/18082370/4084039
    """
    if type(phrase) != type(""):
        return phrase
    
    if remove_number:
        phrase = re.sub('[^A-Za-z]+', ' ', phrase)
    else:
        phrase = re.sub('[^A-Za-z0-9]+', ' ', phrase)
    return phrase

def stop_word_removal(text):
    stop_words = ['textbook', 'model', 'principles', 'mit', 'teach',
                    'ebay', 'spend', 'concept', 'raise', 'comes', 'need', 'allocate',
                    'come', 'want', 'happen', 'se']
    if type(text) != type(""):
        return text
    return ' '.join(e.lower() for e in text.split() if e.lower() not in stop_words)

lem = WordNetLemmatizer()

directory = "../text_data/"
in_filename = "video_transcript.json"
in_path = directory + in_filename
out_filename = "processed_transcript.json"
out_path = directory + out_filename

json_obj = json_to_list(in_path)
json_obj = list(map(decontracted, json_obj)) 
json_obj = list(map(remove_special_character, json_obj)) 
json_obj = list(map(lem_text, json_obj)) 
json_obj = list(map(stop_word_removal, json_obj)) 



list_to_json(out_path, json_obj)