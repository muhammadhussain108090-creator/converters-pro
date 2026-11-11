import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './config/firebase';
import { TOOLS } from './config/tools';
import { Tool, NoticeMessage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ToolsDirectory } from './components/ToolsDirectory';
import { ToolWorkspace } from './components/ToolWorkspace';
import { Dashboard } from './components/Dashboard';
import { AuthModal } from './components/AuthModal';
import { Toast } from './components/Toast';
import { InfoSections } from './components/InfoSections';
import { DEFAULT_SITE_SEO, getSeoMetadata } from './config/seo';
import { applyPageSEO } from './utils/seo';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'tool' | 'dashboard' | 'info'>('home');
  const [activeInfoPage, setActiveInfoPage] = useState<InfoPageType | null>(null);
  const [selectedToolId, setSelectedToolId] = useState<string>('merge');
  const [activeRoute, setActiveRoute] = useState<string>('merge');
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const [notice, setNotice] = useState<NoticeMessage | null>(null);

  // Dark Mode State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('convertpro_theme') : null;
      if (saved) return saved === 'dark';
      return typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    } catch {
      return false;
    }
  });

  // Apply dark mode class to html document element
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('convertpro_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('convertpro_theme', 'light');
      }
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }, [darkMode]);

  // Firebase auth state listener
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      },
      (error) => {
        console.warn('Firebase Auth state listener error:', error);
      }
    );
    return () => unsubscribe();
  }, []);

  // Comprehensive route listener for SEO URLs, clean paths, query params, and hashes
  useEffect(() => {
    const handleRoute = () => {
      // 1. Check clean path or GitHub Pages SPA redirect query (?/path)
      let rawRoute = '';
      if (window.location.search.startsWith('?/')) {
        rawRoute = window.location.search.slice(2).split('&')[0];
      } else if (
        window.location.pathname &&
        window.location.pathname !== '/' &&
        !window.location.pathname.endsWith('index.html')
      ) {
        rawRoute = window.location.pathname.replace(/^\/|\/$/g, '');
      }

      // 2. Check hash if no clean path
      if (!rawRoute) {
        rawRoute = window.location.hash.replace(/^#/, '');
      }

      rawRoute = rawRoute.toLowerCase();

      if (!rawRoute || rawRoute === 'home') {
        setCurrentView('home');
        setActiveRoute('');
        applyPageSEO(DEFAULT_SITE_SEO);
        return;
      }

      if (rawRoute === 'dashboard') {
        setCurrentView('dashboard');
        setActiveRoute('dashboard');
        return;
      }

      setActiveRoute(rawRoute);

      // Check SEO dictionary match
      const seoConfig = getSeoMetadata(rawRoute);
      if (seoConfig && seoConfig.defaultToolId) {
        setSelectedToolId(seoConfig.defaultToolId);
        setCurrentView('tool');
        applyPageSEO(seoConfig);
        return;
      }

      const matchTool = TOOLS.find((t) => t.id === rawRoute);
      if (matchTool) {
        setSelectedToolId(matchTool.id);
        setCurrentView('tool');
        applyPageSEO(getSeoMetadata(matchTool.id));
      } else {
        setCurrentView('home');
        applyPageSEO(DEFAULT_SITE_SEO);
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('popstate', handleRoute);
    return () => {
      window.removeEventListener('hashchange', handleRoute);
      window.removeEventListener('popstate', handleRoute);
    };
  }, []);

  const showNotice = (type: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const id = `${Date.now()}_${Math.random()}`;
    setNotice({ id, type, message });
    setTimeout(() => {
      setNotice((prev) => (prev?.id === id ? null : prev));
    }, 5500);
  };

  const handleSelectTool = (toolId: string) => {
  setActiveRoute(toolId);
  setSelectedToolId(toolId);
  setCurrentView('tool');

  window.history.pushState({}, '', `/${toolId}`);

  const seoConfig = getSeoMetadata(toolId);
  if (seoConfig) {
    applyPageSEO(seoConfig);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  
const handleNavigate = (view: string) => {
  if (view === 'home') {
    setCurrentView('home');
    setActiveInfoPage(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } else if (view === 'dashboard') {
    setCurrentView('dashboard');
    setActiveInfoPage(null);
    window.location.hash = 'dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });

  } else if (
    ['about', 'contact', 'privacy-policy', 'terms'].includes(view)
  ) {
    setActiveInfoPage(view as InfoPageType);
    setCurrentView('info');
    window.history.pushState({}, '', `/${view}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};


  const handleOpenAuth = (mode: 'login' | 'signup' = 'login') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const activeTool = TOOLS.find((t) => t.id === selectedToolId) || TOOLS[0];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        user={user}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Body */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <Hero
              onSearch={(query) => {
                // If query matches a tool directly, navigate, otherwise scroll to directory
                const found = TOOLS.find((t) => t.name.toLowerCase().includes(query.toLowerCase()));
                if (found && query.length > 3) {
                  handleSelectTool(found.id);
                } else {
                  document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onSelectTool={handleSelectTool}
            />

            <ToolsDirectory onSelectTool={handleSelectTool} />

            <InfoSections />
          </>
        )}

        {currentView === 'tool' && (
          <ToolWorkspace
            key={`${activeTool.id}_${activeRoute}`}
            tool={activeTool}
            activeRoute={activeRoute}
            onBack={() => handleNavigate('home')}
            onShowNotice={showNotice}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard
            user={user}
            onOpenAuth={() => handleOpenAuth('login')}
            onSelectTool={handleSelectTool}
            onShowNotice={showNotice}
          />
        )}
        {currentView === 'info' && activeInfoPage && (
  <InfoPage
    page={activeInfoPage}
    onBack={() => handleNavigate('home')}
  />
)}
      </main>

      {/* Footer */}
      <Footer
  onSelectTool={handleSelectTool}
  onNavigate={handleNavigate}
/>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
        onSuccessNotice={(msg) => showNotice('success', msg)}
      />

      {/* Floating Notifications */}
      <Toast notice={notice} onDismiss={() => setNotice(null)} />
    </div>
  );
}
