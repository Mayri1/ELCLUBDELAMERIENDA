import requests
import uuid

url = "http://127.0.0.1:8000/api/register/"
unique_username = f"usuario_{uuid.uuid4().hex[:8]}"  
payload = {
    "username": unique_username,
    "password": "mysecurepassword"
}
headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)
print("Status Code:", response.status_code)
print("Response Text:", response.text)
print("Headers:", response.headers)

try:
    print("Response JSON:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Response content is not in JSON format.")
