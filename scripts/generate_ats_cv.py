from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "front-porto" / "public" / "resume"
OUTPUT_PDF = OUTPUT_DIR / "Santoso-Nugroho-ATS-CV-English.pdf"
PUBLIC_PDF = PUBLIC_DIR / "Santoso-Nugroho-CV.pdf"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
PUBLIC_DIR.mkdir(parents=True, exist_ok=True)


def register_fonts():
    candidates = [
        Path("C:/Windows/Fonts/arial.ttf"),
        Path("C:/Windows/Fonts/arialbd.ttf"),
    ]
    if all(path.exists() for path in candidates):
        pdfmetrics.registerFont(TTFont("ATS-Regular", str(candidates[0])))
        pdfmetrics.registerFont(TTFont("ATS-Bold", str(candidates[1])))
        return "ATS-Regular", "ATS-Bold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()
INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#4B5565")
ACCENT = colors.HexColor("#145A8D")
RULE = colors.HexColor("#C8D2DC")


styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName=FONT_BOLD,
    fontSize=20,
    leading=23,
    textColor=INK,
    alignment=TA_CENTER,
    spaceAfter=3,
)
headline_style = ParagraphStyle(
    "Headline",
    parent=styles["Normal"],
    fontName=FONT_BOLD,
    fontSize=10,
    leading=13,
    textColor=ACCENT,
    alignment=TA_CENTER,
    spaceAfter=5,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=8.3,
    leading=11,
    textColor=MUTED,
    alignment=TA_CENTER,
    spaceAfter=2,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName=FONT_BOLD,
    fontSize=10.3,
    leading=12,
    textColor=ACCENT,
    spaceBefore=8,
    spaceAfter=4,
    borderWidth=0,
    borderPadding=0,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName=FONT,
    fontSize=8.8,
    leading=12.2,
    textColor=INK,
    alignment=TA_LEFT,
    spaceAfter=3,
)
role_style = ParagraphStyle(
    "Role",
    parent=body_style,
    fontName=FONT_BOLD,
    fontSize=9.5,
    leading=12,
    textColor=INK,
    spaceBefore=4,
    spaceAfter=1,
)
meta_style = ParagraphStyle(
    "Meta",
    parent=body_style,
    fontName=FONT,
    fontSize=8.3,
    leading=10.5,
    textColor=MUTED,
    spaceAfter=3,
)
bullet_style = ParagraphStyle(
    "Bullet",
    parent=body_style,
    leftIndent=8,
    firstLineIndent=-8,
    spaceAfter=1.5,
)
compact_style = ParagraphStyle(
    "Compact",
    parent=body_style,
    fontSize=8.4,
    leading=11.2,
    spaceAfter=2.5,
)


def section(title):
    return [
        Paragraph(title, section_style),
        HRFlowable(
            width="100%",
            thickness=0.6,
            color=RULE,
            spaceBefore=0,
            spaceAfter=3,
        ),
    ]


def bullet(text):
    return Paragraph(f"- {text}", bullet_style)


def role(title, company, dates, bullets):
    block = [
        Paragraph(f"{title} | {company}", role_style),
        Paragraph(dates, meta_style),
    ]
    block.extend(bullet(item) for item in bullets)
    return KeepTogether(block)


def project(title, stack, summary):
    return KeepTogether(
        [
            Paragraph(title, role_style),
            Paragraph(f"Technology: {stack}", meta_style),
            Paragraph(summary, body_style),
        ]
    )


def draw_footer(canvas, document):
    canvas.saveState()
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(16 * mm, 9 * mm, "Santoso Nugroho")
    canvas.drawRightString(
        A4[0] - 16 * mm, 9 * mm, f"Page {document.page}"
    )
    canvas.restoreState()


doc = SimpleDocTemplate(
    str(OUTPUT_PDF),
    pagesize=A4,
    rightMargin=16 * mm,
    leftMargin=16 * mm,
    topMargin=13 * mm,
    bottomMargin=15 * mm,
    title="Santoso Nugroho - ATS Friendly CV",
    author="Santoso Nugroho",
    subject="Software Engineer CV",
)

story = [
    Paragraph("SANTOSO NUGROHO", name_style),
    Paragraph(
        "SOFTWARE ENGINEER | FULL STACK DEVELOPER ",
        headline_style,
    ),
    Paragraph(
        "West Jakarta, Indonesia | +62 812-9665-3845 (WhatsApp) | "
        '<link href="mailto:nugrohosantoso454@gmail.com" color="#4B5565">'
        "nugrohosantoso454@gmail.com</link>",
        contact_style,
    ),
    Paragraph(
        '<link href="https://github.com/TossoTosca" color="#4B5565">'
        "github.com/TossoTosca</link> | "
        '<link href="https://linkedin.com/in/santoso-nugroho-35615b173" color="#4B5565">'
        "linkedin.com/in/santoso-nugroho-35615b173</link> | "
        '<link href="https://portofolio-santos.vercel.app" color="#4B5565">'
        "portofolio-santos.vercel.app</link>",
        contact_style,
    ),
    Spacer(1, 4),
]

