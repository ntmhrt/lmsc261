from requests import *

url = "https://catfact.ninja/fact"
requests = get(url)

print(requests.json())