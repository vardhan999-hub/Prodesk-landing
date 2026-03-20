# Prompts Used During Development

This document outlines the key prompts I used while building the Prodesk IT Landing Page.  
These reflect real problems I encountered and how I solved them during development.

---

## 1. Navbar Layout

**My Prompt:**
"How do I make a navbar with a logo on the left and links on the right using Flexbox?"

**Why I asked:**
I knew I needed Flexbox but wasn't sure how to properly align items and push the links to the right side.

---

## 2. Hero Section Centering Issue

**My Prompt:**
"My hero section content is not centered vertically on the page. I used display: grid but it's not working."

**Why I asked:**
I had set display: grid but forgot to use `place-items: center`, so the content stayed at the top.

---

## 3. Dark Mode Using CSS Variables

**My Prompt:**
"How do I implement dark mode using CSS variables and a class toggle on the body?"

**Why I asked:**
I wanted to switch themes without writing duplicate CSS for every element.

---

## 4. Hamburger Menu Animation

**My Prompt:**
"How can I animate a hamburger icon into an X shape using CSS?"

**Why I asked:**
I wanted the three lines to smoothly transform into an X when the menu opens.

---

## 5. Fixing Mobile Menu Not Closing

**My Prompt:**
"My mobile menu stays open when I click a nav link. How do I close it automatically?"

**Why I asked:**
On mobile, the menu stayed open after clicking a link, which affected user experience.

---

## 6. Scroll Animation Not Triggering

**My Prompt:**
"IntersectionObserver is not working. Elements are not getting the 'visible' class when I scroll."

**Why I asked:**
My `.fade-up` elements weren't animating. I discovered the threshold was too high for smaller elements.

---

## 7. Dark Mode Not Saving on Refresh

**My Prompt:**
"How do I save dark mode preference using localStorage so it persists on page reload?"

**Why I asked:**
The theme reset on refresh, which made the feature feel incomplete.

---

## 8. Form Validation Without JavaScript

**My Prompt:**
"How can I make form fields required without writing JavaScript validation?"

**Why I asked:**
I wanted a simple solution and learned about the HTML `required` attribute.

---

## 9. aria-expanded Attribute

**My Prompt:**
"What is aria-expanded and should I add it to my hamburger button?"

**Why I asked:**
I wanted to improve accessibility and understand how to properly update it with JavaScript.

---

## 10. prefers-reduced-motion

**My Prompt:**
"What is prefers-reduced-motion and should I include it in my project?"

**Why I asked:**
I came across it while reading about accessibility and wanted to make animations more user-friendly.

---

# Summary

These prompts reflect my learning process while building the project.  
I used AI to understand concepts, debug issues, and improve code quality, while implementing and refining everything myself.