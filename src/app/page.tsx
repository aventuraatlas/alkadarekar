
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Heart, Sparkles, Award, GraduationCap, School, Anchor, Stars } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-mother');

  return (
    <main className="min-h-screen max-w-md mx-auto relative overflow-x-hidden pb-20">
      {/* Hero Section */}
      <section className="relative w-full aspect-[4/5] overflow-hidden">
        {heroImage && (
          <div className="relative w-full h-full hero-fade-bottom">
            <Image
              src={heroImage.imageUrl}
              alt="IMG_20260326_100835.png"
              fill
              className="object-cover object-top"
              priority
              data-ai-hint="indian woman teacher portrait"
            />
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-background to-transparent pt-20">
          <AnimatedSection>
            <h1 className="font-headline text-4xl font-bold text-white mb-2 leading-tight">
              आज एका योद्ध्याचा वाढदिवस आहे! <Sparkles className="inline-block text-accent ml-2 h-6 w-6" />
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Narrative Content */}
      <div className="px-6 space-y-12">
        {/* Intro */}
        <AnimatedSection className="text-center">
          <p className="font-body text-lg leading-relaxed text-muted-foreground italic">
            शून्यातून विश्व निर्माण करणाऱ्या, संघर्षाला आपला साथीदार मानणाऱ्या, आणि प्रत्येकाच्या सुखदुःखात पहिल्यांदा धावून येणाऱ्या आमच्या आईला — वाढदिवसाच्या हार्दिक शुभेच्छा! 🎉🎊
          </p>
        </AnimatedSection>

        {/* 1989 Mission */}
        <AnimatedSection className="relative pl-8 border-l-2 border-accent/30 py-4">
          <div className="absolute -left-3 top-4 bg-background p-1">
            <GraduationCap className="h-4 w-4 text-accent" />
          </div>
          <h2 className="font-headline text-2xl font-bold text-accent mb-3 uppercase tracking-wider">१९८९ साल</h2>
          <p className="font-body text-base leading-relaxed">
            जेव्हा तिने शिक्षिकेचा पांढरा शुभ्र पदर खांद्यावर घेतला, तेव्हा तिने फक्त नोकरी नाही स्वीकारली — <span className="text-white font-semibold">एक मिशन स्वीकारलं.</span> 📚🪔
          </p>
        </AnimatedSection>

        {/* 35 Years Journey */}
        <AnimatedSection className="bg-card/30 rounded-2xl p-6 border border-border">
          <div className="flex items-center gap-3 mb-4">
            <School className="h-6 w-6 text-accent" />
            <h3 className="font-headline text-xl font-bold">३५ वर्षांचा तो प्रवास</h3>
          </div>
          <p className="font-body text-base leading-relaxed mb-4">
            तब्बल <span className="text-accent font-bold">३० वर्षे</span> तिने <span className="text-white">पारगाव</span> या गावात सेवा केली — शहराची चकचकीत स्वप्नं बाजूला ठेवून, गावातल्या मुलांचं आयुष्य घडवण्यासाठी!
          </p>
          <p className="font-body text-base leading-relaxed">
            आणि शेवटची <span className="text-accent font-bold">५ वर्षे</span> ती <span className="text-white">मुख्याध्यापिका</span> म्हणून शाळेची धुरा सांभाळत राहिली. हजारो मुलांच्या आयुष्यात तिने ज्ञानाचा दिवा पेटवला. 🏫✨
          </p>
        </AnimatedSection>

        {/* Award */}
        <AnimatedSection className="text-center py-6 border-y border-accent/10">
          <Award className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="font-headline text-2xl font-bold text-white mb-2 italic tracking-wide">🏆 २०१५ - आदर्श शिक्षिका पुरस्कार</h2>
          <p className="font-body text-sm text-muted-foreground uppercase tracking-widest">हा पुरस्कार तिला मिळाला नाही, त्या पुरस्काराला ती मिळाली!</p>
        </AnimatedSection>

        {/* 2021 Crisis */}
        <AnimatedSection className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-transparent p-6 border border-primary/20">
          <h2 className="font-headline text-2xl font-bold text-destructive/80 mb-4 flex items-center gap-2">
            💔 २०२१ साली...
          </h2>
          <p className="font-body text-base leading-relaxed mb-4">
            जगावर कोरोनाचं काळं सावट होतं. त्या काळ्या संकटाने आमच्या घरावरही घाला घातला. आई आणि <span className="text-white">नाना</span> — दोघेही एकाच वेळी आजारी पडले... गंभीर अवस्थेत.
          </p>
          <div className="italic text-muted-foreground bg-black/20 p-4 rounded-lg mb-4">
            "देवाने एक निर्णय केला — नानांना त्याने आपल्याजवळ बोलावून घेतलं." 🕊️
          </div>
          <p className="font-body text-base leading-relaxed">
            पण आईला — <span className="text-accent font-bold">जगण्याची दुसरी संधी दिली.</span>
          </p>
          <p className="font-body text-base mt-4">
            नानांच्या जाण्याचं दुःख उरात घेऊन, आईने स्वतःला सावरलं. कारण तिला माहीत होतं — <span className="text-white font-semibold">नानांचं स्वप्न अजून पूर्ण व्हायचं होतं.</span> 🙏
          </p>
        </AnimatedSection>

        {/* 2024 New Beginning */}
        <AnimatedSection className="text-center">
          <div className="flex justify-center mb-4">
            <Anchor className="h-8 w-8 text-accent animate-pulse" />
          </div>
          <h2 className="font-headline text-2xl font-bold text-white mb-3">🎓 २०२४ साली</h2>
          <p className="font-body text-base leading-relaxed">
            एका गौरवशाली अध्यायाची सांगता झाली — आई सेवानिवृत्त झाली पण ही संपणी नव्हती, <span className="text-accent italic">नव्या अध्यायाची सुरुवात होती!</span>
          </p>
        </AnimatedSection>

        {/* Present Day - Politics */}
        <AnimatedSection className="bg-gradient-to-b from-primary/30 to-background rounded-3xl p-8 border border-accent/20 text-center shadow-2xl">
          <Stars className="h-8 w-8 text-accent mx-auto mb-4" />
          <h3 className="text-muted-foreground font-body text-sm uppercase tracking-widest mb-2">आजचा गौरव</h3>
          <h2 className="font-headline text-3xl font-bold text-white mb-6 leading-tight">
            👑 श्रीगोंदा नगरपरिषदेच्या उपनगराध्यक्ष!
          </h2>
          <p className="font-body text-base leading-relaxed text-muted-foreground mb-6">
            हे स्वप्न होतं आमच्या <span className="text-white font-semibold">नानांचं</span> — आजोबांनी जे डोळ्यात साठवलं होतं, ते आज <span className="text-accent font-bold">आईच्या रूपाने साकार झालंय!</span> 💫
          </p>
          <p className="font-body text-base text-white italic">
            नाना, तुम्ही जिथे असाल तिथून नक्कीच अभिमानाने पाहत असाल! 🙏
          </p>
        </AnimatedSection>

        {/* Personal Message */}
        <div className="space-y-8 py-10">
          <AnimatedSection className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
              <p className="font-body text-lg">❤️ आई, तू थोडी रागीट आहेस — पण त्या रागातही आमच्यावरचं प्रेम दिसतं.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
              <p className="font-body text-lg">तू कठोर आहेस — पण त्या कठोरतेतून आम्हाला घडवलंस.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
              <p className="font-body text-lg">तू संकटात खचली नाहीस — <span className="text-accent font-bold">उलट आणखी मजबूत झालीस.</span> 💪</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
              <p className="font-body text-lg">तू समाजाची आहेस — पण आधी <span className="text-white font-bold">आमची</span> आहेस. 🥹</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center pt-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-accent to-primary mb-6">
              <div className="bg-background px-6 py-2 rounded-full">
                <h2 className="font-headline text-2xl font-bold text-white">🌺 वाढदिवसाच्या मनःपूर्वक शुभेच्छा आई! 🌺</h2>
              </div>
            </div>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-8">
              तुझ्या संघर्षाला, तुझ्या प्रेमाला, तुझ्या जिद्दीला आणि तुझ्या स्वप्नांना <span className="text-white font-bold">कोटी कोटी सलाम!</span> 🫡
            </p>
            <div className="flex items-center justify-center gap-4 text-accent">
              <Heart className="h-5 w-5 fill-current" />
              <span className="font-headline text-xl text-white">तू आमची आई आहेस — यापेक्षा मोठं भाग्य दुसरं काय असू शकतं? 💛</span>
              <Heart className="h-5 w-5 fill-current" />
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-right pt-10 pb-20">
            <p className="font-headline text-2xl text-accent-foreground font-bold">— तुझ्या लेकरांकडून, मनापासून! 🙏🎂</p>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
}
