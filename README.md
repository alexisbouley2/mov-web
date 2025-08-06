# MOV Web

A clean and modern landing page built with Next.js and Tailwind CSS for the MOV mobile app.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` with your Supabase credentials:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Set up Supabase:

Follow the detailed setup instructions in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md) to:

- Create the waitlist table
- Configure Row Level Security (RLS)
- Set up the necessary policies

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Deployment

The application is deployed on Vercel. To deploy:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Features

- Landing page for the MOV mobile app
- Waitlist system with referral codes
- Responsive design with Tailwind CSS
- Framer Motion animations
