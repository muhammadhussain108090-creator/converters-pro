export interface PageSeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  h1: string;
  h2: string;
  howToSteps: string[];
  faqs: Array<{ question: string; answer: string }>;
  defaultToolId: string;
  presetOptions?: Record<string, any>;
}

export const SITE_BASE_URL = 'https://convertpro.netlify.app';

export const DEFAULT_SITE_SEO: PageSeoMetadata = {
  title: 'Free Online File Converter – ConvertPro PDF, Image, Audio & Video',
  description: 'ConvertPro is a 100% free, private online file conversion platform. Convert PDF, Word, Excel, Images, Audio, and Video directly in your browser with zero file uploads.',
  keywords: [
    'Free Online File Converter',
    'PDF Converter Online',
    'Image Converter Online',
    'Audio Converter Online',
    'Video Converter Online',
    'Private File Converter',
    'Client-Side File Conversion'
  ],
  canonicalPath: '/',
  h1: 'Free Online File Converter – Privacy-First & Browser-Powered',
  h2: 'Convert PDF, Image, Audio, Video & Documents Directly in Your Browser',
  howToSteps: [
    'Select your converter tool from our directory or search bar.',
    'Upload or drag and drop your file into the secure workspace.',
    'Customize conversion settings, quality presets, or output formats.',
    'Click Convert to process instantly in-browser and download your result.'
  ],
  faqs: [
    {
      question: 'Are my files uploaded to any servers during conversion?',
      answer: 'No. ConvertPro executes all conversions 100% client-side inside your browser using WebAssembly, Canvas, and binary ArrayBuffers. Your files never leave your device.'
    },
    {
      question: 'Is ConvertPro completely free to use?',
      answer: 'Yes, all 21+ PDF, Image, Audio, Video, and Document conversion tools are completely free with no registration or credit card required.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'ConvertPro supports PDF, DOCX, DOC, XLS, CSV, JPG, JPEG, PNG, WEBP, GIF, BMP, MP3, WAV, AAC, FLAC, OGG, M4A, WMA, MP4, MOV, MKV, AVI, and WebM.'
    }
  ],
  defaultToolId: 'merge'
};

