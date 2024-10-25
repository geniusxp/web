import { Marquee } from "@/components/animations/marquee";

const team = [
  {
    name: "Erick Nathan",
    role: "Design engineer",
    photo: "https://github.com/ericknathan.png",
    url: "https://linkedin.com/in/ericknathan",
  },
  {
    name: "Lucas Araujo",
    role: "Backend engineer",
    photo: "https://github.com/Lucas-Araujo15.png",
    url: "https://www.linkedin.com/in/lucasaraujosilva",
  },
  {
    name: "Hemily Nara",
    role: "Backend engineer",
    photo: "https://github.com/hemilynara.png",
    url: "https://www.linkedin.com/in/hemilynara",
  },
  {
    name: "Michael Bernardi",
    role: "DevOps engineer",
    photo: "https://github.com/michaelbernardi.png",
    url: "https://www.linkedin.com/in/michael-bernardi-silva",
  },
  {
    name: "Guilherme Dias",
    role: "Backend engineer",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQEI3yl1MCF1-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722884704150?e=1735171200&v=beta&t=wtYPokE1yOx922tT2VLrCedMfe0Ljis7kE6zm7aqNFA",
    url: "https://www.linkedin.com/in/guilherme-dias-gomes",
  },
];

export function OurTeamSection() {
  return (
    <section
      id="our-team"
      className="container flex items-center flex-col space-y-2 py-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Conheça nossa equipe
      </h2>
      <p className="text-muted-foreground max-w-xl text-center pb-8">
        Somos uma equipe de desenvolvedores apaixonados por tecnologia e
        inovação. Conheça quem está por trás do GeniusXP.
      </p>

      <div className="w-screen overflow-x-hidden lg:hidden">
        <Marquee pauseOnHover>
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </Marquee>
      </div>
      <div className="hidden lg:grid grid-cols-5 gap-8">
        {team.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: (typeof team)[0] }) {
  return (
    <a
      href={member.url}
      className="bg-card border w-44 p-2 flex flex-col justify-center items-center group/member rounded-lg overflow-hidden hover:scale-105 transition-all"
    >
      <img
        src={member.photo}
        alt={`Foto de ${member.name}`}
        className="w-full aspect-square rounded-md object-cover md:grayscale group-hover/member:grayscale-0 mb-4"
      />
      <p className="font-semibold">{member.name}</p>
      <span className="text-xs text-muted-foreground pb-2">{member.role}</span>
    </a>
  );
}
