'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const learnings = [
  {
    id: 1,
    title: "Space and boundaries",
    paragraph1: "I understand how important space is, not only for you but also for me. The more I reached out from anxiety, the more you needed distance to breathe. I truly realized that quality matters more than quantity. Spending my first Christmas and New Year away from family and friends made me reflect on a lot of things. I learnt that love is not about how much time we spend together, but it is the quality of that time even if it is little.",
    paragraph2: "At the start of our relationship, you told me you had never been in one before and that you were still learning what commitment meant to you. I did not understand that, and my own life was heavy at the time moving across the world, leaving family, visa uncertainties, career transitions. I was carrying a lot, and I could not fully open up to communicate about our dynamic or how we could connect better as a couple. You probably had so much to tell me that was not going well, but maybe did not. I am learning to pause and give you space when you need it, and be more considerate of your feelings and boundaries.",
  },
  {
    id: 2,
    title: "Avoiding discomfort and conflicts",
    paragraph1: "If it is true that there were things you might not have wanted, but went with it just to avoid conflict or to please me, then it really hurts me. I do not want you to do things that do not align with you. Over time, it makes sense that you would not want to put up with those things anymore, and yet I remained completely unaware.",
    paragraph2: "I want you to know that you never have to do anything to impress or please me. I have learned that love requires owning our plans, desires, and limits. And it is okay for our paths to diverge and we can have some journeys together and some apart.",
  },
  {
    id: 3,
    title: "Fear and Withdrawal",
    paragraph1: "I have learned that shutting down can be a form of self-protection, not indifference. And that while some people reach out to feel safe, some retreat to survive. And I do not blame you for being that way. It is definitely something we could work on.",
    paragraph2: "",
  },
  {
    id: 4,
    title: "Relationship phases",
    paragraph1: "This is what I learnt about relationship phases and tried to relate it to ours.\n\nPhase 1: Honeymoon Phase - The first few months are attraction and excitement. Anyone could glide through this stage with few arguments, spending every moment together, everything feeling new and thrilling. For us, this was May to August.\n\nPhase 2: Reality Check - Small disagreements started to appear, along with each other's annoying habits. Still, we spend a lot of time together because it doesn't affect us much. This was September to October.",
    paragraph2: "\nPhase 3: Everything seems to fall apart - Patience run thin, fights and heavy arguments become more frequent, doubts creep in, and there would be moments of distance and misunderstanding. This started in November.\n\nPhase 4: Making It Through the Storm - Despite everything, we choose each other on purpose. We work together to learn and grow, practice healthy communication, and shift from you vs me to us vs the problem. And I truly want to learn how a couple can work for that.",
  },
];

export default function Learnings() {
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
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-mauve-700 mb-4 text-center">
          My Learnings & Growth
        </h1>
        <p className="text-center text-mauve-600 mb-12 text-lg">
          I have been learning and trying to to see and understand things from your perspective. You once described our dynamic as avoidant and anxious. But I have learnt that we are much more complex than that. It helped me understand how two different ways of protecting our hearts can unintentionally hurt each other. And once I started seeing it, so many things began to make sense in hindsight.
        </p>

        <div className="space-y-8">
          {learnings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-mauve-700 mb-6">
                {item.title}
              </h2>
              
              <div className="space-y-4">
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {item.paragraph1}
                </div>
                <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {item.paragraph2}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/reasons">
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
          1 of 4
        </div>
      </motion.div>
    </div>
  );
}