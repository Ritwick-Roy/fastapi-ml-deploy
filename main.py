from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from model import Symptoms
from xgboost import XGBClassifier
# import pickle
mod=XGBClassifier()
mod.load_model('xgmodel.json')
import json
import uvicorn
import numpy as np
import pandas as pd

app=FastAPI()

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
    return {"message":"noasda"}

@app.post('/predict')
async def redict(symptoms: Request):

    symptoms = await symptoms.json();

    user_symptoms = [[
        symptoms['muscle_weakness'],
        symptoms['coma'],
        symptoms['red_spots_over_body'],
        symptoms['high_fever'],
        symptoms['pain_behind_the_eyes'],
        symptoms['receiving_blood_transfusion'],
        symptoms['blood_in_sputum'],
        symptoms['throat_irritation'],
        symptoms['rusty_sputum'],
        symptoms['slurred_speech'],
        symptoms['increased_appetite'],
        symptoms['enlarged_thyroid'],
        symptoms['irritability'],
        symptoms['nodal_skin_eruptions'],
        symptoms['spotting_urination'],
        symptoms['shivering'],
        symptoms['malaise'],
        symptoms['sunken_eyes'],
        symptoms['pus_filled_pimples'],
        symptoms['weakness_in_limbs'],
        symptoms['lack_of_concentration'],
        symptoms['visual_disturbances'],
        symptoms['altered_sensorium'],
        symptoms['unsteadiness'],
        symptoms['bladder_discomfort'],
        symptoms['passage_of_gases'],
        symptoms['patches_in_throat'],
        symptoms['belly_pain'],
        symptoms['mucoid_sputum'],
        symptoms['ulcers_on_tongue'],
        symptoms['cramps'],
        symptoms['swelling_of_stomach'],
        symptoms['pain_during_bowel_movements'],
        symptoms['hip_joint_pain'],
        symptoms['red_sore_around_nose'],
        symptoms['movement_stiffness'],
    ]]
    temp=['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis',
       'Drug Reaction', 'Peptic ulcer diseae', 'AIDS', 'Diabetes ',
       'Gastroenteritis', 'Bronchial Asthma', 'Hypertension ', 'Migraine',
       'Cervical spondylosis', 'Paralysis (brain hemorrhage)', 'Jaundice',
       'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A',
       'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E',
       'Alcoholic hepatitis', 'Tuberculosis', 'Common Cold', 'Pneumonia',
       'Dimorphic hemmorhoids(piles)', 'Heart attack', 'Varicose veins',
       'Hypothyroidism', 'Hyperthyroidism', 'Hypoglycemia',
       'Osteoarthristis', 'Arthritis',
       '(vertigo) Paroymsal  Positional Vertigo', 'Acne',
       'Urinary tract infection', 'Psoriasis', 'Impetigo']
    user_symptoms=pd.DataFrame(user_symptoms)
    disease = mod.predict(user_symptoms)[0]
    return {"simp":symptoms,"NO":temp[int(disease)]}

if __name__=="__main__":
    uvicorn.run("disease:app")
