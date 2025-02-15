import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../dbConnect/dbConnect";
import Contact from "../../../models/contactModel";

connect();

export async function OPTIONS() {
  // Handle preflight request
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",  // Allow all origins (replace * with domain for security)
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, description } = body;

    const newContact = new Contact({ name, email, description });

    await newContact.save();

    return new NextResponse(JSON.stringify(newContact), {
      status: 201,
      headers: {
        "Access-Control-Allow-Origin": "*", // Change * to frontend URL for production
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding contact:", error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
