import asyncio
from pyppeteer import launch
import time
async def scrape_data():
    browser = await launch()
    page =  await browser.newPage()
    await page.goto('https://twitter.com/xpression_app/status/1670808660132638720')
    time.sleep(10)
    details = await page.evaluate("""()=>{
        return Array.from(document.querySelectorAll("span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0")).map(elem=>elem.innerText)
    }""")
    await browser.close()
    return details
data = asyncio.get_event_loop().run_until_complete(scrape_data())
print(data)