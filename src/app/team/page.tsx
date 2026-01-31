import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/section";
import teamDataRaw from "@/content/en/team.json";
import { Sparkles, Globe2, Zap, Code, Youtube, Instagram, Twitter, Send, Linkedin, Github } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    youtube?: string;
    instagram?: string;
    telegram?: string;
    facebook?: string;
    reddit?: string;
  };
}

interface TeamData {
  title: string;
  description: string;
  members: TeamMember[];
  joinTeam?: {
    title: string;
    description: string;
    viewPositions: string;
  };
}

const teamData = teamDataRaw as unknown as TeamData;

// Helper function to ensure proper typing
function ensureTeamMember(member: unknown): TeamMember {
  return member as TeamMember;
}

export const metadata: Metadata = {
  title: "Team - UOR Foundation",
  description:
    "Meet the team behind UOR Foundation. Researchers, engineers, and innovators building decentralized data infrastructure.",
};

export default function TeamPage() {
  return (
    <>
      {/* Mission Statement */}
      <Section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            <div className="text-center">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
              >
                <span
                  className="gradient-text-animated"
                  style={{
                    backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Our Mission
                </span>
              </h1>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                We believe that advanced machine intelligence should not be scarce. Hologram exists to usher in a new era of abundant intelligence.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                <span 
                  className="gradient-text-animated"
                  style={{
                    backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Supercomputer in your pocket.
                </span>{' '}
                Powered by exceptional mathematics.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                We remove the physical limits that keep intelligence scarce and centralized. Compute trapped in silos. Memory locked inside machines. Networking treated as a separate system.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                Hologram aims to unify compute, memory and networking into one virtual data infrastructure. A single programmable substrate that runs across your devices from edge to cloud on the hardware you already have.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                The result is abundant, reliable machine intelligence you can trust and use anywhere.
              </p>
              
              <p className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                When advanced machine intelligence stops being the bottleneck, scientific discovery accelerates and human potential compounds.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Stand For */}
      <Section className="py-16 sm:py-20 lg:py-24 border-t border-border/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              <span
                className="gradient-text-animated"
                style={{
                  backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                What We Stand For
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 
                  className="text-xl sm:text-2xl font-bold"
                >
                  <span
                    className="gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Simplicity
                  </span>
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Great technology should fade into the background.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Hologram removes friction so builders can focus on creating, not configuring.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 
                  className="text-xl sm:text-2xl font-bold"
                >
                  <span
                    className="gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Universality
                  </span>
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Powerful computation should work everywhere.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                It should run on any device, at any scale, without reliance on specialized hardware or closed ecosystems.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 
                  className="text-xl sm:text-2xl font-bold"
                >
                  <span
                    className="gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Efficiency
                  </span>
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Performance should never come at the cost of waste.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                We believe doing more with less is not only good engineering, but a responsibility.
              </p>
            </div>
            
            <div className="rounded-lg border border-border/20 bg-surface-dark/30 p-6 sm:p-8 hover:border-border/40 hover:bg-surface-dark/40 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-6 w-6 sm:h-7 sm:w-7 text-white flex-shrink-0" />
                <h3 
                  className="text-xl sm:text-2xl font-bold"
                >
                  <span
                    className="gradient-text-animated"
                    style={{
                      backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Open-source
                  </span>
                </h3>
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed mb-3">
                Innovation depends on trust and control.
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Systems should be open, secure, and owned by the people who use them.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-12 text-center">
          <h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span
              className="gradient-text-animated"
              style={{
                backgroundImage: 'linear-gradient(97deg, #3388EE, #8844CC 42%, #CC44AA 74%, #EE4433)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {teamData.title}
            </span>
          </h2>
          {teamData.description && (
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              {teamData.description}
            </p>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamData.members.map((memberRaw) => {
            const member = ensureTeamMember(memberRaw);
            const social = member.social as TeamMember['social'];
            return (
            <Card key={member.name} className="flex flex-col hover:border-purple/20 hover:shadow-sm hover:shadow-transparent">
              <CardHeader className="space-y-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="mt-2 sm:mt-3 text-sm sm:text-base font-semibold">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="text-sm sm:text-base text-white leading-[1.6]">
                  {member.bio.split('\n').map((paragraph, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                      {paragraph.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          const text = part.slice(2, -2);
                          return (
                            <strong key={partIdx} className="font-semibold">
                              {text}
                            </strong>
                          );
                        }
                        return <span key={partIdx}>{part}</span>;
                      })}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-4 flex gap-3 flex-wrap">
                  {social.youtube && (
                    <a
                      href={social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {social.telegram && (
                    <a
                      href={social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="Telegram"
                    >
                      <Send className="h-5 w-5" />
                    </a>
                  )}
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan hover:text-cyan/80 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </Section>

    </>
  );
}
