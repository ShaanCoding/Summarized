
# coding: utf8
# Requires python3
import requests
import json
import sys


# Replace by your API key from Sassbook AI.
API_KEY = "U2FsdGVkX185U9xDNeOQ8xa9O3v2TV+NpWP6KY+nHsAFFvTOMZFqNO/br/UAR/pX6IdZ/sTNHH73Zd7+ZAA/GoLts+Co2qWiCZVVilEKrnP0F/5ktN7BBeLxCPd3wXvFhe+X4V+PW7vI1AozQ5+29hcHTBeFkLk74we8kaCyJV4jB2RMiLIOTUKAtT/D+MHp"
authHeaderVal = f"Bearer {API_KEY}"
endPoint = 'https://sassbook.com/api/ext/summarize/v1'

# Text to summarize (UTF-8)
with open('video-to-text/output.json', 'r') as read:
    textToSummarise = json.load(read)


textReady = ' '.join(textToSummarise)

textToWrite = {
    textReady
}

print(textReady)

# inText = "The FDA must give authorization for the vaccines to be used in new ways outside the existing authorization. All three Covid-19 vaccines being used in the US are given under emergency use authorization by the FDA, but full approval is pending for Pfizer's vaccine. After FDA grants approval or authorization, the US Centers for Disease Control and Prevention then advises on whether to actually use a vaccine as authorized by the FDA."

postHeaders = {'Content-type': 'application/json; charset=UTF-8',
               'Accept': 'application/json', 'Authorization': authHeaderVal}

# Target size
target = 'small'  # See docs for other options
method = 'extractive'  # Or 'extractive'
payload = {'sumSrc': textReady, 'target': target, 'method': method}


try:
    # Make the API call
    response = requests.post(endPoint,
                             data=json.dumps(payload),
                             headers=postHeaders,
                             timeout=250,
                             allow_redirects=True)

    print("API call completed: ", response.ok)
    # Check the status code etc...
    respJson = response.json()
    if respJson.get('code'):  # API returned error JSON
        print(f"API returned error code: {respJson['code']}")
        print(f"Error message: {respJson['message']}")
    else:  # API returned result JSON
        print('Summary:')
        print('--------')
        print(respJson['summary'])

        # Print and inspect other properties here...
except Exception as e:
    print(f"An exception occurred while calling the API: {str(e)}")


textToWrite = {
    respJson['summary']
}

with open('video-to-text/summarised.json', 'w') as f:
    json.dump(respJson['summary'], f)

sys.exit(0)
