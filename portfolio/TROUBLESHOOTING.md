# Troubleshooting Guide

## 🚨 **Common Issues & Solutions**

### **1. Development Server Not Starting**

**Problem**: `npm run dev` fails or shows errors

**Solutions**:
```bash
# Clear Next.js cache
Remove-Item -Recurse -Force .next

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install

# Start development server
npm run dev
```

### **2. GitHub Integration Not Working**

**Problem**: GitHub repositories not loading

**Solutions**:
1. Check `src/config/github.ts`:
   ```typescript
   export const githubConfig = {
     username: 'your-actual-github-username', // Make sure this is correct
     maxRepos: 6, // Make sure this has a value
     excludeForks: true,
   };
   ```

2. Verify GitHub username exists and has public repositories

3. Check browser console for API errors

### **3. Interactive Background Not Showing**

**Problem**: Background animations not visible

**Solutions**:
1. Check if `InteractiveBackground` component is imported:
   ```typescript
   import InteractiveBackground from '@/components/InteractiveBackground';
   ```

2. Verify component is rendered in page:
   ```typescript
   <InteractiveBackground />
   ```

3. Check browser console for JavaScript errors

### **4. CSS Styles Not Loading**

**Problem**: Tailwind classes not working

**Solutions**:
1. Verify `tailwind.config.ts` exists and is correct
2. Check `globals.css` has proper imports:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. Restart development server

### **5. Framer Motion Not Working**

**Problem**: Animations not playing

**Solutions**:
1. Verify `framer-motion` is installed:
   ```bash
   npm install framer-motion
   ```

2. Check component has `'use client'` directive:
   ```typescript
   'use client';
   import { motion } from 'framer-motion';
   ```

### **6. TypeScript Errors**

**Problem**: TypeScript compilation errors

**Solutions**:
1. Check for syntax errors in files
2. Verify all imports are correct
3. Run TypeScript check:
   ```bash
   npx tsc --noEmit
   ```

## 🔍 **Debugging Steps**

### **Step 1: Check Browser Console**
1. Open browser developer tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

### **Step 2: Check Terminal Output**
1. Look for compilation errors
2. Check for missing dependencies
3. Verify file paths are correct

### **Step 3: Test Individual Components**
1. Create simple test components
2. Test each feature separately
3. Isolate the problematic code

### **Step 4: Verify File Structure**
```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── InteractiveBackground.tsx
│   │   └── GitHubProjects.tsx
│   └── config/
│       ├── github.ts
│       └── background.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── package.json
```

## 🚀 **Quick Fix Commands**

```bash
# Stop all Node processes
Stop-Process -Name "node" -Force

# Clear cache and restart
Remove-Item -Recurse -Force .next
npm run dev

# Check for issues
npx tsc --noEmit
npm run lint
```

## 📞 **Still Having Issues?**

If you're still experiencing problems:

1. **Check the browser console** for specific error messages
2. **Share the error details** so I can help you fix them
3. **Try the test component** I created to isolate the issue

The most common issues are:
- Syntax errors in configuration files
- Missing dependencies
- Incorrect file paths
- Multiple development servers running

Let me know what specific error messages you're seeing and I'll help you resolve them! 🛠️
