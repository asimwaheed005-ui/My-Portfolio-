import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import BackToTop from "./components/BackToTop";

import CursorGlow from "./components/CursorGlow";
// import ParticleBackground from "./components/background/ParticleBackground";

import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import GithubProjects from "./components/GithubProjects";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/chatbot/Chatbot";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
    );
  }

  return (
    <>
      {/* Cursor Glow */}
      <CursorGlow />

      {/* Premium Background (Disabled for now) */}
      {/* <ParticleBackground /> */}

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 min-h-screen text-white">
        <Routes>

          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />

          <Route
            path="/projects"
            element={
              <PageTransition>
                <>
                  <Projects />
                  <GithubProjects />
                </>
              </PageTransition>
            }
          />

          <Route
            path="/certificates"
            element={
              <PageTransition>
                <Certificates />
              </PageTransition>
            }
          />

          <Route
            path="/resume"
            element={
              <PageTransition>
                <Resume />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back To Top */}
      <BackToTop />

          <Chatbot />
    </>
  );
}

export default App;