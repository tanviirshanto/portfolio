import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../dbConnect/dbConnect";
import Contact from "../../../models/contactModel";

connect();

export async function GET() {
  try {
    const contacts = await Contact.find(); // Fetch all contacts

    return new NextResponse(JSON.stringify(contacts), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Change this to frontend URL in production
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return new NextResponse(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
