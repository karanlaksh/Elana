'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Conclusion() {
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
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-mauve-700 mb-8 text-center">
            With All My Heart
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              You took a chance on us when you barely knew me, now we know so much about each other and we have been through a lot and I am starting to understand you much so much better. I really wish for us to start again, but this time with more awareness, patience, and care.
            </p>
            
            <p>
              I read that, “If you are destined to be together, you may lose each other first. Two souls don’t need to stay immediately, they meet to awaken, heal, and break old patterns. Sometimes they separate so they can grow into the versions of themselves that are capable of loving each other right.” And I see this as an opportunity to break our patterns and  set healthier boundaries. We can focus on quality time together and be open and honest about our feelings. More than doing things together, I want us to focus on truly connecting with each other. I also believe we should both have the time and space to live our own lives. I’ll be focusing on my co-op and my summer body (haha), and you can spend time with your friends, family, and all the goals that matter to you. I want to show you that you can live fully and independently, even while being in a relationship.
            </p>
            
            <p>
              After seeing u yesterday, I realized how quickly days of misery can shift by seeing the person who makes you happy. And it scares me.I realized that over the last six months, I had started tying my happiness too closely to you, and I want to change that. I want to learn how to be happy on my own in the US, and also share happiness with you when we choose to be together as a couple. Even with space between us, my care for you won’t disappear. I’ll still show up with the same love and attention I always have. And if you need time, I’m willing to give it, whether that’s a week, a month, or longer. You once waited months for me, and I want to honor that same patience now.
            </p>
            
            <p>
             With this, I’ve said everything I wanted to say. I hope it helped you understand how deeply I love you. I’m grateful that I got to be your booba, even if it was only for a short while. I truly hope you find everything you’re looking for, even if that path doesn’t include me. May God bless you with all that you’ve hoped for, your million, your home, and a life filled with growth and prosperity. Thank you for everything. I will never forget you, and a part of me will always love you.
            </p>
            
            <p className="text-right italic text-mauve-600 text-xl">
              Love,<br />
              Karan
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-mauve-600 text-lg font-semibold">
              Thank you for taking this journey with me 💜
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-mauve-500 text-sm">
          4 of 4
        </div>
      </motion.div>
    </div>
  );
}