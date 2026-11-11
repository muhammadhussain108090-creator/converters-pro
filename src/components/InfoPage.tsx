import React from 'react';
import { Mail, ShieldCheck, FileText, Info, ArrowLeft } from 'lucide-react';

export type InfoPageType = 'about' | 'contact' | 'privacy-policy' | 'terms';

interface InfoPageProps {
  page: InfoPageType;
  onBack: () => void;
}

const email = 'muhammadhusssain1090@gmail.com';

const pageContent = {
  about: {
    icon: Info,
    title: 'About Converter Pro',
    intro: 'Simple, accessible file conversion tools for everyday use.',
    sections: [
      {
        heading: 'What is Converter Pro?',
        text: 'Converter Pro is an online file conversion platform offering tools for PDF, documents, images, audio, and video. Our goal is to make common file tasks easier through a straightforward website.'
      },
      {
        heading: 'Our tools',
        text: 'Visitors can use tools to merge and split PDFs, convert documents, resize and convert images, and work with audio and video formats.'
      },
      {
        heading: 'Our approach',
        text: 'We aim to provide a simple user experience, clear information, and useful browser-based tools. Conversion methods and supported formats may vary by tool.'
      }
    ]
  },
  contact: {
    icon: Mail,
    title: 'Contact Us',
    intro: 'We would love to hear from you.',
    sections: [
      {
        heading: 'Get in touch',
        text: 'If you have questions, feedback, suggestions, or experience a problem with Converter Pro, contact us by email.'
      },
      {
        heading: 'What can you contact us about?',
        text: 'You can contact us about conversion problems, technical issues, suggestions for new tools, or general questions about the website.'
      },
      {
        heading: 'Response time',
        text: 'We aim to review messages and respond as soon as reasonably possible.'
      }
    ]
  },
  'privacy-policy': {
    icon: ShieldCheck,
    title: 'Privacy Policy',
    intro: 'This policy explains how Converter Pro handles information when you use our website.',
    sections: [
      {
        heading: 'Information and Firebase Authentication',
        text: 'Converter Pro uses Firebase Authentication to provide account sign-in and authentication features. When you choose to sign in or create an account, information required for authentication may be processed by Firebase, such as your email address and authentication details. Please also review Google Firebase privacy information.'
      },
      {
        heading: 'File processing',
        text: 'Some Converter Pro tools process files directly in your browser. Processing methods can vary by tool. Do not assume that every tool handles files in exactly the same way. Avoid uploading sensitive or confidential files unless you are comfortable with the tool and its operation.'
      },
      {
        heading: 'Cookies and local storage',
        text: 'The website may use browser local storage for functionality such as remembering your display theme. Firebase Authentication and other integrated services may use technologies necessary to provide their features.'
      },
      {
        heading: 'Advertising',
        text: 'If advertising services such as Google AdSense are introduced, those services may use cookies or similar technologies to serve and measure advertisements, subject to applicable settings and policies. We will update this policy when advertising is enabled.'
      },
      {
        heading: 'Third-party services',
        text: 'The website uses Firebase Authentication. These services are provided by third parties and their own privacy policies may apply.'
      },
      {
        heading: 'Contact',
        text: `For privacy questions, contact us at ${email}.`
      }
    ]
  },
  terms: {
    icon: FileText,
    title: 'Terms and Conditions',
    intro: 'By using Converter Pro, you agree to these terms.',
    sections: [
      {
        heading: 'Use of the website',
        text: 'You may use Converter Pro for lawful personal or business purposes. You must not use the website to violate laws, infringe the rights of others, or interfere with the website.'
      },
      {
        heading: 'Your files',
        text: 'You are responsible for the files you choose to process and for ensuring that you have the right to use them. Keep your own copies of important original files.'
      },
      {
        heading: 'Accuracy and availability',
        text: 'We aim to make our tools useful and reliable, but we cannot guarantee that every conversion will be accurate, preserve all formatting, or work with every file. Tools and features may change or become unavailable.'
      },
      {
        heading: 'No warranty',
        text: 'Converter Pro is provided on an as-available basis, without guarantees that the website will always be uninterrupted, error-free, or suitable for every purpose.'
      },
      {
        heading: 'Changes to these terms',
        text: 'We may update these terms as the website changes. Continued use of the website after an update means you accept the revised terms.'
      },
      {
        heading: 'Contact',
        text: `For questions about these terms, contact ${email}.`
      }
    ]
  }
};

export const InfoPage: React.FC<InfoPageProps> = ({ page, onBack }) => {
  const content = pageContent[page];
  const Icon = content.icon;

  return (
    <section className="flex-1 w-full py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5">
            <Icon className="w-6 h-6" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {content.title}
          </h1>

          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {content.intro}
          </p>

          <div className="mt-8 space-y-7">
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {section.heading}
                </h2>
                <p className="text-sm sm:text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {section.text}
                </p>
                {section.heading === 'Contact' && (
                  <a
                    href={`mailto:${email}`}
                    className="inline-block mt-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    {email}
                  </a>
                )}
              </section>
            ))}
          </div>

          {page === 'contact' && (
            <a
              href={`mailto:${email}`}
              className="inline-flex mt-7 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors"
            >
              Email Us
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
