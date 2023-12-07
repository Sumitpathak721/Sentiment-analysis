import requests
from bs4 import BeautifulSoup

req = requests.get("https://twitter.com/xpression_app/status/1670808660132638720")

soup = BeautifulSoup(req.content,"html.parser")


print(soup.find(class_="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"))


# print(soup.prettify())
# print(val)