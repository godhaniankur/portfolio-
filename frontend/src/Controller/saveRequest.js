import { dbPromise } from "../DB/db";


export const saveRequest = async (data) => {
  const db = await dbPromise;
  await db.add("requests", {
    ...data,
    synced: false,
    createdAt: new Date(),
  });
};