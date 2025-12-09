import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from dotenv import load_dotenv

load_dotenv()

EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")

def send_email(to_email, subject, body):
    print(f"Sending email to: {to_email}")  # DEBUG
    msg = MIMEMultipart()
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = to_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)

def handler(event, context):
    print("📩 Python function triggered")  # DEBUG
    print("Raw event:", event)  # DEBUG

    try:
        body = event.get("body", "")
        print("Raw body:", body)  # DEBUG

        data = json.loads(body)
        print("Parsed data:", data)  # DEBUG

        user_email = data.get("email")
        full_name = data.get("fullName")

        if not user_email:
            print("❌ Missing email")  # DEBUG
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "Email is required"})
            }

        # AUTO REPLY
        send_email(
            user_email,
            "Thank you for reaching out!",
            f"""
            <p>Hi <strong>{full_name}</strong>,</p>
            <p>Thank you for contacting me! I received your message through my website.</p>
            <br>
            <p>Best regards,<br><strong>Paul Jhon Magbanua</strong></p>
            """
        )

        # NOTIFY YOURSELF
        send_email(
            EMAIL_ADDRESS,
            f"New Contact Form Submission from {full_name}",
            f"""
            <h3>New Lead Details:</h3>
            <p><strong>Name:</strong> {full_name}</p>
            <p><strong>Email:</strong> {user_email}</p>
            <p><strong>Phone:</strong> {data.get("phone")}</p>
            <p><strong>Consent:</strong> {data.get("checkbox")}</p>
            """
        )

        return {
            "statusCode": 200,
            "body": json.dumps({"message": "Emails sent successfully!"})
        }

    except Exception as e:
        print("❌ Exception:", str(e))  # DEBUG
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }
