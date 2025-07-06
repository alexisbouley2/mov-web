import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { email, referralCode } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingEntry } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email.toLowerCase())
      .single();

    if (existingEntry) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Try to find referrer if referral code is provided (but don't fail if invalid)
    let referrerId: string | null = null;
    if (referralCode) {
      const { data: referrer } = await supabase
        .from("waitlist")
        .select("id")
        .eq("referral_code", referralCode.toUpperCase())
        .single();

      if (referrer) {
        referrerId = referrer.id;
      }
      // If referral code is invalid, we just ignore it and continue
    }

    // Generate referral code
    const newReferralCode = await generateReferralCode();

    // Get current count for rank
    const { count } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    const rank = (count || 0) + 1;

    // Insert new entry
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: email.toLowerCase(),
          referral_code: newReferralCode,
          rank: rank,
          referred_by: referrerId,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to register email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      email: data.email,
      rank: data.rank,
      referralCode: data.referral_code,
      referredBy: data.referred_by,
    });
  } catch (error) {
    console.error("Waitlist registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function generateReferralCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
