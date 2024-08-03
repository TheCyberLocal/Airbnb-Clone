# 📑 Airbnb-Clone Installation and Setup

### [⇦ Back to Project Overview](../README.md)
## Getting Started

1. **Clone this repository:**

   ```bash
   git clone https://github.com/TheCyberLocal/Airbnb-Clone.git
   ```

2. **Create a `.env` file** based on the example with proper settings for your development environment.

3. **Ensure the SQLite3 database connection URL is in the `.env` file.**

4. **Set the `SCHEMA` environment variable** with a unique name using the snake_case convention.

5. **Initialize and Run your Express backend:**

   ```bash
   npm install
   npm start
   ```

6. **Initialize and Run your React frontend:**

   ```bash
   npm install
   npm run dev
   ```

   The starter has modified the `npm run build` command to include the `--watch` flag. This flag will rebuild the **dist** folder whenever you change your code, keeping the production version up to date.
