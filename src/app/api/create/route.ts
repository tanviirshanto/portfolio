import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../dbConnect/dbConnect";

import Contact from "../../../models/contactModel";

connect();

export async function POST(request: NextRequest, response: NextResponse) {

  const body = await request.json();
  //console.log(body);
  const { name, email, description } = body;

   const newContact = new Contact({ name, email, description });

  await newContact
    .save()
    .then((newContact: any) => {
    })
    .catch((error: any) => {
      console.error("Error adding to Order", error);
 
    });


  return NextResponse.json(newContact);
}
