const http = require('http');
const url = require('url');
const querystring = require('querystring');

const PORT = process.env.PORT || 3007;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse URL and get query parameters
  const queryObject = url.parse(req.url, true).query;
  const message = queryObject.message || 'Welcome to node js!';

  // HTML content with a form and a box for writing text
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f4f4f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      header {
        text-align: center;
        padding: 20px;
        background-color: #5a9;
        color: #fff;
        width: 100%;
      }
      header h1 {
        font-size: 2em;
      }
      header p {
        font-size: 1.2em;
      }
      .content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        width: 80%;
        max-width: 800px;
        text-align: center;
      }
      .card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 20px;
        color: #333;
      }
      .message-box {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-top: 20px;
        width: 100%;
        max-width: 500px;
      }
      footer {
        text-align: center;
        padding: 10px;
        background-color: #5a9;
        color: #fff;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <header>
      <p>${message}</p>
    </header>
    <section class="content">
      <form action="/" method="GET">
        <label for="message">Write a message:</label>
        <textarea name="message" id="message" rows="4" class="message-box" placeholder="Enter your content here..."></textarea>
        <br>
        <button type="submit">Submit</button>
      </form>
      <div class="card">
        <h2>Submitted Message</h2>
        <p>${message}</p>
      </div>
    </section>
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
  </body>
  </html>
  `;

  // Respond with the HTML content
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlContent);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
