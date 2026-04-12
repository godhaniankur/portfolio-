import React from "react";
import { useForm } from "react-hook-form";
import { saveRequest } from "../Controller/saveRequest";
import { useEffect } from "react";
import { dbPromise } from "../DB/db";


export default function StudentForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    const submitData = async (data) => {
        if (navigator.onLine) {
            try {
                // ✅ Direct API call when online
                const response = await fetch("http://localhost:3000/api/save", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();

                console.log("result",result)

                alert("Saved to server ✅");
            } catch (error) {
                // ❗ If API fails even when online → fallback to IndexedDB
               alert("API failed, saving offline...");
                await saveRequest(data);
            }
        } else {
            // ❌ Offline → store in IndexedDB
            console.log("Offline, saving locally...");
            await saveRequest(data);
        }
    };


  const MAX_RETRY = 5;

const syncData = async () => {
  const db = await dbPromise;
  const allData = await db.getAll("requests");

  const unsynced = allData.filter(
    (item) => !item.synced && (item.retryCount || 0) < MAX_RETRY
  );

  for (let item of unsynced) {
    try {
      await fetch("http://localhost:3000/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      // ✅ Success
      await db.put("requests", {
        ...item,
        synced: true,
        retryCount: 0,
      });

      console.log("Synced ✅", item.id);
    } catch (err) {
      const retryCount = (item.retryCount || 0) + 1;

      // ❌ Failed → increase retry count
      await db.put("requests", {
        ...item,
        retryCount,
        lastTriedAt: new Date(),
      });

      console.log("Retry failed ❌", item.id, "Count:", retryCount);
    }
  }
};


    useEffect(() => {
        const handleOnline = () => {
            console.log("Internet back 🔥 syncing...");
            syncData();
        };

        window.addEventListener("online", handleOnline);

        return () => window.removeEventListener("online", handleOnline);
    }, []);

    return (
        <div className="flex items-center h-full mt-20 justify-center ">

            <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    Student Form
                </h2>

                <form onSubmit={handleSubmit(submitData)} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Roll Number */}
                    <div>
                        <label className="block mb-1 font-medium">Roll No</label>
                        <input
                            type="number"
                            {...register("rollNo", {
                                required: "Roll number is required",
                            })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.rollNo && (
                            <p className="text-red-500 text-sm">
                                {errors.rollNo.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}