import React, { useState } from "react";
import {
  FaXmark,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const SHARE_URL = "https://stem-a-girl.shecodeafrica.org/courses";

const socialLinks = [
  {
    icon: FaWhatsapp,
    bg: "#25D366",
    href: `https://wa.me/?text=${encodeURIComponent(SHARE_URL)}`,
    label: "WhatsApp",
  },
  {
    icon: FaLinkedinIn,
    bg: "#0A66C2",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    bg: "#1877F2",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`,
    label: "Facebook",
  },
  {
    icon: FaTelegram,
    bg: "#229ED9",
    href: `https://t.me/share/url?url=${encodeURIComponent(SHARE_URL)}`,
    label: "Telegram",
  },
  {
    icon: FaXTwitter,
    bg: "#222222",
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}`,
    label: "X (Twitter)",
  },
];

const ShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[90%] max-w-[480px] p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Share Courses
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-[#B70569] text-lg font-medium hover:opacity-70 transition-opacity"
          >
            <FaXmark />
          </button>
        </div>

        <hr className="border-gray-200 mb-6" />

        <p className="text-black font-medium mb-4">Share this link via</p>
        <div className="flex items-center gap-4 mb-6">
          {socialLinks.map(({ icon: Icon, bg, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl hover:opacity-80 transition-opacity"
              style={{ backgroundColor: bg }}
            >
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-black font-medium mb-3">Or copy link</p>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <span className="flex-1 px-4 py-3 text-sm text-gray-500 truncate">
            {SHARE_URL}
          </span>
          <button
            onClick={handleCopy}
            className="bg-[#B70569] text-white text-sm font-semibold px-5 py-3 hover:bg-[#9a0458] transition-colors shrink-0"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
