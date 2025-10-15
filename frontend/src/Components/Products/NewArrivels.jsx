import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivels = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newarrivel = [
    { _id: "1", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=1" }] },
    { _id: "2", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=2" }] },
    { _id: "3", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
    { _id: "4", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
    { _id: "5", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
    { _id: "6", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
    { _id: "7", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
    { _id: "8", name: "Manchester United jersey", price: 699, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
  ];

  // --- Drag Scroll ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    updateScrollButtons(); // update live during drag
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  // --- Button Scroll ---
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    const container = scrollRef.current;

    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    // Re-check scroll position slightly after animation finishes
    setTimeout(updateScrollButtons, 400);
  };

  // --- Update button states ---
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (!container) return;

    const leftScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(leftScroll < maxScroll - 5); // buffer of 5px
  };

  // --- Add scroll listener ---
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="py-16 px-4 lg:px-10">
      <div className="container mx-auto text-center mb-10 relative ">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border transition-colors ${
              canScrollLeft
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border transition-colors ${
              canScrollRight
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Products */}
      <div
        ref={scrollRef}
         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className={`container mx-auto overflow-x-scroll flex space-x-5 relative scroll-smooth no-scrollbar pb-2 -mb-2 border-0 bg-white ${isDragging? "cursor-grabbing":"curser-grab"}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newarrivel.map((product) => (
          <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">₹{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivels;
