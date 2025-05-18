<template>
  <div class="documentation">
    <h1>📘 Demo API Documentation</h1>
    <p class="intro">
      Welcome to the API documentation. These APIs are designed for frontend
      demos with pagination, search, and sorting capabilities. Below are two
      major APIs: Users and Cars.
    </p>

    <!-- USERS API -->
    <section class="api-section">
      <h2 class="api-title">🧾 Users API</h2>
      <p class="api-description">
        The Users API provides a static dataset of 100 users, offering search,
        pagination, and sorting capabilities.
      </p>
      <ul class="features-list">
        <li>🔍 <strong>Search</strong>: Filter by name, email, or status</li>
        <li>
          📄 <strong>Pagination</strong>: Control current page and items per
          page
        </li>
        <li>
          ↕️ <strong>Sorting</strong>: Sort by fields such as name, email, or
          age
        </li>
        <li>
          📊 <strong>Metadata</strong>: Includes total records and pagination
          details
        </li>
      </ul>

      <h3 class="section-header">🌐 Base URL</h3>
      <code class="base-url">https://re-demoapi.netlify.app/api/users</code>

      <h3 class="section-header">📥 Query Parameters</h3>
      <table class="parameter-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>search</code></td>
            <td>string</td>
            <td>Search by name, email, or status</td>
          </tr>
          <tr>
            <td><code>currentPage</code></td>
            <td>number</td>
            <td>Current page (starts at 1)</td>
          </tr>
          <tr>
            <td><code>perPage</code></td>
            <td>number</td>
            <td>Items per page (default: 5)</td>
          </tr>
          <tr>
            <td><code>sortField</code></td>
            <td>string</td>
            <td>Sort by: name, date, email, status, age</td>
          </tr>
          <tr>
            <td><code>sortOrder</code></td>
            <td>string</td>
            <td>Sort order: <code>asc</code> or <code>desc</code></td>
          </tr>
        </tbody>
      </table>

      <h3 class="section-header">🧪 Example Request</h3>
      <code class="example-request"
        >https://re-demoapi.netlify.app/api/users?search=act&currentPage=1&perPage=5&sortField=age&sortOrder=desc</code
      >

      <h3 class="section-header">📤 Example Response</h3>
      <pre class="example-response">
{
  "data": [
    {
      "name": "Frank",
      "date": "2024-06-21",
      "email": "frank@example.com",
      "status": "active",
      "age": 40
    }
  ],
  "meta": {
    "total": 100,
    "currentPage": 1,
    "perPage": 5
  }
}
      </pre>
    </section>

    <!-- CARS API -->
    <section class="api-section">
      <h2 class="api-title">🚗 Cars API</h2>
      <p class="api-description">
        This API provides a static dataset of 100 cars with pagination, sorting,
        and filtering by make, model, and status.
      </p>
      <ul class="features-list">
        <li>
          🔍 <strong>Search</strong>: Filter by make, model, color, or status
        </li>
        <li>
          📄 <strong>Pagination</strong>: Control current page and items per
          page
        </li>
        <li>
          ↕️ <strong>Sorting</strong>: Sort by fields like make, model, price
        </li>
        <li>
          📊 <strong>Metadata</strong>: Includes total records and pagination
          details
        </li>
      </ul>

      <h3 class="section-header">🌐 Base URL</h3>
      <code class="base-url">https://re-demoapi.netlify.app/api/cars</code>

      <h3 class="section-header">📥 Query Parameters</h3>
      <table class="parameter-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>search</code></td>
            <td>string</td>
            <td>Search by make, model, color, or status</td>
          </tr>
          <tr>
            <td><code>currentPage</code></td>
            <td>number</td>
            <td>Current page (starts at 1)</td>
          </tr>
          <tr>
            <td><code>perPage</code></td>
            <td>number</td>
            <td>Items per page (default: 5)</td>
          </tr>
          <tr>
            <td><code>sortField</code></td>
            <td>string</td>
            <td>Sort by: make, model, year, color, status, price</td>
          </tr>
          <tr>
            <td><code>sortOrder</code></td>
            <td>string</td>
            <td>Sort order: <code>asc</code> or <code>desc</code></td>
          </tr>
        </tbody>
      </table>

      <h3 class="section-header">🧪 Example Request</h3>
      <code class="example-request"
        >https://re-demoapi.netlify.app/api/cars?search=black&currentPage=1&perPage=5&sortField=price&sortOrder=desc</code
      >

      <h3 class="section-header">📤 Example Response</h3>
      <pre class="example-response">
{
  "data": [
    {
      "make": "BMW",
      "model": "X5",
      "year": 2024,
      "color": "Black",
      "status": "sold",
      "price": 55000
    }
  ],
  "meta": {
    "total": 100,
    "currentPage": 1,
    "perPage": 5
  }
}
      </pre>
    </section>

    <!-- Footer -->
    <footer class="footer">
      Made with ❤️ by
      <a href="https://github.com/imTapan" target="_blank">Tapan</a>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: "Demo API Documentation",
});
</script>

<style scoped>
.documentation {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, sans-serif;
  background: #f9fafb;
  color: #111827;
}

h1 {
  color: #2563eb;
  text-align: center;
  margin-bottom: 2rem;
}

.intro {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 2rem;
  text-align: center;
}

.api-section {
  margin-bottom: 4rem;
}

.api-title {
  color: #1f2937;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.api-description {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}

.features-list li {
  font-size: 1rem;
  color: #6b7280;
}

.section-header {
  color: #1f2937;
  font-size: 1.2rem;
  margin-top: 1.5rem;
}

.base-url,
.example-request {
  background-color: #f3f4f6;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-family: monospace;
  display: block;
  margin: 0.5rem 0 1rem;
}

.parameter-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.parameter-table th,
.parameter-table td {
  border: 1px solid #e5e7eb;
  padding: 0.6rem;
  text-align: left;
  font-size: 1rem;
}

.example-response {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}

.footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.95rem;
  text-align: center;
  color: #6b7280;
}

.footer a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
}
</style>
