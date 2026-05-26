import { useEffect, useRef } from "react";

// Import all tool logos
import aws from "@/assets/toolweuse/AWS.png";
import airtable from "@/assets/toolweuse/Airtable.png";
import anthropic from "@/assets/toolweuse/Anthropic.png";
import facebook from "@/assets/toolweuse/Facebook.png";
import googleAnalytics from "@/assets/toolweuse/Google Analytics.png";
import googleCloud from "@/assets/toolweuse/Google Cloud.png";
import hostinger from "@/assets/toolweuse/Hostinger.png";
import hubspot from "@/assets/toolweuse/HubSpot.png";
import azure from "@/assets/toolweuse/Microsoft Azure.png";
import sqlServer from "@/assets/toolweuse/Microsoft SQL Server.png";
import monday from "@/assets/toolweuse/Monday.com.png";
import openai from "@/assets/toolweuse/Openai.png";
import postgresql from "@/assets/toolweuse/PostgreSQL.png";
import sqlite from "@/assets/toolweuse/SQLite.png";
import slack from "@/assets/toolweuse/Slack.png";
import supabase from "@/assets/toolweuse/Supabase.png";
import cloudflare from "@/assets/toolweuse/cloudflare.png";
import discord from "@/assets/toolweuse/discord.png";
import gemini from "@/assets/toolweuse/gemini.png";
import meta from "@/assets/toolweuse/meta.png";
import n8n from "@/assets/toolweuse/n8n.png";
import notion from "@/assets/toolweuse/notion.png";
import salesforce from "@/assets/toolweuse/saleforce.png";
import telegram from "@/assets/toolweuse/telegram.webp";
import zapier from "@/assets/toolweuse/zapier.png";

interface ToolLogo {
  src: string;
  name: string;
}

const tools: ToolLogo[] = [
  { src: openai, name: "OpenAI" },
  { src: anthropic, name: "Anthropic" },
  { src: gemini, name: "Gemini" },
  { src: aws, name: "AWS" },
  { src: googleCloud, name: "Google Cloud" },
  { src: azure, name: "Microsoft Azure" },
  { src: n8n, name: "n8n" },
  { src: zapier, name: "Zapier" },
  { src: slack, name: "Slack" },
  { src: hubspot, name: "HubSpot" },
  { src: supabase, name: "Supabase" },
  { src: postgresql, name: "PostgreSQL" },
  { src: airtable, name: "Airtable" },
  { src: notion, name: "Notion" },
  { src: monday, name: "Monday.com" },
  { src: cloudflare, name: "Cloudflare" },
  { src: discord, name: "Discord" },
  { src: facebook, name: "Facebook" },
  { src: meta, name: "Meta" },
  { src: telegram, name: "Telegram" },
  { src: salesforce, name: "Salesforce" },
  { src: googleAnalytics, name: "Google Analytics" },
  { src: sqlite, name: "SQLite" },
  { src: sqlServer, name: "SQL Server" },
  { src: hostinger, name: "Hostinger" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
      track.style.animationPlayState = "running";
    };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="tools-marquee-row">
      <div
        ref={trackRef}
        className={`tools-marquee-track ${reverse ? "tools-marquee-reverse" : ""}`}
      >
        {/* Render logos 3x for seamless loop */}
        {[0, 1, 2].map((setIndex) =>
          tools.map((tool, i) => (
            <div
              key={`${setIndex}-${i}`}
              className="tools-marquee-item"
              title={tool.name}
            >
              <img
                src={tool.src}
                alt={tool.name}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function ToolsMarquee() {
  return (
    <section className="tools-marquee-section">
      <div className="tools-marquee-label">
        <span>Trusted tools we integrate with</span>
      </div>
      <MarqueeRow />
    </section>
  );
}
