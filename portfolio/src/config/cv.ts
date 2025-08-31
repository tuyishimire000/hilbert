export const cvConfig = {
  // CV file path (relative to public folder)
  filePath: '/cv.pdf',
  
  // Default filename for download
  fileName: 'Hilbert-TUYISHIMIRE-CV.pdf',
  
  // CV file type (for content-type header)
  fileType: 'application/pdf',
  
  // CV file size in bytes (optional, for display)
  fileSize: '2.1 MB',
  
  // CV last updated date
  lastUpdated: '2024-01-15',
  
  // CV version
  version: '1.0',
  
  // Available formats
  formats: [
    {
      type: 'pdf',
      label: 'PDF',
      url: '/cv.pdf',
      icon: '📄'
    },
    {
      type: 'docx',
      label: 'Word',
      url: '/cv.docx',
      icon: '📝'
    }
  ],
  
  // CV sections to highlight
  sections: [
    'Professional Experience',
    'Education',
    'Skills',
    'Projects',
    'Certifications'
  ],
  
  // Contact information (for CV preview)
  contact: {
    name: 'Hilbert TUYISHIMIRE',
    email: 'tuyishimirehilbert2@gmail.com',
    phone: '+250790100971',
    location: 'Rwanda',
    linkedin: 'linkedin.com/in/yourprofile',
    github: 'github.com/tuyishimire000'
  }
};
