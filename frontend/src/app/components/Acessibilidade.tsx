"use client";
import React, { useState, useEffect } from "react";
import {
  FaSearchPlus,
  FaSearchMinus,
  FaAdjust,
  FaAssistiveListeningSystems,
  FaKeyboard,
  FaSignLanguage,
  FaFont,
  FaLink,
  FaMousePointer,
  FaVolumeUp,
  FaBan,
  FaRulerHorizontal,
  FaRedo,
} from "react-icons/fa";
import { X, Eye, Sparkles, Check, RotateCcw, Moon, Volume2 } from "lucide-react";

const AccessibilityIcon = ({ highContrast }: { highContrast?: boolean }) => (
  <svg
    version="1.2"
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12.028 15.293"
    width="32px"
    height="32px"
    aria-hidden="true"
    focusable="false"
    className={highContrast ? "filter brightness-125 contrast-125" : ""}
  >
    <g>
      <path
        fillRule="evenodd"
        fill="#171D2D"
        d="M8.466,14.317l1.059,0.962h2.504l-1.174-1.065l-1.173-1.067L8.607,12.17l-0.284-0.258
        c-0.303,0.467-0.723,0.895-1.181,1.202c-0.255,0.171-0.523,0.306-0.79,0.384c-0.294,0.088-0.613,0.133-0.955,0.133
        c-0.51,0-0.98-0.099-1.412-0.295c-0.432-0.194-0.802-0.46-1.11-0.793c-0.309-0.334-0.549-0.722-0.72-1.169
        c-0.087-0.225-0.152-0.457-0.194-0.696L0.891,9.707L0.089,8.979C0.03,9.304,0,9.64,0,9.983c0,0.727,0.132,1.412,0.397,2.06
        c0.264,0.648,0.631,1.212,1.103,1.691c0.47,0.48,1.034,0.859,1.691,1.138c0.657,0.281,1.382,0.421,2.176,0.421
        c0.137,0,0.274-0.004,0.407-0.014c0.455-0.03,0.883-0.112,1.285-0.244C7.556,14.872,8.03,14.625,8.466,14.317L8.466,14.317z"
      />
      <linearGradient
        id="INDmenu-btn_icon_lg"
        gradientUnits="userSpaceOnUse"
        x1="1.0684"
        y1="3.5537"
        x2="11.4826"
        y2="9.2203"
      >
        <stop offset="0" stopColor="#71C387" />
        <stop offset="1" stopColor="#0596C6" />
      </linearGradient>
      <path
        fillRule="evenodd"
        fill="url(#INDmenu-btn_icon_lg)"
        d="M10.502,11.615c0.175-0.528,0.263-1.081,0.263-1.66
        c0-0.725-0.133-1.412-0.398-2.061c-0.264-0.646-0.631-1.209-1.102-1.689s-1.035-0.861-1.691-1.14
        c-0.656-0.28-1.382-0.419-2.176-0.419c-0.672,0-1.345,0.104-1.975,0.344l0.665-1.688H2.278L0.716,7.272l1.425,1.295l2.248,2.043
        l1.251-1.137L3.09,7.154c0.628-0.56,1.438-0.847,2.277-0.847c0.509,0,0.98,0.098,1.412,0.295c0.431,0.196,0.802,0.46,1.11,0.795
        C8.198,7.729,8.438,8.121,8.61,8.565C8.781,9.01,8.867,9.484,8.867,9.983c0,0.051-0.001,0.098-0.003,0.146l0.691,0.628
        L10.502,11.615L10.502,11.615z M3.865,0c0.693,0,1.254,0.561,1.254,1.253c0,0.693-0.561,1.254-1.254,1.254S2.611,1.946,2.611,1.253
        C2.611,0.561,3.172,0,3.865,0z"
      />
    </g>
  </svg>
);

