# GitHub Integration Setup

This portfolio automatically fetches and displays your GitHub repositories in the projects section.

## 🚀 Quick Setup

### 1. Update Your GitHub Username

Edit `src/config/github.ts` and replace `'your-github-username'` with your actual GitHub username:

```typescript
export const githubConfig = {
  username: 'your-actual-github-username', // Replace this!
  // ... other settings
};
```

### 2. Customize Display Options

You can customize how your repositories are displayed:

```typescript
export const githubConfig = {
  username: 'your-github-username',
  maxRepos: 6,           // Number of repos to show
  excludeForks: true,    // Hide forked repositories
  sortBy: 'stars',       // Sort by: 'stars', 'updated', or 'created'
  showTopics: true,      // Show repository topics/tags
  showStats: true,       // Show stars, forks, etc.
  showLastUpdated: true, // Show last updated date
};
```

## 🎨 Features

### Automatic Repository Display
- **Real-time Data**: Fetches latest repository information from GitHub API
- **Smart Filtering**: Excludes forks and sorts by popularity
- **Rich Information**: Shows descriptions, languages, topics, and statistics

### Visual Elements
- **Language Indicators**: Color-coded programming language badges
- **Repository Stats**: Stars, forks, and last updated date
- **Topics/Tags**: Repository topics displayed as badges
- **Fork Indicators**: Clear labeling for forked repositories

### Interactive Features
- **Direct Links**: "View Code" button links to GitHub repository
- **Demo Links**: "Demo" button for repositories with live demos
- **Hover Effects**: Smooth animations and transitions
- **Responsive Design**: Works perfectly on all devices

## 🔧 Advanced Configuration

### Custom Language Colors

Add or modify language colors in `src/config/github.ts`:

```typescript
languageColors: {
  'JavaScript': 'bg-yellow-400',
  'TypeScript': 'bg-blue-600',
  'Python': 'bg-green-500',
  'Your Language': 'bg-your-color',
}
```

### API Rate Limits

The GitHub API has rate limits:
- **Unauthenticated**: 60 requests per hour
- **Authenticated**: 5,000 requests per hour

For higher limits, you can add authentication:

```typescript
// In GitHubProjects.tsx, modify the fetch call:
const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
  headers: {
    'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
  },
});
```

## 🎯 Best Practices

### Repository Setup
1. **Add Descriptions**: Write clear descriptions for your repositories
2. **Use Topics**: Add relevant topics to help categorize your work
3. **Pin Repositories**: Pin your best work to the top of your GitHub profile
4. **Add Homepage URLs**: Include live demo links where applicable

### Portfolio Optimization
1. **Choose Wisely**: Select repositories that showcase your best work
2. **Keep Updated**: Regularly update your repositories
3. **Documentation**: Ensure your README files are comprehensive
4. **Live Demos**: Deploy projects to showcase your work

## 🚨 Troubleshooting

### Common Issues

**No repositories showing:**
- Check your GitHub username is correct
- Ensure repositories are public
- Verify GitHub API is accessible

**Rate limit exceeded:**
- Wait for the rate limit to reset
- Consider adding GitHub authentication
- Reduce the number of repositories displayed

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check for any console errors
- Verify all dependencies are installed

### Error Messages

- **"Failed to fetch repositories"**: Check internet connection and GitHub API status
- **"No repositories found"**: Verify username and repository visibility
- **"GitHub API error: 404"**: Username doesn't exist or is private

## 📝 Example Configuration

Here's a complete example configuration:

```typescript
export const githubConfig = {
  username: 'johndoe',
  maxRepos: 8,
  excludeForks: false,
  sortBy: 'updated',
  showTopics: true,
  showStats: true,
  showLastUpdated: true,
  languageColors: {
    'JavaScript': 'bg-yellow-400',
    'TypeScript': 'bg-blue-600',
    'React': 'bg-blue-400',
    'Next.js': 'bg-black',
    'Python': 'bg-green-500',
  }
};
```

## 🔗 Related Files

- `src/components/GitHubProjects.tsx` - Main component
- `src/config/github.ts` - Configuration file
- `src/app/page.tsx` - Integration in main page

---

**Your GitHub repositories will now automatically appear in your portfolio!** 🎉
