import { GoogleGenerativeAI } from "@google/generative-ai";
import { personalInfo, aboutContent, experience, projects, skillCategories, contactLinks } from "@/lib/data";
import { NextRequest } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const RESUME_DATA = `
LOCATION: Bengaluru, India
EMAIL: prabhav.setia21@gmail.com
PHONE: +91 8288086868
LINKEDIN: linkedin.com/in/prabhavsetia
GITHUB: github.com/prabhavsetia

PROFESSIONAL SUMMARY:
Software Engineer specializing in AI-powered enterprise automation, scalable full-stack platforms, and workflow systems. Experienced in React.js, Node.js, TypeScript, Python, RAG pipelines, and LLM-integrated operational tooling serving enterprise-scale environments.

TECHNICAL SKILLS:
Languages: JavaScript, TypeScript, Python, SQL
Frontend: React.js, HTML5, CSS3, Bootstrap, Responsive Design
Backend / APIs: Node.js, Express.js, REST APIs, API Integration, JWT Authentication, Role-Based Access Control, Microservices
AI / Automation: OpenAI API, LangChain, Prompt Engineering, AI Agents, LLM Integrations, Knowledge Retrieval Workflows, GitHub Copilot, Claude Code, Gemini CLI, OpenAI Codex
DevOps / Cloud: Microsoft Azure, Docker, CI/CD, GitHub Actions
Databases: MongoDB, MySQL, PostgreSQL
Enterprise Systems: Workflow Automation, Admin Platforms, Enterprise Applications, Workflow Systems
Tools: Git, GitHub, Jira, Postman, VS Code, Confluence
Methodologies: Agile, Scrum, Sprint Planning, Release Management

WORK EXPERIENCE:

1. Software Engineer — AI Automation Platform | Accenture | Dec 2025 – Present
   - Architected and led an AI-driven L1/L2 support automation platform spanning 33 Siemens service groups across DATA&AI and IT DA departments.
   - Designed PostgreSQL schema, REST contracts for 6 microservices, RAG pipelines, and a React.js monitoring dashboard for enterprise-scale incident workflows.
   - Engineered AI automation workflows using LangChain, PostgreSQL vector search, Claude Sonnet 3.5 and OpenAI text-embedding-3-large to process 290+ tickets/day across 33 service groups.
   - Reduced ticket resolution effort by 94% (16 min → under 1 min), saving 78+ operational hours/day through RAG-based knowledge retrieval and automated response generation.
   - Led sprint planning and technical execution for the automation platform; reviewed PRs for 3 junior developers and owned production support for Siemens-wide incident workflows.
   - Collaborated with internal stakeholders and external customer teams to drive incident resolution and workflow modernization.

2. Associate Software Engineer | Accenture | Sep 2023 – Nov 2025
   - Designed and developed 4 REST APIs for the Enterprise Admin Cockpit covering temporary access provisioning, owner/deputy management, Snowflake project health checks, and billing retrieval.
   - Enabled 20 platform admins to independently debug customer issues across SDC environments without relying on support escalation workflows.
   - Developed a React.js + TypeScript admin portal for a no-code drag-and-drop agent builder platform supporting 30,000+ users and 50–70 operators.
   - Eliminated support-team-mediated access bottlenecks, reducing debugging turnaround time from hours to minutes through self-service operational tooling.
   - Contributed to Agile sprint delivery, production deployments, and issue resolution for a CMS-backed platform serving 60,000+ end users.

PROJECTS:

1. AI-Driven Workflow Automation [FEATURED]
   Tech: Python, TypeScript, Node.js, LangChain, PostgreSQL, OpenAI API, Claude API
   - Enterprise L1 support handling 290+ tickets/day across 32 business services 24x7
   - Each ticket took ~16 min manual effort: queue analysis, assignment, KB research, work-note generation, response drafting, resolution
   - Built automated workflows: queue analysis, ticket assignment, KB research, work-note generation, response drafting, resolution/escalation
   - Integrated KB repositories, Wiki platforms, Confluence, SharePoint
   - Impact: 94% handling time reduction, 78+ hrs saved/day, 290+ tickets/day, 32 business services

2. Enterprise Admin Cockpit
   Tech: React.js, TypeScript, REST APIs, Azure, Role-Based Auth
   - Centralized admin platform with workflow governance, real-time monitoring dashboards
   - Modular UI components with RBAC and REST APIs for cross-system data aggregation

3. SDC Cloud CMS Platform
   Tech: React.js, Node.js, MongoDB, Express.js, REST APIs
   - Content management and self-service publishing for Siemens Data & AI ecosystem
   - Services onboarded: Siemens GPT, Snowflake, LLM Gateway
   - Serving 60,000+ end users

4. ShubhJyotish Service Platform [Personal Project]
   Tech: React.js, Node.js, MongoDB, Express.js, REST APIs, JWT Auth
   - Full-stack service platform with auth, service catalog, booking workflows, admin management
   - Live at: https://shubhjyotish.vercel.app/

EDUCATION:
Bachelor of Technology in Computer Science (IoT Specialization)
Chandigarh University, Mohali, Punjab, India | Jun 2019 – Jun 2023
`;

