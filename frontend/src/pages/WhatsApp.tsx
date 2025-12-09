//better than all because of the animation
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254111526857"  // Change to your number
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[99999]
        bg-[#25D366]
        w-16 h-16 rounded-full
        flex items-center justify-center
        shadow-xl
        animate-pulse    /* Tailwind pulse animation */
        hover:scale-110
        transition-transform
      "
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
}



