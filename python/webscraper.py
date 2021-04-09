import urllib.request
from bs4 import BeautifulSoup

groups = {
    "B2-32" : "Allgemein",
    "B2-321" : "Alkoholfrei", 
    "B2-322" : "Dosen",
    "B2-323" : "Flaschen",
    "B2-324" : "Radler",
    "B2-325" : "Cider",
}

categoryContents = "https://shop.billa.at/sitemap/warengruppe?articlegroupId=" # xml

response = urllib.request.urlopen(categoryContents + list(groups.keys())[0]).read()

soup = BeautifulSoup(response,"lxml-xml")

productList = []
for node in soup.findAll("loc"):
    productList.append(node.findAll(text=True)[0].rsplit('/', 1)[-1])
    
print(productList)

productInfo = ["https://shop.billa.at/api/articles/", "?includeDetails=true"] # json

# articleId
# name
# brand
# grammageBadge bzw grammage
# price.final

for product in productList:
    if product != '':
        response = urllib.request.urlopen(productInfo[0] + product + productInfo[1]).read()
    print(response)