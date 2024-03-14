import os
from dotenv import load_dotenv
import base64
from requests import post
import json

load_dotenv()


id = os.getenv("SPOTIFY_CLIENT_ID")
secret = os.getenv("SPOTIFY_CLIENT_SECRET")


def get_token():
    """
    This gets an access token from the Spotify API using client credentials.

    Returns:
        str: The access token.
    """
    auth_string = id + ":" + secret
    auth_bytes = auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded",
    }

    data = {"grant_type": "client_credentials"}
    result = post(url, headers=headers, data=data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token


token = get_token()
print(token)
