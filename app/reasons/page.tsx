'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const reasons = [
  { 
    id: 1, 
    title: "Your initial efforts", 
    text: "When you first reached out, I wasn’t able to match your interest at the same pace, not because I wasn’t attracted to you or didn’t care, but because I was in the middle of moving across the world to pursue my dreams, and my mind was elsewhere. And honestly, I felt that things were moving quickly. But you stayed consistent. You showed me genuine care, patience, and a willingness to wait those three months. I’ve always preferred connecting in person rather than through audio or video calls, yet with you, even that felt different. I loved being on the phone with you, there was a sense of comfort I hadn’t experienced before. And when you landed in Goa and I felt that same ease and familiarity in person, I realized that my heart had already begun to fall for you."
  },
  { id: 2, title: "The efforts that followed", text: "When you came to pick me up at the airport, made me drinks, made dessert for my birthday, brought me food whenever you can, and took me out on boyfriend’s day, when you defended me when Roshini joked about my haircut, I could just go on. Looking back, there were moments where I could have slowed things down, but having always been on the other side of that kind of care, I didn’t want to step out of the joy and warmth you brought into my life for the first time. You know how deeply I remember things, and I carry those moments with me. They matter to me. They’re part of why I hold so much gratitude and tenderness toward you, even during times when your words felt hurtful. I choose to love you unconditionally." },
  { id: 3, title: "Things you shared that I carry with me", text: "The first time we got intimate in Bangalore, you teared up saying you had never heard “I love you” in bed like that. And the first night we were in Needham, you teared up about how hard it was for you to accept that we love each other so much, and how you were scared that it might hurt. You said your parents loved you unconditionally, and you were afraid of not receiving that same kind of love. These words left a huge impact on me, and I truly wanted to show you deep love and connection. Every single time you asked me, “Are you really mine?”, “I don’t want you to stop loving me,” or “Is this real?”, I answered with complete honesty, because that’s exactly how I felt about you.  When you got upset about me paying more attention to Mani in Goa at the pub that night, or when you said how you were excited about going to have me for yourself when I come to the US, I truly wanted to be that for you and give you attention all the time." },
  { id: 4, title: "Opening My Heart in Ways I Never Imagined", text: "You let me love you courageously, and you made me want to hold on to you all the time. With you, I was never afraid to love out loud. You also taught me that therapy helps, that I don’t need to hold back my tears, and that it’s okay to be vulnerable." },
  { id: 5, title: "Learning to Love the Simple Things ", text: "Grocery shopping, making cookies, co-working, train/bus rides, wearing matching PJs and just cuddling, and so much more. I have been reflecting a lot on our time together and what I miss the most is your presence, us just lying on bed cuddling or simply being together. I realized that we don’t need to have dates or have to do some activity all the time to be happy. " },
  { id: 6, title: "Changing how I view babies", text: "When you first sent the AI baby, I was confused and didn’t quite know how to react. But it was too cute not to respond to, so I went along with it. But you continued that, saying you wanted to name our daughter something like Rianna and mentioning about mixed babies all the time. But it wasn’t just a fantasy or about making cute babies. You told me how you wanted to do a master’s degree so you could learn more for your future kids. Seeing your maternal instinct, the way you wanted to take care of me even when I didn’t need it truly changed something inside me. I realized that if this was something you wanted, I was happy wanting it too. I also remember when you told me about the five kids in Vermont, and somewhere along the way, it settled in my mind. I even started thinking about aiming for higher‑paying jobs just like you so we could afford that life comfortably." },
  { id: 7, title: "Manifestation", text: "You are the first person I truly started manifesting a future with. For a long time, I was trying to understand where I belonged, often feeling like I wasn’t doing enough with my potential or reaching for something higher in life. But with you, for the first time, I imagined a future so clearly. There is a cheesy manifestation that you can try to guess from the three pictures above." },
  { id: 8, title: "My Persian Princess", text: "I’ve tried to tell you this before, but sometimes it felt like it didn’t fully land. During the last week we spent together, I could sense how insecure you were about your face and body, and I really wanted to say this from my heart. You are beautiful, without makeup, with makeup, even when you’re asleep. I felt lucky every morning to wake up to your face. I loved when you rested your head on my arm, even when it went numb and hurt, because I never wanted to move. I loved when you’d randomly climb onto me at night and fall asleep, and I never told you this, but I even loved when you snored right on my face. It reminded me how close you were to me and made me feel safe and secure." },
  { id: 9, title: "Priceless reactions", text: "I’d hate myself if I didn’t add this, I love every reaction you give even the ones when I was just trying to take a normal photo. I loved watching them, turning them into little stickers, and holding on to them. They comforted me and made me feel happy looking at them." },
  { id: 10, title: "My home away from home", text: "Like I mentioned before, I’ve never really felt like I belonged anywhere. For the first time in my life, I felt that sense of belonging with you, and the place didn’t matter. It wasn’t because I wanted you to take care of me or because I needed someone here. It was because, with you, I felt I could be anywhere. I can imagine us living here, in India or even some other country. It wouldn’t bother me as long as we are together.From the bottom of my heart, you were truly my home for the last six months, and you made it so much easier for me to cope with being away from my family.  And I can say for sure that this is not in love with the idea of you, this is in love with you." },
];

export default function Reasons() {
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
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-mauve-700 mb-4 text-center">
          All That I Love in You
        </h1>
        <p className="text-center text-mauve-600 mb-12 text-lg">
           I want to answer your questions. When you shared that it’s hard for you to believe how deeply I love you, or that you could be the love of my life, it really hurt me. It’s true that I have loved deeply before, but what I felt with you was different in a way I hadn’t experienced. At the same time, I understand that feelings alone aren’t always enough to convey that, especially from your perspective. So I spent time reflecting on what we shared and why I feel the way I do. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={`/images/reasons/reason${reason.id}.jpg`}
                  alt={reason.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-mauve-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {reason.id}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-mauve-700 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {reason.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/coupons">
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
          2 of 4
        </div>
      </motion.div>
    </div>
  );
}