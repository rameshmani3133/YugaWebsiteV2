import { Request, Response } from "express";

import { sendContactMail } from "../services/mail.service.js";

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
       Validation
    =========================================== */

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required.",
      });
    }

    if (!mobile?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Mobile number is required.",
      });
    }

    if (!service?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please select a service.",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    await sendContactMail({
      name: name.trim(),
      mobile: mobile.trim(),
      email: email?.trim() || "",
      service: service.trim(),
      message: message.trim(),
    });

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
        "Unable to send your enquiry at the moment. Please try again later.",

    });

  }

}