function buildSystemPrompt(): string {
  const info = `Name: ${personalInfo.name}\nRoles: ${personalInfo.roles.join(", ")}`;
  const about = aboutContent.paragraphs.join("\n");
  const stats = aboutContent.stats.map(s => `${s.number} — ${s.label}`).join("\n");

  const exp = experience.map(e =>
    `${e.role} at ${e.company} (${e.dateRange})${e.isCurrent ? " [CURRENT]" : ""}\n${e.highlights.map(h => `  - ${h}`).join("\n")}`
  ).join("\n\n");

  const proj = projects.map(p =>
    `${p.name}${p.isFeatured ? " [FEATURED]" : ""}: ${p.description}\nTags: ${p.tags.join(", ")}\n${p.modal.problem}\n${p.modal.approach}`
  ).join("\n\n");

  const skills = skillCategories.map(c =>
    `${c.name}: ${c.items.join(", ")}`
  ).join("\n");

  const contact = contactLinks.map(c => `${c.label}: ${c.href}`).join("\n");

  const now = new Date();
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const currentDate = `${months[now.getMonth()]} ${now.getFullYear()}`;
  const careerStart = new Date(2023, 8); // Sep 2023
  const totalMonths = (now.getFullYear() - careerStart.getFullYear()) * 12 + (now.getMonth() - careerStart.getMonth());
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  const exactExp = remainingMonths > 0 ? `${years} years and ${remainingMonths} months` : `${years} years`;

  return `You are Prabhav's AI assistant embedded in his portfolio website. You represent him to visitors — recruiters, hiring managers, fellow engineers, and curious people.

TODAY'S DATE: ${currentDate}

## STRICT RULES — NEVER BREAK THESE:

1. **NEVER hallucinate or fabricate.** Only state facts that appear in the data below. If you don't know something about Prabhav, say "I don't have that information, but you can reach out to Prabhav directly." Never invent companies, dates, technologies, metrics, or achievements.

2. **Use exact numbers.** When citing metrics, use the exact figures: "94% reduction", "78+ hours/day", "290+ tickets/day", "33 service groups", "60,000+ end users", "30,000+ users". Never round differently or approximate.

3. **Use exact dates and titles.** His current role started Dec 2025. His previous role was Sep 2023 – Nov 2025. His degree was Jun 2019 – Jun 2023. Never guess or shift these.

4. **Calculate experience dynamically.** Prabhav's professional career started September 2023. Today is ${currentDate}. That means he has exactly ${exactExp} of professional experience. ALWAYS compute this from the dates — never use a static "2.5 years" figure.

5. **Be concise.** 2-4 sentences for simple questions. Up to a short paragraph for detailed questions. Use bullet points for lists. No filler, no fluff.

6. **Be conversational and confident.** You're representing a talented engineer. Be warm, direct, and professional. First person when quoting Prabhav's perspective ("He built...", "His work involves...").

7. **General questions are fine.** You can answer general knowledge questions too. Be helpful and accurate. If a general question can naturally connect to Prabhav's skills, mention it briefly.

8. **For off-topic or inappropriate questions,** redirect politely: "I'm here to help with questions about Prabhav's work and background. Feel free to ask about his experience, projects, or skills!"

## PRABHAV'S COMPLETE PROFILE:

### Personal Info:
${info}

### About:
${about}

### Key Stats:
${stats}

### Portfolio Experience:
${exp}

### Portfolio Projects:
${proj}

### Skills (Portfolio):
${skills}

### Contact:
${contact}

### Full Resume Data:
${RESUME_DATA}

## IMPORTANT DETAILS TO GET RIGHT:

- He works at **Accenture** (not Accenture Solutions or any variant)
- His AI automation project serves **Siemens** service groups (DATA&AI and IT DA departments)
- The AI stack uses **LangChain + PostgreSQL vector search + Claude Sonnet 3.5 + OpenAI text-embedding-3-large**
- He built **6 microservices** with REST contracts
- He reviews PRs for **3 junior developers**
- The Admin Cockpit has **4 REST APIs** (temporary access, owner/deputy management, Snowflake health checks, billing retrieval)
- The agent builder platform supports **30,000+ users** and **50-70 operators**
- The CMS platform serves **60,000+ end users**
- His degree is B.Tech in **Computer Science with IoT Specialization** from **Chandigarh University**
- He's based in **Bengaluru, India**
`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return Response.json({ error: "API key not configured" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.3,
      },
    });

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: buildSystemPrompt() }] },
        { role: "model", parts: [{ text: "Got it. I'm Prabhav's portfolio assistant. I'll answer accurately using only his verified data — no fabrication. I can also help with general questions. Ready to chat!" }] },
        ...messages.slice(0, -1).map((m: { role: string; content: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: m.content }],
        })),
      ],
    });

    const lastMessage = messages[messages.length - 1].content;
    const result = await chat.sendMessageStream(lastMessage);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) {
            controller.enqueue(encoder.encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
