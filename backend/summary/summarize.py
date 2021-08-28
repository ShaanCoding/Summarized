# coding: utf8
# Requires python3
import requests
import json

ENDPOINT = 'https://sassbook.com/api/ext/summarize/v1'
API_KEY = "U2FsdGVkX185U9xDNeOQ8xa9O3v2TV+NpWP6KY+nHsAFFvTOMZFqNO/br/UAR/pX6IdZ/sTNHH73Zd7+ZAA/GoLts+Co2qWiCZVVilEKrnP0F/5ktN7BBeLxCPd3wXvFhe+X4V+PW7vI1AozQ5+29hcHTBeFkLk74we8kaCyJV4jB2RMiLIOTUKAtT/D+MHp"

def summarize_text(text, is_json):
    """
    Summarizes a given texat
    """
    authHeaderVal = f"Bearer {API_KEY}"

    text_ready = text

    if is_json:
        text_to_sum = json.load(text)
        text_ready = ' '.join(text_to_sum)

    postHeaders = {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': authHeaderVal
    }

    # Target size
    target = 'best'  # See docs for other options
    method = 'abstractive'  # Or 'extractive'
    payload = {'sumSrc': text_ready, 'target': target, 'method': method}

    try:
        # Make the API call
        response = requests.post(
            ENDPOINT,
            data=json.dumps(payload),
            headers=postHeaders,
            timeout=250,
            allow_redirects=True
        )

        respJson = response.json()

        if respJson.get('code'):  # API returned error JSON
            return None
        else:
            return respJson['summary'].split('\n\n')

    except Exception as e:
        print(f"An exception occurred while calling the API: {str(e)}")
