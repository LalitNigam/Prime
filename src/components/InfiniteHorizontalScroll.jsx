import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const users = [
  {
    name: "Ankur Sharma",
    review: "Product quality is superb! Fast delivery and support.",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    review: "I just bought one and it's so gggooooddd",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "lucy",
    review: "My favorite part of Roman drink",
    profilePic:
      "https://imgs.search.brave.com/VEeFSURPYtssO14skFj7_0Dw13SUzMhbScdjrFIEVXc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIx/MjA5NDYvMTYwMHct/RVc0Y2dnWGtnYmMu/anBn",
  },
  {
    name: "Priya Patel",
    review: "Tasted amazing highly recommend",
    profilePic:
      "https://imgs.search.brave.com/PaqPNW1DCPe5JO3_Fe7UVpRpEaVXAM_E9KUIH9fLxOo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzIx/MjA5NTYvMTYwMHct/ZlZ5a3VKWkprLTAu/anBn",
  },
  {
    name: "Priya Patel",
    review: "Great experience, highly recommend!",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya Patel",
    review: "Great experience, highly recommend!",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Kumar",
    review: "Good quality and value for money.",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Pooja Joshi",
    review: "Thrilled with the purchase, will buy again.",
    profilePic: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Manish Tiwari",
    review: "Excellent product, outstanding support.",
    profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Anjali Rao",
    review: "Highly satisfied with the service.",
    profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    name: "Deepak Mehta",
    review: "Great quality and fast support.",
    profilePic: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

function ReviewCard({ name, review, profilePic }) {
  return (
    <div className="min-w-[240px] max-w-sm mx-2 bg-rose-200 rounded-xl shadow-md flex items-center space-x-4 p-4">
      <img
        className="h-12 w-12 rounded-full border-2 border-yellow-400"
        src={profilePic}
        alt={name}
      />
      <div>
        <div className="font-semibold">{name}</div>
        <p className="text-gray-600 text-sm">{review}</p>
        <div className="flex mt-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
      </div>
    </div>
  );
}

export default function InfiniteHorizontalScroll() {
  const [hovered, setHovered] = useState(false);
  const [offsetX, setOffsetX] = useState(0);

  // Card width + margin, adjust according to your design
  const cardWidth = 250;
  const gap = 16;
  const total = users.length * (cardWidth + gap);

  useAnimationFrame((_, delta) => {
    if (!hovered) {
      setOffsetX((prev) => prev - delta * 0.12); // speed: 0.12, adjust for scroll speed
    }
  });

  // Infinite loop logic
  const translateX = offsetX % total;

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8 relative">
      <motion.div
        className="flex"
        style={{
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {[...users, ...users].map((user, idx) => (
          <ReviewCard key={idx} {...user} />
        ))}
      </motion.div>
    </div>
  );
}
