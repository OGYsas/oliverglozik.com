# Working brief: Humming bee breath (Bhramari)

Not on the numbered breathwork plan; requested by Oliver on 2026-11-16. Topic: `breathwork`.
Proposed slug: `humming-bee-breath` → `/blog/humming-bee-breath/` (carries "humming", "bee breath" and
"humming bee breath" in the URL). Status: **drafted 2026-11-16 in `src/content/blog/humming-bee-breath.md`, not committed or pushed.**

## Oliver's answers (voice note, 2026-11-16)

- Not deeply experienced in this technique; the post is mainly for ranking and page authority. (Never say so in the post.)
- Loka Yoga notes: rewrite, never use them one to one.
- Personal use: humming helps him when he's really, really stressed, alone, not around other people (people would
  look at him strangely). Like the physiological sigh, it switches him into a different state. (Transcript said
  "with the SI"; read as "sigh", confirm with Oliver.)
- Heard it's good during sex: **left out.** "Humming during sex" has 0 US searches, there's no evidence, and humming
  raises nitric oxide in the nose and sinuses only.
- Nitric oxide: keep it short here and link to the future "Is humming good for you?" post once it exists (add the
  link from this post's nitric oxide paragraph then).

## Keywords (Ahrefs API, US, pulled 2026-11-16)

"Humming breath" itself is tiny (40/month, KD 1) and Ahrefs rolls it up into "humming bee breath". The real
demand sits in two separate clusters with **different SERPs**:

### Cluster A: the technique (this post)

| Keyword | US vol | Global | KD | Parent topic |
|---|---|---|---|---|
| bhramari pranayama | 2,400 | 24,000 | 11 | bhramari pranayama |
| bhramari | 700 | — | 4 | bhramari pranayama |
| **bee breath** (primary) | 350 | 600 | 2 | bhramari pranayama |
| bhramari pranayama benefits | 250 | 3,900 | 9 | bhramari pranayama |
| bee breathing | 200 | 500 | 1 | bhramari pranayama |
| humming bee breath | 200 | 900 | 0 | bee breath |
| bhramari pranayama steps | 90 | 1,400 | 1 | — |
| how to do bhramari pranayama | 80 | 1,100 | 3 | — |
| humming breathing | 60 | 150 | 4 | benefits of humming |
| bhramari breathing | 50 | 200 | 8 | bhramari pranayama |
| humming breath | 40 | 100 | 1 | humming bee breath |
| humming bee breath benefits | 30 | 100 | 4 | bhramari pranayama benefits |
| humming breathing technique | 20 | 60 | 3 | benefits of humming |

**Why "bee breath" as primary:** KD 2, and its parent topic is "bhramari pranayama", so one page targeting both
names is the right shape. The "bee breath" SERP is weak: Art of Living, MyYogaTeacher, Greater Good, Humantold,
with only 4 to 12 referring domains each. "Bhramari pranayama" (KD 11) has stronger pages (Banyan Botanicals,
Yoga International with 49 RDs, PMC review, two YouTube videos), so treat it as the secondary target.

**Title idea:** "Humming Bee Breath (Bhramari Pranayama): How to Do It, Steps and Benefits"
H1 carries "bee breath" + "Bhramari"; H2s for steps, benefits, science, who should avoid it.

### Cluster B: humming benefits (separate post later, not this one)

| Keyword | US vol | KD | Parent topic |
|---|---|---|---|
| benefits of humming | 900 | 6 | is humming good for you |
| is humming good for you | 500 | 9 | is humming good for you |
| humming vagus nerve | 200 | 17 | benefits of humming |
| vagus nerve humming | 150 | 0 | humming and anxiety |
| humming for vagus nerve | 150 | 19 | benefits of humming |
| humming nitric oxide | 90 | 0 | humming nitric oxide |
| humming meditation | 90 | 0 | humming meditation |
| humming for anxiety | 70 | 4 | benefits of humming |

The "is humming good for you" SERP is a different set of pages (Psychology Today, PMC study, Bond University,
stress.org, Mayo Clinic Connect) and includes a **DR 4 site with 0 referring domains at #7**, so it is winnable
for a new site. Per the long-tail rule, this deserves its own post ("Is Humming Good for You? Vagus Nerve,
Nitric Oxide and Anxiety") rather than an H2 here. This post links to it once it exists, and covers the vagus
nerve / nitric oxide points only briefly.

## Angle and overlap

- **Searcher wants:** exact steps (finger position on the ear flap, mouth closed, hum on the exhale), how many
  rounds, what it feels like, whether the science is real, who shouldn't do it.
- **Overlap with existing posts:** none mention humming or Bhramari today (checked `src/content/blog`). Like box
  breathing, 4-7-8 and the physiological sigh, it's a named technique post; cross-link all four. `what-is-breathwork`
  could gain a table row for Bhramari linking here.
- **Infographic:** step diagram (hand/ear position + "hum on exhale"), Seal Blue / navy / coral per brand rules.

## Research notes (to verify before drafting)

- **Origin:** Hatha Yoga Pradipika (15th c.) lists Bhramari among eight kumbhakas; named after the black bee
  (bhramara). Check the verse wording against a reliable translation.
- **Kuppusamy et al. 2018, systematic review** "Effects of Bhramari Pranayama on health", J Tradit Complement Med
  (PMC5755957; ranks #10 for "bhramari pranayama"). Summarise honestly: many small, low-quality studies.
- **Trivedi et al. 2023, Cureus** "Humming (Simple Bhramari Pranayama) as a Stress Buster", Holter HRV pilot,
  n = 23 (PMC10182780, PubMed 37193427). Pull the actual HRV figures.
- **"Humming greatly increases nasal nitric oxide"**, Weitzberg & Lundberg, Am J Respir Crit Care Med
  2002;166(2):144-5 (PMID 12119224). **Confirmed from the PubMed record (2026-11-16):** 10 healthy subjects; nasal NO
  rose 15-fold during humming compared with quiet exhalation. Mechanism: the vibrating airflow ventilates the
  sinuses, where NO is made. Say "in the nose", not "in the body" or "in the blood".
- Maniscalco et al. 2003, Eur Respir J (PubMed 12952268): confirms the rise comes from fast gas exchange in the
  paranasal sinuses.
- **Blood pressure:** no solid Bhramari-specific evidence yet. Upadhyay et al. 2023 (J Ayurveda Integr Med,
  PMC10388195), an RCT in 100 hypertensive inpatients, Nadi Shodhana vs Bhramari: the snippets show a reaction-time
  result but not a BP result, so read the full text. Revathy et al. 2025 is only a trial protocol. Breathing
  exercises in general lower BP modestly (meta-analysis PMC10765252: about −7/−3 mmHg). Wording to use: "slow
  breathing in general can lower blood pressure a little; Bhramari itself hasn't been well tested".
- Safety: generally gentle; usual cautions are ear infection, pressing on the tragus too hard, and lying down
  rather than sitting. Find a source rather than assert.

## Oliver's course notes (Loka Yoga School, Bhramari lesson, pasted 2026-11-16)

**Background only. Never copy or closely paraphrase into the post** (same rule as [[marissa-peer-material]]). The
wording reads like Swami Satyananda's *Asana Pranayama Mudra Bandha* (Bihar School of Yoga), a copyrighted book,
but a search couldn't confirm the exact phrases. Either way, write everything in our own words.

What the notes cover, and how each claim holds up:

| Claim in the notes | Verdict | Use in post |
|---|---|---|
| Name means "bee" / "humming bee"; buzzing sound on the exhale | Correct. Bhramara is the (black) bee, and Bhramari is "of the bee" / the female bee | Yes |
| Hum creates vibration in the head and chest; meditative, turns attention inward | Fits what people report; a felt experience, not measured | Yes, as experience |
| Relieves stress and anxiety | Some support: small HRV studies (Trivedi 2023), Kuppusamy review; low quality | Yes, hedged |
| Helps insomnia | Traditional; little direct evidence | Hedged, "many people use it before sleep" |
| Alleviates anger | Traditional | Link to the breathwork-for-anger page only if it's live, and hedge |
| Lowers blood pressure | Not established for Bhramari (see research notes) | Only the general slow-breathing point |
| Speeds tissue healing, use after operations | No evidence found | **Leave out** |
| Strengthens voice, eliminates throat ailments | No evidence found | **Leave out** (maybe "some singers use humming warm-ups") |
| Late night / early morning best; awakens "psychic sensitivity" | Tradition; the quiet-time advice is sensible | Quiet-time advice yes, psychic claim no |
| Don't do it lying down | Traditional caution | Yes ("sit upright") |
| Not with an ear infection | Sensible | Yes |
| Heart disease: practise without breath retention | Sensible; extend to high BP and pregnancy, and "check with your doctor" | Yes |
| Advanced: inner breath hold (antar kumbhaka) with chin lock (jalandhara) and root lock (mula bandha) before the hum; outer hold rare | Accurate to the tradition | One short "going further" section; tell beginners to skip holds |
| Start with 1–2 second holds, never strain | Sensible | Yes |
| Variation: ujjayi-style throat contraction to hum on the inhale too | Accurate to the tradition | Brief mention |

**Gap:** the notes jump to the advanced version and leave out the basic steps (sitting position, closing the ears
with the fingers, lips closed, teeth apart, hum on a slow exhale, number of rounds). Oliver's interview answers
should supply how *he* teaches the basic version.

## OWNER INTERVIEW (questions for Oliver; answers by voice note are fine)

1. Do you use humming bee breath yourself or with clients? In which setting (1:1 hypnosis, breathwork sessions,
   retreats, before sleep)?
2. How do you teach it: fingers on the ear flaps, index fingers on the forehead (shanmukhi mudra), or no hands?
   Mouth closed, lips together, teeth slightly apart?
3. How many rounds or how many minutes do you suggest, and for whom?
4. What do people usually say they feel during or after it? Any moment that stuck with you (no names)?
5. Where does it fit next to the other techniques you use: box breathing, 4-7-8, physiological sigh, conscious
   connected breathwork? When would you choose humming over those?
6. Do you ever use it before hypnosis, or to help someone settle into trance?
7. Anyone you'd tell not to do it, or a mistake beginners make (humming too loud, pushing too hard on the ears,
   holding the breath)?
8. Any course notes or books on it you'd like me to read and fact-check?
9. Keyword check: happy with "bee breath / Bhramari" for this post and a separate "Is humming good for you?"
   post later?

## Sources

- Ahrefs Keywords Explorer and SERP Overview (US), 2026-11-16
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10182780/
- https://pubmed.ncbi.nlm.nih.gov/37193427/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5755957/
- https://pubmed.ncbi.nlm.nih.gov/12119224/
- https://pubmed.ncbi.nlm.nih.gov/12952268/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10388195
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10765252/
