'use client';

import { useEffect } from "react";

export default function RemoveNextBadge() {
  useEffect(() => {
    const removeBadge = () => {
      document.querySelectorAll('[data-next-badge="true"]').forEach(el => el.remove());
    };
    removeBadge();
    const observer = new MutationObserver(removeBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
