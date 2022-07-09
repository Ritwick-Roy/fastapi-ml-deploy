from database import (
    fetch_all_appts,
    fetch_one_appt,
    create_appt,
    update_appt,
    remove_appt,
)
import pandas as pd
import numpy as np
import uvicorn
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from model import Appointment, Symptoms, diseases as ds
from xgboost import XGBClassifier
mod = XGBClassifier()
mod.load_model('xgmodel.json')

app = FastAPI()

origins = ['http://localhost:3000']

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


@app.get("/api/appt")
async def get_appt():
    response = await fetch_all_appts()
    return response


@app.get("/api/appt/{patient}", response_model=Appointment)
async def get_appt_by_id(patient):
    response = await fetch_one_appt(patient)
    if response:
        return response
    raise HTTPException(404, f"No appt found with patient: {patient}")


@app.post("/api/appt", response_model=Appointment)
async def post_appt(appt: Appointment):
    print(type(appt))
    response = await create_appt(appt.dict())
    if response:
        return response
    raise HTTPException(400, "Bad request")


@app.post('/api/predict')
async def predict(symptoms: Request):
    symptoms=await symptoms.json()
    user_symptoms = pd.DataFrame([symptoms.values()])
    disease = mod.predict(user_symptoms)[0]
    return {"pred": ds[int(disease)]}



@app.put("/api/appt/{patient}",response_model=Appointment)
async def put_appt(patient:str, appt:Appointment):
    appt=appt.dict()
    appt.patient=patient
    response = await update_appt(patient,appt)
    if response:
        return response
    raise HTTPException(404,f"No appt found with patient: {patient}")


@app.delete("/api/appt/{patient}")
async def delete_appt(patient):
    response = await remove_appt(patient)
    if response:
        return "Deleted succesfully"
    raise HTTPException(404,f"No appt found with patient: {patient}")

if __name__ == "__main__":
    uvicorn.run("app")
