// One entry = one compact keyword page at /<slug>/.
// The exact keyword goes in the URL, title, H1 and first sentence.

export interface Problem {
  slug: string;
  label: string; // short name for menus and chips
  h1: string;
  description: string;
  intro: string;
  how: string[];
  session: string[];
  sessions: string;
  breathwork: string;
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
  medicalNote?: boolean;
}

export const problems: Problem[] = [
  {
    slug: 'hypnosis-for-weight-loss',
    label: 'Weight loss',
    h1: 'Hypnosis for Weight Loss',
    description:
      'Hypnosis for weight loss with Oliver Glozik: change the habits, cravings and emotional eating behind your weight, online or in person.',
    intro:
      'Hypnosis for weight loss is for people who know what to eat but keep getting pulled back by cravings, late-night snacking or eating to cope with stress. Instead of another diet, we work on the automatic habits and feelings that drive the eating, so healthier choices start to feel normal rather than forced.',
    how: [
      'Most weight struggles are not about information. They are about habits that run on autopilot: eating when bored, stressed or tired, finishing the plate, reaching for sugar in the afternoon. Hypnosis works with that automatic part of the mind directly.',
      'In a relaxed, focused state you rehearse new responses to old triggers, so the moment you would normally reach for food, a different response is already familiar. Many clients notice cravings losing their grip and portions shrinking without a fight.',
    ],
    session: [
      'A short conversation about your eating patterns, triggers and goals.',
      'A guided hypnosis session built around your specific habits, not a generic script.',
      'A recording to listen to at home, so the work continues between sessions.',
    ],
    sessions:
      'Most people work with me for three to six sessions, spaced a week or two apart. Weight changes gradually, so we focus on the habits first and let the results follow.',
    breathwork:
      'Stress eating often starts in the body before the mind notices. I teach you a short breathing practice you can use in the moment a craving hits, which gives you a pause long enough to choose differently.',
    faqs: [
      {
        q: 'Does hypnosis for weight loss actually work?',
        a: 'Hypnosis can help change the habits and emotional patterns that drive overeating. It works best combined with sensible eating and movement, not as a replacement for them. Results vary from person to person.',
      },
      {
        q: 'Can I do hypnosis for weight loss online?',
        a: 'Yes. Online sessions work just as well as in-person ones for most people. All you need is a quiet room and headphones.',
      },
      {
        q: 'Will I lose control during hypnosis?',
        a: 'No. You stay aware throughout and can open your eyes at any time. Hypnosis feels like deep relaxation with a focused mind.',
      },
    ],
    related: ['hypnosis-for-anxiety', 'hypnosis-to-quit-smoking'],
  },
  {
    slug: 'hypnosis-to-quit-smoking',
    label: 'Quit smoking',
    h1: 'Hypnosis to Quit Smoking',
    description:
      'Hypnosis to quit smoking with Oliver Glozik: break the habit and the cravings for cigarettes or vaping, online or in person.',
    intro:
      'Hypnosis to quit smoking is for people who are ready to stop but find that willpower alone keeps running out. We work on the habit, the triggers and the reasons you reach for a cigarette or vape, so becoming a non-smoker feels like a decision you have already made.',
    how: [
      'Smoking is woven into daily routines: the first coffee, the break at work, the drink with friends, the moment of stress. Each of those moments has become a trigger. Hypnosis helps disconnect the trigger from the urge to smoke.',
      'In hypnosis we strengthen your own reasons for quitting and rehearse those trigger moments as a non-smoker. Many people find the cravings much quieter afterwards than they expected.',
    ],
    session: [
      'We map your smoking pattern: when, where and why you smoke.',
      'A focused hypnosis session that targets your triggers and reinforces your reasons for stopping.',
      'A recording and a simple plan for the first days without cigarettes.',
    ],
    sessions:
      'Many people need only one or two sessions to stop smoking, with a follow-up session available if a tricky situation comes up in the first weeks.',
    breathwork:
      'Part of what smokers miss is the deep, slow breath that comes with a cigarette. I give you a breathing practice that delivers that same release without the smoke, which makes the first weeks much easier.',
    faqs: [
      {
        q: 'How many sessions of hypnosis does it take to quit smoking?',
        a: 'Often one or two. Some people like a follow-up session a few weeks later to strengthen the change.',
      },
      {
        q: 'Does hypnosis work for vaping too?',
        a: 'Yes. Vaping runs on the same habit loops as smoking, so the approach is the same.',
      },
      {
        q: 'What if I am not sure I want to quit?',
        a: 'Hypnosis works best when you genuinely want to stop. If you are unsure, a free call is a good place to talk it through first.',
      },
      {
        q: 'Will I gain weight after quitting?',
        a: 'We address this directly in the session, so you do not swap cigarettes for snacks.',
      },
    ],
    related: ['hypnosis-for-weight-loss', 'hypnosis-for-anxiety'],
  },
  {
    slug: 'hypnosis-for-anxiety',
    label: 'Anxiety',
    h1: 'Hypnosis for Anxiety',
    description:
      'Hypnosis for anxiety with Oliver Glozik: calm an overactive nervous system with hypnosis and breathwork, online or in person.',
    intro:
      'Hypnosis for anxiety is for people who live with constant worry, a racing mind or a body that never quite switches off. Using hypnosis and breathwork together, we calm the nervous system and change the patterns that keep anxiety going, so you feel more settled day to day.',
    how: [
      'Anxiety is your body’s alarm system working too hard. Thinking your way out of it rarely helps, because the alarm runs below conscious thought. Hypnosis reaches that level directly.',
      'In sessions you learn what calm actually feels like in your body, and we rehearse the situations that usually set off your anxiety so they start to feel manageable. You also learn self-hypnosis, so you have a tool you can use on your own.',
    ],
    session: [
      'A conversation about when your anxiety shows up and how it feels.',
      'A hypnosis session tailored to your situations, combined with breathwork to settle the body.',
      'A recording and a short daily practice to keep the calm going.',
    ],
    sessions:
      'Most clients work with me for four to eight sessions. Many notice a difference after the first, and the later sessions make the change stick.',
    breathwork:
      'This is where combining the two really matters. Slow, controlled breathing is one of the fastest ways to tell your nervous system it is safe. I teach you a breathing technique you can use anywhere, so the calm you feel in sessions comes with you.',
    faqs: [
      {
        q: 'Is hypnosis for anxiety safe?',
        a: 'Yes. Hypnosis is a natural, relaxed state and you stay in control throughout. If you are under medical care for anxiety, hypnosis works alongside it, not instead of it.',
      },
      {
        q: 'Can hypnosis help with social anxiety?',
        a: 'It can. We rehearse social situations in hypnosis so they feel less threatening in real life.',
      },
      {
        q: 'Do online sessions work for anxiety?',
        a: 'Yes, and many people find it easier to relax in their own home.',
      },
    ],
    related: ['hypnosis-for-insomnia', 'hypnosis-for-weight-loss'],
    medicalNote: true,
  },
  {
    slug: 'hypnosis-for-insomnia',
    label: 'Insomnia',
    h1: 'Hypnosis for Insomnia',
    description:
      'Hypnosis for insomnia with Oliver Glozik: quiet a racing mind and fall asleep more easily, with hypnosis and breathwork for sleep.',
    intro:
      'Hypnosis for insomnia is for people who lie awake with a busy mind, wake at 3am and cannot drift off again, or dread going to bed because sleep has become a struggle. We work on the worry and tension that keep you awake, so your body remembers how to let go.',
    how: [
      'Insomnia often keeps itself going: a few bad nights create worry about sleep, and that worry keeps you awake. Hypnosis helps break that loop by teaching your mind and body to associate bed with relaxation again.',
      'Hypnosis is also a skill. Once you know how it feels to drift into a deeply relaxed state, you can use it at night to slip into sleep, or back into it after waking.',
    ],
    session: [
      'A look at your sleep pattern and what keeps you awake.',
      'A hypnosis session focused on deep relaxation and letting go of the night-time worry.',
      'A sleep recording made for you to listen to in bed.',
    ],
    sessions:
      'Most people work with me for three to five sessions, and use their sleep recording every night in between.',
    breathwork:
      'A slow breathing pattern before bed shifts your body out of alert mode. I show you a simple routine that takes a few minutes and pairs with your hypnosis recording.',
    faqs: [
      {
        q: 'Can hypnosis help you sleep?',
        a: 'Many people find it helps them fall asleep faster and wake less. It can help with the worry and tension behind insomnia, though it does not treat medical sleep disorders such as sleep apnoea.',
      },
      {
        q: 'What is sleep hypnosis for insomnia?',
        a: 'It usually means a recording you listen to in bed. Your sessions include one made for you, which tends to work better than a generic track.',
      },
      {
        q: 'Should I still see my doctor about insomnia?',
        a: 'Yes, especially if it is long-standing. Hypnosis works alongside medical care.',
      },
    ],
    related: ['hypnosis-for-anxiety', 'hypnosis-for-weight-loss'],
  },
];

export const bySlug = Object.fromEntries(problems.map((p) => [p.slug, p]));
