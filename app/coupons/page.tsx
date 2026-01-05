'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const coupons = [
  {
    id: 1,
    title: "Coffee dates with deep conversations",
    description: "Deep conversations with strictly no phones, opening up our hearts to each other, and ofcourse, coffee.",
  },
  {
    id: 2,
    title: "Sunrise Hike",
    description: "Yep, stole it from your hinge. Can't believe we haven't done this yet. Hiking, no phones, watch the sunrise and a lot of talking.",
  },
  {
    id: 3,
    title: "Take up a Cooking Class",
    description: "Again from hinge, but I think we need this as both are bad at cooking lol. Another interesting thing we could do is make each other's favourite meals. I think that'd be a fun idea.",
  },
  {
    id: 4,
    title: "Yoga/Meditate/Workout",
    description: "I know we already did some of this, but I really wanna try meditating especially with the way I have been feeling emotionally. Also from your hinge.",
  },
  {
    id: 5,
    title: "Connection and Regulation Exercises",
    description: "• Soft eye contact - 10 seconds at a time\n• Hold hand & eye contact 1 minute\n• Face playdough for 1-3 minutes\n• Match breath - place head on partners and match breath for 1-5 minutes\n\nAlso saw these other ideas that I thought you might like:\n• No-spend date (we can get creative with this)\n• Volunteer for a cause we care about\n• Stargazing\n• Re-create our first date\n• Spontaneous day trip with no planning\n• Start a shared journal / memory book / vision board\n• Learn a new skill together",
  },
];

export default function Coupons() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-4 py-12 md:py-20">
      <button
        onClick={() => router.back()}
        className="fixed top-6 left-6 bg-white/90 backdrop-blur-sm text-mauve-700 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-white hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        ← Back
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-mauve-700 mb-4 text-center">
          Our Journey Forward
        </h1>
        <p className="text-center text-mauve-600 mb-12 text-lg">
          I appreciate and I am grateful for the coupons you made for me, but it did feel like most of them were for me than it was for you. I accepted them out of love but I should have been careful about what you really wanted to do too. So I thought about making some coupons of my own, taking ideas from not only your interests, but things I’d be willing to do too.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {coupons.map((coupon, index) => (
            <motion.div
              key={coupon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br from-mauve-50 to-mauve-100 rounded-2xl shadow-lg overflow-hidden border-2 border-dashed border-mauve-400 ${
                index === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''
              }`}
            >
              <div className="relative w-full aspect-video bg-gray-200">
                <img
                  src={`/images/coupons/coupon${coupon.id}.jpg`}
                  alt={coupon.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎫</span>
                  <h3 className="text-xl font-bold text-mauve-700">
                    {coupon.title}
                  </h3>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-2">
                  {coupon.description.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/conclusion">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-mauve-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-mauve-700 transition-colors"
            >
              Continue →
            </motion.button>
          </Link>
        </div>

        <div className="text-center mt-8 text-mauve-500 text-sm">
          3 of 4
        </div>
      </motion.div>
    </div>
  );
}