# TikTok Data App

Website that shows hashtags that are trending on TikTok today. Built with [Astro](https://astro.build/).

## Dependencies

- Postgres - you can create one locally using Docker
  with `docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`
- Sendgrid - for alerts from contact form submissions

## Running app locally

You'll need the following environment variables:

- `DB_URL` - if run with the above Docker command, it's
  `postgresql://postgres:mysecretpassword@localhost:5432/TtkDB`
  (after you create the TtkDB database)
- `SENDGRID_API_KEY`
- `EMAIL_FROM` - email address used by Sendgrid for sending the email
- `EMAIL_TO` - email address where Sendgrid will send the emails to
