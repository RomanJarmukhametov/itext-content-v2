// server/apisubmitForm.ts

// Define the event handler for handling POST requests to this API route
export default defineEventHandler(async (event) => {
  // Read and parse the incoming request body
  const formData = await readBody(event);

  // Attempt to get the IP address from headers or fall back to socket information
  const ip =
    event.req.headers["x-forwarded-for"] || event.req.socket.remoteAddress;

  // Retrieve your Telegram bot token and chat ID from environment variables
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Honeypot field check for basic spam protection
  if (formData._gotcha) {
    // If the honeypot field is filled, it's likely a bot submission
    // Returning a fake success response without sending data to Telegram
    return { success: true, message: "Form data processed successfully." }; // Fake response
  }

  // Construct a message in a human-readable format to be sent to Telegram
  const message = `
      📩 New Form Submission:
      ✉️ Subject: ${formData.subject}
      🙍‍♂️ Name: ${formData.name}
      📧 Email: ${formData.email}
      📞 Phone: ${formData.phone}
      🌐 Language: ${formData.language}
      📝 Message: ${formData.message}
      🌍 IP Address: ${ip}
    `;

  try {
    // Send the constructed message to the specified Telegram chat using the bot
    const response = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown", // Use Markdown for text formatting
        }),
      }
    );

    // Check if the response from Telegram API is successful
    if (!response.ok) {
      throw new Error("Telegram API responded with an error");
    }

    // Parse the response from Telegram
    const result = await response.json();

    // Return a success response with the result
    return {
      success: true,
      message: "Form data sent to Telegram successfully.",
      result,
    };
  } catch (error) {
    // Error handling for any issues in sending the message
    if (error instanceof Error) {
      return {
        success: false,
        message: `Failed to send form data to Telegram: ${error.message}`,
      };
    } else {
      // Fallback for unknown errors
      return {
        success: false,
        message:
          "An unknown error occurred while sending form data to Telegram",
      };
    }
  }
});
