import { ProjectType } from "./project.const";
import { date } from "$lib/utils/date/parser";
import type { Project } from "./project.type";

export const projects = [
  {
    name: "MediaTek86 - Atelier pro CNED",
    description: "Application windows permettant de gérer le personnel d'une médiathèque et les absences relatives aux personnels",
    date: {
      start: date(8, 6, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/MediaTek86"
    },
    skills: [
      "Création d'une application Windows",
      "Utilisation du design pattern MVC",
      "Création d'interface faciles a utiliser et comprendre",
      "Communication avec une base de données MySQL",
      "Génération de documentation"
    ],
    technologies: ["lang.C#", "lib.WindowsForm", "db.MySQL", "tool.Sandcastle", "tool.Github"]
  },
  {
    name: "Tintify",
    description: "Librairie NPM permettant d'ajouter des effets et couleurs dans le terminal",
    date: {
      start: date(15, 4, 2023)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Unarray/Tintify"
    },
    skills: [
      "Mise en place de tests unitaires",
      "Gestion d'un package NPM Open Source (versioning, publication, suggestions)",
      "Mise en place d'actions GitHub pour effectuer des tests et vérifications ESLint",
      "Documentation sur les séquences d'échappement ANSI",
      "Création de divers fonctions afin de manipuler les valeurs RGB (gradient linéaires, arc-en-ciel, etc...)"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript", "lib.Vitest", "tool.NPM"]
  },
  {
    name: "Virtual Royaume",
    description: "Communauté de developpeurs",
    date: {
      start: date(13, 5, 2022)
    },
    info: {
      type: ProjectType.openSource,
      link: "https://github.com/Virtual-Royaume/"
    },
    skills: [
      "Participation active à la communauté de développeurs pour offrir et recevoir de l'entraide",
      "Review des contributions de la communauté",
      "Développement d'un bot Discord à l'aide de l'API DiscordJS"
    ],
    technologies: ["lang.NodeJS", "lang.TypeScript"]
  }
] satisfies Project[];