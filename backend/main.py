from typing import List
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

import uvicorn
import json
from models import School
import re
import requests
app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/pages", StaticFiles(directory="pages"), name="static")
templates = Jinja2Templates(directory="pages")


with open("gh.json", "r") as data_file:
    data: List[School] = json.load(data_file)


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("home.html", {"request": request, "id": id})


@app.get("/universities")
async def get_all_universities():
    """a route to return all tertiary institutioons registered in the gh.json db"""
    return data


@app.get("/universities/name/")
async def name_query(name: str):
    temp_results = []
    for entry in data:
        if (name in entry['name']) or (name in str(entry["name"]).lower()):
            temp_results.append(entry)
    return temp_results


@app.get("/universities/{acronym}")
async def acronym_query(acronym):
    """query the db given an acronym """
    for entry in data:
        if (entry['acronym'] == acronym) or (str(entry['acronym']).lower() == acronym):
            return entry


@app.get("/universities/query/")
async def region_query(region=None, acronym=None):
    temp_list = []
    for entry in data:

        if (entry['region'] == region) and (entry['acronym'] == acronym or str(entry["acronym"]).lower() == acronym):
            temp_list.append(entry)
    return temp_list



if __name__ == '__main__':
    uvicorn.run(app, port=8080)