export const SEO_PAGES: Record<string, PageSeoMetadata> = {
  // General
  'home': DEFAULT_SITE_SEO,
  'free-online-file-converter': DEFAULT_SITE_SEO,

  // PDF Search Keywords
  'pdf-to-word': {
    title: 'PDF to Word Converter – Convert PDF to Editable Doc Free',
    description: 'Convert PDF documents to editable Microsoft Word files (.doc) online for free. Fast, accurate, 100% private in-browser conversion with zero file uploads.',
    keywords: ['PDF to Word', 'Convert PDF to Word', 'PDF to Word Converter', 'PDF to Doc', 'Editable Word from PDF'],
    canonicalPath: '/pdf-to-word',
    h1: 'PDF to Word Converter',
    h2: 'Extract PDF Content to Editable Word Documents Directly in Your Browser',
    howToSteps: [
      'Upload your PDF document by clicking Select File or dragging it into the workspace.',
      'Review document page count and title metadata.',
      'Click Execute PDF to Word to extract content into an editable Word document (.doc).',
      'Download your Word file and open it seamlessly in Microsoft Word, Google Docs, or Pages.'
    ],
    faqs: [
      {
        question: 'Can I edit the converted Word document in Microsoft Word?',
        answer: 'Yes. The generated .doc document is fully compatible with Microsoft Word, LibreOffice, and Google Docs.'
      },
      {
        question: 'Is my confidential PDF document uploaded to the internet?',
        answer: 'Never. The conversion happens entirely inside your web browser memory. No third party or server ever sees your document.'
      }
    ],
    defaultToolId: 'pdf-to-word'
  },

  'word-to-pdf': {
    title: 'Word to PDF Converter – Convert DOCX to PDF Online Free',
    description: 'Convert Word documents (.docx) to printable PDF format instantly in your browser. Preserve text formatting and structure with zero privacy risk.',
    keywords: ['Word to PDF', 'DOCX to PDF', 'Convert Word to PDF', 'Word to PDF Online', 'Free Word to PDF'],
    canonicalPath: '/word-to-pdf',
    h1: 'Word to PDF Converter',
    h2: 'Turn Word Documents into Standard PDF Pages Securely',
    howToSteps: [
      'Select your Word (.docx) file from your computer or phone.',
      'ConvertPro extracts document structure, headings, and text lines client-side.',
      'Click Execute Word to PDF to assemble a standardized, printable A4 PDF.',
      'Download your polished PDF document immediately.'
    ],
    faqs: [
      {
        question: 'Does Word to PDF preserve formatting and fonts?',
        answer: 'Yes, ConvertPro extracts typography, paragraphs, headers, and pagination to create standard Helvetica PDF pages.'
      },
      {
        question: 'Is there any file size limit for Word conversion?',
        answer: 'You can convert Word files up to 50 MB directly in your browser without throttling.'
      }
    ],
    defaultToolId: 'word-to-pdf'
  },

  'pdf-to-excel': {
    title: 'PDF to Excel Converter – Convert PDF to Spreadsheet Online',
    description: 'Extract tabular data and pages from PDF documents into editable Excel spreadsheets (.xls / .csv). Free, client-side, and private.',
    keywords: ['PDF to Excel', 'Convert PDF to Excel', 'PDF to XLS', 'PDF to Spreadsheet', 'PDF Table to Excel'],
    canonicalPath: '/pdf-to-excel',
    h1: 'PDF to Excel Converter',
    h2: 'Extract PDF Tables & Structured Data into Microsoft Excel Online',
    howToSteps: [
      'Upload your PDF document containing tables, receipts, or data.',
      'ConvertPro scans structural text elements and organizes rows into tabular format.',
      'Click Execute PDF to Excel to generate an XML Spreadsheet (.xls).',
      'Download and open directly in Microsoft Excel, Google Sheets, or LibreOffice Calc.'
    ],
    faqs: [
      {
        question: 'Will the generated spreadsheet open in modern versions of Excel?',
        answer: 'Yes. The output uses the universal XML Spreadsheet (.xls) format which opens directly in all modern versions of Microsoft Excel, Google Sheets, and LibreOffice Calc.'
      },
      {
        question: 'Is this PDF to Excel tool free?',
        answer: 'Yes, 100% free with unlimited conversions and no sign-up needed.'
      }
    ],
    defaultToolId: 'pdf-to-excel'
  },

  'pdf-to-jpg': {
    title: 'PDF to JPG Converter – Convert PDF Pages to Images Online',
    description: 'Convert PDF pages and embedded graphics into high-resolution JPG images. Fast, free, browser-based extraction with zero file uploads.',
    keywords: ['PDF to JPG', 'Convert PDF to JPG', 'PDF to Image', 'PDF to JPEG', 'PDF Pages to JPG'],
    canonicalPath: '/pdf-to-jpg',
    h1: 'PDF to JPG Converter',
    h2: 'High-Resolution PDF Page to JPEG Image Extraction Online',
    howToSteps: [
      'Upload your PDF document.',
      'Select JPEG quality and rendering preferences.',
      'Click Execute PDF to JPG to extract document pages and embedded graphics.',
      'Download individual JPG images or a unified ZIP archive.'
    ],
    faqs: [
      {
        question: 'What quality are the converted JPG images?',
        answer: 'Images are generated at high resolution with 95% JPEG quality for sharp text and vibrant graphics.'
      },
      {
        question: 'Can I convert multi-page PDFs to JPG?',
        answer: 'Yes. Multi-page PDFs are neatly packaged into a downloadable .zip archive containing individual numbered JPG files.'
      }
    ],
    defaultToolId: 'pdf-to-jpg'
  },

  'jpg-to-pdf': {
    title: 'JPG to PDF Converter – Convert Images to PDF Online Free',
    description: 'Combine multiple JPG, PNG, and WebP images into a single professional PDF document. Customize page sizes (A4, Letter), margins, and orientation.',
    keywords: ['JPG to PDF', 'Image to PDF', 'Convert JPG to PDF', 'Photos to PDF', 'Pictures to PDF'],
    canonicalPath: '/jpg-to-pdf',
    h1: 'JPG to PDF Converter',
    h2: 'Merge Multiple Photos & Images into a Clean Multi-Page PDF',
    howToSteps: [
      'Select or drag-and-drop one or multiple JPG or PNG image files.',
      'Choose page size (Fit to Image, A4, or US Letter) and page orientation.',
      'Set custom margins (None, Small, or Standard).',
      'Click Execute Images to PDF to create your unified multi-page PDF document.'
    ],
    faqs: [
      {
        question: 'Can I convert multiple images into one PDF?',
        answer: 'Yes! You can upload up to 20 images at once and combine them into a single ordered PDF file.'
      },
      {
        question: 'Can I change the order of images before converting?',
        answer: 'Yes, images are processed in the order you select them, and you can remove or re-add images prior to converting.'
      }
    ],
    defaultToolId: 'images-pdf'
  },

  'merge-pdf': {
    title: 'Merge PDF Online – Combine Multiple PDF Files Free',
    description: 'Merge multiple PDF files into a single document in seconds. Drag and drop to reorder pages. 100% free and private browser processing.',
    keywords: ['Merge PDF', 'Combine PDF', 'PDF Combiner', 'Merge PDF Online', 'Join PDF Files'],
    canonicalPath: '/merge-pdf',
    h1: 'Merge PDF Files Online',
    h2: 'Combine Multiple PDF Documents into One Unified File',
    howToSteps: [
      'Upload 2 or more PDF files you want to combine.',
      'Review the order of your documents.',
      'Click Execute Merge PDF to combine all pages into one document.',
      'Download your merged PDF file instantly.'
    ],
    faqs: [
      {
        question: 'Is there a limit on how many PDFs I can merge?',
        answer: 'You can merge up to 20 PDF files simultaneously with unlimited page counts.'
      }
    ],
    defaultToolId: 'merge'
  },

  'split-pdf': {
    title: 'Split PDF Online – Extract Pages or Separate PDF Files Free',
    description: 'Split PDF files into individual pages or custom page ranges online. Download as individual PDFs or a single ZIP archive.',
    keywords: ['Split PDF', 'Separate PDF', 'Split PDF Pages', 'PDF Splitter Online', 'Cut PDF Pages'],
    canonicalPath: '/split-pdf',
    h1: 'Split PDF Files Online',
    h2: 'Extract Page Ranges or Separate All Pages into a Zip Archive',
    howToSteps: [
      'Upload your PDF file.',
      'Select your split mode: Specific Page Range (e.g. 1-3, 5), All Pages into ZIP, or Every N Pages.',
      'Click Execute Split PDF to generate your split files.',
      'Download your targeted PDF or ZIP archive.'
    ],
    faqs: [
      {
        question: 'How do I specify custom page ranges?',
        answer: 'Enter single page numbers or ranges separated by commas, such as "1-3, 5, 8-10".'
      }
    ],
    defaultToolId: 'split'
  },

  'rotate-pdf': {
    title: 'Rotate PDF Online – Rotate PDF Pages Permanently Free',
    description: 'Rotate upside-down or sideways PDF pages by 90°, 180°, or 270°. Choose all pages, odd, even, or custom ranges.',
    keywords: ['Rotate PDF', 'Turn PDF', 'Rotate PDF Pages', 'Fix Upside Down PDF', 'PDF Rotator'],
    canonicalPath: '/rotate-pdf',
    h1: 'Rotate PDF Pages Online',
    h2: 'Permanently Rotate Orientation for All or Specific PDF Pages',
    howToSteps: [
      'Upload the PDF file that needs rotation.',
      'Choose rotation angle: 90° Clockwise, 180° Inverted, or 270° Counter-Clockwise.',
      'Select which pages to rotate: All Pages, Odd Pages, Even Pages, or Custom Pages.',
      'Click Execute Rotate PDF and download the corrected document.'
    ],
    faqs: [
      {
        question: 'Is the rotation permanently saved in the PDF?',
        answer: 'Yes, the page rotation metadata is permanently updated so it displays correctly in Adobe Acrobat, Chrome, and any PDF viewer.'
      }
    ],
    defaultToolId: 'rotate'
  },

  // Image Search Keywords
  'jpg-to-png': {
    title: 'JPG to PNG Converter – Convert JPG to Lossless PNG Online',
    description: 'Convert JPG photos into lossless PNG images with full transparency support and uncompressed clarity.',
    keywords: ['JPG to PNG', 'JPEG to PNG', 'Convert JPG to PNG', 'JPG to PNG Online', 'Lossless PNG Converter'],
    canonicalPath: '/jpg-to-png',
    h1: 'JPG to PNG Converter',
    h2: 'Convert JPEG to High-Quality PNG Graphics in Your Browser',
    howToSteps: [
      'Upload your JPG photo or image.',
      'ConvertPro loads the image into a high-fidelity HTML5 Canvas.',
      'Click Execute Image to PNG to encode lossless PNG pixels.',
      'Download your crisp PNG file.'
    ],
    faqs: [
      {
        question: 'Does converting JPG to PNG improve image quality?',
        answer: 'It prevents any further compression artifacts from lossy re-encoding and preserves maximum fidelity for future edits.'
      }
    ],
    defaultToolId: 'image-to-png'
  },

  'png-to-jpg': {
    title: 'PNG to JPG Converter – Convert PNG to JPEG Online Free',
    description: 'Convert PNG graphics and screenshots to universal high-quality JPG format with customizable background fills.',
    keywords: ['PNG to JPG', 'Convert PNG to JPG', 'PNG to JPEG', 'PNG to JPG Online', 'Image to JPG'],
    canonicalPath: '/png-to-jpg',
    h1: 'PNG to JPG Converter',
    h2: 'Transform PNG Images to Universal Compact JPG Files Online',
    howToSteps: [
      'Upload your PNG graphics or screenshot.',
      'Any transparent areas are cleanly composited with a clean white background.',
      'Click Execute Image to JPG to encode compact JPEG format.',
      'Download your ready-to-share JPG image.'
    ],
    faqs: [
      {
        question: 'What happens to transparent pixels when converting PNG to JPG?',
        answer: 'ConvertPro composites transparent pixels against a clean white background so your image never has dark or missing areas.'
      }
    ],
    defaultToolId: 'image-to-jpg'
  },

  'webp-to-jpg': {
    title: 'WEBP to JPG Converter – Convert WebP to JPG Online Free',
    description: 'Convert Google WebP image files to universal JPG format online. Fast, high fidelity, 100% private in-browser tool.',
    keywords: ['WEBP to JPG', 'Convert WEBP to JPG', 'WebP to JPEG', 'WebP Converter', 'Open WebP as JPG'],
    canonicalPath: '/webp-to-jpg',
    h1: 'WEBP to JPG Converter',
    h2: 'Convert Next-Gen WebP Graphics into Universal JPG Format',
    howToSteps: [
      'Upload your .webp image file.',
      'ConvertPro decodes the WebP bitmap directly in browser memory.',
      'Click Execute Image to JPG.',
      'Download your universal JPG image compatible with all legacy photo viewers.'
    ],
    faqs: [
      {
        question: 'Why convert WebP to JPG?',
        answer: 'Many older software programs, social media platforms, and photo printers do not support WebP. JPG ensures 100% device compatibility.'
      }
    ],
    defaultToolId: 'image-to-jpg'
  },

  'jpg-to-webp': {
    title: 'JPG to WEBP Converter – Compress Images to Next-Gen WebP',
    description: 'Convert JPG and PNG images into modern Google WebP format for dramatically reduced file sizes and faster web loading.',
    keywords: ['JPG to WEBP', 'PNG to WEBP', 'Convert to WebP', 'Image to WebP', 'WebP Compression'],
    canonicalPath: '/jpg-to-webp',
    h1: 'JPG to WEBP Converter',
    h2: 'Shrink Image Sizes with High-Fidelity WebP Compression',
    howToSteps: [
      'Upload your JPG or PNG image.',
      'ConvertPro applies Google WebP compression algorithms in-browser.',
      'Click Execute Image to WebP.',
      'Download your compact WebP image ready for fast web publishing.'
    ],
    faqs: [
      {
        question: 'How much smaller is WebP compared to JPG?',
        answer: 'WebP images are typically 25% to 35% smaller than comparable JPG images at identical visual quality.'
      }
    ],
    defaultToolId: 'image-to-webp'
  },

  'compress-image': {
    title: 'Compress Image Online – Reduce Image File Size Free',
    description: 'Reduce photo and graphic file sizes up to 80% with visual quality slider. Real-time before and after size calculation.',
    keywords: ['Compress Image', 'Image Compressor', 'Reduce Image Size', 'Shrink Photo', 'Optimize Image'],
    canonicalPath: '/compress-image',
    h1: 'Compress Images Online',
    h2: 'Reduce Image File Sizes While Preserving Visual Quality',
    howToSteps: [
      'Upload any JPG, PNG, or WebP photo.',
      'Adjust the quality slider (from 10% to 95%) or limit max pixel dimensions.',
      'Click Execute Compress Image to see real-time byte savings.',
      'Download your optimized lightweight image.'
    ],
    faqs: [
      {
        question: 'Will compressing my image make it blurry?',
        answer: 'Setting quality between 75% and 85% delivers massive file size reductions without any visible loss of sharpness.'
      }
    ],
    defaultToolId: 'compress-image'
  },

  'resize-image': {
    title: 'Resize Image Online – Scale Image Dimensions by Pixels',
    description: 'Resize image width and height with aspect ratio lock or choose standard presets (1080p, HD, Square, Avatar).',
    keywords: ['Resize Image', 'Image Resizer', 'Scale Photo', 'Change Image Dimensions', 'Resize Picture Online'],
    canonicalPath: '/resize-image',
    h1: 'Resize Image Dimensions Online',
    h2: 'Scale Width & Height with Aspect Ratio Lock or Presets',
    howToSteps: [
      'Upload your image.',
      'Enter custom width and height in pixels, or click a standard preset (Full HD, HD, Square, Avatar).',
      'Toggle aspect ratio lock to prevent image distortion.',
      'Click Execute Resize Image and download your scaled image.'
    ],
    faqs: [
      {
        question: 'Does ConvertPro preserve original aspect ratios?',
        answer: 'Yes, aspect ratio lock is enabled by default so your photos never appear stretched or squished.'
      }
    ],
    defaultToolId: 'resize-image'
  },

  // Audio Search Keywords
  'audio-converter': {
    title: 'Audio Converter Online – Convert MP3, WAV, AAC, FLAC Free',
    description: 'Free online audio converter. Transcode between MP3, WAV, AAC, FLAC, OGG, M4A, and WMA with custom bitrate and sample rate controls.',
    keywords: ['Audio Converter', 'Audio Converter Online', 'Convert Audio', 'Free Audio Converter', 'Sound Converter'],
    canonicalPath: '/audio-converter',
    h1: 'Audio Converter Online',
    h2: 'Transcode Audio Files to Any Format Directly in Your Browser',
    howToSteps: [
      'Upload any audio recording, song, or sound effect.',
      'Choose your target audio format (MP3, WAV, AAC, FLAC, OGG, M4A, WMA).',
      'Select bitrate (up to 320 kbps), sample rate (44.1 kHz, 48 kHz), and audio channels.',
      'Click Execute Audio Converter to transcode and download your converted audio.'
    ],
    faqs: [
      {
        question: 'What audio formats are supported?',
        answer: 'We support MP3, WAV (lossless PCM), AAC, FLAC, OGG, M4A, WMA, OPUS, and AIFF.'
      },
      {
        question: 'Is conversion handled on a server or locally?',
        answer: 'Conversions are performed client-side using WebAssembly FFmpeg and the Web Audio API without uploading your files.'
      }
    ],
    defaultToolId: 'audio-converter'
  },

  'mp3-to-wav': {
    title: 'MP3 to WAV Converter – Convert MP3 to Lossless WAV Online',
    description: 'Convert compressed MP3 audio files into uncompressed 16-bit PCM WAV audio. Studio quality, instant in-browser encoding.',
    keywords: ['MP3 to WAV', 'Convert MP3 to WAV', 'MP3 to WAV Converter', 'MP3 to WAV Online', 'Uncompressed Audio'],
    canonicalPath: '/mp3-to-wav',
    h1: 'MP3 to WAV Converter',
    h2: 'Convert Compressed MP3 into Studio 16-Bit PCM WAV Audio',
    howToSteps: [
      'Upload your MP3 file.',
      'The target format is pre-configured to WAV lossless PCM.',
      'Click Execute Audio Converter for instant client-side decoding and WAV generation.',
      'Download your uncompressed studio WAV file.'
    ],
    faqs: [
      {
        question: 'Why convert MP3 to WAV?',
        answer: 'WAV is an uncompressed PCM format ideal for audio editing in DAWs (Logic, Ableton, Pro Tools) and DJ controllers without decompression lag.'
      }
    ],
    defaultToolId: 'audio-converter',
    presetOptions: { audioFormat: 'wav' }
  },

  'wav-to-mp3': {
    title: 'WAV to MP3 Converter – Compress WAV to MP3 Online Free',
    description: 'Convert large WAV files into compact universal MP3 audio with 128k, 192k, 256k, or 320k bitrate options.',
    keywords: ['WAV to MP3', 'Convert WAV to MP3', 'WAV to MP3 Converter', 'Compress WAV', 'WAV to MP3 Online'],
    canonicalPath: '/wav-to-mp3',
    h1: 'WAV to MP3 Converter',
    h2: 'Compress Lossless WAV Audio into High-Quality MP3 Files',
    howToSteps: [
      'Upload your WAV audio file.',
      'Select desired MP3 bitrate (up to 320 kbps studio quality).',
      'Click Execute Audio Converter.',
      'Download your lightweight MP3 file ready for sharing and streaming.'
    ],
    faqs: [
      {
        question: 'Which bitrate should I choose for MP3?',
        answer: '320 kbps offers the highest audio fidelity; 192 kbps is standard CD quality and provides a great balance between size and clarity.'
      }
    ],
    defaultToolId: 'audio-converter',
    presetOptions: { audioFormat: 'mp3' }
  },

  'audio-to-mp3': {
    title: 'Audio to MP3 Converter – Convert Any Audio Format to MP3',
    description: 'Convert any audio track (WAV, AAC, FLAC, OGG, M4A, WMA) to universal MP3 format in seconds with zero uploads.',
    keywords: ['Audio to MP3', 'Convert Audio to MP3', 'Song to MP3', 'Music to MP3', 'Audio to MP3 Online'],
    canonicalPath: '/audio-to-mp3',
    h1: 'Audio to MP3 Converter',
    h2: 'Convert Any Audio Recording or Track to Universal MP3 Format',
    howToSteps: [
      'Upload any audio file in AAC, FLAC, M4A, OGG, WAV, or WMA format.',
      'Select your target bitrate preset.',
      'Click Execute Audio Converter.',
      'Download your universal MP3 audio.'
    ],
    faqs: [
      {
        question: 'Can I play the converted MP3 on any device?',
        answer: 'Yes, MP3 is supported on virtually every smartphone, car stereo, computer, and media player in the world.'
      }
    ],
    defaultToolId: 'audio-converter',
    presetOptions: { audioFormat: 'mp3' }
  },

  'm4a-to-mp3': {
    title: 'M4A to MP3 Converter – Convert Apple M4A Audio to MP3',
    description: 'Convert Apple voice memos and iTunes M4A audio files to universal MP3 format online for free.',
    keywords: ['M4A to MP3', 'Convert M4A to MP3', 'Apple Audio to MP3', 'Voice Memo to MP3', 'M4A to MP3 Online'],
    canonicalPath: '/m4a-to-mp3',
    h1: 'M4A to MP3 Converter',
    h2: 'Transform Apple M4A Audio into Universal MP3 Files',
    howToSteps: [
      'Upload your Apple voice memo or .m4a recording.',
      'Choose your preferred MP3 bitrate.',
      'Click Execute Audio Converter to transcode directly in your browser.',
      'Download your converted MP3 file.'
    ],
    faqs: [
      {
        question: 'Can I convert iPhone voice memos (.m4a) with this tool?',
        answer: 'Yes! Simply share or transfer your iPhone voice memo to your computer or phone browser and upload it directly.'
      }
    ],
    defaultToolId: 'audio-converter',
    presetOptions: { audioFormat: 'mp3' }
  },

  // Video Search Keywords
  'video-converter': {
    title: 'Video Converter Online – Convert MP4, MOV, MKV, AVI, WebM',
    description: 'Free in-browser video converter powered by WebAssembly. Transcode MP4, MOV, MKV, AVI, and WebM with resolution and quality presets.',
    keywords: ['Video Converter', 'Video Converter Online', 'Convert Video', 'Free Video Converter', 'Movie Converter'],
    canonicalPath: '/video-converter',
    h1: 'Video Converter Online',
    h2: 'Convert Videos Across All Popular Container Formats In-Browser',
    howToSteps: [
      'Upload your video file (MP4, MOV, MKV, AVI, WebM).',
      'Choose your desired container format.',
      'Select encoding quality and resolution scaling (1080p, 720p, 480p, Original).',
      'Click Execute Video Converter to process client-side and download your video.'
    ],
    faqs: [
      {
        question: 'Does video conversion happen securely without uploading?',
        answer: 'Yes. Thanks to WebAssembly FFmpeg, video transcoding executes locally on your CPU/GPU without transmitting your clips to any external server.'
      }
    ],
    defaultToolId: 'video-converter'
  },

  'video-to-audio': {
    title: 'Video to Audio Converter – Extract Audio from Video Online',
    description: 'Extract sound and audio tracks from MP4, MOV, MKV, AVI, and WebM video files into MP3, WAV, AAC, OGG, or M4A audio.',
    keywords: ['Video to Audio', 'Extract Audio from Video', 'Video to Sound', 'Video Audio Extractor', 'Convert Video to Audio'],
    canonicalPath: '/video-to-audio',
    h1: 'Video to Audio Converter',
    h2: 'Extract High-Fidelity Audio Tracks from Any Video File',
    howToSteps: [
      'Upload your video file (MP4, MOV, MKV, AVI, or WebM).',
      'Choose target audio format (MP3, WAV, AAC, OGG, or M4A).',
      'Select desired audio bitrate.',
      'Click Execute Video to Audio to extract your audio track.'
    ],
    faqs: [
      {
        question: 'Can I extract music from a long video?',
        answer: 'Yes. Audio stream extraction operates rapidly in-browser without having to re-encode the video track.'
      }
    ],
    defaultToolId: 'video-to-audio'
  },

  'mp4-to-mp3': {
    title: 'MP4 to MP3 Converter – Extract MP3 Audio from MP4 Video',
    description: 'Extract audio from MP4 video files into high-quality MP3 sound files online. Fast, free, and completely private.',
    keywords: ['MP4 to MP3', 'Convert MP4 to MP3', 'MP4 to MP3 Converter', 'Extract MP3 from MP4', 'MP4 to Audio'],
    canonicalPath: '/mp4-to-mp3',
    h1: 'MP4 to MP3 Converter',
    h2: 'Extract Universal MP3 Audio from MP4 Videos Online Free',
    howToSteps: [
      'Upload your MP4 video.',
      'Target audio format is set to MP3 with high-quality bitrate.',
      'Click Execute Video to Audio.',
      'Download your extracted MP3 soundtrack.'
    ],
    faqs: [
      {
        question: 'What bitrate is used for the extracted MP3?',
        answer: 'You can choose between 128 kbps, 192 kbps, 256 kbps, and 320 kbps studio quality.'
      }
    ],
    defaultToolId: 'video-to-audio',
    presetOptions: { extractFormat: 'mp3' }
  },

  'video-to-mp3': {
    title: 'Video to MP3 Converter – Convert Any Video to MP3 Online',
    description: 'Extract and convert soundtracks from MP4, MOV, MKV, AVI, and WebM video clips into MP3 audio files for free.',
    keywords: ['Video to MP3', 'Convert Video to MP3', 'Movie to MP3', 'Extract Music from Video', 'Video to MP3 Free'],
    canonicalPath: '/video-to-mp3',
    h1: 'Video to MP3 Converter',
    h2: 'Convert Any Video Clip into High-Quality MP3 Audio',
    howToSteps: [
      'Upload any video clip in MP4, MOV, MKV, AVI, or WebM format.',
      'Select MP3 target format.',
      'Click Execute Video to Audio.',
      'Download your crisp MP3 file.'
    ],
    faqs: [
      {
        question: 'Is my video kept private?',
        answer: 'Yes. Zero video bytes are uploaded. The audio track is isolated and encoded directly in your browser.'
      }
    ],
    defaultToolId: 'video-to-audio',
    presetOptions: { extractFormat: 'mp3' }
  },

  'mov-to-mp4': {
    title: 'MOV to MP4 Converter – Convert QuickTime MOV to MP4 Online',
    description: 'Convert Apple QuickTime MOV videos to universal H.264 MP4 format for compatibility on all devices and web players.',
    keywords: ['MOV to MP4', 'Convert MOV to MP4', 'QuickTime to MP4', 'Apple Video to MP4', 'MOV to MP4 Online'],
    canonicalPath: '/mov-to-mp4',
    h1: 'MOV to MP4 Converter',
    h2: 'Convert Apple QuickTime MOV Videos to Universal MP4 Format',
    howToSteps: [
      'Upload your QuickTime (.mov) video clip.',
      'Target format is pre-selected as universal MP4.',
      'Select resolution scaling if you wish to downscale (1080p, 720p).',
      'Click Execute Video Converter to generate a cross-platform MP4 file.'
    ],
    faqs: [
      {
        question: 'Why convert MOV to MP4?',
        answer: 'MP4 with H.264 video and AAC audio is universally playable on Windows, Android, Smart TVs, and social media platforms.'
      }
    ],
    defaultToolId: 'video-converter',
    presetOptions: { videoFormat: 'mp4' }
  },

  'mkv-to-mp4': {
    title: 'MKV to MP4 Converter – Convert Matroska MKV to MP4 Online',
    description: 'Convert MKV video files into standard MP4 videos with high-definition video encoding and audio synchronization.',
    keywords: ['MKV to MP4', 'Convert MKV to MP4', 'MKV Converter', 'Matroska to MP4', 'MKV to MP4 Free'],
    canonicalPath: '/mkv-to-mp4',
    h1: 'MKV to MP4 Converter',
    h2: 'Transcode MKV Matroska Videos into Standard MP4 Container',
    howToSteps: [
      'Upload your .mkv video file.',
      'Select MP4 container format and quality profile.',
      'Click Execute Video Converter.',
      'Download your universally compatible MP4 video.'
    ],
    faqs: [
      {
        question: 'Does MKV to MP4 keep high definition quality?',
        answer: 'Yes, select High Definition quality preset for maximum clarity and bitstream preservation.'
      }
    ],
    defaultToolId: 'video-converter',
    presetOptions: { videoFormat: 'mp4' }
  }
};

export const getSeoMetadata = (keyOrPath: string): PageSeoMetadata => {
  const clean = keyOrPath.replace(/^[/#]+/, '').toLowerCase();
  if (SEO_PAGES[clean]) {
    return SEO_PAGES[clean];
  }
  // Try finding matching tool ID
  const match = Object.values(SEO_PAGES).find(p => p.defaultToolId === clean || p.canonicalPath === `/${clean}`);
  if (match) return match;

  return DEFAULT_SITE_SEO;
};
