"use client";

import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const ComponentLibrarySection = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<"components" | "colors" | "typography" | "spacing">(
    "components"
  );

  const buttonVariants = [
    { name: "Primary", className: "bg-blue-600 hover:bg-blue-700 text-white" },
    { name: "Secondary", className: "bg-gray-600 hover:bg-gray-700 text-white" },
    { name: "Success", className: "bg-green-600 hover:bg-green-700 text-white" },
    { name: "Danger", className: "bg-red-600 hover:bg-red-700 text-white" },
    { name: "Outline", className: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" },
    { name: "Ghost", className: "text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20" },
  ];

  const inputVariants = [
    { label: "Default Input", className: "" },
    { label: "With Icon", className: "pl-10", hasIcon: true },
    { label: "Error State", className: "border-red-500 focus:border-red-500 focus:ring-red-500" },
    { label: "Success State", className: "border-green-500 focus:border-green-500 focus:ring-green-500" },
  ];

  const badgeVariants = [
    { name: "Default", className: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200" },
    { name: "Primary", className: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
    { name: "Success", className: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
    { name: "Warning", className: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" },
    { name: "Danger", className: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" },
  ];

  const colorPalette = [
    { name: "Primary", colors: ["#3B82F6", "#2563EB", "#1D4ED8", "#1E40AF", "#1E3A8A"] },
    { name: "Secondary", colors: ["#6B7280", "#4B5563", "#374151", "#1F2937", "#111827"] },
    { name: "Success", colors: ["#10B981", "#059669", "#047857", "#065F46", "#064E3B"] },
    { name: "Warning", colors: ["#F59E0B", "#D97706", "#B45309", "#92400E", "#78350F"] },
    { name: "Danger", colors: ["#EF4444", "#DC2626", "#B91C1C", "#991B1B", "#7F1D1D"] },
  ];

  const typographyScale = [
    { name: "H1", size: "text-5xl", weight: "font-bold", example: "Heading 1" },
    { name: "H2", size: "text-4xl", weight: "font-bold", example: "Heading 2" },
    { name: "H3", size: "text-3xl", weight: "font-semibold", example: "Heading 3" },
    { name: "H4", size: "text-2xl", weight: "font-semibold", example: "Heading 4" },
    { name: "Body", size: "text-base", weight: "font-normal", example: "Body text" },
    { name: "Small", size: "text-sm", weight: "font-normal", example: "Small text" },
  ];

  const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];

  const tabs = [
    { id: "components" as const, label: "Components" },
    { id: "colors" as const, label: "Colors" },
    { id: "typography" as const, label: "Typography" },
    { id: "spacing" as const, label: "Spacing" },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 transition-colors duration-500 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Component Library
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive design system with reusable components, colors, typography, and spacing
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? darkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Components Tab */}
        {activeTab === "components" && (
          <div className="space-y-12">
            {/* Buttons */}
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                {buttonVariants.map((variant) => (
                  <button
                    key={variant.name}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${variant.className}`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Input Fields
              </h3>
              <div className="space-y-4 max-w-md">
                {inputVariants.map((variant) => (
                  <div key={variant.label} className="relative">
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {variant.label}
                    </label>
                    <div className="relative">
                      {variant.hasIcon && (
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          🔍
                        </span>
                      )}
                      <input
                        type="text"
                        placeholder="Enter text..."
                        className={`w-full px-4 py-2 rounded-lg border-2 ${
                          darkMode
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        } ${variant.className}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      darkMode
                        ? "bg-gray-800 border border-gray-700 hover:border-blue-500"
                        : "bg-white border border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <h4
                      className={`text-xl font-bold mb-2 ${
                        darkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      Card Title {i}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      This is a sample card component with hover effects and proper spacing.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                Badges
              </h3>
              <div className="flex flex-wrap gap-3">
                {badgeVariants.map((badge) => (
                  <span
                    key={badge.name}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badge.className}`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === "colors" && (
          <div className="space-y-8">
            {colorPalette.map((palette) => (
              <div key={palette.name}>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {palette.name}
                </h3>
                <div className="flex gap-2">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="flex-1">
                      <div
                        className="h-24 rounded-lg shadow-lg mb-2"
                        style={{ backgroundColor: color }}
                      />
                      <p
                        className={`text-xs text-center ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === "typography" && (
          <div className="space-y-6">
            {typographyScale.map((type) => (
              <div
                key={type.name}
                className={`p-6 rounded-lg ${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`text-sm font-mono w-20 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {type.name}
                  </span>
                  <span
                    className={`${type.size} ${type.weight} ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {type.example}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Spacing Tab */}
        {activeTab === "spacing" && (
          <div className="space-y-6">
            {spacingScale.map((size) => (
              <div key={size} className="flex items-center gap-4">
                <span
                  className={`text-sm font-mono w-20 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {size}px
                </span>
                <div className="flex-1 flex items-center">
                  <div
                    className={`${darkMode ? "bg-blue-600" : "bg-blue-500"} rounded`}
                    style={{ width: `${size}px`, height: "20px" }}
                  />
                  <div
                    className={`ml-2 ${darkMode ? "text-gray-400" : "text-gray-600"} text-sm`}
                  >
                    spacing-{size / 4}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ComponentLibrarySection;