story += section("PROFESSIONAL SUMMARY")
story.append(
    Paragraph(
        "Software Engineer with 4+ years of experience building and maintaining full stack web applications, internal business systems, and REST APIs. Experienced across JavaScript, TypeScript, Python, Angular, React, Vue, Node.js, Flask, and relational databases. Delivers maintainable software by translating business requirements into scalable architecture, secure backend services, and intuitive user experiences.",
        body_style,
    )
)

story += section("TECHNICAL SKILLS")
skill_lines = [
    ("Languages", "JavaScript, TypeScript, Python, Java, Kotlin, SQL"),
    (
        "Frontend",
        "Angular, React, Next.js, Vue.js, Vuex, React Router, PrimeNG, Bootstrap, Tailwind CSS",
    ),
    (
        "Backend",
        "Node.js, Express.js, Python Flask, REST APIs, JWT, authentication and authorization",
    ),
    ("Databases and ORM", "Microsoft SQL Server, PostgreSQL, MySQL, Firebase, Prisma, Sequelize"),
    (
        "Cloud and DevOps",
        "Docker, Microsoft IIS, Google Cloud Platform, Firebase, Vercel, SFTP",
    ),
    ("Tools and Practices", "Git, GitHub, Postman, VS Code, npm, Yarn, system design, clean code, Agile"),
]
for label, value in skill_lines:
    story.append(Paragraph(f"<b>{label}:</b> {value}", compact_style))

story += section("PROFESSIONAL EXPERIENCE")
story.append(
    role(
        "Full Stack Web Developer",
        "Wish Sukses Digital",
        "December 2023 - Present",
        [
            "Develop and maintain internal business applications using Next.js, Express.js, and MySQL.",
            "Design scalable REST APIs that support frontend applications and business workflows.",
            "Implement secure authentication and authorization for protected application features.",
            "Integrate SFTP services to automate recurring operational workflows and data transfers.",
            "Translate stakeholder requirements into production-ready features using modular, reusable code.",
        ],
    )
)
story.append(
    role(
        "Full Stack Web Developer",
        "Asahimas Flat Glass",
        "April 2023 - March 2024",
        [
            "Independently delivered three internal web applications used across company departments.",
            "Engineered a Purchase Request System with complex multi-level approval workflows.",
            "Built a Contact Management System connecting multiple company branches and a Library Management Tool that improved document discovery.",
            "Developed Angular and PrimeNG frontends with Python Flask services and Microsoft SQL Server databases.",
            "Deployed and maintained applications on internal Microsoft IIS infrastructure while iterating directly with users.",
        ],
    )
)

story.append(PageBreak())
story += section("PROFESSIONAL EXPERIENCE - CONTINUED")
story.append(
    role(
        "Freelance Frontend Developer",
        "Indosafety Marine",
        "December 2023 - January 2024",
        [
            "Developed an equipment management web application using Vue.js, Vuex, and Firebase.",
            "Implemented maintainable frontend features and improved usability across operational workflows.",
            "Delivered the project according to agreed client requirements and timeline.",
        ],
    )
)
story.append(
    role(
        "Freelance Full Stack Developer",
        "Kikiaka.id",
        "April 2021 - December 2022",
        [
            "Collaborated with a development team to deliver production websites including belajarrenang.id, kamilaapremium.id, and adrevi.id.",
            "Developed frontend and backend features, reusable UI components, REST APIs, and database integrations.",
            "Worked closely with designers and engineers to translate designs and requirements into maintainable web experiences.",
        ],
    )
)

story += section("SELECTED PROJECTS")
story.append(
    project(
        "HVZMobilindo - Automotive Marketplace and CMS",
        "React 19, Vite 8, TypeScript, Tailwind CSS, React Router, Framer Motion, Shadcn UI, Embla Carousel",
        "Designed and developed a responsive automotive marketplace and its operational CMS for inventory, public content, sales activity, and lead management.",
    )
)
story.append(
    project(
        "WhatsApp Automation Reply",
        "Vue 3, Vite 8, Socket.IO, Tailwind CSS, Node.js, whatsapp-web.js",
        "Built an automation interface and WhatsApp integration workflow for keyword replies, fallback messages, contact rules, and real-time activity monitoring.",
    )
)

story += section("EDUCATION")
story.append(
    Paragraph(
        "<b>Hacktiv8 Indonesia</b> - Immersive Full Stack JavaScript Bootcamp | 2022",
        body_style,
    )
)
story.append(
    Paragraph(
        "<b>Global Sevilla Puri Indah</b> - Senior High School, International Scholarship Programme | 2017 - 2018",
        body_style,
    )
)

story += section("CERTIFICATIONS")
story.append(
    Paragraph(
        "Hacktiv8 - Immersive Full Stack JavaScript | HackerRank - JavaScript (Intermediate and Basic), Node.js (Basic), Python (Basic)",
        compact_style,
    )
)

story += section("LANGUAGES")
story.append(
    Paragraph(
        "Bahasa Indonesia - Native | English - Professional Working Proficiency",
        compact_style,
    )
)

doc.build(story, onFirstPage=draw_footer, onLaterPages=draw_footer)
shutil.copy2(OUTPUT_PDF, PUBLIC_PDF)

print(f"Created: {OUTPUT_PDF}")
print(f"Copied: {PUBLIC_PDF}")
