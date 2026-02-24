# Supabase Database Setup Guide

This guide will help you set up the database for storing loan enquiries. Supabase is perfect for non-technical users because it has an easy-to-use dashboard where you can view, filter, and export data to Excel/CSV.

## Step 1: Create Supabase Account (Free)

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with email or GitHub
4. Verify your email

## Step 2: Create a New Project

1. Click "New Project"
2. Choose organization (or create one)
3. Fill in project details:
   - **Name**: CBS Groups Enquiries (or any name)
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to India (e.g., Southeast Asia)
4. Click "Create new project"
5. Wait 2-3 minutes for setup to complete

## Step 3: Create the Database Table

1. In your Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Copy and paste this SQL code:

```sql
CREATE TABLE loan_enquiries (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255),
  loan_type VARCHAR(100) NOT NULL,
  loan_amount VARCHAR(100),
  submitted_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. Click **"Run"** (or press Ctrl+Enter)
5. You should see "Success. No rows returned"

## Step 4: Get Your API Credentials

1. In Supabase dashboard, click **"Settings"** (gear icon in left sidebar)
2. Click **"API"** in the settings menu
3. You'll see two important values:
   - **Project URL**: Something like `https://abcdefghijk.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`
4. Keep this page open - you'll need these values next

## Step 5: Add Credentials to Vercel

1. Go to your Vercel dashboard: [https://vercel.com](https://vercel.com)
2. Click on your CBS Groups project
3. Go to **Settings** → **Environment Variables**
4. Add the first variable:
   - **Name**: `SUPABASE_URL`
   - **Value**: Paste your Project URL from Supabase
   - Click **"Add"**
5. Add the second variable:
   - **Name**: `SUPABASE_ANON_KEY`
   - **Value**: Paste your anon public key from Supabase
   - Click **"Add"**
6. Click **"Redeploy"** or push a new commit to trigger deployment

## Step 6: Test It!

1. Go to your website
2. Fill out the loan enquiry form
3. Submit it
4. Go back to Supabase dashboard
5. Click **"Table Editor"** → **"loan_enquiries"**
6. You should see your test entry!

---

## How to View & Export Data (For Non-Technical Users)

### Viewing Enquiries

1. Login to [https://supabase.com](https://supabase.com)
2. Click on "CBS Groups Enquiries" project
3. Click **"Table Editor"** in left sidebar
4. Click **"loan_enquiries"** table
5. You'll see all enquiries in a spreadsheet-like view

### Exporting to Excel/CSV

1. In the table view, click the **"..."** menu (top right corner)
2. Click **"Download as CSV"**
3. The file will download to your computer
4. Open with Excel or Google Sheets

### Filtering Data

- Click the **filter icon** next to any column header
- Example: Filter by loan type, date range, etc.
- Click **"Apply filters"**

### Searching

- Use the **search box** at the top to find specific names, phone numbers, etc.

### Sorting

- Click any column header to sort ascending/descending

### Deleting Records

- Click the checkbox next to any row
- Click the **delete icon** that appears
- Confirm deletion

---

## Troubleshooting

### Form submission shows error

1. Check that environment variables are added correctly in Vercel
2. Variable names must be exactly: `SUPABASE_URL` and `SUPABASE_ANON_KEY`
3. Make sure you redeployed after adding variables

### "Table doesn't exist" error

1. Go back to Step 3 and run the SQL query to create the table
2. Verify in Table Editor that "loan_enquiries" table exists

### Can't login to Supabase

1. Check your email for verification link
2. Use "Forgot password" if needed
3. Make sure you're using the same account you signed up with

---

## Contact Support

- Supabase Docs: [https://supabase.com/docs](https://supabase.com/docs)
- Supabase Discord: [https://discord.supabase.com](https://discord.supabase.com)
- Email Support: support@supabase.io

---

## Summary

✅ Free tier includes 500MB database (thousands of enquiries)
✅ Easy dashboard - no coding needed to view data
✅ Export to Excel/CSV with one click
✅ Filter, search, and sort enquiries
✅ Secure and reliable
✅ Automatic backups

Your enquiry form will now save all submissions to your own database that you fully control!
