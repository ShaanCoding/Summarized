QUESTION_API = 'https://api-inference.huggingface.co/models/valhalla/t5-small-qa-qg-hl'


def generate_question(text):
    """
    API to generate a question
    'https://api-inference.huggingface.co/models/valhalla/t5-small-qa-qg-hl' 
    '{"inputs":"generate question: <hl> 42 <hl> is the answer to life, the universe and everything. </s>"}'
    """
    buffer = ''
