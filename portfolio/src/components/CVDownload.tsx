'use client';

import { useState } from 'react';
import { Download, CheckCircle, AlertCircle } from 'lucide-react';

interface CVDownloadProps {
  cvUrl?: string;
  fileName?: string;
}

export default function CVDownload({ 
  cvUrl = '/cv.pdf', 
  fileName = 'Your-Name-CV.pdf' 
}: CVDownloadProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      setDownloadStatus('idle');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = fileName;
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate download time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setDownloadStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  const getButtonContent = () => {
    if (isDownloading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Downloading...
        </>
      );
    }

    if (downloadStatus === 'success') {
      return (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          Downloaded!
        </>
      );
    }

    if (downloadStatus === 'error') {
      return (
        <>
          <AlertCircle className="mr-2 h-4 w-4" />
          Download Failed
        </>
      );
    }

    return (
      <>
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </>
    );
  };

  const getButtonClasses = () => {
    const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";
    
    if (downloadStatus === 'success') {
      return `${baseClasses} bg-green-600 text-white hover:bg-green-700 hover:scale-105`;
    }
    
    if (downloadStatus === 'error') {
      return `${baseClasses} bg-red-600 text-white hover:bg-red-700 hover:scale-105`;
    }
    
    return `${baseClasses} bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105`;
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={getButtonClasses()}
    >
      {getButtonContent()}
    </button>
  );
}
