import { useEffect, useState } from "react";

export function useTypingEffect(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      const word = words[wordIndex];
      characterIndex += deleting ? -1 : 1;
      setText(word.slice(0, characterIndex));

      let delay = 75;
      if (!deleting && characterIndex === word.length) {
        deleting = true;
        delay = 1000;
      } else if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 300;
      }

      timeoutId = window.setTimeout(tick, delay);
    };

    timeoutId = window.setTimeout(tick, 75);
    return () => window.clearTimeout(timeoutId);
  }, [words]);

  return text;
}

export default function useOriginalInteractions() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    document.querySelectorAll(".test").forEach((element) => observer.observe(element));

    const smoothScroll = (event) => {
      const link = event.currentTarget;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const targetRect = target.getBoundingClientRect();
      const headerHeight = document.querySelector("#header")?.offsetHeight ?? 0;
      const targetPosition = targetRect.top + window.scrollY - headerHeight - 16;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 650;
      if (duration === 0) {
        window.scrollTo(0, targetPosition);
        return;
      }
      let startTime = null;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        let time = elapsed / (duration / 2);
        const position = time < 1
          ? distance / 2 * time * time * time * time * time + startPosition
          : (time -= 2, distance / 2 * (time * time * time * time * time + 2) + startPosition);

        window.scrollTo(0, position);
        if (elapsed < duration) window.requestAnimationFrame(animate);
      };

      window.requestAnimationFrame(animate);
    };

    const hashLinks = [...document.querySelectorAll("a[href^='#']")];
    hashLinks.forEach((link) => link.addEventListener("click", smoothScroll));

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.innerWidth > 900) {
        document.querySelector("#header")?.classList.toggle("nav--hidden", lastScrollY < window.scrollY);
      } else {
        document.querySelector("#header")?.classList.remove("nav--hidden");
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      hashLinks.forEach((link) => link.removeEventListener("click", smoothScroll));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
