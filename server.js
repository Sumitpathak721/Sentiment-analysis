const express = require("express");
const bodyParser = require("body-parser");
const puppeteer = require('puppeteer');

const app =  express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/twitter",async(req,res)=>{
    let link = req.query.link;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    // setTimeout(()=>{},50000);
    let detail = [];
    while(detail.length<40){
        detail = await page.evaluate(()=>{
            return Array.from(document.querySelectorAll("span.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0")).map(elem=>elem.innerText);
        });
    }
    await browser.close();
    let response = {};
    response.name = detail[12]
    response.desc = detail[18]
    response.views = detail[21]
    response.like = detail[41];
    res.send(response);
});

let askGPT = (obj)=>{
}


app.listen(3001)