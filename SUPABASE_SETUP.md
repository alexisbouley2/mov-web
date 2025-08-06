# Waitlist System Setup Guide

## Prerequisites

1. A Supabase account and project
2. Node.js and npm installed

## Setup Steps

### 1. Install Dependencies

The Supabase client has already been installed. If you need to reinstall:

```bash
npm install @supabase/supabase-js
```

### 2. Create Supabase Database Table

In your Supabase dashboard, create a new table called `waitlist` with the following SQL:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  referral_code TEXT UNIQUE NOT NULL,
  rank INTEGER,
  referred_by UUID REFERENCES waitlist(id)
);

-- Create index for email lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create index for referral code lookups
CREATE INDEX idx_waitlist_referral_code ON waitlist(referral_code);

-- Create index for referral tracking
CREATE INDEX idx_waitlist_referred_by ON waitlist(referred_by);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated and anonymous users
CREATE POLICY "Allow anonymous inserts" ON waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads (optional, for admin purposes)
CREATE POLICY "Allow reads" ON waitlist
  FOR SELECT USING (true);
```

### 3. Environment Variables

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project dashboard under Settings > API.

### 4. Run the Application

```bash
npm run dev
```
