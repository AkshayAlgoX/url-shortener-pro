# URL Shortener Pro – Serverless, Analytics, QR, Password-Protected

**Live demo (S3)**: http://url-shortener-ui-2169-8914-2623.s3-website-us-east-1.amazonaws.com

**API Base**: `https://c37tsxo1xl.execute-api.us-east-1.amazonaws.com/prod`

## Features
- Custom short IDs, TTL expiration, password-protected links
- QR code generation (base64) in the API response
- Click analytics (DynamoDB + Chart.js frontend)
- Serverless: Lambda + API Gateway + DynamoDB + S3

## Repo structure


/url-shortener-pro
/frontend
index.html
script.js
config.example.js # commit this
config.js # DO NOT commit - local only
style.css
/lambda  
url-shortener/
url-redirect/
get-analytics/
/screenshots
README.md
.gitignore


## Quick start (local)
1. Copy `frontend/config.example.js` → `frontend/config.js` and fill:
   - `window.API_BASE_URL` = your API gateway base URL
   - `window.API_KEY` = your API key (optional)
2. Serve frontend locally:
   - `cd frontend`
   - `python -m http.server 8000`
   - open `http://localhost:8000` and test UI
3. Use the included Lambdas or deploy them with CloudFormation / SAM

## Deploying frontend to S3
1. Create an S3 bucket (static website hosting).
2. Upload contents of `/frontend` (do NOT upload config.js to public repo if it contains keys).
3. Enable **Static website hosting** in bucket Properties and set index.html.

## Security notes
- Never commit `config.js` or API keys. Use `config.example.js`.
- If you expose a key for demo, give it a small usage plan and rotate/delete after use.

