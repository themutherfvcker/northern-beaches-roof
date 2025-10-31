/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

That's it! Just those 3 lines.

---

## **Also Double-Check `.gitignore`**

Make sure your `.gitignore` file exists separately and contains:
```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
