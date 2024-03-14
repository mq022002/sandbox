# https://www.youtube.com/watch?v=WAmEZBEeNmg

import os
from dotenv import load_dotenv
import base64
from requests import post, get
import json

load_dotenv()


id = os.getenv("SPOTIFY_CLIENT_ID")
secret = os.getenv("SPOTIFY_CLIENT_SECRET")


def get_token():
    """
    Retrieves an access token from the Spotify API using client credentials.

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


def get_auth_header(token):
    """
    Returns the authorization header with the provided token.

    Args:
        token (str): The access token.

    Returns:
        dict: The authorization header.
    """
    return {"Authorization": "Bearer " + token}


def search_for_artist(token, artist_name):
    """
    Search for an artist on Spotify API.

    Args:
        token (str): The access token for authentication.
        artist_name (str): The name of the artist to search for.

    Returns:
        dict: A dictionary containing the JSON response from the Spotify API.

    Raises:
        None

    Example:
        >>> token = "your_access_token"
        >>> artist_name = "Frank Sinatra"
        >>> search_for_artist(token, artist_name)
        {
            'id': '06HL4z0CvFAxyc27GXpf02',
            'name': 'Frank Sinatra',
            'type': 'artist',
            ...
        }
    """
    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={artist_name}&type=artist&limit=1"

    query_url = url + query
    result = get(query_url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]
    if len(json_result) == 0:
        print("uh oh 🦧, specified artist does not exist")
        return None

    return json_result[0]


def get_songs_by_artist(token, artist_id):
    """
    Retrieves the top tracks of an artist from the Spotify API.

    Parameters:
    - token (str): The access token for authenticating the API request.
    - artist_id (str): The unique identifier of the artist.

    Returns:
    - list: A list of dictionaries representing the top tracks of the artist.
    """
    url = f"https://api.spotify.com/v1/artists/{artist_id}/top-tracks?country=US"
    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_result = json.loads(result.content)["tracks"]
    return json_result


token = get_token()
result = search_for_artist(token, "The Beatles")
artist_id = result["id"]
songs = get_songs_by_artist(token, artist_id)
songs_json = json.dumps(songs, indent=4)
print(songs_json)