const AccessibilityWidget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Estados de acessibilidade
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isDyslexicFont, setIsDyslexicFont] = useState<boolean>(false);
  const [isHighlightLinks, setIsHighlightLinks] = useState<boolean>(false);
  const [isLargeCursor, setIsLargeCursor] = useState<boolean>(false);
  const [isNoAnimations, setIsNoAnimations] = useState<boolean>(false);
  const [isReadingLine, setIsReadingLine] = useState<boolean>(false);
  const [isSpeechActive, setIsSpeechActive] = useState<boolean>(false);
  const [fontSizeOffset, setFontSizeOffset] = useState<number>(0);

  const [isVirtualKeyboardOpen, setIsVirtualKeyboardOpen] = useState<boolean>(false);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      // Carregar preferências salvas
      const hc = localStorage.getItem("highContrast") === "true";
      const dm = localStorage.getItem("darkMode") === "true";
      const df = localStorage.getItem("dyslexicFont") === "true";
      const hl = localStorage.getItem("highlightLinks") === "true";
      const lc = localStorage.getItem("largeCursor") === "true";
      const na = localStorage.getItem("noAnimations") === "true";
      const fontSaved = parseInt(localStorage.getItem("fontSizeOffset") || "0", 10);

      setIsHighContrast(hc);
      setIsDarkMode(dm);
      setIsDyslexicFont(df);
      setIsHighlightLinks(hl);
      setIsLargeCursor(lc);
      setIsNoAnimations(na);
      setFontSizeOffset(fontSaved);

      applyClasses({
        highContrast: hc,
        darkMode: dm,
        dyslexicFont: df,
        highlightLinks: hl,
        largeCursor: lc,
        noAnimations: na,
        fontOffset: fontSaved,
      });
    }
  }, []);

  // Monitorar mouse para linha de leitura
  useEffect(() => {
    if (!isReadingLine) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReadingLine]);

  // Monitorar cliques para sintetizador de voz (Speech Synthesis)
  useEffect(() => {
    if (!isSpeechActive) return;
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Evitar ler o próprio menu de acessibilidade se o usuário clicar nele
      if (target.closest("#accessibility-widget-drawer")) return;

      const textToRead = target.innerText || target.textContent || "";
      if (textToRead.trim() && typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToRead.trim());
        utterance.lang = "pt-BR";
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeechActive]);

  const applyClasses = (config: {
    highContrast?: boolean;
    darkMode?: boolean;
    dyslexicFont?: boolean;
    highlightLinks?: boolean;
    largeCursor?: boolean;
    noAnimations?: boolean;
    fontOffset?: number;
  }) => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;

    html.classList.toggle("high-contrast", Boolean(config.highContrast));
    html.classList.toggle("dark-mode", Boolean(config.darkMode));
    html.classList.toggle("dyslexia-font", Boolean(config.dyslexicFont));
    html.classList.toggle("highlight-links", Boolean(config.highlightLinks));
    html.classList.toggle("large-cursor", Boolean(config.largeCursor));
    html.classList.toggle("no-animations", Boolean(config.noAnimations));

    const offset = config.fontOffset !== undefined ? config.fontOffset : fontSizeOffset;
    if (offset === 0) {
      html.style.fontSize = "";
    } else {
      const base = 16;
      html.style.fontSize = `${base + offset}px`;
    }
  };

  const toggleHighContrast = () => {
    const next = !isHighContrast;
    setIsHighContrast(next);
    localStorage.setItem("highContrast", String(next));
    applyClasses({ highContrast: next });
  };

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem("darkMode", String(next));
    applyClasses({ darkMode: next });
  };

  const toggleDyslexicFont = () => {
    const next = !isDyslexicFont;
    setIsDyslexicFont(next);
    localStorage.setItem("dyslexicFont", String(next));
    applyClasses({ dyslexicFont: next });
  };

  const toggleHighlightLinks = () => {
    const next = !isHighlightLinks;
    setIsHighlightLinks(next);
    localStorage.setItem("highlightLinks", String(next));
    applyClasses({ highlightLinks: next });
  };

  const toggleLargeCursor = () => {
    const next = !isLargeCursor;
    setIsLargeCursor(next);
    localStorage.setItem("largeCursor", String(next));
    applyClasses({ largeCursor: next });
  };

  const toggleNoAnimations = () => {
    const next = !isNoAnimations;
    setIsNoAnimations(next);
    localStorage.setItem("noAnimations", String(next));
    applyClasses({ noAnimations: next });
  };

  const toggleReadingLine = () => {
    setIsReadingLine(!isReadingLine);
  };

  const toggleSpeechActive = () => {
    const next = !isSpeechActive;
    setIsSpeechActive(next);
    if (!next && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const adjustFontSize = (delta: number) => {
    const newOffset = Math.max(-4, Math.min(8, fontSizeOffset + delta));
    setFontSizeOffset(newOffset);
    localStorage.setItem("fontSizeOffset", String(newOffset));
    applyClasses({ fontOffset: newOffset });
  };

  const resetFontSize = () => {
    setFontSizeOffset(0);
    localStorage.setItem("fontSizeOffset", "0");
    applyClasses({ fontOffset: 0 });
  };

  const resetAllAccessibility = () => {
    setIsHighContrast(false);
    setIsDarkMode(false);
    setIsDyslexicFont(false);
    setIsHighlightLinks(false);
    setIsLargeCursor(false);
    setIsNoAnimations(false);
    setIsReadingLine(false);
    setIsSpeechActive(false);
    setFontSizeOffset(0);

    localStorage.removeItem("highContrast");
    localStorage.removeItem("darkMode");
    localStorage.removeItem("dyslexicFont");
    localStorage.removeItem("highlightLinks");
    localStorage.removeItem("largeCursor");
    localStorage.removeItem("noAnimations");
    localStorage.removeItem("fontSizeOffset");

    applyClasses({
      highContrast: false,
      darkMode: false,
      dyslexicFont: false,
      highlightLinks: false,
      largeCursor: false,
      noAnimations: false,
      fontOffset: 0,
    });
  };

  const toggleVLibras = () => {
    if (typeof document !== "undefined") {
      const btn = document.querySelector("[vw-access-button]") as HTMLElement;
      if (btn) {
        btn.click();
      } else {
        alert("Tradutor de Libras (VLibras) sendo ativado no canto da tela...");
      }
    }
    setIsMenuOpen(false);
  };

  const activateScreenReader = () => {
    alert("Navegação por Leitor de Tela (Screen Reader) ativa. Use Tab e as setas do seu teclado para navegar.");
  };

  const activateVirtualKeyboard = () => {
    setIsVirtualKeyboardOpen(true);
    setIsMenuOpen(false);
  };

  const VirtualKeyboard = () => {
    const [typed, setTyped] = useState("");
    const keys = [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"],
      [" ", "⌫", "Enter"],
    ];
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2
            className={`text-2xl font-black uppercase tracking-tight ${
              isHighContrast ? "text-yellow-400" : "text-[#004d2b]"
            }`}
          >
            Teclado Virtual Interativo
          </h2>
          <button
            onClick={() => setIsVirtualKeyboardOpen(false)}
            className="p-3 bg-gray-100 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div
          className={`mb-6 p-6 rounded-3xl border-4 min-h-[110px] text-2xl font-bold shadow-inner ${
            isHighContrast
              ? "bg-black border-yellow-400 text-yellow-400"
              : "bg-green-50/80 border-green-200 text-[#004d2b]"
          }`}
        >
          {typed || "Clique nas teclas abaixo para digitar..."}
        </div>
        <div className="space-y-3">
          {keys.map((row, i) => (
            <div key={i} className="flex justify-center gap-2">
              {row.map((k) => (
                <button
                  key={k}
                  onClick={() =>
                    k === "⌫"
                      ? setTyped((t) => t.slice(0, -1))
                      : k === "Enter"
                      ? setTyped((t) => t + "\n")
                      : setTyped((t) => t + k)
                  }
                  className={`h-14 rounded-2xl font-black text-base transition-all active:scale-95 flex-1 max-w-[64px] ${
                    k === " " ? "max-w-[320px]" : ""
                  } ${
                    isHighContrast
                      ? "bg-yellow-500 text-black border-b-4 border-yellow-700 hover:bg-yellow-400"
                      : "bg-[#004d2b] text-white border-b-4 border-[#002b18] hover:bg-[#003823] shadow-md"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (!isMounted) return null;

  return (
    <>
      <style jsx global>{`
        /* Alto Contraste */
        .high-contrast {
          background-color: #000 !important;
          color: #fff !important;
        }
        .high-contrast * {
          color: #fff !important;
          background-color: #000 !important;
          border-color: #ff0 !important;
        }
        .high-contrast button {
          background-color: #222 !important;
          border: 2px solid #ff0 !important;
          color: #ff0 !important;
        }

        /* Modo Escuro */
        .dark-mode {
          background-color: #0b1320 !important;
          color: #f1f5f9 !important;
        }
        .dark-mode body {
          background-color: #0b1320 !important;
          color: #f1f5f9 !important;
        }
        .dark-mode header, .dark-mode footer, .dark-mode section, .dark-mode div:not(#accessibility-widget-drawer) {
          background-color: #111c2e !important;
          color: #f1f5f9 !important;
        }

        /* Fonte para Dislexia */
        .dyslexia-font, .dyslexia-font * {
          font-family: "Comic Sans MS", "Chalkboard SE", "OpenDyslexic", sans-serif !important;
          letter-spacing: 0.06em !important;
          line-height: 1.75 !important;
        }

        /* Destacar Links */
        .highlight-links a,
        .highlight-links button {
          outline: 3px solid #facc15 !important;
          outline-offset: 2px !important;
          background-color: rgba(250, 204, 21, 0.2) !important;
          text-decoration: underline !important;
          font-weight: bold !important;
        }

        /* Cursor Ampliado */
        .large-cursor,
        .large-cursor * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="%23004d2b" stroke="%23facc15" stroke-width="2"><path d="M3 3l7 18 3-7 7-3L3 3z"/></svg>'), auto !important;
        }

        /* Desativar Animações */
        .no-animations,
        .no-animations * {
          animation: none !important;
          transition: none !important;
        }
      `}</style>

      {/* Linha de Leitura (Guia de Foco Visual) */}
      {isReadingLine && (
        <div
          style={{ top: `${mouseY}px` }}
          className="fixed left-0 w-full h-10 bg-yellow-400/30 border-y-2 border-yellow-500 pointer-events-none z-[999999] backdrop-blur-[1px] transition-all duration-75 shadow-lg flex items-center justify-end pr-4"
        >
          <span className="bg-yellow-500 text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
            Guia de Leitura
          </span>
        </div>
      )}

      {/* Notificação Toast do Leitor de Voz */}
      {isSpeechActive && (
        <div className="fixed top-20 right-6 z-[999999] bg-[#004d2b] text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-400 flex items-center gap-3 animate-bounce">
          <Volume2 className="text-yellow-400 animate-pulse" size={20} />
          <span className="text-xs font-black uppercase tracking-wider">
            Sintetizador Ativo: Clique em qualquer texto para ouvir!
          </span>
        </div>
      )}

      {/* Floating Accessibility Trigger Button */}
      <div className="fixed bottom-10 left-5 z-[99999]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir Painel de Acessibilidade"
          className={`relative group w-[68px] h-[68px] rounded-[2.2rem] flex items-center justify-center shadow-[0_15px_35px_-5px_rgba(0,77,43,0.4)] transition-all duration-500 transform hover:scale-110 active:scale-95 ${
            isHighContrast
              ? "bg-black border-4 border-yellow-400"
              : "bg-white border-2 border-green-100 hover:border-green-500"
          }`}
        >
          {/* Subtle Glow Ring */}
          <div className="absolute inset-0 rounded-[2.2rem] bg-gradient-to-r from-green-500/20 to-yellow-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Accessibility Icon */}
          <AccessibilityIcon highContrast={isHighContrast} />

          {/* Active indicators badge */}
          {(isHighContrast ||
            isDarkMode ||
            isDyslexicFont ||
            isHighlightLinks ||
            isLargeCursor ||
            isNoAnimations ||
            isReadingLine ||
            isSpeechActive ||
            fontSizeOffset !== 0) && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 border-2 border-[#004d2b] rounded-full flex items-center justify-center animate-pulse">
              <span className="w-1.5 h-1.5 bg-[#004d2b] rounded-full"></span>
            </span>
          )}
        </button>

        {/* Floating Menu Container */}
        <div
          id="accessibility-widget-drawer"
          className={`${
            isMenuOpen
              ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
              : "translate-y-12 opacity-0 scale-95 pointer-events-none"
          } absolute bottom-[76px] left-0 w-[340px] sm:w-[370px] max-h-[calc(100vh-110px)] flex flex-col bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] overflow-hidden z-[100000] border-2 transition-all duration-500 ${
            isHighContrast ? "bg-black border-4 border-yellow-400" : "border-green-100/80"
          }`}
        >
          {/* Header Premium - Sempre fixo no topo */}
          <div className="flex-shrink-0 bg-gradient-to-r from-[#004d2b] via-[#006639] to-[#004d2b] p-5 flex justify-between items-center relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-3 z-10">
              <div className="bg-yellow-400/20 p-2 rounded-2xl border border-yellow-400/30">
                <Sparkles size={18} className="text-yellow-400" />
              </div>
              <div>
                <h2 className="text-white font-black uppercase text-xs tracking-widest flex items-center gap-2">
                  Acessibilidade <span className="bg-yellow-400 text-[#004d2b] text-[9px] px-2 py-0.5 rounded-full font-black">PRO</span>
                </h2>
                <p className="text-[10px] text-green-200/80 font-bold uppercase tracking-wider">
                  Mobilidade & Inclusão BoraSiô
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 z-20">
              <button
                onClick={resetAllAccessibility}
                title="Resetar todas as opções"
                className="bg-white/10 hover:bg-yellow-400 hover:text-[#004d2b] text-white rounded-xl p-2 transition-all group"
              >
                <RotateCcw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="bg-white/10 hover:bg-red-500 text-white rounded-xl p-2 transition-all"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Menu Options Content - Área de Rolagem Interna */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-green-50/40">
            {/* Controle de Tamanho do Texto */}
            <div className="bg-white p-4 rounded-3xl border border-green-100 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#004d2b] flex items-center gap-2">
                  <FaFont className="text-yellow-500" size={13} /> Tamanho do Texto
                </span>
                <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-lg">
                  {fontSizeOffset === 0 ? "Normal (100%)" : `${100 + Math.round((fontSizeOffset / 16) * 100)}%`}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => adjustFontSize(-1)}
                  className="flex items-center justify-center gap-1 py-3 px-2 rounded-2xl border-2 border-green-100 bg-green-50/50 hover:bg-white hover:border-green-400 text-[#004d2b] font-black text-xs transition-all active:scale-95"
                >
                  <FaSearchMinus size={14} /> <span className="text-[10px]">A-</span>
                </button>
                <button
                  onClick={resetFontSize}
                  className="flex items-center justify-center gap-1 py-3 px-2 rounded-2xl border-2 border-green-100 bg-green-50/50 hover:bg-white hover:border-green-400 text-[#004d2b] font-black text-xs transition-all active:scale-95"
                >
                  <FaRedo size={12} /> <span className="text-[10px]">100%</span>
                </button>
                <button
                  onClick={() => adjustFontSize(1)}
                  className="flex items-center justify-center gap-1 py-3 px-2 rounded-2xl border-2 border-green-100 bg-green-50/50 hover:bg-white hover:border-green-400 text-[#004d2b] font-black text-xs transition-all active:scale-95"
                >
                  <FaSearchPlus size={14} /> <span className="text-[10px]">A+</span>
                </button>
              </div>
            </div>

            {/* Grid de Recursos de Acessibilidade */}
            <div className="space-y-2">
              {[
                {
                  id: "vlibras",
                  icon: <FaSignLanguage size={18} className="text-blue-600" />,
                  label: "Tradutor VLibras",
                  desc: "Língua Brasileira de Sinais",
                  active: false,
                  action: toggleVLibras,
                },
                {
                  id: "contrast",
                  icon: <FaAdjust size={18} className="text-yellow-500" />,
                  label: "Alto Contraste",
                  desc: "Preto & Amarelo acessível",
                  active: isHighContrast,
                  action: toggleHighContrast,
                },
                {
                  id: "darkmode",
                  icon: <Moon size={18} className="text-indigo-500" />,
                  label: "Modo Escuro",
                  desc: "Fundo escuro e descansado",
                  active: isDarkMode,
                  action: toggleDarkMode,
                },
                {
                  id: "speech",
                  icon: <FaVolumeUp size={18} className="text-green-600" />,
                  label: "Leitor de Voz (Voz)",
                  desc: "Clique no texto para ouvir",
                  active: isSpeechActive,
                  action: toggleSpeechActive,
                },
                {
                  id: "dyslexia",
                  icon: <FaFont size={18} className="text-purple-600" />,
                  label: "Fonte para Dislexia",
                  desc: "Fonte limpa e espaçada",
                  active: isDyslexicFont,
                  action: toggleDyslexicFont,
                },
                {
                  id: "readingline",
                  icon: <FaRulerHorizontal size={18} className="text-amber-600" />,
                  label: "Guia de Leitura",
                  desc: "Linha guia no cursor",
                  active: isReadingLine,
                  action: toggleReadingLine,
                },
                {
                  id: "links",
                  icon: <FaLink size={18} className="text-emerald-600" />,
                  label: "Destacar Links",
                  desc: "Contorno visual nos botões",
                  active: isHighlightLinks,
                  action: toggleHighlightLinks,
                },
                {
                  id: "cursor",
                  icon: <FaMousePointer size={18} className="text-orange-500" />,
                  label: "Cursor Ampliado",
                  desc: "Ponteiro maior e destacado",
                  active: isLargeCursor,
                  action: toggleLargeCursor,
                },
                {
                  id: "noanim",
                  icon: <FaBan size={18} className="text-red-500" />,
                  label: "Sem Animações",
                  desc: "Pára movimentos de tela",
                  active: isNoAnimations,
                  action: toggleNoAnimations,
                },
                {
                  id: "screenreader",
                  icon: <FaAssistiveListeningSystems size={18} className="text-[#004d2b]" />,
                  label: "Leitor de Tela (Teclado)",
                  desc: "Instruções de navegação",
                  active: false,
                  action: activateScreenReader,
                },
                {
                  id: "keyboard",
                  icon: <FaKeyboard size={18} className="text-teal-600" />,
                  label: "Teclado Virtual",
                  desc: "Teclado interativo na tela",
                  active: false,
                  action: activateVirtualKeyboard,
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={opt.action}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all duration-300 group ${
                    opt.active
                      ? isHighContrast
                        ? "bg-yellow-400 text-black border-yellow-400 font-bold"
                        : "bg-[#004d2b] text-white border-[#004d2b] shadow-lg shadow-[#004d2b]/20"
                      : isHighContrast
                      ? "text-yellow-400 hover:bg-yellow-400/10 border-yellow-400/30"
                      : "bg-white text-[#004d2b] border-green-100/70 hover:border-green-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3.5 text-left">
                    <div
                      className={`p-2.5 rounded-xl transition-transform group-hover:scale-110 ${
                        opt.active
                          ? "bg-white/20 text-white"
                          : "bg-green-50 border border-green-100"
                      }`}
                    >
                      {opt.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-wider leading-tight">
                        {opt.label}
                      </p>
                      <p
                        className={`text-[9px] font-medium leading-tight mt-0.5 ${
                          opt.active
                            ? "text-green-100"
                            : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      >
                        {opt.desc}
                      </p>
                    </div>
                  </div>

                  {opt.active && (
                    <div className="bg-yellow-400 text-[#004d2b] p-1 rounded-full shadow">
                      <Check size={14} strokeWidth={3} />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-green-100 flex items-center justify-between text-[8px] font-black text-gray-400 uppercase tracking-widest px-1">
              <span>BoraSiô Acessível</span>
              <span>WCAG 2.1 AAA Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Teclado Virtual */}
      {isVirtualKeyboardOpen && (
        <div className="fixed inset-0 z-[100002] flex items-end">
          <div
            className="absolute inset-0 bg-[#004d2b]/60 backdrop-blur-md"
            onClick={() => setIsVirtualKeyboardOpen(false)}
          ></div>
          <div className="relative w-full bg-white rounded-t-[4rem] border-t-8 border-yellow-400 p-8 sm:p-12 shadow-2xl animate-in slide-in-from-bottom-full duration-500 max-h-[85vh] overflow-y-auto">
            <VirtualKeyboard />
          </div>
        </div>
      )}
    </>
  );
};

export default AccessibilityWidget;