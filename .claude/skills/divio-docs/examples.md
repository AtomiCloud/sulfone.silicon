# Divio Documentation Examples

This file contains concrete examples of each documentation type to guide generation.

---

## Tutorial Example

````markdown
# Tutorial: Your First API Endpoint

In this tutorial, you'll create your first REST API endpoint using our framework. By the end, you'll have a working endpoint that returns JSON data.

## What You'll Learn

- How to create a basic API endpoint
- How to return JSON responses
- How to test your endpoint

## Prerequisites

- Node.js 18+ installed
- Basic familiarity with JavaScript

## Steps

### 1. Create the Endpoint File

Create a new file called `hello.js` in the `routes/` directory:

```javascript
export async function GET(request) {
  return Response.json({ message: 'Hello, World!' });
}
```
````

### 2. Start the Development Server

Run the development server:

```bash
npm run dev
```

You should see:

```
Server running at http://localhost:3000
```

### 3. Test Your Endpoint

Open your browser and navigate to `http://localhost:3000/hello`.

You should see:

```json
{ "message": "Hello, World!" }
```

🎉 Congratulations! You've created your first API endpoint.

## What's Next?

- Learn how to [accept request parameters](/how-to/handle-request-params)
- Explore the [API reference](/reference/api)

````

---

## How-to Guide Example

```markdown
# How-to: Add Authentication to an Endpoint

## Goal
Protect an API endpoint so only authenticated users can access it.

## Prerequisites
- An existing API endpoint
- Auth provider configured

## Steps

1. **Import the auth middleware**

   ```javascript
   import { withAuth } from '@/middleware/auth'
````

2. **Wrap your endpoint handler**

   ```javascript
   export const GET = withAuth(async request => {
     const user = request.user;
     return Response.json({ userId: user.id });
   });
   ```

3. **Test the protected endpoint**

   ```bash
   curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:3000/api/profile
   ```

## Troubleshooting

| Issue              | Solution                                          |
| ------------------ | ------------------------------------------------- |
| `401 Unauthorized` | Check that your token is valid and not expired    |
| `403 Forbidden`    | User lacks required permissions for this resource |
| Token not found    | Ensure Authorization header uses `Bearer` scheme  |

````

---

## Reference Example

```markdown
# Reference: Configuration Options

## Overview

Configuration is managed via `config.yaml` in the project root.

## Options

### `server.port`
- **Type:** `integer`
- **Default:** `3000`
- **Description:** The port number the server listens on.

### `server.host`
- **Type:** `string`
- **Default:** `"localhost"`
- **Description:** The host address to bind to. Use `"0.0.0.0"` to accept external connections.

### `database.url`
- **Type:** `string`
- **Required:** Yes
- **Description:** Connection string for the database.
- **Example:** `postgresql://user:pass@localhost:5432/mydb`

### `cache.enabled`
- **Type:** `boolean`
- **Default:** `true`
- **Description:** Enable or disable response caching.

### `cache.ttl`
- **Type:** `integer`
- **Default:** `3600`
- **Description:** Cache time-to-live in seconds.

## Environment Variables

Configuration values can be overridden with environment variables:

| Config Path | Environment Variable |
|-------------|---------------------|
| `server.port` | `SERVER_PORT` |
| `database.url` | `DATABASE_URL` |
| `cache.enabled` | `CACHE_ENABLED` |

## Example Configuration

```yaml
server:
  port: 8080
  host: "0.0.0.0"

database:
  url: "${DATABASE_URL}"

cache:
  enabled: true
  ttl: 7200
````

````

---

## Explanation Example

```markdown
# Explanation: Our Authentication Architecture

## Context

Our application uses JWT (JSON Web Tokens) for authentication rather than session-based auth. This decision was made to support our microservices architecture and enable horizontal scaling.

## How It Works

### Token Flow

1. User authenticates with credentials
2. Auth service issues a signed JWT
3. Client includes JWT in subsequent requests
4. Each service validates the JWT independently

### Why JWT?

**Stateless verification** - Each service can verify tokens without consulting a central session store. This eliminates a single point of failure and reduces latency.

**Horizontal scalability** - Since no server-side session state exists, any instance can handle any request. Load balancing becomes trivial.

## Design Decisions

### Short-lived Access Tokens
Access tokens expire in 15 minutes. This limits the window of vulnerability if a token is compromised.

**Trade-off:** Users would need to re-authenticate frequently.

**Solution:** We use refresh tokens with longer expiration (7 days) to obtain new access tokens seamlessly.

### Token Revocation Challenge

JWTs cannot be easily revoked before expiration since verification is stateless.

**Our approach:** We maintain a short blocklist of revoked tokens in Redis, checked during verification. This is a compromise between pure statelessness and security requirements.

## Alternatives Considered

| Approach | Why Not Chosen |
|----------|----------------|
| Session-based auth | Requires sticky sessions or shared session store, complicating deployment |
| OAuth-only | Adds dependency on external providers; some users prefer username/password |
| API Keys | Better suited for server-to-server auth, not user authentication |

## Related Concepts
- [How to implement custom auth providers](/how-to/custom-auth)
- [Security best practices](/explanation/security)
````

---

## Quick Reference: Documentation Types

| Type            | Answers               | User Needs             | Style                 |
| --------------- | --------------------- | ---------------------- | --------------------- |
| **Tutorial**    | How do I get started? | To learn               | Step-by-step lessons  |
| **How-to**      | How do I solve X?     | To accomplish a goal   | Practical steps       |
| **Reference**   | What are the options? | To look up information | Dry, factual          |
| **Explanation** | Why is it this way?   | To understand          | Contextual discussion |
