import pandas as pd
import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from data import diseases
from xgboost import XGBClassifier
mod = XGBClassifier()
mod.load_model('xgmodel.json')

app = FastAPI()

origins = ['http://localhost:3000','https://sputnik-healthcare.netlify.app']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def home():
    return {"message": "homepage"}

@app.post('/api/predict')
async def predict(symptoms: Request):
    symptoms=await symptoms.json()
    user_symptoms = pd.DataFrame([symptoms.values()])
    disease = mod.predict(user_symptoms)[0]
    return {"pred": diseases[int(disease)]}

if __name__ == "__main__":
    uvicorn.run("app")
