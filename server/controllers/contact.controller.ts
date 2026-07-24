import { Request, Response } from "express";

interface ContactRequest {

  name: string;

  mobile: string;

  email: string;

  service: string;

  message: string;

}

export async function submitContact(

  req: Request,

  res: Response

) {

  try {

    const {

  name,

  mobile,

  email,

  service,

  message,

}: ContactRequest = req.body;

    /* ===========================================
       Success Response
    =========================================== */

    return res.status(200).json({

      success: true,

      message:
        "Your enquiry has been submitted successfully. Our team will contact you shortly.",

    });

  } catch (error) {

    console.error(
      "Contact Controller Error:",
      error
    );

    return res.status(500).json({

      success: false,

      message:
        "An unexpected error occurred. Please try again later.",

    });

  }

}