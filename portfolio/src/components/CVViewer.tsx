'use client';

import { useState, useEffect } from 'react';
import { FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CVViewerProps {
  cvUrl?: string;
  fileName?: string;
}

export default function CVViewer({ 
  cvUrl = '/cv.pdf', 
  fileName = 'Hilbert-TUYISHIMIRE-CV.pdf' 
}: CVViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCV = () => {
    setIsOpen(true);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Scroll to the viewer smoothly
    setTimeout(() => {
      const viewer = document.getElementById('cv-viewer');
      if (viewer) {
        viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCloseCV = () => {
    setIsOpen(false);
    
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {/* View CV Button */}
      <button
        onClick={handleOpenCV}
        className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white hover:scale-105 flex items-center justify-center"
      >
        <FileText className="mr-2 h-5 w-5" />
        View My CV
      </button>

      {/* CV Viewer Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="cv-viewer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
                         className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={handleCloseCV}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
                             className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] relative overflow-hidden z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-yellow-600" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {fileName}
                  </h2>
                </div>
                <button
                  onClick={handleCloseCV}
                  className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
                  aria-label="Close CV viewer"
                >
                  <X className="h-6 w-6 text-gray-600 group-hover:text-gray-800" />
                </button>
              </div>

              {/* PDF Viewer */}
              <div className="h-full bg-gray-100">
                <iframe
                  src={`${cvUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full border-0"
                  title="CV Viewer"
                  allowFullScreen
                />
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>📄 PDF Document</span>
                    <span>•</span>
                    <span>Click outside to close</span>
                  </div>
                  <button
                    onClick={handleCloseCV}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
