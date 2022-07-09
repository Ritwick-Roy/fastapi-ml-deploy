from pydantic import BaseModel

class Appointment(BaseModel):
    patient: str
    doctor: str
    date: str
    address: str


class Symptoms(BaseModel):
    muscle_weakness: int
    coma: int
    red_spots_over_body: int
    high_fever: int
    receiving_blood_transfusion: int
    blood_in_sputum: int
    rusty_sputum: int
    pain_behind_the_eyes: int
    slurred_speech: int
    throat_irritation: int
    enlarged_thyroid: int
    increased_appetite: int
    shivering: int
    nodal_skin_eruptions: int
    sunken_eyes: int
    spotting_urination: int
    lack_of_concentration: int
    pus_filled_pimples: int
    altered_sensorium: int
    weakness_in_limbs: int
    mucoid_sputum: int
    unsteadiness: int
    malaise: int
    patches_in_throat: int
    visual_disturbances: int
    irritability: int
    hip_joint_pain: int
    movement_stiffness: int
    passage_of_gases: int
    bladder_discomfort: int
    toxic_look_typhos: int
    pain_during_bowel_movements: int
    blister: int
    ulcers_on_tongue: int
    silver_like_dusting: int
    history_of_alcohol_consumption: int

diseases = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis',
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