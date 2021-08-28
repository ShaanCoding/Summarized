import requests
import json

QUESTION_API = 'https://api-inference.huggingface.co/models/valhalla/t5-small-qa-qg-hl'


def generate_question(paragraphs):
    """
    API to generate a question
    'https://api-inference.huggingface.co/models/valhalla/t5-small-qa-qg-hl' 
    '{"inputs":"generate question: <hl> 42 <hl> is the answer to life, the universe and everything. </s>"}'
    """
    responses = []
    for i in paragraphs:
        buffer = 'generate question: {0}'.format(i)

        payload = {
            'inputs': buffer
        }
        r = requests.post(
            QUESTION_API,
            data=json.dumps(payload),
            allow_redirects=True
        )
        responses.append(r.json['generated_txt'])

    return responses
