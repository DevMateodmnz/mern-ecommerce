# Missing Items and Setup Notes for MERN E-commerce

This document outlines the items that may be missing or need configuration for the application to run properly.

## Environment Variables

The following environment variables need to be set in `backend/.env`:

- `MAILCHIMP_KEY`: Your Mailchimp API key.
- `MAILCHIMP_LIST_KEY`: Your Mailchimp list key.
- `MAILGUN_KEY`: Your Mailgun API key.
- `MAILGUN_DOMAIN`: Your Mailgun domain.
- `MAILGUN_EMAIL_SENDER`: Your email sender address.
- `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
- `GOOGLE_CALLBACK_URL`: Your Google OAuth callback URL.
- `FACEBOOK_CLIENT_ID`: Your Facebook OAuth client ID.
- `FACEBOOK_CLIENT_SECRET`: Your Facebook OAuth client secret.
- `FACEBOOK_CALLBACK_URL`: Your Facebook OAuth callback URL.
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_REGION`: Your AWS region.
- `AWS_BUCKET_NAME`: Your AWS S3 bucket name.

## Other Setup Notes

- Ensure MongoDB Atlas is set up and the connection string is correct.
- Run `npm run seed:db` to populate the database with sample data.
- If using Docker, make sure Docker and Docker Compose are installed.
- For production, configure Vercel or another deployment platform.

## Potential Issues

- If the backend doesn't connect to the database, check the MongoDB Atlas network settings (allow all IPs or whitelist your IP).
- Frontend may not load if the backend is not running on port 5000.
- Update JWT_SECRET to a strong, unique value for security.
