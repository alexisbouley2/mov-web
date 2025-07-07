import { NextRequest, NextResponse } from "next/server";
import config from "@/lib/config";
import { ValidateInviteResponse } from "@movapp/types";

const BACKEND_URL = config().NEXT_PUBLIC_BACKEND_URL;

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 });
    }

    // Call the backend to validate the invite
    const response = await fetch(`${BACKEND_URL}/events/invite/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data: ValidateInviteResponse = await response.json();

    if (!data.valid) {
      return NextResponse.json(
        { error: data.error || "Failed to validate invite" },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error validating invite:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
