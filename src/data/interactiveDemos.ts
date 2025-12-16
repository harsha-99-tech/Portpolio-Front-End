// Static interactive demos data

export type DemoType =
  | "ripple-button"
  | "morphing-shape"
  | "particle-system"
  | "gradient-card-hover"
  | "loading-animation"
  | "text-gradient"
  | "pulse-glow"
  | "bounce"
  | "rotating-cube"
  | "progress-bar"
  | "floating-elements"
  | "wave-animation"
  | "typewriter"
  | "shimmer"
  | "flip-card";

export interface InteractiveDemo {
  _id: string;
  id: string;
  title: string;
  description: string;
  githubRepo: string;
  type: DemoType;
  code?: string; // Code snippet for the demo
  codeLanguage?: string; // Language for syntax highlighting (e.g., "tsx", "css", "javascript")
  createdAt?: string;
  updatedAt?: string;
}

export const interactiveDemos: InteractiveDemo[] = [
  {
    _id: "1",
    id: "1",
    title: "Ripple Button Effect",
    description: "Interactive button with ripple animation on click",
    githubRepo: "https://github.com/yourusername/ripple-button-demo",
    type: "ripple-button",
    code: `const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setButtonRipple({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
  setTimeout(() => setButtonRipple(null), 600);
};

<button
  onClick={handleRipple}
  className="relative overflow-hidden px-8 py-4 rounded-lg"
>
  Click Me
  {buttonRipple && (
    <span
      className="absolute rounded-full bg-white opacity-50 animate-ripple"
      style={{
        left: buttonRipple.x,
        top: buttonRipple.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  )}
</button>`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-01").toISOString(),
    updatedAt: new Date("2024-01-01").toISOString(),
  },
  {
    _id: "2",
    id: "2",
    title: "Morphing Shape",
    description: "CSS-powered shape morphing animation",
    githubRepo: "https://github.com/yourusername/morphing-shape-demo",
    type: "morphing-shape",
    code: `const [morphingShape, setMorphingShape] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setMorphingShape((prev) => (prev + 1) % 4);
  }, 2000);
  return () => clearInterval(interval);
}, []);

<div
  className="transition-all duration-1000 bg-gradient-to-br from-purple-500 to-pink-500"
  style={{
    width: "80px",
    height: "80px",
    borderRadius: morphingShape === 0 ? "50%" : morphingShape === 1 ? "20%" : morphingShape === 2 ? "0%" : "30%",
    transform: \`rotate(\${morphingShape * 45}deg)\`,
  }}
/>`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-02").toISOString(),
    updatedAt: new Date("2024-01-02").toISOString(),
  },
  {
    _id: "3",
    id: "3",
    title: "Particle System",
    description: "Interactive particle animation with canvas",
    githubRepo: "https://github.com/yourusername/particle-system-demo",
    type: "particle-system",
    code: `const ParticleSystem = () => {
  return (
    <div className="w-full h-48">
      <canvas id="particle-canvas" className="w-full h-full"></canvas>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-03").toISOString(),
    updatedAt: new Date("2024-01-03").toISOString(),
  },
  {
    _id: "4",
    id: "4",
    title: "Gradient Card Hover",
    description: "3D transform with gradient overlay on hover",
    githubRepo: "https://github.com/yourusername/gradient-card-demo",
    type: "gradient-card-hover",
    code: `<div className="w-full h-48" style={{ perspective: "1000px" }}>
  <div 
    className="relative h-full rounded-xl overflow-hidden transition-transform duration-500"
    style={{ transformStyle: "preserve-3d" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "rotateY(15deg) rotateX(5deg)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <span className="text-white font-bold text-xl">Hover Me</span>
    </div>
  </div>
</div>`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-04").toISOString(),
    updatedAt: new Date("2024-01-04").toISOString(),
  },
  {
    _id: "5",
    id: "5",
    title: "Loading Animation",
    description: "Smooth loading spinner with gradient",
    githubRepo: "https://github.com/yourusername/loading-animation-demo",
    type: "loading-animation",
    code: `const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-05").toISOString(),
    updatedAt: new Date("2024-01-05").toISOString(),
  },
  {
    _id: "6",
    id: "6",
    title: "Text Gradient Animation",
    description: "Animated gradient text effect",
    githubRepo: "https://github.com/yourusername/gradient-text-demo",
    type: "text-gradient",
    code: `<h3
  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-shift"
  style={{ backgroundSize: "200% auto" }}
>
  Animated Text
</h3>

/* Add to tailwind.config.ts */
keyframes: {
  'gradient-shift': {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },
}`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-06").toISOString(),
    updatedAt: new Date("2024-01-06").toISOString(),
  },
  {
    _id: "7",
    id: "7",
    title: "Pulse Glow Effect",
    description: "Pulsing glow animation with shadow",
    githubRepo: "https://github.com/yourusername/pulse-glow-demo",
    type: "pulse-glow",
    code: `const PulseGlow = () => {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 rounded-full bg-purple-500 animate-pulse"></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-07").toISOString(),
    updatedAt: new Date("2024-01-07").toISOString(),
  },
  {
    _id: "8",
    id: "8",
    title: "Bounce Animation",
    description: "Smooth bouncing ball animation",
    githubRepo: "https://github.com/yourusername/bounce-animation-demo",
    type: "bounce",
    code: `const BounceAnimation = () => {
  return (
    <div className="w-16 h-16 bg-purple-500 rounded-full animate-bounce"></div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-08").toISOString(),
    updatedAt: new Date("2024-01-08").toISOString(),
  },
  {
    _id: "9",
    id: "9",
    title: "Rotating Cube",
    description: "3D rotating cube with CSS transforms",
    githubRepo: "https://github.com/yourusername/rotating-cube-demo",
    type: "rotating-cube",
    code: `const RotatingCube = () => {
  return (
    <div className="w-24 h-24 bg-purple-500 rounded-lg transform rotate-x-45 rotate-y-45">
      <div className="w-full h-full bg-purple-600"></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-09").toISOString(),
    updatedAt: new Date("2024-01-09").toISOString(),
  },
  {
    _id: "10",
    id: "10",
    title: "Progress Bar",
    description: "Animated progress bar with gradient",
    githubRepo: "https://github.com/yourusername/progress-bar-demo",
    type: "progress-bar",
    code: `const ProgressBar = () => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full">
      <div className="h-full bg-purple-500 rounded-full" style={{ width: "60%" }}></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-10").toISOString(),
    updatedAt: new Date("2024-01-10").toISOString(),
  },
  {
    _id: "11",
    id: "11",
    title: "Floating Elements",
    description: "Multiple elements floating with different speeds",
    githubRepo: "https://github.com/yourusername/floating-elements-demo",
    type: "floating-elements",
    code: `const FloatingElements = () => {
  return (
    <div className="flex space-x-4">
      <div className="w-8 h-8 bg-purple-500 rounded-full animate-float"></div>
      <div className="w-8 h-8 bg-purple-500 rounded-full animate-float"></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-11").toISOString(),
    updatedAt: new Date("2024-01-11").toISOString(),
  },
  {
    _id: "12",
    id: "12",
    title: "Wave Animation",
    description: "Smooth wave effect with SVG",
    githubRepo: "https://github.com/yourusername/wave-animation-demo",
    type: "wave-animation",
    code: `const WaveAnimation = () => {
  return (
    <div className="w-full h-24 bg-gradient-to-b from-transparent to-purple-500 overflow-hidden">
      <div className="w-full h-full bg-purple-500 animate-wave"></div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-12").toISOString(),
    updatedAt: new Date("2024-01-12").toISOString(),
  },
  {
    _id: "13",
    id: "13",
    title: "Typewriter Effect",
    description: "Text typing animation effect",
    githubRepo: "https://github.com/yourusername/typewriter-demo",
    type: "typewriter",
    code: `const TypewriterEffect = () => {
  return (
    <div className="text-4xl font-bold">
      <span className="inline-block w-0 h-0 overflow-hidden whitespace-nowrap border-b-[1px] animate-typewriter">
        Typewriter Effect
      </span>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-13").toISOString(),
    updatedAt: new Date("2024-01-13").toISOString(),
  },
  {
    _id: "14",
    id: "14",
    title: "Shimmer Effect",
    description: "Shimmer loading animation",
    githubRepo: "https://github.com/yourusername/shimmer-demo",
    type: "shimmer",
    code: `const ShimmerEffect = () => {
  return (
    <div className="w-full h-24 bg-gray-200 rounded-lg animate-shimmer"></div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-14").toISOString(),
    updatedAt: new Date("2024-01-14").toISOString(),
  },
  {
    _id: "15",
    id: "15",
    title: "Flip Card",
    description: "Card flip animation on hover",
    githubRepo: "https://github.com/yourusername/flip-card-demo",
    type: "flip-card",
    code: `const FlipCard = () => {
  return (
    <div className="w-full h-48">
      <div className="relative h-full">
        <div className="absolute inset-0 transform rotate-y-0 scale-100 backface-hidden">
          Front Content
        </div>
        <div className="absolute inset-0 transform rotate-y-180 scale-100 backface-hidden">
          Back Content
        </div>
      </div>
    </div>
  );
};
`,
    codeLanguage: "tsx",
    createdAt: new Date("2024-01-15").toISOString(),
    updatedAt: new Date("2024-01-15").toISOString(),
  },
];

