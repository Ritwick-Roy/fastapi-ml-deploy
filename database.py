from model import Appointment
import motor.motor_asyncio

client=motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.AppointmentList
collection=database.appt

async def fetch_one_appt(patient):
    document =await collection.find_one({"patient":patient})
    return document

async def fetch_all_appts():
    appts = []
    cursor = collection.find({})
    async for document in cursor:
        appts.append(Appointment(**document))
    return appts

async def create_appt(appt):
    document = appt
    result = await collection.insert_one(document)
    return document


async def update_appt(patient,appt):
    await collection.update_one({"patient":patient},{"$set":appt})
    document = await collection.find_one({"patient":patient})
    return document

async def remove_appt(patient):
    await collection.delete_one({"patient":patient})
    return True