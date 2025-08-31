'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Github, Star, GitBranch, Calendar } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

interface GitHubProjectsProps {
  username: string;
  maxRepos?: number;
  excludeForks?: boolean;
}

export default function GitHubProjects({ 
  username, 
  maxRepos = 6, 
  excludeForks = true 
}: GitHubProjectsProps) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data: GitHubRepo[] = await response.json();
        
        // Filter and sort repositories
        const filteredRepos = data
          .filter(repo => !excludeForks || !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, maxRepos);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, maxRepos, excludeForks]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-400',
      'TypeScript': 'bg-blue-600',
      'Python': 'bg-green-500',
      'Java': 'bg-red-500',
      'C++': 'bg-pink-500',
      'C#': 'bg-purple-500',
      'PHP': 'bg-indigo-500',
      'Ruby': 'bg-red-400',
      'Go': 'bg-cyan-500',
      'Rust': 'bg-orange-500',
      'Swift': 'bg-orange-400',
      'Kotlin': 'bg-purple-400',
      'HTML': 'bg-orange-600',
      'CSS': 'bg-blue-500',
      'SCSS': 'bg-pink-400',
      'Vue': 'bg-green-400',
      'React': 'bg-blue-400',
      'Next.js': 'bg-black',
    };

    return colors[language || ''] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
                         className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <Github className="h-12 w-12 mx-auto mb-4" />
          <p className="text-lg font-semibold">Failed to load projects</p>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
        <p className="text-gray-500">
          Please check your GitHub username or try again later.
        </p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-12">
        <Github className="h-12 w-12 mx-auto mb-4 text-gray-400" />
        <p className="text-lg font-semibold text-gray-600">No repositories found</p>
        <p className="text-gray-500">
          No public repositories found for @{username}
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
                     className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 overflow-hidden group hover:-translate-y-2"
        >
          <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <Github className="h-16 w-16 text-gray-300 group-hover:text-gray-400 transition-colors" />
          </div>
          
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-black truncate flex-1">
                {repo.name}
              </h3>
              {repo.fork && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-2">
                  Fork
                </span>
              )}
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-2">
              {repo.description || 'No description available'}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {repo.language && (
                <div className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                  <span className="text-sm text-gray-600">{repo.language}</span>
                </div>
              )}
              {repo.topics.slice(0, 2).map((topic) => (
                <span key={topic} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                  {topic}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitBranch className="h-4 w-4" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(repo.updated_at)}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-black text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 text-center text-sm"
              >
                View Code
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-black text-black rounded-lg font-medium transition-all duration-300 hover:bg-black hover:text-white text-sm"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
