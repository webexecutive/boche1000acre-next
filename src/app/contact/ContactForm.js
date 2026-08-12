'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Button from "../../components/Button";
import axios from "axios";

export default function ContactForm() { 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [status, setStatus] = useState("idle"); // idle | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (data) => {
        setStatus("idle");
        setErrorMsg("");
        try {
            const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
            const targetUrl = serverUrl ? `${serverUrl}/contact` : "/api/contact";
            await axios.post(targetUrl, data);
            setStatus("success");
            reset();
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.response?.data?.message || "Could not connect to server. Please try again.");
        }
    };

    return (
        <>
            {/* Success Banner */}
            {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                    ✅ Your message has been sent! We'll get back to you soon.
                </div>
            )}

            {/* Error Banner */}
            {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    ❌ {errorMsg}
                </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                {/* Email */}
                <div>
                    <label className="text-sm text-gray-600 block mb-2">
                        Email Address :
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.email ? "border-red-400" : "border-gray-300"
                            }`}
                        {...register("email", {
                            required: "Email address is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address.",
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                            <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                        )}
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="text-sm text-gray-600 block mb-2">
                        Subject:
                    </label>
                    <input
                        type="text"
                        placeholder="What is this about?"
                        className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.subject ? "border-red-400" : "border-gray-300"
                            }`}
                        {...register("subject", {
                            required: "Subject is required.",
                            minLength: {
                                value: 3,
                                message: "Subject must be at least 3 characters.",
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="subject"
                        render={({ message }) => (
                            <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                        )}
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="text-sm text-gray-600 block mb-2">
                        Message:
                    </label>
                    <textarea
                        rows="6"
                        placeholder="Write your message here..."
                        className={`w-full bg-white border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3a5a1c] ${errors.message ? "border-red-400" : "border-gray-300"
                            }`}
                        {...register("message", {
                            required: "Message is required.",
                            minLength: {
                                value: 10,
                                message: "Message must be at least 10 characters.",
                            },
                        })}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="message"
                        render={({ message }) => (
                            <p className="text-red-500 text-xs mt-1">⚠ {message}</p>
                        )}
                    />
                </div>

                {/* Submit */}
                <div className="flex justify-end">
                    <Button type="submit" size="sm" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send"}
                    </Button>
                </div>

            </form>
        </>
    );
}