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

## Deployment through Render.com

1. **Prepare for deployment:**

   - Run `npm run build` in your **frontend** folder.
   - Ensure the **dist** folder is located in the root of your **frontend** folder before pushing to GitHub.

2. **Deploy on Render.com:**

   - Refer to Render.com's deployment articles for more detailed instructions about getting started, creating a production database, and deployment debugging tips.

3. **Create the application on Render.com:**

   - From the Render [Dashboard](https://dashboard.render.com/), click on the "New +" button in the navigation bar, and select "Web Service" to create the application.
   - Select "Build and deploy from a Git repository" and click "Next".
   - Find and connect your GitHub repo.

4. **Configure your app:**

   - Fill out the form with the following:
     - **Name:** Give your application a name.
     - **Region:** Set to the location closest to you.
     - **Branch:** Set to "main".
     - **Root Directory:** Leave blank (commands run from the root directory).
     - **Instance Type:** Select "Free".

5. **Add environment variables:**

   - Secure your environment variables in the Render GUI form:
     - `JWT_SECRET` (click "Generate" for a secure key)
     - `JWT_EXPIRES_IN`: 604800
     - `NODE_ENV`: production
     - `SCHEMA`: your unique schema name in snake_case
     - `DATABASE_URL`: Copy value from the **Internal Database URL** field in your Postgres instance on the Render dashboard.

   **Note:** Ensure the region of your web service and database are the same. Add any other keys and values from your local `.env` file as needed.

6. **Deploy:**

   - Click "Create Web Service" to deploy your project.
   - Monitor the logs to see your Dockerfile commands being executed and any errors that occur.
   - Deployment typically takes 5-10 minutes if everything works as expected.
   - When complete, find the URL for your site just below the name of the Web Service at the top of the page.

   **Note:** Render's default setting is Auto-Deploy, which will re-deploy your application every time you push to main, keeping it up to date.

---

For more details on the deployment process, refer to your [Render.com deployment articles](https://docs.render.com/deploys).
